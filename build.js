const fs = require("fs");

const content = `
🚀 Build successful!
Timestamp: ${new Date().toISOString()}
`;

if (!fs.existsSync("build")) {
  fs.mkdirSync("build");
}

fs.writeFileSync("build/output.txt", content);
console.log("Build complete. File created at build/output.txt");
