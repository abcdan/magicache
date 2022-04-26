export interface Config {
    key: string;            // The key that's used for cache, handy for if your cache needs to store different things
    time: number;           // How long each item should be cached for
    default: any;           // The default value to return if something goes wrong, normally throws an error
}