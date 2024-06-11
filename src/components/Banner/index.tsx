
import styles from './Banner.module.scss';
import Card1 from '../../assets/images/card1.png'
import Card2 from '../../assets/images/card2.png'
import Card3 from '../../assets/images/card3.png'
import Card4 from '../../assets/images/card4.png'
import Card5 from '../../assets/images/card5.png'

const Banner = () => {
  return (
    <section className={styles.carouselSection}>
      <div id="carouselExampleControls" className={`carousel slide ${styles.carousel}`} data-ride="carousel">
        <div className={`carousel-inner ${styles.carouselInner}`}>
          <div className={`carousel-item active ${styles.carouselItem}`}>
            <img className={`d-block w-100 ${styles.carouselItemImg}`} src={Card1} alt="First slide" />
          </div>
          <div className={`carousel-item ${styles.carouselItem}`}>
            <img className={`d-block w-100 ${styles.carouselItemImg}`} src={Card2} alt="Second slide" />
          </div>
          <div className={`carousel-item ${styles.carouselItem}`}>
            <img className={`d-block w-100 ${styles.carouselItemImg}`} src={Card3} alt="Third slide" />
          </div>
          <div className={`carousel-item ${styles.carouselItem}`}>
            <img className={`d-block w-100 ${styles.carouselItemImg}`} src={Card4} alt="Fourth slide" />
          </div>
          <div className={`carousel-item ${styles.carouselItem}`}>
            <img className={`d-block w-100 ${styles.carouselItemImg}`} src={Card5} alt="Fourth slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </section>
  );
}

export default Banner;
