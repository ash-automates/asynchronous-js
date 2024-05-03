const getTodos = (callback) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4) {
            if (request.status === 200) {
                callback(undefined, request.responseText);
            } else {
                callback('could not fetch the data', undefined);
            }
        }
    });
    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
    request.send();
}

console.log(1);
console.log(2);

getTodos((error, data) => {
    console.log('callback function fired');
    if (error) {
        console.log(error);
    } else if (data) {
        console.log(data);
    }
});

console.log(3);
console.log(4);