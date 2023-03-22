const delaydColorChange = (color, delay) => {
    return new Promise ((resolve, reject) => {
        setTimeout (()=>{
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

delaydColorChange('red', 1000)
    .then(()=> delaydColorChange('orange', 1000))
    .then(()=> delaydColorChange('yellow', 1000))
    .then(()=> delaydColorChange('green', 1000))
    .then(()=> delaydColorChange('blue', 1000))
    .then(()=> delaydColorChange('indigo', 1000))
    .then(()=> delaydColorChange('violet', 1000))