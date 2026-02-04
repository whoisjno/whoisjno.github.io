define(['pipAPI', 'https://cdn.jsdelivr.net/gh/whoisjno/whoisjno.github.io@ece982e57bdf9720375ef34f7186aaa902ba9ca9/qualtrics-amp/amp-sourcecode.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();
	
	
	return ampExtension({
		primeCats :  [
			{
				nameForFeedback : 'Boy faces',  //Will be used in the user feedback 
				nameForLogging : 'Boy faces', //Will be used in the logging
				//An array of all media objects for this category - combines all boy face stimuli
				mediaArray : [
          {image : 'M10HS_6767.jpg'},
          {image : 'M11HS_6885.jpg'},
          {image : 'M12HS_7022.jpg'},
          {image : 'M17HS_8732.jpg'},
          {image : 'M19HS_9059.jpg'},
          {image : 'M10NS_6758.jpg'},
          {image : 'M11NS_6873.jpg'},
          {image : 'M12NS_7011.jpg'},
          {image : 'M17NS_8725.jpg'},
          {image : 'M19NS_9055.jpg'},
          {image : 'M10SS_6781.jpg'},
          {image : 'M11SS_6918.jpg'},
          {image : 'M12SS_7038.jpg'},
          {image : 'M17SS_8752.jpg'},
          {image : 'M19SS_9083.jpg'}
				]
			}, 

			{
				nameForFeedback : 'Girl faces',  //Will be used in the user feedback 
				nameForLogging : 'Girl faces', //Will be used in the logging
				//An array of all media objects for this category - combines all girl face stimuli
				mediaArray : [
            {image : 'F12HS_5000.jpg'},
            {image : 'F23HS_7148.jpg'},
            {image : 'F32HS_7996.jpg'},
            {image : 'F38HS_9328.jpg'},
            {image : 'F40HS_9533.jpg'},
            {image : 'F12NS_4986.jpg'},
            {image : 'F23NS_7140.jpg'},
            {image : 'F32NS_7990.jpg'},
            {image : 'F38NS_9318.jpg'},
            {image : 'F40NS_9527.jpg'},
            {image : 'F12SS_5014.jpg'},
            {image : 'F23SS_7167.jpg'},
            {image : 'F32SS_8010.jpg'},
            {image : 'F38SS_9355.jpg'},
            {image : 'F40SS_9559.jpg'}
				]
			}

		],

		examplePrimeStimulus : 
		{
			nameForLogging : 'examplePrime', //Will be used in the logging
			//An array of all media objects for this category.
			mediaArray : [{image : 'ampchair.jpg'}, {image : 'amplamp.jpg'}, {image : 'ampumbrella.jpg'}]
		},

		base_url : {//Where are your images at?
			image : 'https://whoisjno.github.io/qualtrics-amp/all-images'
		}
	});
});
