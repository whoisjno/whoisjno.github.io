define(['pipAPI', 'https://whoisjno.github.io/qualtrics-iat/quiat9.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'A-Robots', //Will appear in the data.
			title : {
				media : {word : 'Robot'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 'zenbo_GS.jpg'},
    			{image : 'mero_GS.jpg'},
    			{image : 'int-ball_GS.jpg'},
    			{image : 'speech buddy_GS.jpg'},
    			{image : 'maggie_GS.jpg'},
    			{image : 'papero_GS.jpg'},
    			{image : 'irobi-q_GS.jpg'}
			],
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em','height':'350px !important','width':'auto !important'}
		},
		category2 :	{
			name : 'Toys', //Will appear in the data.
			title : {
				media : {word : 'Toy'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : '2005_GS.jpg'}, //LF
					{image : '2001_GS.jpg'}, //HF
    			{image : '2021_GS.jpg'}, //LF
    			{image : '2023_GS.jpg'}, //HF
    			{image : '2025_GS.jpg'}, //LF
    			{image : '2035_GS.jpg'}, //HF
    			{image : '2048_GS.jpg'}			], //HF
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em','height':'350px !important','width':'auto !important'}
		},

		base_url : {//Where are your images at?
			image : 'https://whoisjno.github.io/qualtrics-iat/images/'
		},
		fullscreen:true
	});
});
