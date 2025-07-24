const request = require("supertest");
const api = request("https://petstore.swagger.io/v2");
module.exports = api;