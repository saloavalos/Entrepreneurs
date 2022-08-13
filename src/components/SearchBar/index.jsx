import React, { useEffect } from "react";
import SearchIcon from "../../assets/icons/Search";
import CloseIcon from "../../assets/icons/Close";
import "./searchBar.scss";
import { useState } from "react";
import axios from "axios";

export default () => {
  const [isDialogOpened, setIsDialogOpened] = useState(false);
  const [users, setUsers] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleCloseDialog = () => {
    setIsDialogOpened(false);
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.log("Unable to search 🤔"));
  }, []);

  const handleSearch = (searchValue) => {
    setSearchInput(searchValue);
    if (searchValue !== "") {
      const filteredResults = users.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase());
      });
      setSearchResults(filteredResults);
    } else {
      setSearchResults(users);
    }
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
            <input
              type="text"
              placeholder="Search here..."
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>

          <div className="search-bar-dialog-results-c">
            {searchInput.length > 0 &&
              searchResults.map((eachResult) => (
                <div
                  className="search-bar-dialog__each-result-c"
                  key={eachResult.id}
                >
                  <div className="search-bar-dialog-each-result__img-c">
                    <img
                      src="https://picsum.photos/80/80"
                      alt="Profile photo"
                    />
                  </div>
                  <div className="search-bar-dialog-each-result__text-c">
                    <p>
                      Name: <span>{eachResult?.name}</span>
                    </p>
                    <p>
                      Company: <span>{eachResult?.company?.name}</span>
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
