define(['https://whoisjno.github.io/qualtrics-eval-priming/evaluative-prime-template.js'], function(epExtension){
	return epExtension(
	{
			//The prime categories.
			primeCats :  [
				{
					name : 'malePositive',  //Will be used in the logging
					//An array of all media objects for this category.
					mediaArray : [
            {image : 'M10HS_6767.jpg'},
            {image : 'M11HS_6885.jpg'},
            {image : 'M12HS_7022.jpg'},
            {image : 'M17HS_8732.jpg'},
            {image : 'M19HS_9059.jpg'}
          ]
				}, 
				{
					name : 'maleNeutral',  //Will be used in the logging
					//An array of all media objects for this category.
					mediaArray : [
            {image : 'M10NS_6758.jpg'},
            {image : 'M11NS_6873.jpg'},
            {image : 'M12NS_7011.jpg'},
            {image : 'M17NS_8725.jpg'},
            {image : 'M19NS_9055.jpg'}
          ]
				},
				{
					name : 'maleNegative',  //Will be used in the logging
					//An array of all media objects for this category.
					mediaArray : [
            {image : 'M10SS_6781.jpg'},
            {image : 'M11SS_6918.jpg'},
            {image : 'M12SS_7038.jpg'},
            {image : 'M17SS_8752.jpg'},
            {image : 'M19SS_9083.jpg'}
          ]
				}, 
				{
					name : 'femalePositive',  //Will be used in the logging
					//An array of all media objects for this category.
					mediaArray : [
            {image : 'F12HS_5000.jpg'},
            {image : 'F23HS_7148.jpg'},
            {image : 'F32HS_7996.jpg'},
            {image : 'F38HS_9328.jpg'},
            {image : 'F40HS_9533.jpg'}
          ]
				}, 
				{
					name : 'femaleNeutral',  //Will be used in the logging
					//An array of all media objects for this category.
					mediaArray : [
            {image : 'F12NS_4986.jpg'},
            {image : 'F23NS_7140.jpg'},
            {image : 'F32NS_7990.jpg'},
            {image : 'F38NS_9318.jpg'},
            {image : 'F40NS_9527.jpg'}
          ]
				},
				{
					name : 'femaleNegative',  //Will be used in the logging
					//An array of all media objects for this category.
					mediaArray : [
            {image : 'F12SS_5014.jpg'},
            {image : 'F23SS_7167.jpg'},
            {image : 'F32SS_8010.jpg'},
            {image : 'F38SS_9355.jpg'},
            {image : 'F40SS_9559.jpg'}
          ]
				}
			],	
targetCats : {
				rightAttTargets: {
					name : 'Robot', 
					title : {
						media : {word : 'Prefer'}, //Name of the attribute presented in the task.
						css : {color:'#0000FF','font-size':'3em'} //Style of the attribute title.
					}, 
					mediaArray : [
            { image: 'a10.jpg', stimType: 'aRobot' },
            { image: 'a11.jpg', stimType: 'aRobot' },
            { image: 'a12.jpg', stimType: 'aRobot' },
            { image: 'a13.jpg', stimType: 'aRobot' },
            { image: 'a25.jpg', stimType: 'aRobot' },
            { image: 'a26.jpg', stimType: 'aRobot' },
            { image: 'a27.jpg', stimType: 'aRobot' },

            // m-robots
            { image: 'm10.jpg', stimType: 'mRobot' },
            { image: 'm12.jpg', stimType: 'mRobot' },
            { image: 'm16.jpg', stimType: 'mRobot' },
            { image: 'm17.jpg', stimType: 'mRobot' },
            { image: 'm22.jpg', stimType: 'mRobot' },
            { image: 'm31.jpg', stimType: 'mRobot' },
            { image: 'm33.jpg', stimType: 'mRobot' }
					], 
					stimulusCSS : {color:'#0000FF','font-size':'2em', 'max-width':'250px'}
				}, 
				leftAttTargets : {
					name : 'Toy', 
					title : {
						media : {word : 'Reject'}, //Name of the attribute presented in the task.
						css : {color:'#0000FF','font-size':'3em'} //Style of the attribute title.
					}, 
					mediaArray : [
						{ image: 't01.jpg', stimType: 'toy' },
            { image: 't33.jpg', stimType: 'toy' },
            { image: 't44.jpg', stimType: 'toy' },
            { image: 't48.jpg', stimType: 'toy' },
            { image: 't49.jpg', stimType: 'toy' },
            { image: 't55.jpg', stimType: 'toy' },
            { image: 't56.jpg', stimType: 'toy' }
					],
					stimulusCSS : {color:'#0000FF','font-size':'2em', 'max-width':'250px'}
				}
			},
			nTrialsPerPrimeTargetPair:60, //How many trials in a block, per prime-target combination (always three blocks).
			deadlineDuration : 2000, //0 means no response deadline: we wait until response.
			//Set the image folder here.
			base_url : {
				image : 'https://whoisjno.github.io/qualtrics-eval-priming/images/all-images'
			}, 
	});
});
