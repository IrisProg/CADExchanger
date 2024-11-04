import Button from "../../../../components/Button/Button";
import style from "./review.module.scss";

function Review() {
  return (
    <div className={style.review}>
      <h3>Less important title</h3>
      <div className={style.reviewButton}>
        <Button />
      </div>
    </div>
  );
}

export default Review;
