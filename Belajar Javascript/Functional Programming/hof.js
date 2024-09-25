function addOne(x) {
    return x + 1;
}

function square(x) {
    return x * x;
}

function compose(f, g) {
    return (x) => {
        return f(g(x));
    }
}

const addOneAndSquare = compose(square, addOne);

console.log(addOneAndSquare(2)); // output: 9