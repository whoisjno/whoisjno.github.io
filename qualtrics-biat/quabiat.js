define(['pipAPI', 'https://whoisjno.github.io/qualtrics-iat/biat6.js'], function(APIConstructor, iatExtension){
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
				categories : [  //As many categories you need.
				{
					name : 'Robots', //Will appear in the data.
					title : {
						media : {word : 'Robot'}, //Name of the category presented in the task.
						css : {color:'#31b404','font-size':'1.8em'}, //Style of the category title.
						height : 4, //Height (because we need to know where to put the next item in the title)
						startStimulus : {
						//If you're using a startStimulus, set here. If not, set the parameter showStimuliWithInst to false (see later below)
							media : {word : 'Tyron, Malik, Terrell, Jazmin, Tiara, Shanice'},
							css : {color:'#31b404','font-size':'1em'},
							height : 2
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
					{image : 'gs_ethon2.jpg'},
					{image : 'gs_frankaemika.jpg'},
					{image : 'gs_homemate.jpg'},
					{image : 'gs_jibo.jpg'},
					{image : 'gs_mykie.jpg'},
					{image : 'gs_tellubee.jpg'},
					{image : 'gs_tjbot.jpg'}
					],
					//Stimulus css (style of the stimuli)
					stimulusCss : {color:'#31b404','font-size':'2em'}
				},
				{
					name : 'Toys',
					title : {
						media : {word : 'Toy'},
						css : {color:'#31b404','font-size':'1.8em'},
						height : 4,
						startStimulus : {
							media : {word : 'Jake, Connor, Bradley, Alison,Emma, Emily'},
							css : {color:'#31b404','font-size':'1em'},
							height : 2
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
			base_url : {//Where are your images at?
				image : 'https://whoisjno.github.io/qualtrics-biat/images/'
			},
			showStimuliWithInst : false,
			fullscreen : true
	});
});




