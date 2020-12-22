import * as $ from 'jquery';

const x = "mem1";

// import("loadash").then(_ => console.log('loadash', _.random(0, 42, true)))

function createAnalitycs(){
    let counter  = 0;
    let isDestroyed = false;

    const listener = () => counter++;

    $(document).on('click', listener)

    return {
        destroy(){
            $(document).off('click', listener);
            isDestroyed = true;
        },

        getClicks() {
            if(isDestroyed){
                return `Analitycs is destroyed. Total clicks = ${counter}`
            }
            return counter
        }
    }
}

export default createAnalitycs;