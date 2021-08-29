import styles from "./SearchInput.module.css";
import { BiSearch } from "react-icons/bi";

const SearchInput = (props) => {
  return (
    <div className={styles["search-div"]}>
      <form action="" className={styles["search-form"]}>
        <BiSearch className={styles["search-icon"]} />
        <input type="text" className={styles["search-input"]} />
      </form>
    </div>
  );
};

export default SearchInput;
