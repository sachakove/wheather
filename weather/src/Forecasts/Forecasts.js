import { useEffect } from "react";
import classes from "./Forecasts.module.css";

const Forecasts = (props) => {
  const { data } = props;

  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <div className={classes.cityBox}>
          <img src="" alt="" />
          <span className={classes.cityContent}>
            <span>Tel Aviv</span>
            <span>36c</span>
          </span>
        </div>
        <div className={classes.favorite}></div>
      </div>
      <div className={classes.content}>
        <span className={classes.condition}>Sunny</span>
        <div className={classes.forecasts}>
          {data.length > 0 &&
            data.map((item, i) => {
              let ts = item.EpochDate;
              let date = new Date(ts);
              let day = date.getDate();

              console.log("day");

              return (
                <span className={classes.dayBox} key={i}>
                  <span className={classes.day}>Sun</span>
                  <span className={classes.temp}>36c</span>
                </span>
              );
            })}
          {/* <span className={classes.dayBox}>
            <span className={classes.day}>Sun</span>
            <span className={classes.temp}>36c</span>
          </span>

          <span className={classes.dayBox}>
            <span className={classes.day}>Sun</span>
            <span className={classes.temp}>36c</span>
          </span>

          <span className={classes.dayBox}>
            <span className={classes.day}>Sun</span>
            <span className={classes.temp}>36c</span>
          </span>

          <span className={classes.dayBox}>
            <span className={classes.day}>Sun</span>
            <span className={classes.temp}>36c</span>
          </span>

          <span className={classes.dayBox}>
            <span className={classes.day}>Sun</span>
            <span className={classes.temp}>36c</span>
          </span> */}
        </div>
      </div>
    </div>
  );
};

export default Forecasts;
