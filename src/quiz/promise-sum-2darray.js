function sum2DArray(arr) {
    return new Promise((resolve, reject) => {
        console.log('Sum called ... ');
        if(Array.isArray(arr)) {
            setTimeout(() => {
                let sum = 0;
                Promise.all(arr.map((ar) => sum1DArray(ar))).then((responses) => {
                    responses.forEach(num => {sum += num})
                })

                console.log('resolving ... ');
                resolve(sum);
            }, 0);
        }
        else {
            console.log('rejecting ... ');
            reject('BAD INPUT: Expected array as input');
        }
        console.log('returning from sum');
    });
}

function sum1DArray(arr) {
    return new Promise((resolve, reject) => {
        if (Array.isArray(arr)) {
            setTimeout(() => {
                let sum = 0; 
                arr.forEach(num => {
                    sum += num
                });
                resolve(sum)
            },0)
        } else {
            reject('BAD INPUT: Expected array as input')
        }
    })
}

const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];