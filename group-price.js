function groupPrice(str) {
    const regex = /(\$|USD)(\d+)\.(\d{2})/g;
    const matches = [];
    let match;
  
    while ((match = regex.exec(str)) !== null) {
        console.log(match);
      matches.push([match[0], match[2], match[3]]);
    }
  
    return matches;
  }
