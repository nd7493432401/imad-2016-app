//Counter Code
var url = 'http://localhost:8080/';
// var url = 'http://nd7493432401.imad.hasura-app.io/';

var button = document.getElementById('counter');
button.onclick = function () {
    
    // Create a request object
    var request = new XMLHttpRequest();
    
    // Capture the response and store it in a variable
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
        // Not Done Yet
    };
    
    // Make the request
    request.open('GET',url + 'counter',true);
    request.send(null);
    
};

// Submit Name
var submit = document.getElementById('submit_btn');
submit.onclick = function () {
    // Create a request object
    var request = new XMLHttpRequest();
    
    // Capture the response and store it in a variable
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            // Capture a list of names and render it as a list
            if (request.status === 200){
                var names = request.responseText;
                names = JSON.parse(names);
                var list = '';
                for(var i=0;i<names.length; i++) {
                    list += '<li>' + names[i] + '</li>';
                }
                var ul = document.getElementById('namelist');
                ul.innerHTML = list;
            }
        }
    };
    
    
    // Make the request
    var nameInput = document.getElementById('name');
    var name = nameInput.value;

    request.open('GET',url + 'submit-name?name=' + name,true);
    request.send(null);
};