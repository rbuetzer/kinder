import { actions, reducer, TState } from "../../src/redux/store";

describe("upvote", () => {
  it("increases the upvote count of the corresponding name", () => {
    const initialState: TState = {
      names: {
        0: {
          value: "Harry",
          upvotes: 5,
          downvotes: 3
        },
        1: {
          value: "Sally",
          upvotes: 7,
          downvotes: 1
        }
      }
    };

    const action = actions.upvote(0);

    const result = [action].reduce(reducer, initialState);

    expect(result).toEqual({
      names: {
        0: {
          value: "Harry",
          upvotes: 6,
          downvotes: 3
        },
        1: {
          value: "Sally",
          upvotes: 7,
          downvotes: 1
        }
      }
    });
  });
});

describe("downvote", () => {
  it("increases the downvote count of the corresponding name", () => {
    const initialState: TState = {
      names: {
        0: {
          value: "Harry",
          upvotes: 5,
          downvotes: 3
        },
        1: {
          value: "Sally",
          upvotes: 7,
          downvotes: 1
        }
      }
    };

    const action = actions.downvote(0);

    const result = [action].reduce(reducer, initialState);

    expect(result).toEqual({
      names: {
        0: {
          value: "Harry",
          upvotes: 5,
          downvotes: 4
        },
        1: {
          value: "Sally",
          upvotes: 7,
          downvotes: 1
        }
      }
    });
  });
});
