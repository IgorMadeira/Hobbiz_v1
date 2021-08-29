import styles from "./Content.module.css";
import FeedPost from "./UI/FeedPost";
import Carousel from "./UI/Carousel";
import SearchInput from "./UI/SearchInput";

const Content = () => {
  return (
    <div className={styles["content"]}>
      <SearchInput />
      <FeedPost />
      <FeedPost />
      <FeedPost />
      <FeedPost />
    </div>
  );
};

export default Content;
