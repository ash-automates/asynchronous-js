const getTodos = (callback) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4) {
            if (request.status === 200) {
                const data = JSON.parse(request.responseText);
                callback(undefined, data);
            } else {
                callback('could not fetch the data', undefined);
            }
        }
    });
    request.open('GET', 'todos.json');
    request.send();
}

getTodos((error, data) => {
    console.log('callback function fired');
    if (error) {
        console.log(error);
    } else if (data) {
        console.log(data);
    }
});
