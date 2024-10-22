const first = function(input) {
    return input[0];
};

const last = function(input) {
    return input[input.length-1];
};

const kiss = function(input) {
    const firstElement = first(input);
    const lastElement = last(input);
    return [lastElement, firstElement];
};
