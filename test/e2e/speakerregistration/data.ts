let baseTestObject = {
    input: {
        name: '',
        email: '',
        description: ''
    },
    result: {
        valid: false
    }
};

let testData = [
    Object.assign({}, baseTestObject, {
        input: {
            name: 'Sam',
            email: '',
            description: ''
        }
    }),
    Object.assign({}, baseTestObject, {
        input:{
            name: 'Sam',
            email: 'sam',
            description: ''
        }
    }),
    Object.assign({}, baseTestObject, {
        input:{
            name: 'Sam',
            email: 'sam@kwerri.be',
            description: ''
        }
    }),
    Object.assign({}, baseTestObject, {
        input:{
            name: 'Sam',
            email: 'samkwerri.be',
            description: 'Full stack dev'
        }
    }),
    Object.assign({}, baseTestObject, {
        input:{
            name: 'Sam',
            email: 'sam@kwerri.be',
            description: 'Full stack dev'
        },
        result:{
            valid: true
        }
    })
];
export default testData;