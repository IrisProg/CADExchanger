import Button from "../../../../components/Button/Button";
import style from "./news.module.scss";

function News() {
  return (
    <div className={style.news}>
      <h2>Also very important title</h2>

      <div className={style.wrapper}>
        <div className={style.newsBox}>
          <div className={style.newsBoxItem}>
            <h4>Title</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              mattis, leo et condimentum
            </p>
          </div>

          <div className={style.newsBoxItem}>
            <h4>Title</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              mattis, leo et condimentum
            </p>
          </div>
        </div>

        <div className={style.newsBox}>
          <div className={style.newsBoxItem}>
            <h4>Title</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              mattis, leo et condimentum
            </p>
          </div>

          <div className={style.newsBoxItem}>
            <h4>Title</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              mattis, leo et condimentum
            </p>
          </div>
        </div>

        <div className={style.newsBox}>
          <div className={style.newsBoxItem}>
            <h4>Title</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              mattis, leo et condimentum
            </p>
          </div>

          <div className={style.newsBoxItem}>
            <h4>Title</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              mattis, leo et condimentum
            </p>
          </div>
        </div>
      </div>

      <div className={style.newsButton}>
        <Button />
      </div>
    </div>
  );
}

export default News;
