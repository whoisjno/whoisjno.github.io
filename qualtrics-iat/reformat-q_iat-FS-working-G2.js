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
    		    {image : 'ethon2.jpg'},
    			{image : 'frankaemika.jpg'},
    			{image : 'homemate.jpg'},
    			{image : 'jibo.jpg'},
    			{image : 'mykie.jpg'},
    			{image : 'telubee.jpg'},
    			{image : 'tjbot.jpg'}
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
    		    {image : '2018.jpg'}, //HF
    			{image : '2029.jpg'}, //HF
    			{image : '2033.jpg'}, //LF
    			{image : '2044.jpg'}, //LF
    			{image : '2049.jpg'}, //HF
    			{image : '2055.jpg'}, //HF
    			{image : '2056.jpg'}			], //HF
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em','height':'500px','width':'500px'}
		},

		base_url : {//Where are your images at?
			image : 'https://whoisjno.github.io/qualtrics-iat/images/'
		},
		fullscreen:true
	});
});
