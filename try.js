const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 'kajal';
const someOtherPlaintextPassword = 'not_bacon';


bcrypt.hash(myPlaintextPassword, saltRounds).then(function(hash) {
    // Store hash in your password DB.
    console.log(hash)
});

bcrypt.compare(myPlaintextPassword, hash).then(function(result) {
    // result == true
    console.log(result)
});

// bcrypt.compare(someOtherPlaintextPassword, hash).then(function(result) {
//     // result == false
// });

