let testData = [
    {
        input: {
            name: '',
            email: '',
            password: '',
            repeatPassword: ''
        },
        result: {
            valid: false
        }
    },
    {
        input: {
            name: 'Sam Vloeberghs',
            email: '',
            password: '',
            repeatPassword: ''
        },
        result: {
            valid: false
        }
    },
    {
        input: {
            name: 'Sam Vloeberghs',
            email: 'samkwerri',
            password: '',
            repeatPassword: ''
        },
        result: {
            valid: false
        }
    },
    {
        input: {
            name: '',
            email: 'sam@kwerri.be',
            password: '',
            repeatPassword: ''
        },
        result: {
            valid: false
        }
    },
    {
        input: {
            name: 'Sam Vloeberghs',
            email: 'sam@kwerri.be',
            password: '',
            repeatPassword: ''
        },
        result: {
            valid: false
        }
    },
    {
        input: {
            name: 'Sam Vloeberghs',
            email: 'sam@kwerri.be',
            password: '1234567',
            repeatPassword: ''
        },
        result: {
            valid: false
        }
    },
    {
        input: {
            name: 'Sam Vloeberghs',
            email: 'sam@kwerri.be',
            password: '',
            repeatPassword: '1234567'
        },
        result: {
            valid: false
        }
    },
    {
        input: {
            name: 'Sam Vloeberghs',
            email: 'sam@kwerri.be',
            password: '1234567',
            repeatPassword: '7654321'
        },
        result: {
            valid: false
        }
    },
    {
        input: {
            name: 'Sam Vloeberghs',
            email: 'sam@kwerri.be',
            password: '1234567',
            repeatPassword: '1234567'
        },
        result: {
            valid: true
        }
    }
];
export default testData;