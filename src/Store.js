import "./allcsscode.css";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiOutlineLeft, AiOutlineRight, AiFillStar } from "react-icons/ai";
import { FaHamburger, FaPizzaSlice } from "react-icons/fa";
import { RiCake2Fill } from "react-icons/ri";
import { GiCakeSlice, GiCupcake, GiGlassCelebration } from "react-icons/gi";
import { BsStarHalf } from "react-icons/bs";
import { useState, useEffect } from "react";

/*import Images start*/
import img_1 from "./images/img7.jpg";
import img_2 from "./images/img6.jpg";
import img_3 from "./images/img8.jpg";
import img_4 from "./images/img13.jpg";
import img_5 from "./images/img9.jpg";
import img_6 from "./images/img12.jpg";

/*import Images end*/
export default function Store() {
  const [data, setdata] = useState(false);
  const [data1, setdata1] = useState(false);
  const [data2, setdata2] = useState(false);
  const [data3, setdata3] = useState(false);
  const [data4, setdata4] = useState(false);
  const [data5, setdata5] = useState(false);

  /*Range Code Css start */
  const min = 1;
  const max = 100;
  const [value, setValue] = useState(0);
  const [dragStarted, setDragStarted] = useState(false);
  const [dragging, setDragging] = useState(false);
  const percentage = (value - min) / (max - min);

  useEffect(() => {
    if (dragStarted && !dragging) {
      console.log("dragging");
      setDragging(true);
    }
  }, [percentage, dragStarted]);
  /*Range Code Css start */

  return (
    <>
      <div className="store_main_div">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-12">
              <div className="left_menu_bar_div">
                <h3 className="heading_store">
                  <span>Categories</span>
                </h3>
                <div className="menu_list_left ">
                  <ul>
                    <li onClick={() => setdata(!data)}>
                      <a className={data ? "hv_border_left" : ""}>
                        <FaHamburger
                          className={data ? "icon_mar_dec" : "icon_side_menu1"}
                        />
                        Breakfast
                        <span>
                          <AiOutlineLeft className="icon_side_menu2" />
                        </span>
                      </a>
                      <div
                        className={data ? "hv_inner_menu1" : "hv_inner_menu"}
                      >
                        <ul>
                          <li>
                            <a href="#">
                              <AiOutlineRight className="inner_menu_aero" />
                              Whole Grain Waffles with millet
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <AiOutlineRight className="inner_menu_aero" />
                              Mushroom and Brussels
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <AiOutlineRight className="inner_menu_aero" />
                              Baked Brown Butter
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <AiOutlineRight className="inner_menu_aero" />
                              Triple Berry Dutch Baby
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <AiOutlineRight className="inner_menu_aero" />
                              Morning Glory Oats
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <AiOutlineRight className="inner_menu_aero" />
                              Tiny Strawberry Cream Scones
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li onClick={() => setdata1(!data1)}>
                      <a className={data1 ? "hv_border_left" : ""}>
                        <RiCake2Fill
                          className={data1 ? "icon_mar_dec" : "icon_side_menu1"}
                        />
                        Cakes
                        <span>
                          <AiOutlineLeft className="icon_side_menu2" />
                        </span>
                      </a>
                      <div
                        className={data1 ? "hv_inner_menu1" : "hv_inner_menu"}
                      >
                        <ul>
                          <li>
                            <a href="#">
                              <AiOutlineRight className="inner_menu_aero" />
                              Whole Grain Waffles with millet
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <AiOutlineRight className="inner_menu_aero" />
                              Mushroom and Brussels
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <AiOutlineRight className="inner_menu_aero" />
                              Baked Brown Butter
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <AiOutlineRight className="inner_menu_aero" />
                              Triple Berry Dutch Baby
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <AiOutlineRight className="inner_menu_aero" />
                              Morning Glory Oats
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <AiOutlineRight className="inner_menu_aero" />
                              Tiny Strawberry Cream Scones
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li onClick={() => setdata2(!data2)}>
                      <a className={data2 ? "hv_border_left" : ""}>
                        <GiCakeSlice
                          className={data2 ? "icon_mar_dec" : "icon_side_menu1"}
                        />
                        Chocolate
                        <span>
                          <AiOutlineLeft className="icon_side_menu2" />
                        </span>
                      </a>
                      <div
                        className={data2 ? "hv_inner_menu1" : "hv_inner_menu"}
                      >
                        <ul>
                          <li>
                            <a href="#">
                              <AiOutlineRight className="inner_menu_aero" />
                              Whole Grain Waffles with millet
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <AiOutlineRight className="inner_menu_aero" />
                              Mushroom and Brussels
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <AiOutlineRight className="inner_menu_aero" />
                              Baked Brown Butter
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <AiOutlineRight className="inner_menu_aero" />
                              Triple Berry Dutch Baby
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <AiOutlineRight className="inner_menu_aero" />
                              Morning Glory Oats
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <AiOutlineRight className="inner_menu_aero" />
                              Tiny Strawberry Cream Scones
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li onClick={() => setdata3(!data3)}>
                      <a className={data3 ? "hv_border_left" : ""}>
                        <GiCupcake
                          className={data3 ? "icon_mar_dec" : "icon_side_menu1"}
                        />
                        Cookies
                        <span>
                          <AiOutlineLeft className="icon_side_menu2" />
                        </span>
                      </a>
                      <div
                        className={data3 ? "hv_inner_menu1" : "hv_inner_menu"}
                      >
                        <ul>
                          <li>
                            <a href="#">
                              <AiOutlineRight className="inner_menu_aero" />
                              Whole Grain Waffles with millet
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <AiOutlineRight className="inner_menu_aero" />
                              Mushroom and Brussels
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <AiOutlineRight className="inner_menu_aero" />
                              Baked Brown Butter
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <AiOutlineRight className="inner_menu_aero" />
                              Triple Berry Dutch Baby
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <AiOutlineRight className="inner_menu_aero" />
                              Morning Glory Oats
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <AiOutlineRight className="inner_menu_aero" />
                              Tiny Strawberry Cream Scones
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li onClick={() => setdata4(!data4)}>
                      <a className={data4 ? "hv_border_left" : ""}>
                        <FaPizzaSlice
                          className={data4 ? "icon_mar_dec" : "icon_side_menu1"}
                        />
                        Dinner
                        <span>
                          <AiOutlineLeft className="icon_side_menu2" />
                        </span>
                      </a>
                      <div
                        className={data4 ? "hv_inner_menu1" : "hv_inner_menu"}
                      >
                        <ul>
                          <li>
                            <a href="#">
                              <AiOutlineRight className="inner_menu_aero" />
                              Whole Grain Waffles with millet
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <AiOutlineRight className="inner_menu_aero" />
                              Mushroom and Brussels
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <AiOutlineRight className="inner_menu_aero" />
                              Baked Brown Butter
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <AiOutlineRight className="inner_menu_aero" />
                              Triple Berry Dutch Baby
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <AiOutlineRight className="inner_menu_aero" />
                              Morning Glory Oats
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <AiOutlineRight className="inner_menu_aero" />
                              Tiny Strawberry Cream Scones
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li onClick={() => setdata5(!data5)}>
                      <a className={data5 ? "hv_border_left" : ""}>
                        <GiGlassCelebration
                          className={data5 ? "icon_mar_dec" : "icon_side_menu1"}
                        />
                        Drinks
                        <span>
                          <AiOutlineLeft className="icon_side_menu2" />
                        </span>
                      </a>
                      <div
                        className={data5 ? "hv_inner_menu1" : "hv_inner_menu"}
                      >
                        <ul>
                          <li>
                            <a href="#">
                              <AiOutlineRight className="inner_menu_aero" />
                              Whole Grain Waffles with millet
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <AiOutlineRight className="inner_menu_aero" />
                              Mushroom and Brussels
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <AiOutlineRight className="inner_menu_aero" />
                              Baked Brown Butter
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <AiOutlineRight className="inner_menu_aero" />
                              Triple Berry Dutch Baby
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <AiOutlineRight className="inner_menu_aero" />
                              Morning Glory Oats
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <AiOutlineRight className="inner_menu_aero" />
                              Tiny Strawberry Cream Scones
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="left_menu_bar_div">
                <h3 className="heading_store mt-4">
                  <span>Color filter</span>
                </h3>
                <ul className="color_bar">
                  <li>
                    <a href="#" className="black_bg">
                      Black
                    </a>
                  </li>
                  <li>
                    <a href="#" className="light_bg">
                      Gray
                    </a>
                  </li>
                  <li className="active">
                    <a href="#" className="orange_bg">
                      Orange
                    </a>
                  </li>
                  <li>
                    <a href="#" className="blue_bg">
                      Blue
                    </a>
                  </li>
                  <li>
                    <a href="#" className="purple_bg">
                      Blue
                    </a>
                  </li>
                  <li>
                    <a href="#" className="yellow_bg">
                      Blue
                    </a>
                  </li>
                  <li>
                    <a href="#" className="red_bg">
                      Blue
                    </a>
                  </li>
                  <li>
                    <a href="#" className="light_blue_bg">
                      Blue
                    </a>
                  </li>
                  <li>
                    <a href="#" className="gray_bg">
                      Blue
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dark_yellow_bg">
                      Blue
                    </a>
                  </li>
                </ul>
              </div>
              <div className="left_menu_bar_div">
                <h3 className="heading_store mt-4">
                  <span>Price filter</span>
                </h3>
                <div className="input_tag_range">
                  {/* <input
                    type="range"
                    min="0.00"
                    max="100"
                    height="25px"
                    value={rangedata}
                    onChange={() =>
                      setrange(rangedata <= 99 ? rangedata + 1 : rangedata)
                    }
                    variant="success"
                  ></input> */}
                  <input
                    value={value}
                    min={min}
                    max={max}
                    step="1"
                    onChange={({ target }) => setValue(target.value)}
                    onMouseDown={(e) => {
                      setDragStarted(true);
                    }}
                    onMouseUp={(e) => {
                      setDragStarted(false);
                      setDragging(false);
                    }}
                    type="range"
                  ></input>
                </div>
                <div className="range_div">
                  <ul>
                    <li>0</li>
                    <li>{value}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-md-12 ">
              <div className="row gy-5 pt-5 text-center">
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 card_1">
                  <div className="card">
                    <span className="offer_time_div">New</span>
                    <img src={img_1} />
                    <div className="card-body">
                      <h5 className="card-title">Special title treatment</h5>
                      <div className="card-title">
                        <AiFillStar className="star_icon" />
                        <AiFillStar className="star_icon" />
                        <AiFillStar className="star_icon" />
                        <AiFillStar className="star_icon" />
                        <BsStarHalf className="star_icon" />
                        1Review(s)
                      </div>
                      <h4 className="card-text">$200.00</h4>
                      <a href="#" className="btn btn-success">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 card_1">
                  <div className="card">
                    <span className="offer_time_div1">-10%</span>
                    <img src={img_2} />
                    <div className="card-body">
                      <h5 className="card-title">Special title treatment</h5>
                      <div className="card-title">
                        <AiFillStar className="star_icon" />
                        <AiFillStar className="star_icon" />
                        <AiFillStar className="star_icon" />
                        <AiFillStar className="star_icon" />
                        <BsStarHalf className="star_icon" />
                        1Review(s)
                      </div>
                      <h4 className="card-text">$200.00</h4>
                      <a href="#" className="btn btn-success">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 card_1">
                  <div className="card">
                    <span className="offer_time_div2">New</span>
                    <img src={img_3} />
                    <div className="card-body">
                      <h5 className="card-title">Special title treatment</h5>
                      <div className="card-title">
                        <AiFillStar className="star_icon" />
                        <AiFillStar className="star_icon" />
                        <AiFillStar className="star_icon" />
                        <AiFillStar className="star_icon" />
                        <BsStarHalf className="star_icon" />
                        1Review(s)
                      </div>
                      <h4 className="card-text">$200.00</h4>
                      <a href="#" className="btn btn-success">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 card_1">
                  <div className="card">
                    <span className="offer_time_div">New</span>
                    <img src={img_4} />
                    <div className="card-body">
                      <h5 className="card-title">Special title treatment</h5>
                      <div className="card-title">
                        <AiFillStar className="star_icon" />
                        <AiFillStar className="star_icon" />
                        <AiFillStar className="star_icon" />
                        <AiFillStar className="star_icon" />
                        <BsStarHalf className="star_icon" />
                        1Review(s)
                      </div>
                      <h4 className="card-text">$200.00</h4>
                      <a href="#" className="btn btn-success">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 card_1">
                  <div className="card">
                    <span className="offer_time_div">New</span>
                    <img src={img_5} />
                    <div className="card-body">
                      <h5 className="card-title">Special title treatment</h5>
                      <div className="card-title">
                        <AiFillStar className="star_icon" />
                        <AiFillStar className="star_icon" />
                        <AiFillStar className="star_icon" />
                        <AiFillStar className="star_icon" />
                        <BsStarHalf className="star_icon" />
                        1Review(s)
                      </div>
                      <h4 className="card-text">$200.00</h4>
                      <a href="#" className="btn btn-success">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 card_1">
                  <div className="card">
                    <span className="offer_time_div">New</span>
                    <img src={img_6} />
                    <div className="card-body">
                      <h5 className="card-title">Special title treatment</h5>
                      <div className="card-title">
                        <AiFillStar className="star_icon" />
                        <AiFillStar className="star_icon" />
                        <AiFillStar className="star_icon" />
                        <AiFillStar className="star_icon" />
                        <BsStarHalf className="star_icon" />
                        1Review(s)
                      </div>
                      <h4 className="card-text">$200.00</h4>
                      <a href="#" className="btn btn-success">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
