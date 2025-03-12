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
				categories : [  //As many categories you need.
				{
					name : 'Robots', //Will appear in the data.
					title : {
						media : {word : 'Robot'}, //Name of the category presented in the task.
						css : {color:'#31b404','font-size':'1.8em'}, //Style of the category title.
						height : 4, //Height (because we need to know where to put the next item in the title)
						startStimulus : {
						//If you're using a startStimulus, set here. If not, set the parameter showStimuliWithInst to false (see later below)
							media : {image : 'robots.jpg'},
							css : {color:'#31b404','font-size':'1em'},
							height : 2
						}
					},
					stimulusMedia : [ //Stimuli content as PIP's media objects
										{image : 'a10.jpg'},
					{image : 'a11.jpg'},
					{image : 'a12.jpg'},
					{image : 'a13.jpg'},
					{image : 'a25.jpg'},
					{image : 'a26.jpg'},
					{image : 'a27.jpg'},
					{image : 'm10.jpg'},
					{image : 'm12.jpg'},
					{image : 'm16.jpg'},
					{image : 'm17.jpg'},
					{image : 'm22.jpg'},
					{image : 'm331.jpg'},
					{image : 'm33.jpg'}
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
							media : {image : 'toys.jpg'},
							css : {color:'#31b404','font-size':'1em'},
							height : 2
						}
					},
					stimulusMedia : [ //Stimuli content as PIP's media objects
              	  	{image : 't05.jpg'},
					{image : 't01.jpg'},
					{image : 't21.jpg'},
					{image : 't23.jpg'},
					{image : 't25.jpg'},
					{image : 't33.jpg'},
					{image : 't18.jpg'},
					{image : 't29.jpg'}, //HF
					{image : 't35.jpg'}, //HF
					{image : 't44.jpg'}, //LF
					{image : 't49.jpg'}, //HF
					{image : 't55.jpg'}, //HF
					{image : 't56.jpg'}, //HF
					{image : 't48.jpg'}
					],
					//Stimulus css
					stimulusCss : {color:'#31b404','font-size':'2em'}
				}

			],
			base_url : {//Where are your images at?
				image : 'https://whoisjno.github.io/qualtrics-iat/images/'
			},// not quiat10, so used images in qualtrics-iat/images. original found in qualtrics-biat/images
			showStimuliWithInst : false,
			fullscreen : true
	});
});




