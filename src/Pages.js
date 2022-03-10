import "./allcsscode.css";
import { Routes, Route, Link } from "react-router-dom";
import {
  AiOutlineRight,
  AiOutlineClockCircle,
  AiFillCaretRight,
} from "react-icons/ai";
import img1 from "./images/gallery/7.jpg";
import img2 from "./images/gallery/8.jpg";
import img3 from "./images/gallery/9.jpg";
import img4 from "./images/gallery/10.jpg";

export default function Pages() {
  return (
    <>
      <div className="news_main_div">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="new_col_div text-center">
                <h1>Gallery Grid</h1>
                <h4>Welcome to certified online Food products suppliersr</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="news_link_div">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-6 col-sm-12" id="first_col">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <a href="#">
                      <AiOutlineRight className="icon_new_page" />
                    </a>
                  </li>
                  <li>
                    <Link to="/gallery">Gallery</Link>
                  </li>
                  <li>
                    <a href="#">
                      <AiOutlineRight className="icon_new_page" />
                    </a>
                  </li>
                  <li>Gallery Grid</li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12" id="first_p_tag">
                <p>
                  We provide <span>100% Natural Food</span> products
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gallery_grid_div_main">
        <div className="container">
          <div className="row text-center">
            <div className="col">
              <div className="filter_img_div  text-center">
                <ul className="filter_tab">
                  <li data-filter="all">
                    <span>View All</span>
                  </li>
                  <li className="fruits" data-filter="fruit">
                    <span>Fruits & Drinks</span>
                  </li>
                  <li data-filter="vegetables">
                    <span>vegetables</span>
                  </li>
                  <li data-filter="FreshMeat">
                    <span>FreshMeat</span>
                  </li>
                  <li data-filter="Beauty">
                    <span>Beauty</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 col-lg-3 col-sm-6 col-xl-3">
              <img
                src={img1}
                width="100%"
                height="250px"
                className="fruit"
              ></img>
            </div>
            <div className="col-md-3 col-lg-3 col-sm-6 col-xl-3">
              <img
                src={img2}
                width="100%"
                height="250px"
                className="vegetables"
              ></img>
            </div>
            <div className="col-md-3 col-lg-3 col-sm-6 col-xl-3">
              <img
                src={img3}
                width="100%"
                height="250px"
                className="FreshMeat"
              ></img>
            </div>
            <div className="col-md-3 col-lg-3 col-sm-6 col-xl-3">
              <img
                src={img4}
                width="100%"
                height="250px"
                className="Beauty"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
