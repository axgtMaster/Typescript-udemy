const cartapostress = (postre:string, ...frutas:string[]):void =>{
    console.log(`El postre es ${postre} y tiene ${frutas}`)
}

cartapostress('postre1', 'naranja', ' platano', ' fresa')