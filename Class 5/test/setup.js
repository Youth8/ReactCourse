import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

// window = {};

global.window = {};

configure({ adapter: new Adapter() });
