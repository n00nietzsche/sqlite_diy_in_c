const { spawn } = require("child_process");
const cliProcess = spawn("./../../sqlite");
function sendCommand(command) {
  cliProcess.stdin.write(command);
}

sendCommand("insert 1 user1 person1@example.com\n");
sendCommand("select\n");
sendCommand(".exit\n");

cliProcess.stdout.on("data", (data) => {
  console.log(`${data}`);
});
