const getTodos = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4) {
        if (request.status === 200) {
          const data = JSON.parse(request.responseText);
          resolve(data);
        } else {
          reject("could not fetch the data from " + resource);
        }
      }
    });
    request.open("GET", resource);
    request.send();
  });
};

getTodos("./json/luigi.json")
  .then((data) => {
    console.log("promise resolved:", data);
    return getTodos("./json/mario.json");
  })
  .then((data) => {
    console.log("promise resolved:", data);
    return getTodos("./json/shaun.json");
  })
  .then((data) => {
    console.log("promise resolved:", data);
  })
  .catch((error) => {
    console.log("promise rejected:", error);
  });
