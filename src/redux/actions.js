import { nanoid } from "nanoid";

export const addTask = (text) => {
  return {
    type: "tasks/addTask",
    payload: {
      id: nanoid(),
      text /*User entered text*/,
      completed: false,
    },
  };
};
export const deleteTask = (taskId) => {
  return {
    type: "tasks/deleteTask",
    payload: taskId,
  };
};
export const toggleCompleted = (taskId) => {
  return {
    type: "tasks/toggleCompleted",
    payload: taskId,
  };
};

export const toggleAllCompleted = () => {
  return {
    type: "tasks/toggleAllCompleted",
  };
};

export const clearAllCompleted = () => {
  return {
    type: "tasks/clearAllCompleted",
  };
};

export const setStatusFilter = (value) => {
  return {
    type: "filters/setStatusFilter",
    payload: value,
  };
};
