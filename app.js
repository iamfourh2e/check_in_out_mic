const express = require('express');
const app = express();
const port = 9999;
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


app.use(cors());
var jwt = require('jsonwebtoken');
const payload = {
    scope: "checkInOutMic",
    app: "H2ETECH",
};

const host = 'https://eis-sys.com';
const prefix= '/api/v1/school';
const secret = 'h2eqwer123'

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.post('/code_name', (req, res) => {
//     const { code_name } = req.body;
//     var token = jwt.sign(payload, code_name, { expiresIn: '99999 days' });
//
//     res.send({
//         token
//     })
// });
// app.post('/check_in_out', (req, res,next) => {
//     const { token, student_token: s_token } = req.body;
//     try {
//         jwt.verify(token, secret)
//         axios.post(`${host}${prefix}/check_in_out/upsert?s_token=${s_token.trim()}`)
//             .then(response => {
//                 console.log(response.data);
//                 res.send(response.data);
//             })
//     } catch (e) {
//         res.send({
//             data: {
//                 code: 403,
//                 message: "សុំទោសយើងអត់ស្គាល់អ្នក",
//             }
//         })
//     }
//
// })

// app.listen(port, () => console.log(`App listening on port ${port}!`))


scan();
function scan(){
    rl.question("Student token : ", function(name) {
        axios.post(`${host}${prefix}/check_in_out/upsert?s_token=${name}`)
        scan();
    });
}

// rl.on("close", function() {gaa .
//     console.log("\nBYE BYE !!!");
//     process.exit(0);
// });