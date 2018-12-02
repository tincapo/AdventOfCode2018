"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
http.createServer((request, response) => {
    response.write('Hello from Node.js!');
    response.end();
}).listen(3000);
//# sourceMappingURL=index.js.map