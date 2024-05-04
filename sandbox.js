const getTodos = (resource, callback) => {
  const request = new XMLHttpRequest();
  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4) {
      if (request.status === 200) {
        const data = JSON.parse(request.responseText);
        callback(data);
      } else {
        callback("could not fetch the data from " + resource);
      }
    }
  });
  request.open("GET", resource);
  request.send();
};

getTodos("./todos/luigi.json", (data) => {
  console.log(data);
  getTodos("./todos/mario.json", (data) => {
    console.log(data);
    getTodos("./todos/shaun.json", (data) => {
      console.log(data);
    });
  });
});
