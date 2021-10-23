// Create           Read        Update        Delete
// POST             GET         PUT || PATCH  DELETE

// body is not needed in GET and DELETE

const base_url = "http://localhost:3000";
let path = `/users`;
// path = `products`

let url = base_url + path;
// console.log(url);

// GET

const getUsers = () => {
  fetch(url)
    .then((response) => {
      console.log("then 1:", response);
      if (response.status === 200) return response.json();
      if (response.status !== 200) throw new Error(response.status);
    })
    .then((data) => {
      console.log("then 2:", data);
    })
    .catch((err) => {
      console.log("CATCH:", err);
    });
};

// getUsers();

//  POST
const obj = {
  name: "user",
  age: 18,
};
let options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(obj),
};

const addNewUser = () => {
  fetch(url, options).then((response) => {
    console.log("POST:", response);
  });
};

// addNewUser();
// added to db.json

// PATCH
let myId = "Sa7l6xf";
options = {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ age: 20, name: "Bob" }),
};

const updateUser = () => {
  fetch(`${url}/${myId}`, options)
    .then((response) => {
      console.log("PATCH:", response);
      return response.json();
    })
    .then((data) => {
      console.log("PATCH:", data);
    });
};

// updateUser();
//   PUT
myId = "Mc8m8UY";
options = {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ name: "Sally" }),
};

const replaceUserData = () => {
  fetch(`${url}/${myId}`, options)
    .then((response) => {
      console.log("PUT:", response);
    })
    .catch((err) => {
      console.log(err);
    });
};

// replaceUserData();
// DELETE

myId = "Mc8m8UY";
options = {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
  },
};

const deleteUser = () => {
  fetch(`${url}/${myId}`, options)
    .then((response) => {
      console.log("DELETE:", response);
      return response.json();
    })
    .then((d) => console.log(d));
};

// deleteUser();
