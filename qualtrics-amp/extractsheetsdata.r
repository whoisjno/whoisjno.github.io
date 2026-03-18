library(jsonlite)
library(dplyr)
library(doBy)

# Set your directory and filename
dir <- 'C:\\Users\\YourName\\Documents\\data'
filename <- 'sheets_export.csv'

# Read the Google Sheets export
raw <- read.csv(paste(dir, filename, sep = '\\'), stringsAsFactors = FALSE)
names(raw) <- c('timestamp', 'ResponseId', 'data')

# Function to parse a single row
parse_row <- function(response_id, json_str) {
  tryCatch({
    rows <- fromJSON(json_str)
    if (is.null(rows) || nrow(rows) == 0) return(NULL)
    
    data.frame(
      id = response_id,
      block = rows$data.block,
      cond = rows$data.condition,
      cat = sapply(rows$stimuli, function(s) if(length(s) >= 1) s[1] else NA),
      stim = sapply(rows$stimuli, function(s) if(length(s) >= 2) s[2] else NA),
      rt = rows$latency,
      resp = rows$responseHandle,
      score = rows$data.score,
      stringsAsFactors = FALSE
    )
  }, error = function(e) {
    message(paste('Error parsing row for ResponseId:', response_id))
    return(NULL)
  })
}

# Parse all rows and combine
all_data <- bind_rows(mapply(
  parse_row,
  raw$ResponseId,
  raw$data,
  SIMPLIFY = FALSE
))

# Filter out instruction and example trials
all_data <- all_data[!all_data$cond %in% c('instructions', 'example'), ]

# ── Delineate gender (from cond) ──────────────────────────────────────────────
all_data$gender <- ifelse(grepl('female', all_data$cond), 'female',
                   ifelse(grepl('male', all_data$cond), 'male', NA))

# ── Delineate emotion (from cond) ─────────────────────────────────────────────
all_data$emotion <- ifelse(grepl('Positive', all_data$cond), 'positive',
                    ifelse(grepl('Negative', all_data$cond), 'negative',
                    ifelse(grepl('Neutral', all_data$cond), 'neutral', NA)))

# ── Delineate target type (from stim) ─────────────────────────────────────────
all_data$target_type <- ifelse(all_data$stim == 'aRobot', 'android robot',
                        ifelse(all_data$stim == 'mRobot', 'mechanical robot',
                        ifelse(all_data$stim == 'nObject', 'neutral object', NA)))

# ── Code response ─────────────────────────────────────────────────────────────
all_data$rating <- ifelse(all_data$resp == 'Choose', 1,
                   ifelse(all_data$resp == 'Reject', 0, NA))

# ── Sanity checks ─────────────────────────────────────────────────────────────
nrow(all_data)
names(all_data)
table(all_data$gender, exclude = NULL)
table(all_data$emotion, exclude = NULL)
table(all_data$target_type, exclude = NULL)
table(all_data$rating, exclude = NULL)

# ── Filter to experimental trials only ────────────────────────────────────────
all_data_correct <- all_data[!is.na(all_data$gender) & !is.na(all_data$target_type), ]

# ── AMP means by participant, gender, emotion, and target type ────────────────
amp_means <- summaryBy(
  formula = rating ~ id + gender + emotion + target_type, 
  data = all_data_correct
)

# ── Group level means ─────────────────────────────────────────────────────────
summaryBy(formula = rating.mean ~ gender + emotion + target_type, data = amp_means)