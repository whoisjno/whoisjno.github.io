define(['pipAPI', 'https://whoisjno.github.io/qualtrics-iat/quiat9.js'], function(APIConstructor, iatExtension){
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
    			{image : 'gs_int-ball.jpg'}
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
    			{image : 'gs_2048.jpg'}			],
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},

		base_url : {//Where are your images at?
			image : 'https://whoisjno.github.io/qualtrics-iat/images/'
		},
		fullscreen:true,

		blockAttributes_nTrials : 20,
		blockAttributes_nMiniBlocks : 2,
		blockCategories_nTrials : 18,
		blockCategories_nMiniBlocks : 3,
		blockFirstCombined_nTrials : 40,
		blockFirstCombined_nMiniBlocks : 4,
		blockSecondCombined_nTrials : 0, //Change to 0 if you want 5 blocks (you would probably want to increase blockFirstCombined_nTrials).
		blockSecondCombined_nMiniBlocks : 4,
		blockSwitch_nTrials : 10,
		blockSwitch_nMiniBlocks : 2

	});
});
