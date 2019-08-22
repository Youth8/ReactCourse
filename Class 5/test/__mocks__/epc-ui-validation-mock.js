jest.mock('epc-ui-validation', () => ({
  Core: {
    Context: {
      Root: jest.fn(() => {
        return '';
      }),
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

// jest.mock('epc-ui-validation-ferris', () => ({
//   Input: jest.fn(),
//   Select:jest.fn(),
// }));