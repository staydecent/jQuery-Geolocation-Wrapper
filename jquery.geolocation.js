/*
 * jQuery Geolocation Wrapper
 * Version 0.0.1
 * http://github.com/staydecent/jquery-geolocation-wrapper
 *
 * Wrapper for the HTML5 (Geolocation Working Group) geolocation API.
 *
 * Copyright (c) 2011 Adrian Unger (http://staydecent.ca)
 * Released under the MIT license.
*/

(function( $ ) {

    $.fn.geolocation = function( options, success, error ) {

        var settings = {
            'error-element' : '#error_message',
            'err-msg-1'     : 'Without sharing your location, we cannot offer you the best experience. However, you may still use our website without sharing.',
            'err-msg-2'     : '<strong>Damn satellites!</strong> It seems the positioning network could not be contacted. Try again in a few seconds.',
            'err-msg-3'     : 'It&rsquo;s taking <strong>way</strong> too long to calculate your position. Try again in a few seconds.',
            'err-msg'       : 'We&rsquo;re not sure exactly what went wrong&mdash;but something certainly did! Please try again.',
            'timeout'       : 15000
        };

        var support = function() {
            /*
            Checks for geolocation property on the global navigator object.
            */
            return !!navigator.geolocation;
        };

        var error = function( err ) {
            /*
            Handle error codes for the geolocation API.

            I very much could have used a callback for error handling,
            but am much happier not thinking about it.
            */
            if ( err.code == 1 ) { 
                error_message(settings['err-msg-1']); // Permission Denied
            }
            else if ( err.code == 2 ) {
                error_message(settings['err-msg-2']); // Damn satellites!
            }
            else if ( err.code == 3 ) {
                error_message(settings['err-msg-3']); // Timeout
            }
            else {
                error_message(settings['err-msg']);
            }
        };

        var error_message = function( msg ) {
            /*
            Fill an element with the error message and show.
            */
            var e = $(settings['err-element']);
            e.text(msg).fadeIn(250);
        };

        return this.each(function() {
            if ( options ) { 
                $.extend( settings, options );
            }

            if ( support ) {
                if ( typeof callback == 'function' ) {
                    navigator.geolocation.getCurrentPosition( callback, error, {timeout: settings['timeout']} );
                }
                else {
                    error_message( 'Dear Developer, you did not provide a callback function for the Geolocation wrapper.' );
                }
            }
            else {
                error_message( 'You&rsquo;r browser does not support the Geolocation API; you may miss out on any location based features of our website.' );
            }
        });

    };

})( jQuery );