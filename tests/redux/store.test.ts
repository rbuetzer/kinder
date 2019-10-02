import { nameListActions, reducer, TState } from "../../src/redux/store";

describe("importNames", () => {
  it("imports the names", () => {
    const initialState: TState = { names: [] };

    const action = nameListActions.importNames(["Tick", "Trick", "Track"]);

    const result = [action].reduce(reducer, initialState);

    expect(result).toEqual({
      names: [
        {
          value: "Tick",
          upvotes: 0,
          downvotes: 0
        },
        {
          value: "Trick",
          upvotes: 0,
          downvotes: 0
        },
        {
          value: "Track",
          upvotes: 0,
          downvotes: 0
        }
      ]
    });
  });
});

describe("upvote", () => {
  it("increases the upvote count of the corresponding name", () => {
    const initialState: TState = {
      names: [
        {
          value: "Harry",
          upvotes: 5,
          downvotes: 3
        },
        {
          value: "Sally",
          upvotes: 7,
          downvotes: 1
        }
      ]
    };

    const action = nameListActions.upvote(0);

    const result = [action].reduce(reducer, initialState);

    expect(result).toEqual({
      names: [
        {
          value: "Harry",
          upvotes: 6,
          downvotes: 3
        },
        {
          value: "Sally",
          upvotes: 7,
          downvotes: 1
        }
      ]
    });
  });
});

describe("downvote", () => {
  it("increases the downvote count of the corresponding name", () => {
    const initialState: TState = {
      names: [
        {
          value: "Harry",
          upvotes: 5,
          downvotes: 3
        },
        {
          value: "Sally",
          upvotes: 7,
          downvotes: 1
        }
      ]
    };

    const action = nameListActions.downvote(0);

    const result = [action].reduce(reducer, initialState);

    expect(result).toEqual({
      names: [
        {
          value: "Harry",
          upvotes: 5,
          downvotes: 4
        },
        {
          value: "Sally",
          upvotes: 7,
          downvotes: 1
        }
      ]
    });
  });
});
