// hooks
import useMode from "../../customHooks/useMode";

// styles
import classes from './styles.module.css';

export default function ModeChanger() {
  const { mode, modes, changeMode } = useMode();

  return (
    <div className={classes.root}>
      <div>
        <h3 className={classes.title}>Ռեժիմ</h3>
        <div className={classes.buttons}>
          {
            modes.map(modeData => 
              <button 
                className={`${classes.mode} ${mode === modeData && classes.activeMode}`}
                key={modeData}
                onClick={() => changeMode(modeData)}
              >
                {modeData}
              </button>
            )
          }
        </div>
      </div>
    </div>
  )
}