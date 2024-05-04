// async and await

const getTodos = async () => {
  const response = await fetch("json/shauns.json");
  if (response.status !== 200) {
    throw new Error("Could not fetch the data");
  }
  const data = await response.json();
  return data;
};

console.log(1);
console.log(2);

getTodos()
  .then((data) => console.log("resolved:", data))
  .catch((err) => console.log(err.message));

console.log(3);
console.log(4);
