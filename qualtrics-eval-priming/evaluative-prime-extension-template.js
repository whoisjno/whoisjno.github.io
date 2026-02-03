define(['/implicit/common/all/js/pip/piscripts/ep/ep3.js'], function(epExtension){
	return epExtension(
	{
			//The prime categories.
			primeCats :  [
				{
					name : 'god',  //Will be used in the logging
					//An array of all media objects for this category.
					mediaArray : [{word : 'god'}, {word : 'allmighty'}]
				}, 
				{
					name : 'humans', 
					mediaArray : [{word : 'human'}, {word : 'beings'}]
				},
				{
					name : 'apes', 
					mediaArray : [{word : 'apes'}, {word : 'Gorilla'}]
				}
			],	
			
			nTrialsPerPrimeTargetPair:4, //How many trials in a block, per prime-target combination (always three blocks).
			deadlineDuration : 2000, //0 means no response deadline: we wait until response.
	});
});
