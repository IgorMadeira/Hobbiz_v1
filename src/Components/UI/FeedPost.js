import styles from "./FeedPost.module.css";
import profilePicture from "../../Assets/profile.png";
import profilePictureII from "../../Assets/profile_02.jpg";
import { BsFillStarFill } from "react-icons/bs";

const FeedPost = (props) => {
  return (
    <>
      <div className={styles["feed-post"]}>
        <div className={styles["feed-post-username"]}>Username Placeholder</div>

        <div className={styles["feed-post-profile-picture"]}>
          <img
            className={styles["feed-profile-picture-image"]}
            src={profilePicture}
            alt="Profile picture"
            width={100}
            height={100}
          />
        </div>

        <div className={styles["feed-post-user-stars"]}>
          <BsFillStarFill />
          <BsFillStarFill />
          <BsFillStarFill />
          <BsFillStarFill />
          <BsFillStarFill />
        </div>
      </div>
    </>
  );
};

export default FeedPost;
