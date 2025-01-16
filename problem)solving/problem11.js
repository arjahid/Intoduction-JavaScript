const reverse = [];
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
for (let i = 0; i < colors.length; i++) {
    const num = colors[i];
    reverse.unshift(num);
}
console.log(reverse);
