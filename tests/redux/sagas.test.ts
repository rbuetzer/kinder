import { importFileSaga, sagaActions } from "../../src/redux/sagas";
import { put } from "redux-saga/effects";
import { appAction } from "../../src/redux/appStore";
import { SubPage } from "../../src/models/SubPage";

describe("sagas", () => {
  describe("importFileAction", () => {
    it("converts the file to an array and dispatches the load list action", () => {
      const fileContent = "Athos\nPorthos\nAramis";

      const gen = importFileSaga(sagaActions.importFile(fileContent));

      expect(gen.next().value).toEqual(
        put(sagaActions.importNames(["Athos", "Porthos", "Aramis"]))
      );

      expect(gen.next().value).toEqual(
        put(appAction.selectSubPage(SubPage.Voting))
      );
    });

    it("removes spaces at the beginning and at the end of names", () => {
      const fileContent = "  Harry \n  Ron\nHermione    \n\tLord Voldemort\t";

      const gen = importFileSaga(sagaActions.importFile(fileContent));

      expect(gen.next().value).toEqual(
        put(
          sagaActions.importNames([
            "Harry",
            "Ron",
            "Hermione",
            "Lord Voldemort"
          ])
        )
      );
    });

    it("removes empty lines", () => {
      const fileContent = "Bonnie\n\n    \nClyde\n";

      const gen = importFileSaga(sagaActions.importFile(fileContent));

      expect(gen.next().value).toEqual(
        put(sagaActions.importNames(["Bonnie", "Clyde"]))
      );
    });
  });
});
