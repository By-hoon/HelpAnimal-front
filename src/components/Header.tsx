import classNames from "classnames";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (location.pathname === "/") {
      setIsDark(false);
    } else {
      setIsDark(true);
    }
  }, [location.pathname]);

  return (
    <div className={classNames("header__navigation")}>
      <Link
        to="/"
        className={classNames("header__navigation--logo", { isDark: isDark })}
      >
        헬프애니멍
      </Link>
      <div className={classNames("header__navigation--menu")}>
        <Link
          to="/crew"
          className={classNames("header__navigation--menuLink", {
            isDark: isDark,
            isNow: location.pathname === "/crew",
          })}
        >
          Crew
        </Link>
        <Link
          to="/recruit"
          className={classNames("header__navigation--menuLink", {
            isDark: isDark,
            isNow: location.pathname === "/recruit",
          })}
        >
          Recruit
        </Link>
      </div>
    </div>
  );
};

export default Header;
