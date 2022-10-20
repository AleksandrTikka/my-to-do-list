import css from "./TaskCounter.module.css";
// Импортируем хук
// import { useSelector } from "react-redux";
// import { getTasks } from "../../redux/selectors";
import { useTaskCount } from "../../hooks/useTaskCount";

export const TaskCounter = () => {
  // Получаем массив задач из состояния Redux
  // const tasks = useSelector(getTasks);
  // На базе состояния Redux получаем производные данные
  // const count = tasks.reduce(
  //   (acc, task) => {
  //     if (task.completed) {
  //       acc.completed += 1;
  //     } else {
  //       acc.active += 1;
  //     }
  //     return acc;
  //   },
  //   { active: 0, completed: 0 }
  // );

  const { active, completed } = useTaskCount();
  return (
    <div>
      <p className={css.text}>Active: {active}</p>
      <p className={css.text}>Completed: {completed}</p>
    </div>
  );
};
