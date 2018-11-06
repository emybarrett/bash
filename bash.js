process.stdout.write('prompt > ');

let pwd = require('./pwd');

process.stdin.on('data', pwd);
