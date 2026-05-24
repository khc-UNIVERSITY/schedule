// components
import ShowWeekPractice from '../../components/ShowWeekPractice';
import EmptyMessage from '../../components/EmptyMessage';

// hooks
import useMode from "../../customHooks/useMode.jsx";

// styles
import classes from './styles.module.css';

export default function PracticePage() {
  const { mode, defaultMode } = useMode();
    
  if (mode !== defaultMode) {
    return <EmptyMessage text={"Չկա պրակտիկա"} />
  }
  
  return (
    <div className={classes.root}>
      <ShowWeekPractice />
    </div>
  )
}