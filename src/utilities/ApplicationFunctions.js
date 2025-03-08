export const getFirstItem = (array) => {
    return array[0];
}

export const calculateModifier = (score) => {
    return `${score > 9 ? '+' : ''}${Math.floor((score - 10) / 2)}`;
};

export const isEmptyArray = (array) => {
    return array.length === 0 ? true : false;
}