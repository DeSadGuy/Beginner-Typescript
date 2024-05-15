const allNumber = (n: number) : string => {
    /* 
    functie () 

    if ()
    return iets 
    else 
    return jezelf met functie + bullshit 
    */ 
    const recusive = (randomnummer: number) : string => { 
        if (randomnummer == 0){
            return randomnummer.toString();
        }
        return recusive(randomnummer - 1) + " " +  randomnummer.toString();
    }
    return recusive(n); 
}

console.log(allNumber(5)); // 1 2 3 4 5