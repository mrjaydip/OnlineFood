import "./allcsscode.css";
import { useState } from "react";
import { BsStarFill, BsReply } from "react-icons/bs";
import { FaImages, FaHeart } from "react-icons/fa";
import { HiChatAlt2, HiOutlineMinusCircle } from "react-icons/hi";
import { GrClose } from "react-icons/gr";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import menu_img_1 from "./images/menu-thumb-1.jpg";
import menu_img_2 from "./images/menu-thumb-2.jpg";
import menu_img_3 from "./images/menu-thumb-3.jpg";
import menu_img_4 from "./images/menu-thumb-4.jpg";
import menu_img_5 from "./images/menu-thumb-5.jpg";
import menu_img_6 from "./images/menu-thumb-6.jpg";
import menu_img_7 from "./images/menu-thumb-7.jpg";
import menu_img_8 from "./images/menu-thumb-8.jpg";
import menu_img_9 from "./images/menu-thumb-9.jpg";
import menu_img_10 from "./images/menu-thumb-10.jpg";
import images_user from "./images/avatar4.jpg";
import images_user1 from "./images/avatar1.jpg";
import img1 from "./images/burger/1.jpg";
import img2 from "./images/burger/2.jpg";
import img3 from "./images/burger/3.jpg";

export default function About() {
  const [data, setupdatedata] = useState(false);
  const [data1, setupdatedata1] = useState(false);

  return (
    <>
      <div className="About_page_main_div">
        <div className="about_page_background">
          <div className="wrapper_about">
            <div className="main_info">
              <div className="container">
                <div className="row">
                  <div className="col-lg-5 col-md-12 ">
                    <div className="head">
                      <div className="score_About">
                        <span>
                          Superb<em>350 Reviews</em>
                        </span>
                        <strong>
                          <BsStarFill style={{ marginRight: "5px" }} />
                          8.9
                        </strong>
                      </div>
                    </div>
                    <h1>Pizzeria da Alfredo</h1>
                    ITALIAN - 27 Old Gloucester St, 4530 -
                    <a
                      href="#"
                      target="_blank"
                      style={{ color: "white", marginLeft: "5px" }}
                    >
                      Get directions
                    </a>
                  </div>
                  <div className="col-lg-7 col-md-12 " id="second_id">
                    <div className="button_clear_about">
                      <span className="gallery_div">
                        <a href="#">
                          <FaImages
                            style={{ verticalAlign: "sub", marginRight: "5px" }}
                          />
                          View photos
                        </a>
                        <a href="#">
                          <FaHeart
                            style={{
                              verticalAlign: "middle",
                              marginRight: "5px",
                            }}
                          />
                          Wishlist
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="secondery_nav">
        <div className="container">
          <ul className="secondery_ul">
            <li>
              <a href="#">Starters</a>
            </li>
            <li>
              <a href="#">Main Courses</a>
            </li>
            <li>
              <a href="#">Desserts</a>
            </li>
            <li>
              <a href="#">Drinks</a>
            </li>
            <li>
              <a href="#">
                <HiChatAlt2 style={{ marginRight: "8px" }} />
                Reviews
              </a>
            </li>
          </ul>
        </div>
        <span></span>
      </div>
      <div className="bg_gray">
        <div className="container margin_title">
          <div className="row">
            <div className="col-lg-8 col-md-12 list_menu">
              <div className="section1">
                <h4>Starters</h4>
                <div className="row">
                  <div className="col-lg-6">
                    <a href="#" className="menu_item">
                      <figure>
                        <img src={menu_img_1} className="lazy_loaded" />
                      </figure>
                      <h3>1. Mexican Enchiladas</h3>
                      <p>Fuisset mentitum deleniti sit ea.</p>
                      <strong>$9.40</strong>
                    </a>
                  </div>
                  <div className="col-lg-6">
                    <a href="#" className="menu_item">
                      <figure>
                        <img src={menu_img_2} className="lazy_loaded" />
                      </figure>
                      <h3>2. Fajitas</h3>
                      <p>Fuisset mentitum deleniti sit ea.</p>
                      <strong>$9.40</strong>
                    </a>
                  </div>
                  <div className="col-lg-6">
                    <a href="#" className="menu_item">
                      <figure>
                        <img src={menu_img_3} className="lazy_loaded" />
                      </figure>
                      <h3>3. Royal Fajitas</h3>
                      <p>Fuisset mentitum deleniti sit ea.</p>
                      <strong>$9.40</strong>
                    </a>
                  </div>
                  <div className="col-lg-6">
                    <a href="#" className="menu_item">
                      <figure>
                        <img src={menu_img_4} className="lazy_loaded" />
                      </figure>
                      <h3>4. Chicken Enchilada Wrap</h3>
                      <p>Fuisset mentitum deleniti sit ea.</p>
                      <strong>$9.40</strong>
                    </a>
                  </div>
                </div>
              </div>

              <div className="section1">
                <h4>Main Courses</h4>
                <div className="row">
                  <div className="col-lg-6">
                    <a href="#" className="menu_item">
                      <figure>
                        <img src={img1} className="lazy_loaded" />
                      </figure>
                      <h3>5. Cheese Quesadilla</h3>
                      <p>Fuisset mentitum deleniti sit ea.</p>
                      <strong>$9.40</strong>
                    </a>
                  </div>
                  <div className="col-lg-6">
                    <a href="#" className="menu_item">
                      <figure>
                        <img src={img2} className="lazy_loaded" />
                      </figure>
                      <h3>6. Chorizo & Cheese</h3>
                      <p>Fuisset mentitum deleniti sit ea.</p>
                      <strong>$9.40</strong>
                    </a>
                  </div>
                  <div className="col-lg-6">
                    <a href="#" className="menu_item">
                      <figure>
                        <img src={img3} className="lazy_loaded" />
                      </figure>
                      <h3>7. Beef Taco</h3>
                      <p>Fuisset mentitum deleniti sit ea.</p>
                      <strong>$9.40</strong>
                    </a>
                  </div>
                  <div className="col-lg-6">
                    <a href="#" className="menu_item">
                      <figure>
                        <img src={menu_img_8} className="lazy_loaded" />
                      </figure>
                      <h3>8. Minced Beef Double Layer</h3>
                      <p>Fuisset mentitum deleniti sit ea.</p>
                      <strong>$9.40</strong>
                    </a>
                  </div>
                  <div className="col-lg-6">
                    <a href="#" className="menu_item">
                      <figure>
                        <img src={menu_img_9} className="lazy_loaded" />
                      </figure>
                      <h3>9. Piri Piri Chicken</h3>
                      <p>Fuisset mentitum deleniti sit ea.</p>
                      <strong>$9.40</strong>
                    </a>
                  </div>
                  <div className="col-lg-6">
                    <a href="#" className="menu_item">
                      <figure>
                        <img src={menu_img_10} className="lazy_loaded" />
                      </figure>
                      <h3>10. Burrito Al Pastor</h3>
                      <p>Fuisset mentitum deleniti sit ea.</p>
                      <strong>$9.40</strong>
                    </a>
                  </div>
                </div>
              </div>

              <div className="section1">
                <h4>Desserts</h4>
                <div className="row">
                  <div className="col-lg-6">
                    <a href="#" className="menu_item">
                      <figure>
                        <img src={menu_img_5} className="lazy_loaded" />
                      </figure>
                      <h3>5. Cheese Quesadilla</h3>
                      <p>Fuisset mentitum deleniti sit ea.</p>
                      <strong>$9.40</strong>
                    </a>
                  </div>
                  <div className="col-lg-6">
                    <a href="#" className="menu_item">
                      <figure>
                        <img src={menu_img_6} className="lazy_loaded" />
                      </figure>
                      <h3>6. Chorizo & Cheese</h3>
                      <p>Fuisset mentitum deleniti sit ea.</p>
                      <strong>$9.40</strong>
                    </a>
                  </div>
                  <div className="col-lg-6">
                    <a href="#" className="menu_item">
                      <figure>
                        <img src={menu_img_7} className="lazy_loaded" />
                      </figure>
                      <h3>7. Beef Taco</h3>
                      <p>Fuisset mentitum deleniti sit ea.</p>
                      <strong>$9.40</strong>
                    </a>
                  </div>
                  <div className="col-lg-6">
                    <a href="#" className="menu_item">
                      <figure>
                        <img src={menu_img_8} className="lazy_loaded" />
                      </figure>
                      <h3>8. Minced Beef Double Layer</h3>
                      <p>Fuisset mentitum deleniti sit ea.</p>
                      <strong>$9.40</strong>
                    </a>
                  </div>
                  <div className="col-lg-6">
                    <a href="#" className="menu_item">
                      <figure>
                        <img src={menu_img_9} className="lazy_loaded" />
                      </figure>
                      <h3>9. Piri Piri Chicken</h3>
                      <p>Fuisset mentitum deleniti sit ea.</p>
                      <strong>$9.40</strong>
                    </a>
                  </div>
                  <div className="col-lg-6">
                    <a href="#" className="menu_item">
                      <figure>
                        <img src={menu_img_10} className="lazy_loaded" />
                      </figure>
                      <h3>10. Burrito Al Pastor</h3>
                      <p>Fuisset mentitum deleniti sit ea.</p>
                      <strong>$9.40</strong>
                    </a>
                  </div>
                </div>
              </div>

              <div className="section1">
                <h4>Drinks</h4>
                <div className="row">
                  <div className="col-lg-6">
                    <a href="#" className="menu_item">
                      <figure>
                        <img src={menu_img_5} className="lazy_loaded" />
                      </figure>
                      <h3>5. Cheese Quesadilla</h3>
                      <p>Fuisset mentitum deleniti sit ea.</p>
                      <strong>$9.40</strong>
                    </a>
                  </div>
                  <div className="col-lg-6">
                    <a href="#" className="menu_item">
                      <figure>
                        <img src={menu_img_6} className="lazy_loaded" />
                      </figure>
                      <h3>6. Chorizo & Cheese</h3>
                      <p>Fuisset mentitum deleniti sit ea.</p>
                      <strong>$9.40</strong>
                    </a>
                  </div>
                  <div className="col-lg-6">
                    <a href="#" className="menu_item">
                      <figure>
                        <img src={menu_img_7} className="lazy_loaded" />
                      </figure>
                      <h3>7. Beef Taco</h3>
                      <p>Fuisset mentitum deleniti sit ea.</p>
                      <strong>$9.40</strong>
                    </a>
                  </div>
                  <div className="col-lg-6">
                    <a href="#" className="menu_item">
                      <figure>
                        <img src={menu_img_8} className="lazy_loaded" />
                      </figure>
                      <h3>8. Minced Beef Double Layer</h3>
                      <p>Fuisset mentitum deleniti sit ea.</p>
                      <strong>$9.40</strong>
                    </a>
                  </div>
                  <div className="col-lg-6">
                    <a href="#" className="menu_item">
                      <figure>
                        <img src={menu_img_9} className="lazy_loaded" />
                      </figure>
                      <h3>9. Piri Piri Chicken</h3>
                      <p>Fuisset mentitum deleniti sit ea.</p>
                      <strong>$9.40</strong>
                    </a>
                  </div>
                  <div className="col-lg-6">
                    <a href="#" className="menu_item">
                      <figure>
                        <img src={menu_img_10} className="lazy_loaded" />
                      </figure>
                      <h3>10. Burrito Al Pastor</h3>
                      <p>Fuisset mentitum deleniti sit ea.</p>
                      <strong>$9.40</strong>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 sidebar_order">
              <div className="right_sidebar_order">
                <div className="box_order">
                  <div className="head_order">
                    <h3>Order Summary</h3>
                    <a href="#" className="close_panel_mobile">
                      <GrClose />
                    </a>
                  </div>
                  <div className="main_order">
                    <ul className="clear_fix">
                      <li>
                        <a hef="#">
                          <HiOutlineMinusCircle className="order_icon" />
                          1x Enchiladas
                        </a>
                        <span>$11</span>
                      </li>
                      <li>
                        <a hef="#">
                          <HiOutlineMinusCircle className="order_icon" />
                          2x Burrito
                        </a>
                        <span>$14</span>
                      </li>
                      <li>
                        <a hef="#">
                          <HiOutlineMinusCircle className="order_icon" />
                          1x Chicken
                        </a>
                        <span>$18</span>
                      </li>
                      <li>
                        <a hef="#">
                          <HiOutlineMinusCircle className="order_icon" />
                          2x Corona Beer
                        </a>
                        <span>$9</span>
                      </li>
                      <li>
                        <a hef="#">
                          <HiOutlineMinusCircle className="order_icon" />
                          2x Cheese Cake
                        </a>
                        <span>$11</span>
                      </li>
                    </ul>
                    <ul className="clear_fix">
                      <li>
                        <a
                          href="#"
                          style={{
                            marginLeft: "5px",
                            textDecoration: "none",
                            fontWeight: "500",
                          }}
                        >
                          Subtotal
                        </a>
                        <span>$56</span>
                      </li>
                      <li>
                        <a
                          href="#"
                          style={{
                            marginLeft: "5px",
                            textDecoration: "none",
                            fontWeight: "500",
                          }}
                        >
                          Delivery fee
                        </a>
                        <span>$10</span>
                      </li>
                      <li className="total">
                        <a
                          href="#"
                          style={{
                            marginLeft: "5px",
                            textDecoration: "none",
                            fontWeight: "bold",
                          }}
                        >
                          Total
                        </a>
                        <span
                          style={{
                            fontSize: "20px",
                            fontWeight: "700",
                          }}
                        >
                          $66
                        </span>
                      </li>
                    </ul>
                    <div className="row option_order">
                      <div className="col-6">
                        <label className="container_radio">
                          Delivery
                          <input
                            type="radio"
                            value="option1"
                            name="opt_order"
                            checked
                          />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                      <div className="col-6">
                        <label className="container_radio">
                          Delivery
                          <input
                            type="radio"
                            value="option1"
                            name="opt_order"
                          />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                    </div>
                    <div
                      className="day_time_order"
                      onClick={() => setupdatedata(!data)}
                    >
                      {/* <a href="#">Day</a> */}
                      <span>Day</span>
                      <div className={data ? "order_show" : "dropdown-menu1"}>
                        <div className="dropdown-menu-content">
                          <h4>Which day delivered?</h4>
                          <div className="choose_day">
                            <ul>
                              <li>
                                <input
                                  type="radio"
                                  name="day"
                                  value="Today"
                                  id="day_1"
                                />
                                <label for="day_1">
                                  Today<em>-40%</em>
                                </label>
                              </li>
                              <li>
                                <input
                                  type="radio"
                                  name="day"
                                  value="Today"
                                  id="day_1"
                                />
                                <label for="day_1">
                                  Tomorrow<em>-40%</em>
                                </label>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="day_time_order"
                      onClick={() => setupdatedata1(!data1)}
                    >
                      <span>Time</span>
                      <div className={data1 ? "order_show" : "dropdown-menu1"}>
                        <div className="dropdown-menu-content">
                          <h4>Lunch</h4>
                          <div className="choose_day1">
                            <ul>
                              <li>
                                <input
                                  type="radio"
                                  name="day"
                                  value="Today"
                                  id="day_1"
                                />
                                <label for="day_1">
                                  Today<em>-40%</em>
                                </label>
                              </li>
                              <li>
                                <input
                                  type="radio"
                                  name="day"
                                  value="Today"
                                  id="day_1"
                                />
                                <label for="day_1">
                                  Today<em>-40%</em>
                                </label>
                              </li>
                              <li>
                                <input
                                  type="radio"
                                  name="day"
                                  value="Today"
                                  id="day_1"
                                />
                                <label for="day_1">
                                  Today<em>-40%</em>
                                </label>
                              </li>
                              <li>
                                <input
                                  type="radio"
                                  name="day"
                                  value="Today"
                                  id="day_1"
                                />
                                <label for="day_1">
                                  Today<em>-40%</em>
                                </label>
                              </li>
                            </ul>
                          </div>
                          <h4>Dinner</h4>
                          <div className="choose_day1">
                            <ul>
                              <li>
                                <input
                                  type="radio"
                                  name="day"
                                  value="Today"
                                  id="day_1"
                                />
                                <label for="day_1">
                                  20.00<em>-40%</em>
                                </label>
                              </li>
                              <li>
                                <input
                                  type="radio"
                                  name="day"
                                  value="Today"
                                  id="day_1"
                                />
                                <label for="day_1">
                                  20.30<em>-40%</em>
                                </label>
                              </li>
                              <li>
                                <input
                                  type="radio"
                                  name="day"
                                  value="Today"
                                  id="day_1"
                                />
                                <label for="day_1">
                                  21.00<em>-40%</em>
                                </label>
                              </li>
                              <li>
                                <input
                                  type="radio"
                                  name="day"
                                  value="Today"
                                  id="day_1"
                                />
                                <label for="day_1">
                                  21.30<em>-40%</em>
                                </label>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="btn1_order">
                      <a href="#" className="btn_gradient">
                        Order Now
                      </a>
                      <div className="btn_below_text">
                        <small>No money charged on this steps</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container margin_title">
        <div className="row">
          <div className="col-lg-8 list_comment">
            <div className="section_5">
              <h4>Reviews</h4>
              <div
                className="row d-flex align-items-center"
                style={{ marginBottom: "30px" }}
              >
                <div className="col-lg-3 col-md-3">
                  <div className="review_summey">
                    <strong>8.5</strong>
                    <em>Superb</em>
                    <small>Based on 4 reviews</small>
                  </div>
                </div>
                <div className="col-lg-9 col-md-9">
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <h6>Food Quality</h6>
                      <div className="row">
                        <div className="col-xl-10 col-lg-9 col-9">
                          <ProgressBar
                            variant="success"
                            now={90}
                            className="progress"
                          />
                        </div>
                        <div className="col-xl-2 col-lg-3 col-3">
                          <strong
                            style={{
                              position: "relative",
                              top: "-8px",
                              fontWeight: "500",
                            }}
                          >
                            9.0
                          </strong>
                        </div>
                      </div>
                      <h6>Service</h6>
                      <div className="row">
                        <div className="col-xl-10 col-lg-9 col-9">
                          <ProgressBar
                            variant="success"
                            now={95}
                            className="progress"
                          />
                        </div>
                        <div className="col-xl-2 col-lg-3 col-3">
                          <strong
                            style={{
                              position: "relative",
                              top: "-8px",
                              fontWeight: "500",
                            }}
                          >
                            9.5
                          </strong>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <h6>Punctuality</h6>
                      <div className="row">
                        <div className="col-xl-10 col-lg-9 col-9">
                          <ProgressBar
                            variant="success"
                            now={60}
                            className="progress"
                          />
                        </div>
                        <div className="col-xl-2 col-lg-3 col-3">
                          <strong
                            style={{
                              position: "relative",
                              top: "-8px",
                              fontWeight: "500",
                            }}
                          >
                            6.0
                          </strong>
                        </div>
                      </div>
                      <h6>Price</h6>
                      <div className="row">
                        <div className="col-xl-10 col-lg-9 col-9">
                          <ProgressBar
                            variant="success"
                            now={60}
                            className="progress"
                          />
                        </div>
                        <div className="col-xl-2 col-lg-3 col-3">
                          <strong
                            style={{
                              position: "relative",
                              top: "-8px",
                              fontWeight: "500",
                            }}
                          >
                            6.0
                          </strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="reviews">
                <div className="reviews_card">
                  <div className="row">
                    <div className="col-lg-2 user_info">
                      <div className="user_images">
                        <img src={images_user}></img>
                      </div>
                      <h5>Jaydip</h5>
                    </div>
                    <div className="col-lg-10">
                      <div className="clear_comment">
                        <span>
                          8.5<small>/10</small>
                          <strong>Rating average</strong>
                        </span>
                        <em>Published 54 minutes ago</em>
                      </div>
                      <h4>"Great Location!!"</h4>
                      <p>
                        Eos tollit ancillae ea, lorem consulatu qui ne, eu eros
                        eirmod scaevola sea. Et nec tantas accusamus salutatus,
                        sit commodo veritus te, erat legere fabulas has ut.
                        Rebum laudem cum ea, ius essent fuisset ut. Viderer
                        petentium cu his. Tollit molestie suscipiantur his et.
                      </p>
                      <ul>
                        <li>
                          <a href="#">
                            <span>
                              <AiOutlineLike className="commnet_icon" />
                              Useful
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span>
                              <AiOutlineDislike className="commnet_icon" />
                              Not useful
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span>
                              <BsReply className="commnet_icon" />
                              Replay
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="reviews">
                <div className="reviews_card">
                  <div className="row">
                    <div className="col-lg-2 user_info">
                      <div className="user_images">
                        <img src={images_user1}></img>
                      </div>
                      <h5>Jaydip</h5>
                    </div>
                    <div className="col-lg-10">
                      <div className="clear_comment">
                        <span>
                          9.0<small>/10</small>
                          <strong>Rating average</strong>
                        </span>
                        <em>Published 54 minutes ago</em>
                      </div>
                      <h4>"Really great dinner!!"</h4>
                      <p>
                        Eos tollit ancillae ea, lorem consulatu qui ne, eu eros
                        eirmod scaevola sea. Et nec tantas accusamus salutatus,
                        sit commodo veritus te, erat legere fabulas has ut.
                        Rebum laudem cum ea, ius essent fuisset ut. Viderer
                        petentium cu his. Tollit molestie suscipiantur his et.
                      </p>
                      <ul>
                        <li>
                          <a href="#">
                            <span>
                              <AiOutlineLike className="commnet_icon" />
                              Useful
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span>
                              <AiOutlineDislike className="commnet_icon" />
                              Not useful
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span>
                              <BsReply className="commnet_icon" />
                              Replay
                            </span>
                          </a>
                        </li>
                      </ul>
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
