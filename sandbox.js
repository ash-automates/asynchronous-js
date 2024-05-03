const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
    // console.log(request, request.readyState);
    if (request.readyState === 4) {
        if (request.status === 200) {
            console.log(request.responseText);
        } else {
            console.log('could not fetch the data');
        }

    }
});

request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
request.send();