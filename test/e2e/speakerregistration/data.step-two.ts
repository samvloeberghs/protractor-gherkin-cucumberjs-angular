let baseTestObject = {
    input: {
        type: '',
        title: '',
        description: ''
    },
    result: {
        valid: false
    }
};

let testData = [
    Object.assign({}, baseTestObject, {
        input: {
            type: '',
            title: '',
            description: ''
        }
    })
];
export default testData;