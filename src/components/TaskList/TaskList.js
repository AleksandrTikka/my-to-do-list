// import { useSelector } from "react-redux";
import { Task } from "../Task/Task";
import css from "./TaskList.module.css";
// Импортируем объект значений фильтра
// import { statusFilters } from "../../redux/constans";
// import { getTasks, getStatusFilter } from "../../redux/selectors";
import { useVisibleTasks } from "../../hooks/useVisibleTasks";

// const useVisibleTasks = () => {
//   const tasks = useSelector(getTasks);
//   const filter = useSelector(getStatusFilter);
//   switch (filter) {
//     case statusFilters.active:
//       return tasks.filter((task) => !task.completed);
//     case statusFilters.completed:
//       return tasks.filter((task) => task.completed);
//     default:
//       return tasks;
//   }
// };

// const getVisibleTasks = (tasks, statusFilter) => {
//   switch (statusFilter) {
//     case statusFilters.active:
//       return tasks.filter((task) => !task.completed);
//     case statusFilters.completed:
//       return tasks.filter((task) => task.completed);
//     default:
//       return tasks;
//   }
// };

export const TaskList = () => {
  // Получаем массив задач из состояния Redux
  // const tasks = useSelector(getTasks);
  // Получаем значение фильтра из состояния Redux
  // const filter = useSelector(getStatusFilter);
  // Вычисляем массив задач которые необходимо отображать в интерфейсе
  // const visibleTasks = getVisibleTasks(tasks, filter);
  const visibleTasks = useVisibleTasks();

  return (
    <ul className={css.list}>
      {visibleTasks.map((task) => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
