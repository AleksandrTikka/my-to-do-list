import { combineReducers } from "redux";
import { statusFilters } from "./constans";

const tasksInitialState = [
  { id: 0, text: "Learn HTML and CSS", completed: true },
  { id: 1, text: "Get good at JavaScript", completed: true },
  { id: 2, text: "Master React", completed: false },
  { id: 3, text: "Discover Redux", completed: false },
  { id: 4, text: "Build amazing apps", completed: false },
];

const tasksReducer = (state = tasksInitialState, action) => {
  // Редюсер различает экшены по значению свойства type
  switch (action.type) {
    // В зависимости от типа экшена будет выполняться разная логика
    case "tasks/addTask":
      // Нужно вернуть новый массив задач
      return [
        // в котором есть все существующие задачи
        ...state,
        // и объект новой задачи
        action.payload,
      ];
    // };

    case "tasks/deleteTask":
      return state.filter((task) => task.id !== action.payload);

    case "tasks/toggleCompleted":
      return state.map((task) => {
        if (task.id !== action.payload) {
          return task;
        }
        return {
          ...task,
          completed: !task.completed,
        };
      });

    case "tasks/toggleAllCompleted":
      return state.map((task) => {
        if (task.completed) {
          return task;
        }
        return {
          ...task,
          completed: true,
        };
      });

    case "tasks/clearAllCompleted":
      return state.filter((task) => !task.completed);

    default:
      // Каждый редюсер получает все экшены отправленные в стор.
      // Если редюсер не должен обрабатывать какой-то тип экшена,
      // необходимо вернуть существующее состояние без изменений.
      return state;
  }
};

const filtersInitialState = {
  status: statusFilters.all,
};

const filtersReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case "filters/setStatusFilter":
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  tasks: tasksReducer,
  filters: filtersReducer,
});
