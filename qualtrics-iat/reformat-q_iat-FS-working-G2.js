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
    		    {image : 'ethon2_GS.jpg'},
    			{image : 'frankaemika_GS.jpg'},
    			{image : 'homemate_GS.jpg'},
    			{image : 'jibo_GS.jpg'},
    			{image : 'mykie_GS.jpg'},
    			{image : 'tellubee_GS.jpg'},
    			{image : 'tjbot_GS.jpg'}
			],
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em','height':'500px','width':'500px'}
		},
		category2 :	{
			name : 'Toys', //Will appear in the data.
			title : {
				media : {word : 'Toy'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : '2018_GS.jpg'}, //HF
    			{image : '2029_GS.jpg'}, //HF
    			{image : '2033_GS.jpg'}, //LF
    			{image : '2044_GS.jpg'}, //LF
    			{image : '2049_GS.jpg'}, //HF
    			{image : '2055_GS.jpg'}, //HF
    			{image : '2056_GS.jpg'}			], //HF
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em','height':'500px','width':'500px'}
		},

		base_url : {//Where are your images at?
			image : 'https://whoisjno.github.io/qualtrics-iat/images/'
		},
		fullscreen:true
	});
});
