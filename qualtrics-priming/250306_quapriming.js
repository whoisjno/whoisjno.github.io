define(['pipAPI', 'https://whoisjno.github.io/qualtrics-priming/quep5.js'], function(APIConstructor, epExtension){
	var API = new APIConstructor();
	var global = API.getGlobal();
	return epExtension(
	{
			//The prime categories.
			primeCats :  [
				{
					name : 'Robots', //Will appear in the data.
					//An array of all media objects for this category.
					mediaArray : [
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
				    ]
				},
				{
					name : 'Toys', //Will appear in the data.
					//An array of all media objects for this category.
					mediaArray : [
    					{image : 'gs_2001.jpg'},
    					{image : 'gs_2005.jpg'},
    					{image : 'gs_2021.jpg'},
    					{image : 'gs_2023.jpg'},
    					{image : 'gs_2025.jpg'},
    					{image : 'gs_2033.jpg'},
    					{image : 'gs_2018.jpg'},
    					{image : 'gs_2029.jpg'},
    					{image : 'gs_2035.jpg'},
    					{image : 'gs_2044.jpg'},
    					{image : 'gs_2049.jpg'},
    					{image : 'gs_2048.jpg'},
    					{image : 'gs_2055.jpg'},
    					{image : 'gs_2056.jpg'}
    				]
				}
			],

			nTrialsPerPrimeTargetPair:15, //How many trials in a block, per prime-target combination (always three blocks).
			fixationDuration : 500,
			errorFBDuration : 1500,
			ITIDuration : 500,

			//Set the image folder here.
			base_url : {
				image : "https://whoisjno.github.io/qualtrics-priming/images/"
			}
	});
});
