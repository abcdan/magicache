class Magicache  {
    private fun;
    private time;
    private cache: any;
    private cacheTime: any;
    
    /**
     * The constructor function takes two arguments, the first is a function and the second is a
     * number. The first argument is assigned to the fun property and the second argument is assigned
     * to the time property. If the second argument is not provided, the time property is assigned the
     * value 60000
     * @param {Function} fun - The function to be called.
     * @param {number} [time=60000] - The time in milliseconds that the function will be called.
     */
    constructor(fun: Function, time: number = 60000) {
        this.fun = fun;
        this.time = time;
    }

    /**
     * If the cache is valid, return the cache, otherwise, update the cache and return the cache
     * @returns The cache
     */
    public async run() {
        if(this.cache && this.cacheTime + this.time > Date.now()) {
        this.cache = await this.fun()
        this.cacheTime = Date.now()
        }
        return this.cache;
    }
}