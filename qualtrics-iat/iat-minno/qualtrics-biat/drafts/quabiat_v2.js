define(['pipAPI', 'https://whoisjno.github.io/qualtrics-biat/biat6.js'], function(APIConstructor, iatExtension){
  var API = new APIConstructor();


	return iatExtension({
		practiceCategory1 :
			{
				name : 'Mammals', //Will appear in the data.
				title : {
					media : {word : 'Mammals'}, //Name of the category presented in the task.
					css : {color:'#31b404','font-size':'1.8em'}, //Style of the category title.
					height : 4, //Height (because we need to know where to put the next item in the title)
					startStimulus : {
					//If you're using a startStimulus, set here. If not, set the parameter showStimuliWithInst to false (see later below)
						media : {word : 'Dogs, Horses, Cows, Lions'},
						css : {color:'#31b404','font-size':'1em'},
						height : 2
					}
				},
				stimulusMedia : [ //Stimuli content as PIP's media objects
					{word : 'Dogs'},
					{word : 'Horses'},
					{word : 'Lions'},
					{word : 'Cows'}
				],
				//Stimulus css (style of the stimuli)
				stimulusCss : {color:'#31b404','font-size':'2em'}
			},
			practiceCategory2 :
			{
				name : 'Birds',
				title : {
					media : {word : 'Birds'},
					css : {color:'#31b404','font-size':'1.8em'},
					height : 4,
					startStimulus : {
						media : {word : 'Pigeons, Swans, Crows, Ravens'},
						css : {color:'#31b404','font-size':'1em'},
						height : 2
					}
				},
				stimulusMedia : [ //Stimuli content as PIP's media objects
					{word : 'Pigeons'},
					{word : 'Swans'},
					{word : 'Crows'},
					{word : 'Ravens'}
				],
				//Stimulus css
				stimulusCss : {color:'#31b404','font-size':'2em'}
			},
		categories : [
			{
				name : 'aRobots',
				title : {
					media : {word : 'Robot'}, //Name of the category presented in the task.
					css : {color:'#31b404','font-size':'1.8em'}, //Style of the category title.
					height : 6, //Used to position the "Or" in the combined block.
					startStimulus : {
						media : {image : 'robots.jpg'},
						css : {color:'#31b404','font-size':'1em'},
						height : 20
					}
				},
				stimulusMedia : [ //Stimuli content as PIP's media objects
          {image : 'gs_zenbo.jpg'},
					{image : 'gs_mero.jpg'},
					{image : 'gs_int-ball.jpg'},
					{image : 'gs_speech buddy.jpg'},
					{image : 'gs_maggie.jpg'},
					{image : 'gs_papero.jpg'},
					{image : 'gs_irobi-q.jpg'},
					{image : 'gs_ethon2.jpg'}
				],
				//Stimulus css
				stimulusCss : {color:'#31b404','font-size':'2em'}
			},
			{
				name : 'mRobots',
				title : {
					media : {word : 'Robot'}, //Name of the category presented in the task.
					css : {color:'#31b404','font-size':'1.8em'}, //Style of the category title.
					height : 6, //Used to position the "Or" in the combined block.
					startStimulus : {
						media : {image : 'robots.jpg'},
						css : {color:'#31b404','font-size':'1em'},
						height : 20
					}
				},
				stimulusMedia : [ //Stimuli content as PIP's media objects
					{image : 'gs_frankaemika.jpg'},
					{image : 'gs_homemate.jpg'},
					{image : 'gs_jibo.jpg'},
					{image : 'gs_mykie.jpg'},
					{image : 'gs_tellubee.jpg'},
					{image : 'gs_tjbot.jpg'}
				],
				//Stimulus css
				stimulusCss : {color:'#31b404','font-size':'2em'}
			},
			{
				name : 'novelObjects',
				title : {
					media : {word : 'Toy'}, //Name of the category presented in the task.
					css : {color:'#31b404','font-size':'1.8em'}, //Style of the category title.
					height : 6, //Used to position the "Or" in the combined block.
					startStimulus : {
            media : {image : 'toys.jpg'},
						css : {color:'#31b404','font-size':'1em'},
						height : 20

					}
				},
				stimulusMedia : [ //Stimuli content as PIP's media objects
          {image : 'gs_2005.jpg'},
					{image : 'gs_2001.jpg'},
					{image : 'gs_2021.jpg'},
					{image : 'gs_2023.jpg'},
					{image : 'gs_2025.jpg'},
					{image : 'gs_2033.jpg'},
					{image : 'gs_2018.jpg'},
					{image : 'gs_2029.jpg'}, //HF
					{image : 'gs_2035.jpg'}, //HF
					{image : 'gs_2044.jpg'}, //LF
					{image : 'gs_2049.jpg'}, //HF
					{image : 'gs_2055.jpg'}, //HF
					{image : 'gs_2056.jpg'}, //HF
					{image : 'gs_2048.jpg'}
				],
				//Stimulus css
				stimulusCss : {color:'#31b404','font-size':'2em'}
			}
		],
			attribute1 :
			{
				name : 'Prefer',
				title : {
					media : {word : 'Prefer'},
					css : {color:'#0000FF','font-size':'1.8em'},
					height : 4,
					startStimulus : {
						media : {word : 'Prefer, Select, Desire, Choose'},
						css : {color:'#0000FF','font-size':'1em'},
						height : 2
					}
				},
				stimulusMedia : [ //Stimuli content as PIP's media objects
					{word : 'Prefer'},
					{word : 'Select'},
					{word : 'Desire'},
					{word : 'Choose'}
				],
				//Stimulus css
				stimulusCss : {color:'#0000FF','font-size':'2em'}
			},
			attribute2 :
			{
				name : 'Reject',
				title : {
					media : {word : 'Reject'},
					css : {color:'#0000FF','font-size':'1.8em'},
					height : 4,
					startStimulus : {
						media : {word : 'Reject, Dislike, Refuse, Avoid'},
						css : {color:'#0000FF','font-size':'1em'},
						height : 2
					}
				},
				stimulusMedia : [ //Stimuli content as PIP's media objects
					{word : 'Reject'},
					{word : 'Dislike'},
					{word : 'Refuse'},
					{word : 'Avoid'}
				],
				//Stimulus css
				stimulusCss : {color:'#0000FF','font-size':'2em'}
			},

			base_url : {//Where are your images at?
				image : 'https://whoisjno.github.io/qualtrics-biat/images/'
			},
			showStimuliWithInst : false,
			fullscreen : true
	});
});




