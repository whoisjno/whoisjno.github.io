define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/amp/qualtrics/qamp.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();
	
	
	return ampExtension({
		primeCats :  [
			{
				nameForFeedback : 'Boy faces',  //Will be used in the user feedback 
				nameForLogging : 'Boy faces', //Will be used in the logging
				//An array of all media objects for this category - combines all boy face stimuli
				mediaArray : [
          {image : 'M10HS_6767.jpg', emotion : 'Happy'},
          {image : 'M11HS_6885.jpg', emotion : 'Happy'},
          {image : 'M12HS_7022.jpg', emotion : 'Happy'},
          {image : 'M17HS_8732.jpg', emotion : 'Happy'},
          {image : 'M19HS_9059.jpg', emotion : 'Happy'},
          {image : 'M10NS_6758.jpg', emotion : 'Neutral'},
          {image : 'M11NS_6873.jpg', emotion : 'Neutral'},
          {image : 'M12NS_7011.jpg', emotion : 'Neutral'},
          {image : 'M17NS_8725.jpg', emotion : 'Neutral'},
          {image : 'M19NS_9055.jpg', emotion : 'Neutral'},
          {image : 'M10SS_6781.jpg', emotion : 'Sad'},
          {image : 'M11SS_6918.jpg', emotion : 'Sad'},
          {image : 'M12SS_7038.jpg', emotion : 'Sad'},
          {image : 'M17SS_8752.jpg', emotion : 'Sad'},
          {image : 'M19SS_9083.jpg', emotion : 'Sad'}
				]
			}, 

			{
				nameForFeedback : 'Girl faces',  //Will be used in the user feedback 
				nameForLogging : 'Girl faces', //Will be used in the logging
				//An array of all media objects for this category - combines all girl face stimuli
				mediaArray : [
            {image : 'F12HS_5000.jpg', emotion : 'Happy'},
            {image : 'F23HS_7148.jpg', emotion : 'Happy'},
            {image : 'F32HS_7996.jpg', emotion : 'Happy'},
            {image : 'F38HS_9328.jpg', emotion : 'Happy'},
            {image : 'F40HS_9533.jpg', emotion : 'Happy'},
            {image : 'F12NS_4986.jpg', emotion : 'Neutral'},
            {image : 'F23NS_7140.jpg', emotion : 'Neutral'},
            {image : 'F32NS_7990.jpg', emotion : 'Neutral'},
            {image : 'F38NS_9318.jpg', emotion : 'Neutral'},
            {image : 'F40NS_9527.jpg', emotion : 'Neutral'},
            {image : 'F12SS_5014.jpg', emotion : 'Sad'},
            {image : 'F23SS_7167.jpg', emotion : 'Sad'},
            {image : 'F32SS_8010.jpg', emotion : 'Sad'},
            {image : 'F38SS_9355.jpg', emotion : 'Sad'},
            {image : 'F40SS_9559.jpg', emotion : 'Sad'}
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
			image : 'https://github.com/whoisjno/whoisjno.github.io/tree/66bb3bc23d751a74fd65faaa5eb6068cb8b442f2/qualtrics-amp/all-images'
		}
	});
});
