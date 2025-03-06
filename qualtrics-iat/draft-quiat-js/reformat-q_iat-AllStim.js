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
    		    {image : 'zenbo.jpg'}, 
    			{image : 'mero.jpg'}, 
    			{image : 'int-ball.jpg'}, 
    			{image : 'speech buddy.jpg'}, 
    			{image : 'maggie.jpg'}, 
    			{image : 'papero.jpg'}, 
    			{image : 'ethon2.jpg'}, 
    			{image : 'franka emika.jpg'}, 
    			{image : 'homemate.jpg'}, 
    			{image : 'jibo.jpg'}, 
    			{image : 'mykie.jpg'}, 
    			{image : 'telubee.jpg'}, 
    			{image : 'tjbot.jpg'}, 
    			{image : 'irobi-q.jpg'}
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
    		    {image : '2005.jpg'}, 
    			{image : '2021.jpg'}, 
    			{image : '2023.jpg'}, 
    			{image : '2025.jpg'}, 
    			{image : '2033.jpg'}, 
    			{image : '2001.jpg'}, 
    			{image : '2018.jpg'}, 
    			{image : '2029.jpg'}, 
    			{image : '2035.jpg'}, 
    			{image : '2048.jpg'}, 
    			{image : '2049.jpg'}, 
    			{image : '2055.jpg'}, 
    			{image : '2056.jpg'}, 
    			{image : '2044.jpg'}			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	

		base_url : {//Where are your images at?
			image : 'https://whoisjno.github.io/qualtrics-iat/images/'
		},

		fullscreen:true,

		////In each block, we can include a number of mini-blocks, to reduce repetition of same group/response.

		////If you set the number of trials in any block to 0, that block will be skipped.
		blockAttributes_nTrials : 2,
		blockAttributes_nMiniBlocks : 1,
		blockCategories_nTrials : 28,
		blockCategories_nMiniBlocks : 14,
		blockFirstCombined_nTrials : 50,
		blockFirstCombined_nMiniBlocks : 25,
		blockSecondCombined_nTrials : 0, //Change to 0 if you want 5 blocks (you would probably want to increase blockFirstCombined_nTrials).
		blockSecondCombined_nMiniBlocks : 0, 
		blockSwitch_nTrials : 28,
		blockSwitch_nMiniBlocks : 7

	});
});
