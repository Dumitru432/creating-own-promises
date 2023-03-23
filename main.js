const delaydColorChange = (color, delay) => {
    return new Promise ((resolve, reject) => {
        setTimeout (()=>{
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

/* delaydColorChange('red', 1000)
    .then(()=> delaydColorChange('orange', 1000))
    .then(()=> delaydColorChange('yellow', 1000))
    .then(()=> delaydColorChange('green', 1000))
    .then(()=> delaydColorChange('blue', 1000))
    .then(()=> delaydColorChange('indigo', 1000))
    .then(()=> delaydColorChange('violet', 1000))

     */

    // with Await Keyword

    async function rainbow () {
        await delaydColorChange('red', 1000)
        await delaydColorChange('orange', 1000)
        await delaydColorChange('yellow', 1000)
        await delaydColorChange('green', 1000)
        await delaydColorChange('blue', 1000)
        await delaydColorChange('indigo', 1000)
        await delaydColorChange('violet', 1000)
        return 'all done'
    }

//  rainbow().then(()=>console.log('End of rainbow')) 

async function printRainbow () {
    await rainbow();
    console.log('END OF RAINBOW!')
};
printRainbow();

