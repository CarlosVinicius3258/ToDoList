import { hideAddTodoMessage, showAddTodoMessage } from ".";

describe("Layout actions", () => {
  describe("Action Types", () => {
    test("Deve retornar a action type SHOW_ADD_TODO_MESSAGE", () => {
      expect(showAddTodoMessage.type).toBe("SHOW_ADD_TODO_MESSAGE");
    });
    test("Deve retornar a action type HIDE_ADD_TODO_MESSAGE", () => {
      expect(hideAddTodoMessage.type).toBe("HIDE_ADD_TODO_MESSAGE");
    });
  });
  describe("Action Creators", () => {
    test("Deve retornar a action creator {type: SHOW_ADD_TODO_MESSAGE}", () => {
      expect(showAddTodoMessage()).toEqual({
        type: "SHOW_ADD_TODO_MESSAGE",
      });
    });
    test("Deve retornar a action creator {type: HIDE_ADD_TODO_MESSAGE}", () => {
      expect(hideAddTodoMessage()).toEqual({
        type: "HIDE_ADD_TODO_MESSAGE",
      });
    });
  });
});
