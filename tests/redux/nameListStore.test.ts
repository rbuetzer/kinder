import {
  getRankedNames,
  isLoaded,
  nameListActions,
  nameListReducer,
  TNameListState
} from "../../src/redux/nameListStore";
import { INameCandidate } from "../../src/models/INameCandidate";
import { IStoreState } from "../../src/redux/store";

describe("importNames", () => {
  it("imports the names", () => {
    const initialState: TNameListState = [];

    const action = nameListActions.importNames(["Tick", "Trick", "Track"]);

    const result = [action].reduce(nameListReducer, initialState);

    expect(result).toEqual([
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
    ]);
  });
});

describe("upvote", () => {
  it("increases the upvote count of the corresponding name", () => {
    const initialState: TNameListState = [
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
    ];

    const action = nameListActions.upvote(0);

    const result = [action].reduce(nameListReducer, initialState);

    expect(result).toEqual([
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
    ]);
  });
});

describe("downvote", () => {
  it("increases the downvote count of the corresponding name", () => {
    const initialState: TNameListState = [
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
    ];

    const action = nameListActions.downvote(0);

    const result = [action].reduce(nameListReducer, initialState);

    expect(result).toEqual([
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
    ]);
  });
});

describe("selectors", () => {
  describe("isLoaded", () => {
    it("is true, if there are names", () => {
      const state = {
        names: [{ value: "Adam" }]
      } as IStoreState;

      const result = isLoaded(state);

      expect(result).toBe(true);
    });
    it("is false, if there are no names", () => {
      const state = {
        names: []
      } as IStoreState;

      const result = isLoaded(state);

      expect(result).toBe(false);
    });
  });

  describe("getRankedNames", () => {
    it("orders by score and name, removes names without votes", () => {
      const state = {
        names: [
          {
            value: "Jonas",
            upvotes: 0,
            downvotes: 0
          },
          {
            value: "Ulrich",
            upvotes: 3,
            downvotes: 0
          },
          {
            value: "Henri",
            upvotes: 7,
            downvotes: 3
          },
          {
            value: "Josef",
            upvotes: 2,
            downvotes: 3
          },
          {
            value: "Stefano",
            upvotes: 0,
            downvotes: 2
          },
          {
            value: "Friedrich",
            upvotes: 4,
            downvotes: 6
          },
          {
            value: "Wilhelm",
            upvotes: 3,
            downvotes: 3
          }
        ]
      } as IStoreState;

      const result = getRankedNames(state);

      expect(result).toEqual([
        {
          name: "Ulrich",
          score: 1
        },
        {
          name: "Henri",
          score: 0.7
        },
        {
          name: "Wilhelm",
          score: 0.5
        },
        {
          name: "Friedrich",
          score: 0.4
        },
        {
          name: "Josef",
          score: 0.4
        },
        {
          name: "Stefano",
          score: 0
        }
      ]);
    });
  });
});
