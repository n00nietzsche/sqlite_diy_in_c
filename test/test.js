const { spawn } = require("child_process");
const cliProcess = spawn("./../sqlite");
const assert = require("assert");

function sendCommand(command) {
  cliProcess.stdin.write(command);
}

describe("database", function () {
  it("inserts and retrieves a row", () => {
    sendCommand("insert 1 user1 person1@example.com\n");
    sendCommand("select\n");
    sendCommand(".exit\n");

    cliProcess.stdout.on("data", (result) => {
      assert.equal(
        `db > Executed.\ndb > (1, user1, person1@example.com)\nExecuted.\ndb > `,
        result.toString()
      );
    });
  });
});
