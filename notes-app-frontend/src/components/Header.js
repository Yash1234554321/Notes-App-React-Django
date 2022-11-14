import React from "react";
import { useLocation } from "react-router-dom";

import AddButton from "./AddButton";

const Header = () => {
  const location = useLocation();

  return (
    <div className="app-header">
      <h1 style={{marginTop:"auto"}}>Note List</h1>
      {location.pathname === "/" ? (
        <span>
          <AddButton />
        </span>
      ) : (
        <span></span>
      )}
    </div>
  );
};

export default Header;
