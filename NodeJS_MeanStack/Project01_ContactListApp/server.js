let express = require('express');
let app = express();

app.use(express.static(__dirname + "/public"));


app.get('/contactList', function (req, res) {
    console.log("I received a GET request");

    person = {
        name: "Mik",
        email: "www.eeee@email.com",
        number: "100"
    };
    person2 = {
        name: "Sum",
        email: "www.uuu@gmail.com",
        number: "90"
    };
    person3 = {
        name: "Tommy",
        email: "www.oo@email.com",
        number: "60"
    };

    let contactList = [person, person2, person3];
    res.json(contactList);
});

app.listen(3000);

console.log('nodejs server running on port 3000');