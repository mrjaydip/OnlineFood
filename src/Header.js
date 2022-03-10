import "./Navbar.css";
import { Container, Row, Col, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
/*Import Imges Start */
import logo from "./images/logo.png";
/*Import Imges End*/

/*Icon Import start*/
import {
  FaRegEnvelope,
  FaUserAlt,
  FaHeart,
  FaTruck,
  FaRegUser,
  FaAngleDown,
  FaShoppingCart,
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaPinterestP,
} from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import Footer from "./Footer";
/*Icon Import end*/

export default function Header() {
  const [showmenubar, setShowmenubar] = useState(false);
  return (
    <>
      <div className="header_main_div">
        <div className="container">
          <div className="row">
            <div className=" col-lg-6" id="abc1">
              <div className="left_div">
                <ul>
                  <li>
                    <Link to="/contact">
                      Order On Phone: <span>+321 453 68 739</span>
                    </Link>
                  </li>
                  <li>
                    <FaRegEnvelope className="icon1" />
                    <a href="#">organicstore@gmail.com</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 " id="abc2">
              <div className="right_div">
                <ul>
                  <li>
                    <FaUserAlt className="icon1" />
                    <a href="#">Account</a>
                  </li>
                  <li>
                    <FaHeart className="icon1" />
                    <a href="#">Whishlist </a>
                  </li>
                  <li>
                    <FaTruck className="icon1" />
                    <a href="#">Whishlist </a>
                  </li>
                </ul>
                <div className="third_div">
                  <a href="#" id="flag">
                    English
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom_header_main_div">
        <div className="container">
          <div className="row">
            <div className="col-6" id="first_col">
              <div className="logo_div">
                <img src={logo} />
              </div>
            </div>
            <div className="col-3" id="sec_col">
              <div className="login_option">
                <FaRegUser className="icon_user" />
                <div className="login_info">
                  <div>
                    <span>Welcome!</span>
                  </div>
                  <div className="user_div">
                    <div className="login_btn">
                      Sign In
                      <FaAngleDown className="dropdown_aro" />
                    </div>
                    <div className="dropdown_menu">
                      <ul className="drop_ul">
                        <li>
                          <a href="">Sign In</a>
                        </li>
                        <li>
                          <a href="">Register Here</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3" id="third_col">
              <div className="login_option">
                <div className="right_sec_div">
                  <FaShoppingCart className="icon_user1 login_btn1" />
                </div>
                <div className="login_info">
                  <div>
                    <span>My Cart</span>
                  </div>
                  <div className="user_div">
                    <div className="login_btn1">84.00$</div>
                    <div className="dropdown_menu">
                      <ul className="drop_ul">
                        <li>
                          <a href="">Sign In</a>
                        </li>
                        <li>
                          <a href="">Register Here</a>
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

      <div className="main_header_nav_div">
        <div className="container">
          <Row>
            <Col md="9" className="menu_ul_col_1">
              <AiOutlineMenu
                className="humburger"
                onClick={() => setShowmenubar(!showmenubar)}
              />

              <ul className={showmenubar ? "mobile_menu_show" : "Nav_ul"}>
                <li className="active_li">
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/store">Store</Link>
                </li>
                <li>
                  <Link to="/news">News</Link>
                </li>
                <li>
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                  <Link to="/pages">Pages</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </Col>
            <Col xs md="3" className="col_no_2" id="seconde_Col">
              <div className="right_menu">
                <ul className="icon_ul">
                  <li>
                    <a href="#">
                      <FaFacebookF className="social_icon" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaTwitter className="social_icon" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaGooglePlusG
                        className="social_icon"
                        style={{ fontSize: "20px", verticalAlign: "sub" }}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaPinterestP className="social_icon" />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
}
