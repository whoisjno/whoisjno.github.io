define(['pipAPI', 'https://cdn.jsdelivr.net/gh/whoisjno/whoisjno.github.io@ece982e57bdf9720375ef34f7186aaa902ba9ca9/qualtrics-amp/amp-sourcecode.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();
	
	
	return ampExtension({
		primeCats :  [
	{
				nameForFeedback : 'Boy',  //Will be used in the user feedback 
				nameForLogging : 'malePositive', //Will be used in the logging
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
				nameForFeedback : 'Boy',  //Will be used in the user feedback 
					nameForLogging : 'maleNeutral', //Will be used in the logging
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
				nameForFeedback : 'Boy',  //Will be used in the user feedback 
					nameForLogging : 'maleNegative', //Will be used in the logging
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
				nameForFeedback : 'Girl',  //Will be used in the user feedback 
				nameForLogging : 'femalePositive', //Will be used in the logging
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
				nameForFeedback : 'Girl',  //Will be used in the user feedback 
					nameForLogging : 'femaleNeutral', //Will be used in the logging
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
				nameForFeedback : 'Girl',  //Will be used in the user feedback 
					nameForLogging : 'femaleNegative', //Will be used in the logging
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

		targetCats : [
			{
				nameForLogging : 'aRobot',
				mediaArray : [
              {image : 'a10.jpg'},
            {image : 'a11.jpg'},
            {image : 'a12.jpg'},
            {image : 'a13.jpg'},
            {image : 'a25.jpg'},
            {image : 'a26.jpg'},
            {image : 'a27.jpg'}
        ]
      },
      {				
        nameForLogging : 'mRobot',
				mediaArray : [
              {image : 'm10.jpg'},
            {image : 'm12.jpg'},
            {image : 'm16.jpg'},
            {image : 'm17.jpg'},
            {image : 'm22.jpg'},
            {image : 'm31.jpg'},
            {image : 'm33.jpg'}
        ]
      },
      {				
        nameForLogging : 'nObject',
				mediaArray : [
              {image : 't01.jpg'},
            {image : 't33.jpg'},
            {image : 't44.jpg'},
            {image : 't48.jpg'},
            {image : 't48.jpg'},
            {image : 't55.jpg'},
            {image : 't56.jpg'}
        ]
			}
		],

		examplePrimeStimulus : 
		{
			nameForLogging : 'examplePrime',
			mediaArray : [{image : 'amp-ex-1.jpg'}, {image : 'amp-ex-2.jpg'}, {image : 'amp-ex-3.jpg'}]
		},

		exampleTargetStimulus :
		{
			nameForLogging : 'exampleTarget',
			mediaArray : [{image : 'ampchair.jpg'}, {image : 'amplamp.jpg'}, {image : 'ampumbrella.jpg'}],
			sameAsTargets : false
		},

		base_url : {
			image : 'https://whoisjno.github.io/qualtrics-amp/all-images'
		},

    sortingLabel1 : 'Choose', //Response is coded as 0. 
		sortingLabel2 : 'Reject',  //Response is coded as 1.

		trialsInBlock : [40, 40, 40], //Number of trials in each block 

    //Instructions text.
		exampleBlockInst: '<div><p style="font-size:20px; text-align:left; margin-left:10px; font-family:arial"><color="000000"><br/>' + 
			'Press the key <B>rightKey</B> if the Toy product is more "desirable" (i.e. you "choose" it)  than average.<br>' + 

			'Hit the <b>leftKey</b> key if it is more "undesirable" (i.e. you "reject" it) than average.<br/><br/>' + 
			'The items appear and disappear quickly.  ' + 
			'Remember to ignore the item that appears before the Toy product and evaluate only the Toy product.<br/><br/></p>'  + 
			'<p style="font-size:16px; text-align:center; font-family:arial"><color="000000"><br/><br/>' + 
			'When you are ready to try a few practice responses, hit the <b>space bar</b>.</p>' + 
			'<p style="font-size:12px; text-align:center; font-family:arial">', 
		firstBlockInst : '<div><p style="font-size:20px; text-align:left; margin-left:10px; font-family:arial"><color="000000"><br/>' + 
			"See how fast it is? Don't worry if you miss some. " + 
			'Go with your gut feelings.<br/><br/>' + 
			'Concentrate on each Toy product and rate it as more "desirable" (i.e. you "choose" it) than the average Toy product with the <b>rightKey</b> key, ' + 
			'or more "undesirable" (i.e. you "reject" it) than average with the <b>leftKey</b> key.<br/><br/>' + 
			'Evaluate each Toy product and not the item that appears before it. ' + 
			'Those items are sometimes distracting.<br/><br/>' + 
			'<p style="font-size:16px; text-align:center; font-family:arial"><color="000000"><br/><br/>' + 
			'Ready? Hit the <b>space bar</b>.</p>' + 
			'<p style="font-size:12px; text-align:center; font-family:arial">' + 
			'<color="000000">[Round 2 of nBlocks]</p></div>',
		middleBlockInst : '<div><p style="font-size:20px; text-align:left; margin-left:10px; font-family:arial"><color="000000"><br/>' + 
			'Continue to another round of this task. ' + 
			'The rules are exactly the same:<br/><br/>' + 
			'Concentrate on the  Toy product and rate it as more "desirable" (i.e. you "choose" it) than average with the <b>rightKey</b> key, ' + 
			'or more "undesirable" (i.e. you "reject" it) than average with the <b>leftKey</b> key.<br/><br/>' + 
			'Evaluate each Toy product and not the item that appears before it. ' + 
			'Those items are sometimes distracting. Go with your gut feelings.<br/><br/>' + 
			'<p style="font-size:16px; text-align:center; font-family:arial"><color="000000"><br/><br/>' + 
			'Ready? Hit the <b>space bar</b>.</p>' + 
			'<p style="font-size:12px; text-align:center; font-family:arial">' + 
			'<color="000000">[Round blockNum of nBlocks]</p></div>',
		lastBlockInst : '<div><p style="font-size:20px; text-align:left; margin-left:10px; font-family:arial"><color="000000"><br/>' + 
			'Ready for the FINAL round? ' + 
			'The rules are exactly the same:<br/><br/>' + 
			'Concentrate on the Toy product and rate it as more "desirable" (i.e. you "choose" it) than average with the <b>rightKey</b> key, ' + 
			'or more "undesirable" (i.e. you "reject" it) than average with the <b>leftKey</b> key.<br/><br/>' + 
			'Evaluate each Toy product and not the item that appears before it. ' + 
			'Those items are sometimes distracting. Go with your gut feelings.<br/><br/>' + 
			'<p style="font-size:16px; text-align:center; font-family:arial"><color="000000"><br/><br/>' + 
			'Ready? Hit the <b>space bar</b>.</p>' + 
			'<p style="font-size:12px; text-align:center; font-family:arial">' + 
			'<color="000000">[Round blockNum of nBlocks]</p></div>',
		endText: '<div><p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial"><color="FFFFFF">'+
			'You have completed the task<br/><br/>Press "space" to continue to next task.</p></div>', 
    
    endOnKeypress: 'space',

    onEnd: function(ctx){
    // Tell MinnoJS the task is finished
      if (ctx && ctx.onEnd) {
        ctx.onEnd();
      }
    }
	});
});
