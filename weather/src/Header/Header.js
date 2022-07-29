import { useState, useEffect } from "react";
import classes from "./Header.module.css";
import icon from "../utils/icons/icons8-search.svg";
import { key, url, location } from "../utils/Constans";

const Header = (props) => {
  const [searchInput, setSearchInput] = useState("");
  const [locations, setLocations] = useState([]);
  const [counter, setCounter] = useState(0);

  const autoComplete = async () => {
    const result = await fetch(`${url}${location}${key}&q=${searchInput}`);
    const data = await result.json();
    setLocations(() => data);
  };

  useEffect(() => {
    if (
      searchInput.length % 3 === 0 &&
      searchInput.length > 0 &&
      searchInput.length != counter
    ) {
      setCounter(() => searchInput.length);
      autoComplete(searchInput);
    }
  }, [searchInput, locations, counter]);

  //  handaling locationsBox appearence
  useEffect(() => {
    if (!searchInput.trim() && locations.length > 0) {
      setLocations(() => []);
    }
  }, [searchInput, locations]);

  const onSubmit = async (location) => {
    setSearchInput("");
    // Call to request from the App
    props.onForecasts(location.Key);
  };

  return (
    <div className={classes.form}>
      <div className={classes.inputContainer}>
        <input
          type="text"
          className={classes.search}
          placeholder={"Search Location"}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <img
          src={icon}
          alt=""
          className={classes.icon}
          id="image"
          onClick={onSubmit}
        />
      </div>
      {locations.length > 0 && (
        <div className={classes.locationsBox}>
          {locations.map((location, i) => (
            <span
              key={i}
              className={classes.location}
              onClick={() => onSubmit(location)}
            >
              {location.LocalizedName}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;

// TODO:
// DIV for autocomplete search with max height
// after choosing the desired location call api for fortcast
