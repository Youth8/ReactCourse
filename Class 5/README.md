#### DEMO: Single Page Application - Room Management

**NPM local settings**

Because the demo code use EXPEDIA internal packages like [epc-ui-core-react](https://github.expedia.biz/LodgingPlatform/epc-ui-core-react), [epc-ui-validation](https://github.expedia.biz/LodgingPlatform/epc-ued/tree/master/packages/epc-ui-validation), [epc-ui-validation-ferris](https://github.expedia.biz/LodgingPlatform/epc-ued/tree/master/packages/epc-ui-validation-ferris) [epc-ui-layout](https://github.expedia.biz/LodgingPlatform/epc-ued/tree/master/packages/epc-ui-layout) etc. So we need set the npm register to internal repository and grant your account right to access it. Detail guide please refer to [Artifactory NPM Configuration](https://confluence.expedia.biz/display/AK/Artifactory+NPM+Configuration).

**Redux**

Redux is a Container for State Management.

React-Redux is a React Component for adapting Redux in React.
```shell
npm i redux react-redux
```

**Redux Core Concepts**

**Components in React-Redux**

**Unit Testing**

It is popular of using [jest](https://jestjs.io/) as the Unit Testing Framework in React Development 
```shell
npm i jest@23.5.0 -g
```
***APIs***

1. test/it(name, fn, timeout), define Unit Test.
2. expect(value), compare value to expectation.

```js
test('sum of 2 numbers', () => {
  expect(sum(1,2)).toBe(3);
});
```
3. describe(name, fn), group multi-tests in a block

```js
describe('tests for login page', () => {

  test('test for validation ', () => {
    // test body
  });

  test('test for click event of login button ', () => {
    // test body
  });
})

```

4. afterAll/afterEach(fn, timeout)
5. beforeAll/beforeEach(fn, timeout)

***Coverage***

Show information of coverage.
```shell
test --coverage

```
or set config flag
```js
  collectCoverage: true,
```

setup threshold for coverage via coverageThreshold
```js
"coverageThreshold": {
      "global": {
        "branches": 90,
        "functions": 90,
        "lines": 90,
        "statements": 90
      },
}
```

***Mock***

1. Mock a function, jest.fn(imp)

```js
jest.fn(()=>'');

```

2. Mock a module, jest.mock(moduleName, imp)
```js
jest.mock('epc-ui-validation', () => {
  // return a mock object
  return mock-object;
});

```
***Test Snapshot***

install [react-test-renderer](https://reactjs.org/docs/test-renderer.html)
```sh
npm i --save-dev react-test-renderer
```
[enzyme](https://github.com/airbnb/enzyme), A more powerful and popular Test Library for React Snapshot.

***Issues in Today Class***

1. Issue #1: window is not defined
> The cause is Jest changes default behavior in node js. Jest needs to simulate an environment to run all tests. Jest supports environment like node, jsdom(default). For our case, we need access ***window*** object, we need set ***jsdom*** as the test environment. So, please make sure the below setting in jest.config.js. 
```js
  testEnvironment: "jsdom"
```  

> if we have to use ***node*** as environment, then we can add the variables (like _window_ in our case) in the setup file. 
```js
  // The paths to modules that run some code to configure or set up the testing environment before each test
  setupFiles: ["./test/setup.js"],
```

setup.js
```js
global.window = {};
```

2. Issue #2: Plugin/Preset files are not allowed to export objects, only functions. 

> That is because latest Jest version (jest@24.9.0) does not work well with babel 6. So, please install a lower version jest@23.5.0.
```sh
npm i jest@23.5.0 -g
```




