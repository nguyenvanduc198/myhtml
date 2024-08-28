// Write 2 threads which run in the same time.
// If

const wait = (sec = 2) => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, sec * 1000);
    });
};

const callAPI1 = async () => {
    await wait();
    return {
        status: 200,
        data: [
            { name: "X", age: 24 },
            { name: "Y", age: 26 }
        ]
    };
};

const callAPI2 = async () => {
    await wait();
    return {
        status: 200,
        data: [
            { name: "M", age: 25 },
            { name: "N", age: 27 }
        ]
    };
};

// You have 2 API. Write a script to summarize age of all people from 2 API.

const sumAge = async () => {
    const result1 = await callAPI1();
    const data1 = result1.data;

    const result2 = await callAPI2();
    const data2 = result2.data;

    let sum = 0;
    for (let item of data1) {
        sum += item.age;
    }

    for (let item of data2) {
        sum += item.age;
    }

    return sum;
};
