import ToDoModel from "../../models/ToDoModel";

export default {
  namespaced: true,
  state: {
    todos: Array<ToDoModel>()
  },

  mutations: {
    addToDo(state: any, todoModel: ToDoModel) {
      state.todos.push(todoModel);
    }
  },
  actions: {
    addToDo(context: any, todoModel: ToDoModel) {
      return new Promise((resolve, reject) => {
        context.commit("addToDo", todoModel);
        resolve();
      });
    }
  }
};
