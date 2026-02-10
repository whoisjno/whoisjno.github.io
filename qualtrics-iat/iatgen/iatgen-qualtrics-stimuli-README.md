---
title: "iatgen qualtrics stimuli readme file"
author: "Jean-Noël George"
date: "`r Sys.Date()`"
output:
  rmdformats::robobook:
    use_bookdown: TRUE
    number_sections: TRUE

---

# Image-Based IATs
 Targets, categories, or both can use images. Images should be sized 250 x 250 pixels in PNG format and hosted via the user’s Qualtrics account (tutorial at https://osf.io/ntd97/).

Seven exemplars are used for the IAT. These were chosen due to the results from Study 1. Robots that best elicited hypothesis congruent PERVAL ratings, as it relates to their respective category types, were chosen. Likewise for the novel objects. (Must check old analyses scripts for full explanation of this). Novel objects to be reduced to seven exemplars.

A list of the original images used in Study 1, of which there were more nObjects (wanted to have a mini iat inside of an iat to test both anthropomorphic and mechanomorphic robots, but this seems to be technologically difficult and beyond my means) have been stored on [Notion](https://www.notion.so/Stimuli-and-Methods-13424debface80abbb55c23f79ad854a?source=copy_link).

A full list of all stimuli used, which is roughly 30+ of nObject, aRobots and mRobots, is stored in an [excel file on OneDrive]("/Users/46079386/Library/CloudStorage/OneDrive-MacquarieUniversity/Academic/PhD/Stimuli/2024-02-01_S1_Stimuli-List_aRPCmRPC.xlsx")


```{r nobject-toys-list}
toysjpg <- c(
  '<a href="https://mqedu.yul1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_w3wv4LC3DaL83Xr"><img src="https://mqedu.yul1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_w3wv4LC3DaL83Xr" width="500" height="500"></a>',
  '<a href="https://mqedu.yul1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_2j3ZUTIrsSn5PA5"><img src="https://mqedu.yul1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_2j3ZUTIrsSn5PA5" width="500" height="500"></a>',
  '<a href="https://mqedu.yul1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_OV06FGaYl9veaQE"><img src="https://mqedu.yul1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_OV06FGaYl9veaQE" width="500" height="500"></a>',
  '<a href="https://mqedu.yul1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_Ik1apf6lPSsVpRK"><img src="https://mqedu.yul1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_Ik1apf6lPSsVpRK" width="500" height="500"></a>',
  '<a href="https://mqedu.yul1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_ELITg3MEf8BoRS2"><img src="https://mqedu.yul1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_ELITg3MEf8BoRS2" width="500" height="500"></a>',
  '<a href="https://mqedu.yul1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_FqzDocbA6yDoGQ4"><img src="https://mqedu.yul1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_FqzDocbA6yDoGQ4" width="500" height="500"></a>',
  '<a href="https://mqedu.yul1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_n55FC3b7r9xbEtQ"><img src="https://mqedu.yul1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_n55FC3b7r9xbEtQ" width="500" height="500"></a>',
  '<a href="https://mqedu.yul1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_cWjg6ibX4OgudjM"><img src="https://mqedu.yul1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_cWjg6ibX4OgudjM" width="500" height="500"></a>',
  '<a href="https://mqedu.yul1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_2VrhymGjAzP9BYk"><img src="https://mqedu.yul1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_2VrhymGjAzP9BYk" width="500" height="500"></a>',
  '<a href="https://mqedu.yul1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_ltBLfPtjveJawTb"><img src="https://mqedu.yul1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_ltBLfPtjveJawTb" width="500" height="500"></a>',
  '<a href="https://mqedu.yul1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_LRCgJmaaJRScOXy"><img src="https://mqedu.yul1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_LRCgJmaaJRScOXy" width="500" height="500"></a>',
  '<a href="https://mqedu.yul1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_ijfkfOGxN0vbkau"><img src="https://mqedu.yul1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_ijfkfOGxN0vbkau" width="500" height="500"></a>',
  '<a href="https://mqedu.yul1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_SSXHip1sq1v0e2d"><img src="https://mqedu.yul1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_SSXHip1sq1v0e2d" width="500" height="500"></a>',
  '<a href="https://mqedu.yul1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_ZhYvCMiyzNf00Ls"><img src="https://mqedu.yul1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_ZhYvCMiyzNf00Ls" width="500" height="500"></a>'
)
```

```{r arobot-list}
arobotsjpg <- c(
 '<a href="https://mqedu.yul1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_9mlhFXTcyLc9ram"><img src="https://mqedu.yul1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_9mlhFXTcyLc9ram" width="250" height="250"></a>',

  '<a href="https://mqedu.yul1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_y10ZWmH0PWIXcNR"><img src="https://mqedu.yul1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_y10ZWmH0PWIXcNR" width="250" height="250"></a>',

  '<a href="https://mqedu.yul1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_qk3WDdyxOjS0Gd6"><img src="https://mqedu.yul1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_qk3WDdyxOjS0Gd6" width="250" height="250"></a>',

  '<a href="https://mqedu.yul1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_mllaS7yGSJuMESm"><img src="https://mqedu.yul1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_mllaS7yGSJuMESm" width="250" height="250"></a>',

  '<a href="https://mqedu.yul1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_sdsGggdXrur7608"><img src="https://mqedu.yul1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_sdsGggdXrur7608" width="250" height="250"></a>',

  '<a href="https://mqedu.yul1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_v5iC2Op6eGuZW29"><img src="https://mqedu.yul1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_v5iC2Op6eGuZW29" width="250" height="250"></a>',

  '<a href="https://mqedu.yul1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_lq6FGVr49rKfhNA"><img src="https://mqedu.yul1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_lq6FGVr49rKfhNA" width="250" height="250"></a>'
)

```

```{r mrobot-list}
mrobotsjpg <- c(
 '<a href="https://mqedu.yul1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_nL9u1KN9VL9271w"><img src="https://mqedu.yul1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_nL9u1KN9VL9271w" width="250" height="250"></a>',

  '<a href="https://mqedu.yul1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_NTY2U3po5tjQUnm"><img src="https://mqedu.yul1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_NTY2U3po5tjQUnm" width="250" height="250"></a>',

  '<a href="https://mqedu.yul1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_eULmtHFZIIgwigg"><img src="https://mqedu.yul1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_eULmtHFZIIgwigg" width="250" height="250"></a>',

  '<a href="https://mqedu.yul1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_aIgDo9LlhpvgLMA"><img src="https://mqedu.yul1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_aIgDo9LlhpvgLMA" width="250" height="250"></a>',

  '<a href="https://mqedu.yul1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_DuNJexqEnJyw6al"><img src="https://mqedu.yul1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_DuNJexqEnJyw6al" width="250" height="250"></a>',

  '<a href="https://mqedu.yul1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_nmIm484AhVMaZ6C"><img src="https://mqedu.yul1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_nmIm484AhVMaZ6C" width="250" height="250"></a>',

  '<a href="https://mqedu.yul1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_fsAqYZ7rjDmOp6P"><img src="https://mqedu.yul1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_fsAqYZ7rjDmOp6P" width="250" height="250"></a>'
)

```