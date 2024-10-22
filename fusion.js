function fusion(obj1, obj2) {
    const result = {};
    const allKeys = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);
    
    allKeys.forEach(key => {
      if (typeof obj1[key] === 'object' && !Array.isArray(obj1[key]) && obj1[key] !== null &&
          typeof obj2[key] === 'object' && !Array.isArray(obj2[key]) && obj2[key] !== null) {
        result[key] = fusion(obj1[key], obj2[key]);
      } else {
        soufian(key);
      }
    });
  
    function soufian(key) {
      if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
        result[key] = [...obj1[key], ...obj2[key]];
      } else if (typeof obj1[key] === "number" && typeof obj2[key] === "number") {
        result[key] = obj1[key] + obj2[key];
      } else if (typeof obj1[key] === "string" && typeof obj2[key] === "string") {
        result[key] = obj1[key] + " " + obj2[key];
      } else if (obj2.hasOwnProperty(key)) {
        result[key] = obj2[key];
      } else if (obj1.hasOwnProperty(key)) {
        result[key] = obj1[key];
      }
    }
    return result;
  }
