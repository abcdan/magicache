const Magicache = require('../dist/index')


function print() {
    return 0
}
async function main() {

    const cache = new Magicache(print, 300)

    const value = await cache.run()

    console.log(value)
}

main()