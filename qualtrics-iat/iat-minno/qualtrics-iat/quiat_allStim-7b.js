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
    			{image : 'gs_2048.jpg'}			],
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
			image : 'https://whoisjno.github.io/qualtrics-biat/images/'// not quiat9, so used images in qualtrics-biat/images. original images only in qualtrics-biat/images, manually shortened are in qualtrics-iat/images
		},
		fullscreen:true,

		blockAttributes_nTrials : 16,
		blockAttributes_nMiniBlocks : 4,
		blockCategories_nTrials : 24,
		blockCategories_nMiniBlocks : 6,
		blockFirstCombined_nTrials : 64,
		blockFirstCombined_nMiniBlocks : 8,
		blockSecondCombined_nTrials : 64, //Change to 0 if you want 5 blocks (you would probably want to increase blockFirstCombined_nTrials).
		blockSecondCombined_nMiniBlocks : 8,
		blockSwitch_nTrials : 12,
		blockSwitch_nMiniBlocks : 2

	});
});
