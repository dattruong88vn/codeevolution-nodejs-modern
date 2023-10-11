const crypto = require("node:crypto");

const start = Date.now();

// sync
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// console.log(Date.now() - start);

process.env.UV_THREADPOOL_SIZE = 4;

// async
const MAX_CALLS = 4;
for (let i = 0; i < MAX_CALLS; i++) {
  crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
    console.log(i + 1, " : ", Date.now() - start);
  });
}
