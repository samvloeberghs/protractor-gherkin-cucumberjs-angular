let testSet = {
  invalid: {
    title: 'should test if user is setting a new password with an (in)valid link',
    data: [
      {
        input: {
          id: '',
          nonce: ''
        },
        result: {
          valid: false
        }
      },
      {
        input: {
          id: '123',
          nonce: ''
        },
        result: {
          valid: false
        }
      },
      {
        input: {
          id: '',
          nonce: 'abcdefgh12345'
        },
        result: {
          valid: false
        }
      },
      {
        input: {
          id: '123',
          nonce: 'abcdefgh12345'
        },
        result: {
          valid: true
        }
      }
    ]
  },
  valid: {
    title: 'should validate the set new password form',
    data: [
      {
        input: {
          password: '',
          repeatPassword: ''
        },
        result: {
          valid: false
        }
      },
      {
        input: {
          password: '123',
          repeatPassword: ''
        },
        result: {
          valid: false
        }
      },
      {
        input: {
          password: '',
          repeatPassword: '123'
        },
        result: {
          valid: false
        }
      },
      {
        input: {
          password: '123',
          repeatPassword: '321'
        },
        result: {
          valid: false
        }
      },
      {
        input: {
          password: '123',
          repeatPassword: '123'
        },
        result: {
          valid: false
        }
      },
      {
        input: {
          password: '12345678',
          repeatPassword: '87654321'
        },
        result: {
          valid: false
        }
      },
      {
        input: {
          password: '12345678',
          repeatPassword: '12345678'
        },
        result: {
          valid: true
        }
      }
    ]
  }
};

export default testSet;