//Network request

// public Api on github

let promise = fetch(url, [options]) //-AJAX async JS and XML
//Today JSON replaced AJAX

//Without options we send get request, we have put, delete, post
//Getting repsonse is a 2 stage process, each fetch returns a promise which is resolved and then result is obtained, so 2 times, then()
let p = fetch('<url>');
promise.then((value1) => {
    return value1.json();
}).then((value2) => {
    console.log(value2)
})
//1st stage we alrady know 'status' and 'ok' and 'headers' of incoming repsonse so we can handle what to do, handle response bases on error code. If code > 200 and <299 then ok, and we resolve it with json value 
//we can fetch data and resolve in form of: blob(),formData(), arrayBuffer()

//we can use only one body reading method, not more than one 

// Headers for request
let res = fetch('<url>', {
    headers: {
        authenticaiton: secret
    }
});

