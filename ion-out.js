function ionOut(str){
    const regex = /(\w+(t))(?=ion)/g;
    let res =  str.match(regex);
    if (res === null) {
        return []
    }
    return res
}
