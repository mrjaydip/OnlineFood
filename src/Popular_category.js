import "slick-carousel/slick/slick.css";
import "./allcsscode.css";
import Slider from "react-slick";

import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
import img4 from "./images/4.jpg";
import img5 from "./images/5.jpg";
import img6 from "./images/6.jpg";

export default function Popular_category() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    dots: false,
    autoplay: true,
    arrows: false,
    centerPadding: "70px",
    slidesToShow: 3,
    speed: 1000,
  };
  return (
    <>
      <div className="container popular_category_main_div">
        <div className="row">
          <div className="col main_title_div">
            <span>
              <em></em>
            </span>
            <h2>Popular Categories</h2>
            <p>Cum doctus civibus efficiantur in imperdiet deterruisset</p>
          </div>
          <Slider {...settings}>
            <div className="div1">
              <a href="#">
                <span>10</span>
                <img src={img1} width="100%" height="250px" className="img1" />
                <div className="info_item">
                  <h3>Japanese</h3>
                  <small>Avg price $50</small>
                </div>
              </a>
            </div>
            <div className="div1">
              <a href="#">
                <span>20</span>
                <img src={img2} width="100%" height="250px" />
                <div className="info_item">
                  <h3>Burghers</h3>
                  <small>Avg price $55</small>
                </div>
              </a>
            </div>
            <div className="div1">
              <a href="#">
                <span>30</span>
                <img src={img3} width="100%" height="250px" />
                <div className="info_item">
                  <h3>Vegetarian</h3>
                  <small>Avg price $40</small>
                </div>
              </a>
            </div>
            <div className="div1">
              <a href="#">
                <span>40</span>
                <img src={img4} width="100%" height="250px" />
                <div className="info_item">
                  <h3>Bakery</h3>
                  <small>Avg price $60</small>
                </div>
              </a>
            </div>
            <div className="div1">
              <a href="#">
                <span>50</span>
                <img src={img5} width="100%" height="250px" />
                <div className="info_item">
                  <h3>Chinese</h3>
                  <small>Avg price $40</small>
                </div>
              </a>
            </div>
            <div className="div1">
              <a href="#">
                <span>60</span>
                <img src={img6} width="100%" height="250px" />
                <div className="info_item">
                  <h3>Mexican</h3>
                  <small>Avg price $35</small>
                </div>
              </a>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}
