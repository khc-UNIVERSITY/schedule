// libs
import { useEffect } from "react";

// hooks
import useRedux from "./useRedux";
import useVersion from "./useVersion";

// actions
import { setMode } from '../store/slices/modeSlice.slice.js';

// constants
import VERSIONS from "../constants/versions.js";
import appModes, { defaultMode } from '../constants/appModes.js';

export default function useMode() {
  const [ modeData, dispatch ] = useRedux("modeSlice");
  const [isHasUpdate, updateVersion] = useVersion(VERSIONS.MODE.key, VERSIONS.MODE.version);
  const { mode } = modeData;

  const changeMode = (newMode) => {
    dispatch(setMode(newMode));
  };

  useEffect(() => {
    if (isHasUpdate) {
      changeMode(defaultMode);
      updateVersion();
    }
  }, []);

  return { 
    mode,
    modes: Object.values(appModes),
    defaultMode,
    changeMode,
  };
}
