const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const https = require('https');
const fs = require('fs');

const app = express();

dotenv.config();

const staticPath = path.join(__dirname, 'build');
app.use(express.static(staticPath));

console.log(`Source code path is \"${staticPath}\"`);

// Allows you to set port in the project properties.
app.set('port', process.env.PORT || 3000);

// const httpsOptions = {
//     pfx: fs.readFileSync('certificate.pfx'),
//     passphrase: 'password'
// };

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const server = app.listen(app.get('port'), function () {
    console.log(`Express server listening on port ${server.address().port}`);
});
