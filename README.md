# jQuery Geolocation Wrapper

This is a very selfish wrapper for the HTML5 Geolocation API. I wanted to have some portability with the very reusable and boring Geolocation init code. I build almost all desktop websites with jQuery so I figured a plugin would be convenient. I hear there's also a jQuery Mobile?

## Usage
    $.geolocation( { 
        'error-element':'Selector where error msgs go',  
        'err-msg-1':'Message when user denies location access',
        'err-msg-2':'Message when there is a network error',
        'err-msg-3':'Message when connection times out',
        'err-msg':'Message when we don't really know what went wrong',
        'timeout':'Time (ms) until attempts timeout'
    }, function( position ) { 
        // Do stuff!
        // position.coords.latitude
        // position.coords.longitude
    } );

Default settings for the options can be seen in the source.

## Todo

There are two other error messages that should be accessible through the options var.
Also, maybe allow a error callback. And, maybe some other automated stuff? I dunno, should get useful once I start working with it.