async function start() {
    return await Promise.resolve('async is working');
}

start().then(console.log)

class Util {
    static id : Date = new Date();
    active : boolean;

}

console.log(Util.id);