jest.mock("epc-ui-layout", () => ({
  Row: jest.fn(),
  Column: jest.fn(),
  Box: jest.fn()
}));
