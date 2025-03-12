define(['pipAPI', 'https://baranan.github.io/minno-tasks/quiat9.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'Minoritet', //Will appear in the data.
			title : {
				media : {word : 'Minoritet'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 'black1.jpg'}, 
    			{image : 'black2.jpg'}, 
    			{image : 'black3.jpg'}, 
    			{image : 'black4.jpg'}, 
    			{image : 'black5.jpg'}, 
    			{image : 'black6.jpg'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'Etnisk norsk', //Will appear in the data.
			title : {
				media : {word : 'Etnisk norsk'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects 
    		    {image : 'yf1.jpg'}, 
    			{image : 'yf4.jpg'}, 
    			{image : 'yf5.jpg'}, 
    			{image : 'ym2.jpg'}, 
    			{image : 'ym3.jpg'}, 
    			{image : 'ym5.jpg'}			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	

		base_url : {//Where are your images at?
			image : 'https://baranan.github.io/minno-tasks/images/'
		},
		attribute1 :
			{
				name : 'Dårlige ord',
				title : {
					media : {word : 'Dårlige ord'},
					css : {color:'#0000FF','font-size':'1.8em'},
					height : 4 //Used to position the "Or" in the combined block.
				},
				stimulusMedia : [ //Stimuli content as PIP's media objects
					{word: 'fryktelig'},
					{word: 'trist'},
					{word: 'lidelse'},
					{word: 'såret'},
					{word: 'forferdelig'},
					{word: 'skuffet'},
					{word: 'motbydelig'},
					{word: 'ondskap'}
				],
				//Stimulus css
				stimulusCss : {color:'#0000FF','font-size':'2.3em'}
			},
			attribute2 :
			{
				name : 'Gode ord',
				title : {
					media : {word : 'Gode ord'},
					css : {color:'#0000FF','font-size':'1.8em'},
					height : 4 //Used to position the "Or" in the combined block.
				},
				stimulusMedia : [ //Stimuli content as PIP's media objects
					{word: 'latter'},
					{word: 'lykkelig'},
					{word: 'strålende'},
					{word: 'glede'},
					{word: 'vidunderlig'},
					{word: 'fred'},
					{word: 'nytelse'},
					{word: 'kjærlighet'}
				],
				//Stimulus css
				stimulusCss : {color:'#0000FF','font-size':'2.3em'}
			},
			leftKeyText : 'Trykk "E" for', 
			rightKeyText : 'Trykk "I" for', 
			keysCss : {'font-size':'0.8em', 'font-family':'courier', color:'#000000'},
			//Text and style for the separator between the top and bottom category labels.
			orText : 'eller', 
			orCss : {'font-size':'1.8em', color:'#000000'},
			finalText : 'Trykk på mellomromstasten for å forstette til neste oppgave',
			
		instCategoriesPractice: '<div><p align="center" style="font-size:20px; font-family:arial">' +
				'<font color="#000000"><u>Del blockNum av nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
				'Legg venstre finger på <b>E</b> tasten for objekter som tilhører kategorien <font color="#336600">leftCategory</font>. ' +
				'<br/>Legg høyre finger på <b>I</b> tasten for objekter som tilhører kategorien <font color="#336600">rightCategory</font>.<br/>' +
				'Ett og ett objekt vil vises om gangen.<br/><br/>' +
				'Hvis du gjør feil vil en rød <font color="#ff0000"><b>X</b></font> vises. ' +
				'Trykk på den andre tasten for å fortsette.<br/>' +
				'<u>Gjennomfør så raskt du kan </u> mens du er så nøyaktig som mulig.<br/><br/></p>'+
				'<p align="center">Trykk på <b>mellomromstasten</b> når du er klar til å starte.</font></p></div>',
				
		instAttributePractice: '<div><p align="center" style="font-size:20px; font-family:arial">' +
				'<font color="#000000"><u>Del blockNum av nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
				'Legg venstre finger på <b>E</b> tasten for objekter som tilhører kategorien <font color="#0000ff">leftAttribute.</font>' +
				'<br/>Legg høyre finger på <b>I</b> tasten for objekter som tilhører kategorien <font color="#0000ff">rightAttribute</font>.<br/><br/>' +
				'Hvis du gjør feil vil en rød <font color="#ff0000"><b>X</b></font> vises. ' +
				'Trykk på den andre tasten for å fortsette..<br/>' +
				'<u>Gjennomfør så raskt du kan </u> mens du er så nøyaktig som mulig..<br/><br/></p>'+
				'<p align="center">Trykk på <b>mellomromstasten</b> når du er klar til å starte.</font></p></div>',		
				
		instFirstCombined : '<div><p align="center" style="font-size:20px; font-family:arial">' +
				'<font color="#000000"><u>Del blockNum av nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
				'Bruk <b>E</b> tasten for <font color="#336600">leftCategory</font> og for <font color="#0000ff">leftAttribute</font>.<br/>' +
				'Bruk <b>I</b> tasten for <font color="#336600">rightCategory</font> og for  <font color="#0000ff">rightAttribute</font>.<br/>' +
				'Hvert objekt tilhører bare en kategori.<br/><br/>' +
				'Hvis du gjør feil vil en rød <font color="#ff0000"><b>X</b></font> vises. ' +
				'Trykk på den andre tasten for å fortsette.<br/>' + 
				'<u>Gjennomfør så raskt du kan </u> mens du er så nøyaktig som mulig.<br/><br/></p>' +
				'<p align="center">Trykk på <b>mellomromstasten</b> når du er klar til å starte.</font></p></div>',
		instSecondCombined : '<div><p align="center" style="font-size:20px; font-family:arial">' +
				'<font color="#000000"><u>Del blockNum av nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
				'Dette er det samme som den forrige delen.<br/>' +
				'Bruk <b>E</b> tasten for <font color="#336600">leftCategory</font> og for <font color="#0000ff">leftAttribute</font>.<br/>' +
				'Bruk <b>I</b> tasten for <font color="#336600">rightCategory</font> og for  <font color="#0000ff">rightAttribute</font>.<br/>' +
				'Hvert objekt tilhører bare en kategori.<br/><br/>' +
				'<u>Gjennomfør så raskt du kan </u> mens du er så nøyaktig som mulig.<br/><br/></p>' +
				'<p align="center">Trykk på <b>mellomromstasten</b> når du er klar til å starte.</font></p></div>',
		instSwitchCategories : '<div><p align="center" style="font-size:20px; font-family:arial">' +
				'<font color="#000000"><u>Del blockNum av nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
				'<b>Pass på, kategoriene har byttet posisjon!</b><br/>' +
				'Legg venstre finger på <b>E</b> tasten for <font color="#336600">leftCategory</font>.<br/>' +
				'Legg høyre finger på <b>I</b> tasten for <font color="#336600">rightCategory</font>.<br/><br/>' +
				'<u>Gjennomfør så raskt du kan </u> mens du er så nøyaktig som mulig.<br/><br/></p>' +
				'<p align="center">Trykk på <b>mellomromstasten</b> når du er klar til å starte.</font></p></div>',	
		remindErrorText : '<p align="center" style="font-size:"0.6em"; font-family:arial">' +
			'Hvis du gjør feil så vil en rød <font color="#ff0000"><b>X</b></font> vises. ' +
			'Trykk den andre tasten for å fortsette.<p/>',
	});
});
