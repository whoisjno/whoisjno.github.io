define(['pipAPI', 'https://whoisjno.github.io/qualtrics-iat/quiat9.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'M-Robots', //Will appear in the data.
			title : {
				media : {word : 'Robot'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
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
    		    {image : 'gs_2018.jpg'}, //HF
    			{image : 'gs_2029.jpg'}, //HF
    			{image : 'gs_2033.jpg'}, //LF
    			{image : 'gs_2044.jpg'}, //LF
    			{image : 'gs_2049.jpg'}, //HF
    			{image : 'gs_2055.jpg'}, //HF
    			{image : 'gs_2056.jpg'}			], //HF
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},

		base_url : {//Where are your images at?
			image : 'https://whoisjno.github.io/qualtrics-iat/images/'
		},
		fullscreen:true
	});
});
