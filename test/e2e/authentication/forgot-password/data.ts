let testData = [
    {
        input: {
            email: ''
        },
        result: {
            valid: false
        }
    },
    {
        input: {
            email: 'samkwerri.be'
        },
        result: {
            valid: false
        }
    },
    {
        input: {
            email: 'sam@kwerri.be'
        },
        result: {
            valid: true
        }
    }
];
export default testData;