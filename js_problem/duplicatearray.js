const noDuplicate = (array) => {
    let unique = [];
    for (let element of array) {
        if (!unique.includes(element)) {
            unique.push(element);
        }
    }
    return unique;
}

const mixArray = ['jahid', 'hasan', 'asha', 'jahid', 'mony', 'asha', 'afrin', 'mimi', 'asha'];
const result = noDuplicate(mixArray);
console.log(result); // Output: ['jahid', 'hasan', 'asha', 'mony', 'afrin', 'mimi']
