function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name,
            email
        })
    })
    .then(response => {
      return response.json()
    })
    .then(object => {
        console.log(object)
      document.body.innerHTML = object["id"]
    })
    .catch((error) => {
      document.body.innerHTML = error.message
    })
}
submitData();

// const submitData = async (name, email) => {
//     const response = await fetch("http://localhost:3000/users", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//         },
//         body: JSON.stringify({
//             name: "",
//             email: ""
//         })
//     });
//     const object = await response.json();
//     console.log(object);
// }