function sum2DArray(arr) {
    return new Promise((resolve, reject) => {
        console.log('Sum called ... ');
        if(Array.isArray(arr)) {
            setTimeout(() => {
                let sum = 0;
                Promise.any(arr.map((ar) => sum1DArray(ar))).then((response) => {
                    console.log(response)
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
                let filtered = arr.filter(num => {
                    num < 0
                });
                if (filtered.length > 0)
                    resolve(filtered)
                else
                    reject("No negative found")
            },0)
        } else {
            reject('BAD INPUT: Expected array as input')
        }
    })
}

const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];