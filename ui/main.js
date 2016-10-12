//Counter Code
var button = document.getElementById('counter');
button.onclick = function () {
    
    // Create a request object
    var request = new XMLhttpRequest();
    
    // Capture the response and store it in a variable
    request.onreadystatechange = function () {
        if (request.readyState === XMLhttpRequest.DONE) {
            if (request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
        // Not Done Yet
    };
    
    // Make the request
    request.open('GET','http://nd7493432401.imad.hasura-app.io/counter',true);
    request.send(null);
    
};