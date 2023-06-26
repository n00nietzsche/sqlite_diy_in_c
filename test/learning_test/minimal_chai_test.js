const expect = require("chai").expect;
const name = "jake";
expect(name).to.be.a("string");
expect(name).to.equal("jake", "제이크");
expect(name).to.have.lengthOf(4);
