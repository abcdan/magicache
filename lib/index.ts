class Magicache  {
    private fun;
    private time;
    
    constructor(fun: Function, time: number = 60000) {
        this.fun = fun;
        this.time = time;
    }

    public run() {
        setInterval(this.fun, this.time);
    }
}