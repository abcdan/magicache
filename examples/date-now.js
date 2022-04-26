const { Magicache } = require("../dist/index");

const https = require("https");

function dateNow() {
  return new Date().getTime();
}

/**
 * As you can see when you log the cache, it returns the same value.
 */
async function main() {
  const cache = new Magicache(dateNow, 30000);

  console.log(await cache.run());
  console.log(await cache.run());
  console.log(await cache.run());
  console.log(await cache.run());
  console.log(await cache.run());
  console.log(await cache.run());
  console.log(await cache.run());
  console.log(await cache.run());
  console.log(await cache.run());
  console.log(await cache.run());
  console.log(await cache.run());
  console.log(await cache.run());
  console.log(await cache.run());
  console.log(await cache.run());
}

main();
