const axios = require('axios');

const dados = {
    id: 11,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    address: {
      street: "Kattie Turnpike",
      suite: "Suite 198",
      city: "Lebsackbury",
      zipcode: "31428-2261",
      geo: {
        lat: "-38.2386",
        lng: "57.2232"
        }
    }
}

// axios.delete('http://localhost:5000/api/unidades/60e50542d0392a1298f8ab2d')
// .then((response) => {
//     console.log(response.data);
// });
axios.get('http://localhost:5000/api/unidades/')
.then((response) => {
    console.log(response.data);
});

