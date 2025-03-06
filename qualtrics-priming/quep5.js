define(['pipAPI','pipScorer','underscore'], function(APIConstructor, Scorer, _) {

	/**
	You can modify most of what you need to modify in the settings 
	defined in epObj below. Or use an external script to call the epExtension function.
	**/

	/**
	Created by: Yoav Bar-Anan (baranan@gmail.com). 
	 * @param  {Object} options Options that replace the defaults...
	 * @return {Object}         PIP script
	**/

	function epExtension(options)
	{
		var API = new APIConstructor();
		var scorer = new Scorer();
		var piCurrent = API.getCurrent();

		//Here we set the settings of our task. Read the comments to learn what means.
		//You can also do that from the outside, with a dedicated jsp file.
		var epObj =
		{
			//The CSS for all the prime stimuli.
			primeStimulusCSS : {color:'#0000FF','font-size':'2.3em'},
			//The prime categories.
			primeCats :  [
				{
					name : 'prime1',  //Will be used in the logging
					//An array of all media objects for this category.
					mediaArray : [{word : 'prime1Stim1'}, {word : 'prime1Stim2'}]
				}, 
				{
					name : 'prime2', 
					mediaArray : [{word : 'prime2Stim2'}, {word : 'prime2Stim2'}]
				}
			],	
			//The two target categories.
			targetCats : {
				rightAttTargets: {
					name : 'Pleasant', 
					title : {
						media : {word : 'Pleasant'}, //Name of the attribute presented in the task.
						css : {color:'#0000FF','font-size':'3em'} //Style of the attribute title.
					}, 
					mediaArray : [
						{word: 'Paradise'},
						{word: 'Pleasure'},
						{word: 'Cheer'},
						{word: 'Friend'},
						{word: 'Splendid'},
						{word: 'Love'},
						{word: 'Glee'},
						{word: 'Smile'},
						{word: 'Enjoy'},
						{word: 'Delight'},
						{word: 'Beautiful'},
						{word: 'Attractive'},
						{word: 'Likeable'},
						{word: 'Wonderful'}
					], 
					stimulusCSS : {color:'#0000FF','font-size':'2em'}
				}, 
				leftAttTargets : {
					name : 'Unpleasant', 
					title : {
						media : {word : 'Unpleasant'}, //Name of the attribute presented in the task.
						css : {color:'#0000FF','font-size':'3em'} //Style of the attribute title.
					}, 
					mediaArray : [
						{word: 'Bomb'},
						{word: 'Abuse'},
						{word: 'Sadness'},
						{word: 'Pain'},
						{word: 'Poison'},
						{word: 'Grief'},
						{word: 'Ugly'},
						{word: 'Dirty'},
						{word: 'Stink'},
						{word: 'Noxious'},
						{word: 'Humiliate'},
						{word: 'Annoying'},
						{word: 'Disgusting'},
						{word: 'Offensive'}
					],
					stimulusCSS : {color:'#0000FF','font-size':'2em'}
				}
			},
			
			nTrialsPerPrimeTargetPair:15, //How many trials in a block, per prime-target combination (always three blocks).
			nBlocks : 3,
			
			//Whether to select the prime and targe stimuli randomly without repetition for each prime-target combination until exhuastion
			//Or select the stimuli randomly without repetition for the whole task.
			//For example, if a prime category has the items A, B, and C = random selection without repetition will not select the same stimulus twice until the other stimuli are selected. 
			//If this parameter is set to true, after selecting the prime stimulus A with a target of the category 'positive', 'A' will not be selected again in trials with 'positive' targets, 
			//until B and C are also selected. However, 'A' might appear as prime for other target because their selection is separate. 
			//If this parameter is set to false, then 'A' will not be selected in any trial, until 'B' and 'C' are also selected.
			//The default here is true because it allows showing all the prime-target possible combinations (if there are enough trials). 
			//If this parameter is set to false, it possible that some prime categories will never appear with a certain target stimulus. 
			separateStimulusSelection : true, 
			
			//Instructions template for each block. 
			//If you enter blockNum, nBlocks, posAttribute and negAttribute they will be replaced with 
			//the number of the current block, nBlocks, rightAttTargets.name and leftAttTargets.name
			instructions : {
				//Block 1
				firstBlock : '<div><p style="font-size:1.3em; text-align:left; margin-left:10px; font-family:arial"><color="000000"><br/>' + 
				'Put your middle or index fingers on the <b>E</b> and <b>I</b> keys of your keyboard. ' + 
				'Pairs of items (words and images) will appear one after another. ' + 
				'For each pair of items, ignore the first item and categorize the second item as posAttribute'  + 
				' or negAttribute.<br/><br/>' + 
				'When the second item you see belongs to the category "negAttribute", press <b>E</b>; ' + 
				'when the item belongs to the category "posAttribute", press <b>I</b>. ' + 
				'If you make an error, an </color> <font color="#ff0000"><b>X</b></font> will appear.<br/><br/>' + 
				'This is a timed sorting task. <b>GO AS FAST AS YOU CAN</b> while making as few mistakes as possible.' + 
				'</color></p><p style="font-size:14px; text-align:center; font-family:arial"><color="000000"><br/><br/>' + 
				'press SPACE to begin</p><p style="font-size:12px; text-align:center; font-family:arial">' + 
				'<color="000000">[Round 1 of nBlocks]</p></div>', 
				//Block 2
				middleBlock : '<div><p style="font-size:1.3em; text-align:left; margin-left:10px; font-family:arial"><color="000000"><br/>' + 
				'Press SPACE to continue with the same task.<br/><br/>' + 
				'Ignore the first item and categorize the second item.<br/><br/>' + 
				'Press <b>E</b> if the second item is negAttribute.<br/>' + 
				'Press <b>I</b> if the second item is posAttribute.</p><br/><br/>' + 
				'<p style="font-size:12px; text-align:center; font-family:arial">' + 
				'<color="000000">[Round blockNum of nBlocks]</p></div>', 
				//Block 3
				lastBlock : '<div><p style="font-size:1.3em; text-align:left; margin-left:10px; font-family:arial"><color="000000"><br/>' + 
				'This task can be a little exhausting. ' + 
				'Try to challenge yourself to respond as quickly as you can without making mistakes.<br/><br/>' + 
				'Press SPACE for the final round.</p><br/><br/>' + 
				'<p style="font-size:12px; text-align:center; font-family:arial">' + 
				'<color="000000">[Round nBlocks of nBlocks]</p></div>'
			},
			
			//The canvas object. 
			canvas : {
				maxWidth: 775,
				proportions : 0.85,
				background: '#ffffff',
				borderWidth: 5,
				canvasBackground: '#ffffff',
				borderColor: 'lightblue'
			}, 
			//Set the image folder here.
			base_url : {
				image : 'https://galmaimon.github.io/iatage'
			}, 
			primeDuration : 200, //Default prime duration
			fixationDuration : 0, //No fixation by default
			//Change the fixation stimulus here
			fixationStimulus : {
				css : {color:'black', 'font-size':'3em'}, 
				media : {word:'+'}
			}, 
			deadlineDuration : 0, //0 means no response deadline: we wait until response.
			//Change the deadline message stimulus here
			deadlineStimulus : {
				css : {color:'red', 'font-size':'2.5em'}, 
				media : {word:'!!!PLEASE RESPOND FASTER!!!'}, 
				location: {bottom:10}
			}, 
			deadlineMsgDuration : 750, 
			errorFBDuration : 750, 
			ITIDuration : {min:300, max: 900}, //Can change to a single number. e.g.,  ITIDuration : 400

			//The feedback messages for each cutoff - 
			//You will get a comparison feedback for each 
			//pair, and also single feedback message for each category. 
			//The feedback variable names will be in the format of Cat1vsCat2_FB for comparisons, 
			// and Cat1_FB for single category feedback message.
			//CATEGORYA, and CATEGORYB will be replaced with the names of the relevant categories.
			fb_rightAttWithCatA_leftAttWithCatB : 'Your data suggest automatic preference of CATEGORYA over CATEGORYB.',
			fb_equal_CatAvsCatB : 'Your data suggest no preference between CATEGORYA and CATEGORYB.',
			//Feedback for each CATEGORY, separately. Notice that by default, attribute1 is the positive attribute. 
			//CATEGORY is the CATEGORY name. Can also use attribute1 and attribute2 to refer to attribute1.name and attribute2.name.
			fb_CatWithRightAtt : 'Your data suggest positive automatic evaluation of CATEGORY.',
			fb_catWithBoth : 'Your data suggest neutral automatic evaluation of CATEGORY.',
			fb_CatWithLeftAtt : 'Your data suggest negative automatic evaluation of CATEGORY.',
			
			//Error messages in the feedback
			manyErrors: 'There were too many errors made to determine a result.',
			tooFast: 'There were too many fast trials to determine a result.',
			notEnough: 'There were not enough trials to determine a result.'
		};
		
		// extend the current object with the default
        _.extend(piCurrent, _.defaults(options, epObj));

        _.extend(API.script.settings, options.settings);

        /**
        **** For Qualtrics
        */
        API.addSettings('onEnd', window.minnoJS.onEnd);

		//For debugging the logger
		//window.minnoJS.logger = console.log;
		//window.minnoJS.onEnd = console.log;
		
        API.addSettings('logger', {
            // gather logs in array
            onRow: function(logName, log, settings, ctx){
                if (!ctx.logs) ctx.logs = [];
                ctx.logs.push(log);
            },
            // onEnd trigger save (by returning a value)
            onEnd: function(name, settings, ctx){
                return ctx.logs;
            },
            // Transform logs into a string
            // we save as CSV because qualtrics limits to 20K characters and this is more efficient.
            serialize: function (name, logs) {
                var headers = ['block', 'trial', 'cond', 'type', 'cat',  'stim', 'resp', 'err', 'rt', 'fb'];
                console.log(logs);
                var myLogs = [];
                var iLog;
                for (iLog = 0; iLog < logs.length; iLog++)
                {
                    if(!hasProperties(logs[iLog], ['trial_id', 'name', 'responseHandle', 'stimuli', 'media', 'latency'])){
                        console.log('---MISSING PROPERTIY---');
                        console.log(logs[iLog]);
                        console.log('---MISSING PROPERTIY---');
                    }
                    else if(!hasProperties(logs[iLog].data, ['block', 'condition', 'score']))
                    {
                        console.log('---MISSING data PROPERTIY---');
                        console.log(logs[iLog].data);
                        console.log('---MISSING data PROPERTIY---');
                    }
                    else
                    {
                        myLogs.push(logs[iLog]);
                    }
                }
                var content = myLogs.map(function (log) { 
                    return [
                        log.data.block, //'block'
                        log.trial_id, //'trial'
                        log.data.condition, //'cond'
                        log.name, //'type'
                        log.stimuli[0], //'cat'
                        log.media[0], //'stim'
                        log.responseHandle, //'resp'
                        log.data.score, //'err'
                        log.latency, //'rt'
                      //  '', //'d'
                        '' //'fb'
                       // '' //'bOrd'
                        ]; });
                //console.log('mapped');
                //Add a line with the feedback, score and block-order condition
                content.push([
                            9, //'block'
                            999, //'trial'
                            'end', //'cond'
                          // '', //'comp'
                            '', //'type'
                            '', //'cat'
                            '', //'stim'
                            '', //'resp'
                            '', //'err'
                            '', //'rt'
                           // piCurrent.d, //'d'
                            piCurrent.feedback //'fb'
                            //block3Cond //'bOrd'
                        ]);
                //console.log('added');
                        
                content.unshift(headers);
                return toCsv(content);

                function hasProperties(obj, props) {
                    var iProp;
                    for (iProp = 0; iProp < props.length; iProp++)
                    {
                        if (!obj.hasOwnProperty(props[iProp]))
                        {
                            //console.log('missing ' + props[iProp]);
                            return false;
                        }
                    }
                    return true;
                }
                function toCsv(matrice) { return matrice.map(buildRow).join('\n'); }
                function buildRow(arr) { return arr.map(normalize).join(','); }
                // wrap in double quotes and escape inner double quotes
                function normalize(val) {
                    var quotableRgx = /(\n|,|")/;
                    if (quotableRgx.test(val)) return '"' + val.replace(/"/g, '""') + '"';
                    return val;
                }
            },
            // Set logs into an input (i.e. put them wherever you want)
            send: function(name, serialized){
                window.minnoJS.logger(serialized);
            }
        });
	
		var primeCats = piCurrent.primeCats;
		var targetCats = piCurrent.targetCats;

		//Set the size of the screen
		API.addSettings('canvas',piCurrent.canvas);

		//the source of the images
		API.addSettings('base_url',piCurrent.base_url);

		API.addGlobal({deadlineDuration:piCurrent.deadlineDuration});
		
		//Define the basic trial (the prsentation of the images and words)
		API.addTrialSets({
			basicTrial: [{
				data : {score:0},// by default each trial is crrect, this is modified in case of an error
				//Layout defines what will be presented in the trial. It is like a background display.
				layout: [
					{location:{left:2,top:1},media:{word:'key: E'}, css:{color:'#000000','font-size':'1em'}},
					{location:{right:2,top:1},media:{word:'key: I'}, css:{color:'#000000','font-size':'1em'}},
					{location:{left:2,top:4},media:targetCats.leftAttTargets.title.media, css:targetCats.leftAttTargets.title.css},
					{location:{right:2,top:4},media:targetCats.rightAttTargets.title.media, css:targetCats.rightAttTargets.title.css}
				],
				//Inputs for two possible responses.
				input: [
					{handle:'skip1',on:'keypressed', key:27} //hit esc-enter to skip blocks
				],
				//Set what to do.
				interactions: [
					{//If no fixation duration, then start with the prime
						conditions: [{type:'begin'}, {type:'globalEquals',property:'fixationDuration', value:0}],
						actions: [{type:'trigger', handle:'showPrime'}]
					},
					{//If fixation duration is not 0, then start with the fixation
						conditions: [
							{type:'begin'}, 
							{type:'globalEquals',property:'fixationDuration', value:0, negate:true}
						],
						actions: [
							{type:'showStim',handle:'fixation'},// display the fixation
							{type:'setInput',input:{handle:'fixationOut',on:'timeout',duration:piCurrent.fixationDuration}}
						]
					},
					{
						conditions: [{type:'inputEquals',value:'fixationOut'}], // fixation ended
						actions: [
							{type:'hideStim',handle:'fixation'},// hide fixation
							{type:'trigger', handle:'showPrime'}
						]
					},
					{
						conditions: [{type:'inputEquals',value:'showPrime'}], // show the prime stimulus
						actions: [
							{type:'showStim',handle:'primeStim'},// display the first stimulus
							{type:'setInput',input:{handle:'primeOut',on:'timeout', duration:piCurrent.primeDuration}}
						]
					},
					{
						conditions: [{type:'inputEquals',value:'primeOut'}], // on time out
						actions: [
							{type:'hideStim',handle:'primeStim'}, // hide the first stimulus
							{type:'showStim',handle:'targetStim'}, // and show the second one
							{type:'resetTimer'},
							//Set the possible key inputs.
							{type:'setInput',input:{handle:targetCats.leftAttTargets.name, on: 'keypressed', key:'e'}},
							{type:'setInput',input:{handle:targetCats.rightAttTargets.name, on: 'keypressed', key:'i'}},
							{type:'setInput',input:{handle:'targetOut',on:'timeout', duration:piCurrent.deadlineDuration}}
						]
					},
					{
						conditions: [
							{type:'inputEquals',value:'targetOut'}, 
							{type:'globalEquals',property:'deadlineDuration', value:0, negate:true} //if deadline duration is 0, then there is no deadline.
						], // on time out
						actions: [
							{type:'showStim',handle:'deadline'}, // did not respond on time
							{type:'setTrialAttr', setter:{score:2}}, //2 is for timeout
							{type:'log'}, // here we call the log action. 
							{type:'removeInput', handle:'All'},
							{type:'trigger', handle:'goBlank', duration:piCurrent.deadlineMsgDuration}
						]
					},
					// Handle correct response: when the reponse equals the category of the target word?
					{
						conditions: [
							{type:'inputEqualsStim',property:'wordCategory'}],
						actions: [
                            {type:'removeInput', handle:'All'},
							{type:'log'}, // here we call the log action. This is because we want to record the latency of this input (the latency of the response)
							{type:'trigger', handle:'goBlank'}
						]
					},

					// handle incorrect response.
					{
						conditions: [
							{type:'inputEqualsStim',property:'wordCategory', negate:true},
							{type:'inputEquals',value:[targetCats.rightAttTargets.name,targetCats.leftAttTargets.name]} //Pressed one of the keys.
						],
						actions: [
                            {type:'removeInput', handle:'All'},
							{type:'setTrialAttr', setter:{score:1}}, //1 for incorrect response
							{type:'log'}, // here we call the log action. This is because we want to record the latency of this input (the latency of the response)
							{type:'showStim',handle:'errorFB'}, //show error feedback
							{type:'setInput',input:{handle:'goBlank', on:'timeout',duration:piCurrent.errorFBDuration}} //End the trial in 250ms (show the x until then)
						]
					},
					{
						conditions: [{type:'inputEquals',value:'goBlank'}], //What to do when endTrial is called.
						actions: [
							{type:'hideStim',handle:'All'},
							{type:'showStim',handle:'blankScreen'}, //show blankScreen
							{type:'setInput',input:{handle:'endTrial', on:'timeout', duration:piCurrent.ITIDuration}} // randomly select from within a range
						]

					},
					// skip block -> if you press 'enter' after pressing 'escape'.
					{
						conditions: [{type:'inputEquals',value:'skip1'}],
						actions: [
							{type:'setInput',input:{handle:"skip2",on: 'enter'}}
						]
					},
					// skip block -> if you press 'enter' after pressing 'escape'.
					{
						conditions: [{type:'inputEquals',value:'skip2'}],
						actions: [
							{type:'goto', destination: 'nextWhere', properties: {blockStart:true}},
							{type:'endTrial'}
						]
					},
					{
						conditions: [{type:'inputEquals',value:'endTrial'}], //What to do when endTrial is called.
						actions: [{type:'endTrial'}]
					}
				] // end interactions
			}] // end basic trial
		}); // end trialsets

		function inheritBasic(inPrimeCat, inTargetCat)
		{
		    var cond = inPrimeCat + "/" + inTargetCat;
			return ({
				data: {condition: cond},
				inherit:{set: 'basicTrial'},
				stimuli: [
                    {//The prime stimulus
			        	data : {alias:inPrimeCat, handle:'primeStim'},
				        inherit:'Default',
				        media: {inherit: piCurrent.separateStimulusSelection ? //Should we select the prime stimulus for each target category separately?
				        {type:'exRandom', set:inPrimeCat, seed:cond+'p'} : {type:'exRandom', set:inPrimeCat} }, //Inherit the prime media items for each condition, separately.
				        css : piCurrent.primeStimulusCSS
			        },
            		{
            			data : {wordCategory:inTargetCat, alias:inTargetCat, handle:'targetStim'},
            			inherit:'Default',
				        media: {inherit: piCurrent.separateStimulusSelection ? //Should we select the target stimulus for each target category separately?
				        {type:'exRandom', set:inTargetCat, seed:cond+'t'} : {type:'exRandom', set:inTargetCat} }, //Inherit the prime media items for each condition, separately.
            			css : (inTargetCat == targetCats.rightAttTargets.name) ? 
            			targetCats.rightAttTargets.stimulusCSS :
            			targetCats.leftAttTargets.stimulusCSS
            		},					
            		{ inherit: 'fixation', data : {handle:'fixation'}, nolog: true},
					{ inherit: 'errorFB', nolog: true},
					{ inherit: 'deadline', data : {handle:'deadline'}, nolog: true},
					{ inherit: 'blankScreen', nolog: true}
				]
			});
		}

		//Create a few of the basic stimuli
		API.addStimulusSets({
		//These are the different types of stimuli.
			// This Default stimulus is inherited by the other stimuli so that we can have a consistent look and change it from one place
			Default: [
				{css:piCurrent.primeStimulusCSS}
			],
			errorFB : [//Error feedback stimulus
				{
					data : {handle:'errorFB'},
					size: {height:15,width:15},
					location: {bottom:10},
					css:{color:'red','font-size':'3em'},
					media: {word:'X'},
					nolog:true
				}
			],
			fixation : [//fixation stimulus
				piCurrent.fixationStimulus
			],
			deadline : [//deadline stimulus
				piCurrent.deadlineStimulus
			],
			blankScreen : [//blankScreen  stimulus (in between the trials)
				{
					data : {handle:'blankScreen'},
					media: {word:' '},//can be replace with '+'
					nolog:true
				}
			]
        });
        

		//Use the basic trial to create all the prime-target trial types, their stimulus sets, media sets, and a trial set that includes all of them.
		var sortingTrialsArray = [];
		for (var iCat=0; iCat < primeCats.length; iCat++)
		{
			API.addTrialSets(primeCats[iCat].name+ '+' + targetCats.rightAttTargets.name,[inheritBasic(primeCats[iCat].name, targetCats.rightAttTargets.name)]); 
			sortingTrialsArray.push({inherit:primeCats[iCat].name+ '+' + targetCats.rightAttTargets.name});
			API.addTrialSets(primeCats[iCat].name+ '+' + targetCats.leftAttTargets.name,[inheritBasic(primeCats[iCat].name, targetCats.leftAttTargets.name)]); 
			sortingTrialsArray.push({inherit:primeCats[iCat].name+ '+' + targetCats.leftAttTargets.name});
			API.addMediaSets(primeCats[iCat].name, primeCats[iCat].mediaArray);
		}

		API.addMediaSets(targetCats.rightAttTargets.name, targetCats.rightAttTargets.mediaArray);
		API.addMediaSets(targetCats.leftAttTargets.name, targetCats.leftAttTargets.mediaArray);

		API.addTrialSets('sortingTrial', sortingTrialsArray);
		
		//Define the instructions trial
		API.addTrialSets('inst',{
			input: [
				{handle:'space',on:'space'} //Will handle a SPACEBAR reponse
			],
			layout: [
				{location:{left:2,top:1},media:{word:'key: E'}, css:{color:'#000000','font-size':'1em'}},
				{location:{right:2,top:1},media:{word:'key: I'}, css:{color:'#000000','font-size':'1em'}},
				{location:{left:2,top:4},media:targetCats.leftAttTargets.title.media, css:targetCats.leftAttTargets.title.css},
				{location:{right:2,top:4},media:targetCats.rightAttTargets.title.media, css:targetCats.rightAttTargets.title.css}
			],
			interactions: [
				{ // begin trial
					conditions: [{type:'begin'}],
					actions: [{type:'showStim',handle:'All'}] //Show the instructions
				},
				{
					conditions: [{type:'inputEquals',value:'space'}], //What to do when space is pressed
					actions: [
						{type:'hideStim',handle:'All'}, //Hide the instructions
						{type:'setInput',input:{handle:'endTrial', on:'timeout',duration:500}} //In 500ms: end the trial. In the mean time, we get a blank screen.
					]
				},
				{
					conditions: [{type:'inputEquals',value:'endTrial'}], //What to do when endTrial is called.
					actions: [
						{type:'endTrial'} //End the trial
					]
				}
			]
		});

		/*********************/
		/***    SEQUENCE   ***/
		/*********************/
		
		//Helper to prepare the instructions html.
		function getInstHTML(inText, inBlock)
		{
			var retText = inText.replace(/blockNum/g, inBlock);
			retText = retText.replace(/nBlocks/g, piCurrent.nBlocks);
			retText = retText.replace(/negAttribute/g, targetCats.leftAttTargets.name);
			retText = retText.replace(/posAttribute/g, targetCats.rightAttTargets.name);
			return (retText);
		}

		//Defines the sequence of trials.
		var theSequence = [];
		for (var iBlock = 1; iBlock <= piCurrent.nBlocks; iBlock++)
		{
			//Set the block's raw instructions text.
			var blockInst = piCurrent.instructions.middleBlock;
			if (iBlock == 1)
			{
				blockInst = piCurrent.instructions.firstBlock;
			}
			else if (iBlock == piCurrent.nBlocks)
			{
				blockInst = piCurrent.instructions.lastBlock;
			}
			theSequence.push(
				{ //Instructions trial
					data: {blockStart:true},
					inherit : "inst",
					stimuli: [
						{//The instructions stimulus
							//the instructions that will be shown on the screen
							media:{html:getInstHTML(blockInst, iBlock)},
							location:{bottom:1, left:1}
						}
					]
				},
				{ //The sorting trials
					mixer: 'repeat',
					times : piCurrent.nTrialsPerPrimeTargetPair*primeCats.length*2, 
					data : [{inherit: {set: 'sortingTrial',type:'exRandom'}, data:{block:iBlock}}]
				}
			);
		}
		

		//Last trial
		theSequence.push(
			{ //Instructions trial, the end of the task, instruction what to do next
				data: {blockStart:true},
				inherit : "inst",
				layout: [{media:{word:''}}],
			stimuli: [
					{//The instructions stimulus
						data : {'handle':'instStim'},
						media:{html:'<div><p style="font-size:28px;text-align:center;"><color="#000000">' + 
						'You have completed this task<br/><br/>Press SPACE to continue.</p></div>'},
						size:{width:100}
					}
				]
			}
		);
		API.addSequence(theSequence);

		function computeFB(inPrimeCatName)
		{
			//the Scorer that compute the user feedback
			scorer.addSettings('compute',{
				ErrorVar:'score',
				condVar:"condition",
				cond1VarValues: [inPrimeCatName + "/" + targetCats.leftAttTargets.name], //scoring condition 1
				cond2VarValues: [inPrimeCatName + "/" + targetCats.rightAttTargets.name], //scoring condition 2
				fastRT : 150, //Below this reaction time, the latency is considered extremely fast.
				maxFastTrialsRate : 0.1, //Above this % of extremely fast responses within a condition, the participant is considered too fast.
				minRT : 150, //Not below this latency
				maxRT : 5000, //Not above this
				errorLatency : {use:"false", penalty:600, useForSTD:false}, //ignore error response
				postSettings : {url:"/implicit/scorer"}
			});

			//Feedback for each CATEGORY, separately. Notice that by default, attribute1 is the positive attribute. 
			//CATEGORY is the CATEGORY name. Can also use attribute1 and attribute2 to refer to attribute1.name and attribute2.name.
			scorer.addSettings('message',{
				MessageDef: [
					{ cut:'-0.2', message:piCurrent.fb_CatWithLeftAtt.replace(/CATEGORY/g, inPrimeCatName)}, //D < -0.2
					{ cut:'0.2', message:piCurrent.fb_catWithBoth.replace(/CATEGORY/g, inPrimeCatName) },// -0.2 <= D <= 0.2
					{ cut:'105', message:piCurrent.fb_CatWithRightAtt.replace(/CATEGORY/g, inPrimeCatName) }// D > 0.2 (and D<=105)
				],
				manyErrors : piCurrent.manyErrors,
				tooFast : piCurrent.tooFast,
				notEnough : piCurrent.notEnough		
			});
			
			var scored = scorer.computeD();
			scored.problem = (
				scored.FBMsg == piCurrent.manyErrors || 
				scored.FBMsg == piCurrent.tooFast || 
				scored.FBMsg == piCurrent.notEnough);

			return (scored);
		}
		//Helper to replace text in the feedback messages
		function replaceCats(inText, catAname, catBname)
		{
			var retText= inText.replace(/CATEGORYA/g, catAname);  
			retText = retText.replace(/CATEGORYB/g, catBname);
			return(retText);
		}
		function getPreferenceMessage(params)
		{//params: score1, score2, name1, name2
			var message = replaceCats(piCurrent.fb_equal_CatAvsCatB, params.name1, params.name2);
			var diffScore = params.score2 - params.score1;
			if (diffScore > 0.2)
			{
				message = replaceCats(piCurrent.fb_rightAttWithCatA_leftAttWithCatB, params.name2, params.name1);
			}
			else if (diffScore < -0.2)
			{
				message = replaceCats(piCurrent.fb_rightAttWithCatA_leftAttWithCatB, params.name1, params.name2);
			}
			return({fb:message, score:diffScore});
		}
		
		//What to do at the end of the task.
		API.addSettings('hooks',{
			endTask: function(){
				//Compute and send the score
				var logs=API.getLogs();
				console.log(logs);
				var scoreObj = {};
				var savedFeedback = false;
				for (var iCat = 0; iCat < primeCats.length; iCat++)
				{
					var tScoreObj = computeFB(primeCats[iCat].name);
					var catName = primeCats[iCat].name.replace(/\s+/g, ''); //Remove white space from the name.
					scoreObj[catName + '_FB'] = tScoreObj.FBMsg;
					scoreObj[catName + '_score'] = tScoreObj.DScore;
					for (var iOtherCat = 0; iOtherCat < iCat; iOtherCat++) //All the comparisons.
					{
						//console.log('iOtherCat=' + iOtherCat + ' iCat=' + iCat);
						var otherCatName = primeCats[iOtherCat].name.replace(/\s+/g, ''); //Remove white space from the name.
						var prfObj = {};
						if (tScoreObj.problem)
						{//If couldn't compute a score for this category, then can't compute preference
							prfObj = {fb : tScoreObj.FBMsg, score : -9};
						}
						else
						{//Compute preference
							prfObj = getPreferenceMessage({
								score1 : scoreObj[catName + '_score'], 
								score2 : scoreObj[otherCatName + '_score'], 
								name1 : primeCats[iCat].name, 
								name2 : primeCats[iOtherCat].name});
						}
						//console.log(primeCats[iOtherCat].name + '-versus-' + primeCats[iCat].name + '_FB=' + prfObj.fb);
						scoreObj[otherCatName + '-versus-' + catName + '_FB'] = prfObj.fb;
						scoreObj[otherCatName + '-versus-' + catName + '_score'] = prfObj.score;
						if (!savedFeedback)
						{//Save the first two categories compared as the general feedback of this task (for the session only).
							savedFeedback = true;
							piCurrent.feedback = prfObj.fb;
						}
					}
				}
                //Save all those scores for the session data.
              //  piCurrent.feedback = DScoreObj.FBMsg;
				piCurrent.scoreObj = scoreObj;
				window.minnoJS.onEnd();
				//Record also in the database.
				//API.save(scoreObj);
			}
		});
		
		return API.script;
	}
	
	return epExtension;
});
