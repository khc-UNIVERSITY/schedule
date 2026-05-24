// copmonents
import ShowWeekLessons from '../../components/ShowWeekLessons';
import EmptyMessage from '../../components/EmptyMessage';

// hooks
import useMode from "../../customHooks/useMode.jsx";

// styles
import classes from './styles.module.css';

export default function ScheduleWeekPage() {
  const { mode, defaultMode } = useMode();
  
  if (mode !== defaultMode) {
    return <EmptyMessage text={"Չկա դասացուցակ"} />
  }

  return (
    <div className={classes.root}>
      <ShowWeekLessons />
    </div>
  )
}