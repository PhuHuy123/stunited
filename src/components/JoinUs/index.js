import clsx from "clsx";
import styles from "./JoinUs.module.scss";
import { useEffect, useState } from "react";
import { getJoin } from "../../config/apiJoinUs";

export const JoinUS = () => {
  const [joinus, setJoinUs] = useState([]);
  useEffect(() => {
    getJoinUsApi();
  }, []);
  const getJoinUsApi = async () => {
    const res = await getJoin();
    if (res && res.data && res.data.length > 0) {
      setJoinUs(res.data);
    } else {
      console.log("fail");
    }
  };
  return (
    <>
      <div className={clsx(styles.wrapperJoin)}>
        <div className={styles.joinTop}>
          <p id={styles.titleTop}>
            Building a startup is hard, so we build a family to make it more
            enjoyable.
          </p>
        </div>
        <div className={clsx(styles.joinBot, "container")}>
          <div className={clsx(styles.joinBuild, "row")}>
            {joinus.map((join) => (
              <div className={clsx(styles.joinMain, "col-md-3")} key={join.id}>
                <div className={styles.joinImage}>
                  <img src={join.image} />
                </div>
                <div className={styles.joinTitle}>
                  <h2>{join.title}</h2>
                </div>
                <div className={styles.joinDescription}>
                  <p>{join.description}</p>
                </div>
                <div className={styles.joinSeemore}>
                  <a href="">
                    <p>Interesting?</p>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
