// Function
// try{
// fetch === Promise
// .then === Promise
// .then === Promise
// .then === Promise
// .then === Promise
// .then === Promise
// .then === Promise
// .........
// } catch () {
// .catch === Promise
// }

// async Function
// response = await fetch
// data = await then
// result = await then
// .....

const base_url = "http://localhost:3000";
let path = `/users`;
// path = `products`

let url = base_url + path;
// console.log(url);

// try() catch(){}

// GET

const getUsers = async () => {
  //   fetch(url)
  //     .then((response) => {
  //       console.log("then 1:", response);
  //       if (response.status === 200) return response.json();
  //       if (response.status !== 200) throw new Error(response.status);
  //     })
  try {
    const response = await fetch(url);
    // console.log("async response", response.status);
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

// getUsers();

const obj = {
  name: "user",
  age: 28,
};
let options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(obj),
};

const addNewUser = async () => {
  try {
    //   fetch(url, options).then((response) => {
    //     console.log("POST:", response);
    //   });
    const response = await fetch(url, options);
    console.log(response);
    const result = await response.json();
    console.log("result", result);
  } catch (err) {
    console.log(err);
  }
};

// addNewUser();

// PATCH
let myId = "fcpTpsi";
options = {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ age: 2, name: "Boosia" }),
};

const updateUser = async () => {
  try {
    //   fetch(`${url}/${myId}`, options)
    //     .then((response) => {
    //       console.log("PATCH:", response);
    //       return response.json();
    //     })
    //     .then((data) => {
    //       console.log("PATCH:", data);
    //     });
    const res = await fetch(`${url}/${myId}`, options);
    console.log(res);
    const result = await res.json();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

// updateUser();

// PUT

myId = "ndHuiNHLNMl";
options = {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({}),
};

const replaceUserData = async () => {
  //   fetch(`${url}/${myId}`, options)
  //     .then((response) => {
  //       console.log("PUT:", response);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  try {
    const res = await fetch(`${url}/${myId}`, options);
    console.log(res);
    const result = await res.json();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

// replaceUserData();

// DELETE

myId = "fcpTpsi";
options = {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
  },
};

const deleteUser = async () => {
  //   fetch(`${url}/${myId}`, options)
  //     .then((response) => {
  //       console.log("DELETE:", response);
  //       return response.json();
  //     })
  //     .then((d) => console.log(d));

  try {
    const res = await fetch(`${url}/${myId}`, options);
    console.log(res);
    const result = await res.json();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

deleteUser();
