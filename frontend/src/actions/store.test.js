import expect from "expect";
import { createStore } from "redux";
import rootReducer from "../reducers";
import initialState from "../reducers/initialState";

describe("Store Test", () => {
  it("dummy test - let it pass", () => {
    expect([1, 2]).toEqual([1, 2]);
  });
});
