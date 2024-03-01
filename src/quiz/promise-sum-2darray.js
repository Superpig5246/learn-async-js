async function sum2DArray(arr) {
        console.log('Sum called ... ');
        if(Array.isArray(arr)) {
            try {
                let sum = 0;
                let responses = await Promise.all(arr.map((ar) => sum1DArray(ar)))

                responses.forEach(num => {sum += num})
                

                console.log(`Sum = ${sum}`)
                return 'done';
            } catch (err) {
                console.log(`Error Msg: ${error}`)
                return 'failed'
            }
        }
        else {
            console.log('rejecting ... ');
            reject('BAD INPUT: Expected array as input');
        }
        console.log('returning from sum');
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