exports.min = function min(array) {
    if (arguments.length === 0) {
        return 0;
    }
    if (array.length === 0) {
        return 0;
    }

    let Min = Infinity;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < Min) {
            Min = array[i];
        }
    }
    return Min;
}

exports.max = function max (array) {
    if (arguments.length === 0) {
        return 0;
    }
    if (array.length === 0) {
        return 0;
    }
    let Max = -Infinity;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > Max) {
            Max = array[i];
        }
    }
    return Max;
}

exports.avg = function avg (array) {
    if (arguments.length === 0) {
        return 0;
    }
    if (array.length === 0) {
        return 0;
    }
    let Avg = 0;
    for (let i = 0; i < array.length; i++) {
        Avg += array[i];                    
    }
    return Avg / array.length;
}
