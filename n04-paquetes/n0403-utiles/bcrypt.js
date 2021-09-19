/**********
 * bcrypt *
 ***********/

const bcrypt = require('bcrypt');
const PASSWORD = '1234Segura!';

// Con callback
bcrypt.hash(PASSWORD, 5, (err, hash) => {
    console.log(hash);
    bcrypt.compare(PASSWORD, hash, (err, res) => {
        // console.log(err);
        console.log(res);
    });
});

// Con Promesas
bcrypt
    .hash(PASSWORD, 5)
    .then((hash) => {
        console.log(hash);
        return hash;
    })
    .then((hash) => {
        return bcrypt.compare(PASSWORD, hash);
    })
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });

// Con async await
const createHash = async (password) => {
    try {
        const hash = await bcrypt.hash(password, 5);
        console.log(hash);
    } catch (err) {
        console.error(err);
    }
};

createHash(PASSWORD);

// Con async await
(async () => {
    try {
        const passwordHash = await bcrypt.hash(PASSWORD, 5);
        console.log(passwordHash);

        const comparison = await bcrypt.compare(PASSWORD, passwordHash);
        console.log(comparison);
    } catch (error) {
        console.error(error);
        console.error(error.message);
    }
})();
