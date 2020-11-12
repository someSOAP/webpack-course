import * as $ from 'jquery';

function createAnalitycs(){
    let counter = 0;
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