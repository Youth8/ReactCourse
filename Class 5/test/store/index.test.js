
import store from '../../src/store';

test('test for store', () => {
    const state = store.getState();
    expect(state.Auth).toBe(false);
});