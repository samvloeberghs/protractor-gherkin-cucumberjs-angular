let testData = [
    {
        input: {
            email: '',
            password: ''
        },
        result: {
            valid: false
        }
    },
    {
        input: {
            email: '',
            password: 'thisisavalidpassword'
        },
        result: {
            valid: false
        }
    },
    {
        input: {
            email: 'samkwerri.be',
            password: 'thisisavalidpassword'
        },
        result: {
            valid: false
        }
    },
    {
        input: {
            email: 'sam@kwerri.be',
            password: ''
        },
        result: {
            valid: false
        }
    },
    {
        input: {
            email: 'sam@kwerri.be',
            password: 'thisisavalidpassword'
        },
        result: {
            valid: true
        }
    }
];
export default testData;