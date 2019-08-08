const csvSync = require('csv-parse/lib/sync'); // requiring sync module
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {

    if(xhr.readyState === 4 && xhr.status === 200) {

        console.log( xhr.responseText );
    
    }
}