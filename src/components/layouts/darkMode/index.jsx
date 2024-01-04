import React, { ChangeEventHandler, useState } from "react";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import styles from './index.module.css'

function DarkMode() {
  const [darkMode, setdarkMode] = useState(true);

  const changeModeDarkLight = () => {
    setdarkMode(state => !state)
  }

  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };
  
  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };
  
  const storedTheme = localStorage.getItem("theme");
  
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  
  const defaultDark =
    storedTheme === "dark" || (storedTheme === null && prefersDark);
  
  if (defaultDark) {
    setDark();
  }
  
  const toggleTheme: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.checked) {
      setDark();
    } else {
      setLight();
    }
  };

  return (
    <div className={styles.toggleThemeWrapper}>
      <label className={styles.toggleTheme} htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          onChange={toggleTheme}
          defaultChecked={defaultDark}/>
                          
        {/* <div className="slider round"></div> */}
        <div
        onClick={changeModeDarkLight}>
        {
                darkMode ? (
                  <MdOutlineDarkMode className={`${styles.darkModeSvg} ${styles.rotateSvg}`} />
                  // <span>🌒</span>
                ) : (
                  <MdDarkMode className={styles.darkModeSvg} />
                  // <span>☀️</span>
                )
              }
        </div>
      </label>
    </div>
  );
};
export default DarkMode;