// libs
import { MdToday } from "react-icons/md";
import { MdPlace } from "react-icons/md";

// utils
import dateFormat from '../../utils/dateFormat';

// styles
import classes from './styles.module.css';

export default function EventCard({ data }) {
  const {
    title, 
    place, 
    date,
    isPrev,
    isExam,
    isDiploma,
  } = data;

  return (
    <div className={classes.root}>
      {isExam && <p className={classes.specialTitle}>Քննություն</p>}
      {isDiploma && <p className={classes.specialTitle}>Դիպլոմային</p>}

      <p className={classes.title}>{title}</p>

      <div className={`${classes.place} ${classes.withIcon}`}>
        <MdPlace />
        <p>{place ?? "(հայտարարված չի)"}</p>
      </div>
    
      <div className={`${classes.date} ${classes.withIcon}`}>
        <MdToday />
        <p>{date ? dateFormat(date) : "(հայտարարված չի)"}</p>
      </div>
    </div>
  )
}