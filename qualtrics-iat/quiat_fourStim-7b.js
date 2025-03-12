define(['pipAPI', 'https://whoisjno.github.io/qualtrics-iat/quiat10.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'Robots', //Will appear in the data.
			title : {
				media : {word : 'Robot'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 'a10.jpg'}, //zenbo
    			{image : 'a11.jpg'}, //mero
    			{image : 'a12.jpg'}, //int-ball
    			{image : 'a13.jpg'} //speechbuddy
			],
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},
		category2 :	{
			name : 'Toys', //Will appear in the data.
			title : {
				media : {word : 'Toy'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 't05.jpg'},
					{image : 't01.jpg'},
					{image : 't23.jpg'},
    			{image : 't48.jpg'}
			],
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},

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
			image : 'https://whoisjno.github.io/qualtrics-iat/images/'
		},
		fullscreen:true,

		blockAttributes_nTrials : 16,
		blockAttributes_nMiniBlocks : 4,
		blockCategories_nTrials : 16,
		blockCategories_nMiniBlocks : 4,
		blockFirstCombined_nTrials : 24,
		blockFirstCombined_nMiniBlocks : 6,
		blockSecondCombined_nTrials : 40, //Change to 0 if you want 5 blocks (you would probably want to increase blockFirstCombined_nTrials).
		blockSecondCombined_nMiniBlocks : 10,
		blockSwitch_nTrials : 24,
		blockSwitch_nMiniBlocks : 6

	});
});
