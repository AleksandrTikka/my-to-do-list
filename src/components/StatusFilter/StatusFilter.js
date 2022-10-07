import { Button } from "../Button/Button";
import css from "./StatusFilter.module.css";
// Импортируем хук
import { useSelector } from "react-redux";
// Импортируем объект значений фильтра
import { statusFilters } from "../../redux/constans";

export const StatusFilter = () => {
  // Получаем значение фильтра из состояния Redux
  const filter = useSelector((state) => state.filters.status);
  return (
    <div className={css.wrapper}>
      <Button selected={filter === statusFilters.all}>All</Button>
      <Button selected={filter === statusFilters.active}>Active</Button>
      <Button selected={filter === statusFilters.completed}>Completed</Button>
    </div>
  );
};
