jest.mock('epc-ui-validation', () => ({
  Core: {
    Context: {
      Block: () => '',
    },
    Wrapper: {
      validator: Component => Component,
      error: () => () => '',
    },
  },
  Rules: {
    positiveInt: {
      rule: jest.fn(),
      msg: '',
    },
    positiveNumber: {
      rule: jest.fn(),
      msg: '',
    },
    numberRange: jest.fn(),
  },
}));