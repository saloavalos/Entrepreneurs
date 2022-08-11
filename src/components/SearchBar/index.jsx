import React from "react";
import SearchIcon from "../../assets/icons/Search";
import CloseIcon from "../../assets/icons/Close";
import "./searchBar.scss";
import { useState } from "react";

export default () => {
  const [isDialogOpened, setIsDialogOpened] = useState(false);

  const handleCloseDialog = () => {
    setIsDialogOpened(false);
  };

  return (
    <div className="search-bar-main-c">
      <SearchIcon onClick={() => setIsDialogOpened(true)} />

      <div
        className={`search-bar-dialog-c ${
          isDialogOpened && "search-bar-dialog--active"
        }`}
        onClick={handleCloseDialog}
      >
        <div
          className="search-bar-dialog__content"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="search-bar__top-content-c">
            <p>Find your connection</p>
            <CloseIcon onClick={handleCloseDialog} />
          </div>
          <div className="search-bar-c">
            <SearchIcon />
            <input type="text" placeholder="Search here..." />
          </div>
        </div>
      </div>
    </div>
  );
};
