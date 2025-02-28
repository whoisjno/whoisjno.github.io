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
    		    {image : 'gs_zenbo.jpg'},
    			{image : 'gs_mero.jpg'},
    			{image : 'gs_int-ball.jpg'},
    			{image : 'gs_speech buddy.jpg'},
    			{image : 'gs_maggie.jpg'},
    			{image : 'gs_papero.jpg'},
    			{image : 'gs_irobi-q.jpg'}
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
    		    {image : 'gs_2005.jpg'}, //LF
					{image : 'gs_2001.jpg'}, //HF
    			{image : 'gs_2021.jpg'}, //LF
    			{image : 'gs_2023.jpg'}, //HF
    			{image : 'gs_2025.jpg'}, //LF
    			{image : 'gs_2035.jpg'}, //HF
    			{image : 'gs_2048.jpg'}			], //HF
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em','height':'350px !important','width':'auto !important'}
		},

		base_url : {//Where are your images at?
			image : 'https://whoisjno.github.io/qualtrics-iat/images/'
		},
		fullscreen:true
	});
});
