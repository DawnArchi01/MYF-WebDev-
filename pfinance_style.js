// const { appendFile } = require("fs");

console.log(`Namaste JavaScript`) ;
alert(`Welcome to the Base !!`) ;
function confirmation() {

    let result = confirm(`Leave the site ? On clicking ok , you will be redirected to a new tab in your web browser .`) ;

    if(result)
    window.location = `https://www.google.com` ;

    else window.location = `http://127.0.0.1:5500/pfinance.html` ;

   
    
}

// app.use(express.static(pfinancedesign.css)) ;

