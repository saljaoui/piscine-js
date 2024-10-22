function getURL(dataSet) {
    console.log(dataSet);
    const urlRegex = /http(s?):\/\/\w+(\.|-|\w+|\/|\?|=|\[|\]|&|,|%|@|#)+(?!=\s)/g;
    let res = dataSet.match(urlRegex)
    return res
}
function greedyQuery(dataSet) {
    console.log(dataSet);
    const urlRegex = /https?:\/\/\S+(?:=(?:[^=\s]*=){2,}[^\s]*)/g;
    let res = dataSet.match(urlRegex)
    return res
}
function notSoGreedy(dataSet) {
    console.log(dataSet);
    const urlRegex = /https?:\/\/\S+(?:\?[^=\s]+=[^&\s]+(?:&[^=\s]+=[^&\s]+){1,2})(?=[\s])/g;    
    let res = dataSet.match(urlRegex)
    return res
}