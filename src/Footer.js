import "./Navbar.css";
import { FcHome, FcTouchscreenSmartphone } from "react-icons/fc";
import { GrMail, GrLanguage } from "react-icons/gr";
import { HiOutlineChevronRight } from "react-icons/hi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import twitter_icon from "./images/twitter_icon.svg";
import facebook_icon from "./images/facebook_icon.svg";
import insta_icon from "./images/instagram_icon.svg";
import youtube_icon from "./images/youtube_icon.svg";
import cards from "./images/cards_all.svg";
export default function Footer() {
  return (
    <>
      <div className="footer_main_div">
        <div className="wave gray footer_div"></div>
        <div className="container fotter_con">
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <h3>Quick Links</h3>
              <div className="collepse">
                <ul>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Add your restaurant</a>
                  </li>
                  <li>
                    <a href="#">Help</a>
                  </li>
                  <li>
                    <a href="#">My account</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Contacts</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <h3>Categories</h3>
              <div className="collepse">
                <ul>
                  <li>
                    <a href="#">Top Categories</a>
                  </li>
                  <li>
                    <a href="#">Best Rated</a>
                  </li>
                  <li>
                    <a href="#">Best Price</a>
                  </li>
                  <li>
                    <a href="#">Latest Submissions</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <h3>Contacts</h3>
              <div className="collepse collepse_div_3">
                <ul>
                  <li>
                    <FcHome className="footer_icon" />
                    97845 Baker st. 567
                    <br />
                    Los Angeles - US
                  </li>
                  <li>
                    <FcTouchscreenSmartphone className="footer_icon" />
                    +94 423-23-221
                  </li>
                  <li>
                    <GrMail className="footer_icon" />
                    <a href="#">info@domain.com</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <h3>Keep in touch</h3>
              <div className="collepse_div_3">
                <div id="newslatter">
                  <div>
                    <div className="form_group">
                      <input
                        type="email"
                        name="email_newslatter"
                        className="form_control"
                        placeholder="Your Email"
                      />
                      <button type="submit" className="sub_btn">
                        <HiOutlineChevronRight
                          style={{
                            verticalAlign: "top",
                            fontWeight: "lighter",
                          }}
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="follow_us">
                  <h5>Follow Us</h5>
                  <ul>
                    <li>
                      <a href="#">
                        <img src={twitter_icon} className="icon_social" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src={facebook_icon} className="icon_social" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src={insta_icon} className="icon_social" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src={youtube_icon} className="icon_social" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row bottom_div">
            <div className="col-lg-8">
              <ul>
                <li>
                  <div className="style_Select language_selecter">
                    <select>
                      <option selected>English</option>
                      <option>French</option>
                      <option>Spanish</option>
                      <option>Russian</option>
                    </select>
                    <GrLanguage
                      style={{
                        float: "left",
                        display: "flex",
                        alignSelf: "center",
                        width: "40px",
                      }}
                    />
                  </div>
                </li>
                <li>
                  <div className="style_Select language_selecter">
                    <select>
                      <option selected>US Dollars</option>
                      <option>Euro</option>
                    </select>
                    <MdOutlineKeyboardArrowDown
                      style={{
                        float: "left",
                        display: "flex",
                        alignSelf: "center",
                        width: "40px",
                      }}
                    />
                  </div>
                </li>
                <li>
                  <img src={cards}></img>
                </li>
              </ul>
            </div>
            <div className="col-lg-4">
              <ul className="additional_link_footer">
                <li>
                  <a href="#">Terms and conditions</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">© FooYes</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
