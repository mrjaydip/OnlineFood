import "./allcsscode.css";
import { Routes, Route, Link } from "react-router-dom";
import {
  AiOutlineRight,
  AiOutlineClockCircle,
  AiFillCaretRight,
} from "react-icons/ai";
import { BsTagFill } from "react-icons/bs";
import { HiChatAlt2 } from "react-icons/hi";
import blog1 from "./images/1 (1).jpg";
import blog2 from "./images/2 (2).jpg";
import blog3 from "./images/3 (1).jpg";

export default function News() {
  return (
    <>
      <div className="news_main_div">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="new_col_div text-center">
                <h1>News Standard</h1>
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
                  <li>News Standard</li>
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
      <div className="new_page_second_div">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4  col-xs-12">
              <div className="blog_list_post">
                <div className="img_holder">
                  <img src={blog1} className="img_responsive"></img>
                  <div className="opacity_hv">
                    <div className="icon">
                      <span>
                        <a href="#">+</a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="post">
                  <ul>
                    <li>
                      <a href="#">
                        <BsTagFill className="icon_post" /> Healthy
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <AiOutlineClockCircle className="icon_post" /> J21st
                        Aug, 2015
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <HiChatAlt2 className="icon_post" /> 21
                      </a>
                    </li>
                  </ul>
                  <div className="text_about">
                    <h4>
                      <a href="#">
                        You should add 5 things in your daily meals.
                      </a>
                    </h4>
                    <p>
                      As more and more people are turning to organic lifestyles
                      & trying improve their health...
                    </p>
                    <div className="link_div">
                      <a href="#">
                        READ MORE <AiFillCaretRight className="icon_post1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4  col-xs-12">
              <div className="blog_list_post">
                <div className="img_holder">
                  <img src={blog2} className="img_responsive"></img>
                  <div className="opacity_hv">
                    <div className="icon">
                      <span>
                        <a href="#">+</a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="post">
                  <ul>
                    <li>
                      <a href="#">
                        <BsTagFill className="icon_post" /> Healthy
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <AiOutlineClockCircle className="icon_post" /> J21st
                        Aug, 2015
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <HiChatAlt2 className="icon_post" /> 21
                      </a>
                    </li>
                  </ul>
                  <div className="text_about">
                    <h4>
                      <a href="#">
                        You should add 5 things in your daily meals.
                      </a>
                    </h4>
                    <p>
                      As more and more people are turning to organic lifestyles
                      & trying improve their health...
                    </p>
                    <div className="link_div">
                      <a href="#">
                        READ MORE <AiFillCaretRight className="icon_post1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4  col-xs-12">
              <div className="blog_list_post">
                <div className="img_holder">
                  <img src={blog3} className="img_responsive"></img>
                  <div className="opacity_hv">
                    <div className="icon">
                      <span>
                        <a href="#">+</a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="post">
                  <ul>
                    <li>
                      <a href="#">
                        <BsTagFill className="icon_post" /> Healthy
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <AiOutlineClockCircle className="icon_post" /> J21st
                        Aug, 2015
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <HiChatAlt2 className="icon_post" /> 21
                      </a>
                    </li>
                  </ul>
                  <div className="text_about">
                    <h4>
                      <a href="#">
                        You should add 5 things in your daily meals.
                      </a>
                    </h4>
                    <p>
                      As more and more people are turning to organic lifestyles
                      & trying improve their health...
                    </p>
                    <div className="link_div">
                      <a href="#">
                        READ MORE <AiFillCaretRight className="icon_post1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4  col-xs-12">
              <div className="blog_list_post">
                <div className="img_holder">
                  <img src={blog1} className="img_responsive"></img>
                  <div className="opacity_hv">
                    <div className="icon">
                      <span>
                        <a href="#">+</a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="post">
                  <ul>
                    <li>
                      <a href="#">
                        <BsTagFill className="icon_post" /> Healthy
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <AiOutlineClockCircle className="icon_post" /> J21st
                        Aug, 2015
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <HiChatAlt2 className="icon_post" /> 21
                      </a>
                    </li>
                  </ul>
                  <div className="text_about">
                    <h4>
                      <a href="#">
                        You should add 5 things in your daily meals.
                      </a>
                    </h4>
                    <p>
                      As more and more people are turning to organic lifestyles
                      & trying improve their health...
                    </p>
                    <div className="link_div">
                      <a href="#">
                        READ MORE <AiFillCaretRight className="icon_post1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4  col-xs-12">
              <div className="blog_list_post">
                <div className="img_holder">
                  <img src={blog2} className="img_responsive"></img>
                  <div className="opacity_hv">
                    <div className="icon">
                      <span>
                        <a href="#">+</a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="post">
                  <ul>
                    <li>
                      <a href="#">
                        <BsTagFill className="icon_post" /> Healthy
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <AiOutlineClockCircle className="icon_post" /> J21st
                        Aug, 2015
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <HiChatAlt2 className="icon_post" /> 21
                      </a>
                    </li>
                  </ul>
                  <div className="text_about">
                    <h4>
                      <a href="#">
                        You should add 5 things in your daily meals.
                      </a>
                    </h4>
                    <p>
                      As more and more people are turning to organic lifestyles
                      & trying improve their health...
                    </p>
                    <div className="link_div">
                      <a href="#">
                        READ MORE <AiFillCaretRight className="icon_post1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4  col-xs-12">
              <div className="blog_list_post">
                <div className="img_holder">
                  <img src={blog3} className="img_responsive"></img>
                  <div className="opacity_hv">
                    <div className="icon">
                      <span>
                        <a href="#">+</a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="post">
                  <ul>
                    <li>
                      <a href="#">
                        <BsTagFill className="icon_post" /> Healthy
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <AiOutlineClockCircle className="icon_post" /> J21st
                        Aug, 2015
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <HiChatAlt2 className="icon_post" /> 21
                      </a>
                    </li>
                  </ul>
                  <div className="text_about">
                    <h4>
                      <a href="#">
                        You should add 5 things in your daily meals.
                      </a>
                    </h4>
                    <p>
                      As more and more people are turning to organic lifestyles
                      & trying improve their health...
                    </p>
                    <div className="link_div">
                      <a href="#">
                        READ MORE <AiFillCaretRight className="icon_post1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4  col-xs-12">
              <div className="blog_list_post">
                <div className="img_holder">
                  <img src={blog1} className="img_responsive"></img>
                  <div className="opacity_hv">
                    <div className="icon">
                      <span>
                        <a href="#">+</a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="post">
                  <ul>
                    <li>
                      <a href="#">
                        <BsTagFill className="icon_post" /> Healthy
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <AiOutlineClockCircle className="icon_post" /> J21st
                        Aug, 2015
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <HiChatAlt2 className="icon_post" /> 21
                      </a>
                    </li>
                  </ul>
                  <div className="text_about">
                    <h4>
                      <a href="#">
                        You should add 5 things in your daily meals.
                      </a>
                    </h4>
                    <p>
                      As more and more people are turning to organic lifestyles
                      & trying improve their health...
                    </p>
                    <div className="link_div">
                      <a href="#">
                        READ MORE <AiFillCaretRight className="icon_post1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4  col-xs-12">
              <div className="blog_list_post">
                <div className="img_holder">
                  <img src={blog2} className="img_responsive"></img>
                  <div className="opacity_hv">
                    <div className="icon">
                      <span>
                        <a href="#">+</a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="post">
                  <ul>
                    <li>
                      <a href="#">
                        <BsTagFill className="icon_post" /> Healthy
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <AiOutlineClockCircle className="icon_post" /> J21st
                        Aug, 2015
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <HiChatAlt2 className="icon_post" /> 21
                      </a>
                    </li>
                  </ul>
                  <div className="text_about">
                    <h4>
                      <a href="#">
                        You should add 5 things in your daily meals.
                      </a>
                    </h4>
                    <p>
                      As more and more people are turning to organic lifestyles
                      & trying improve their health...
                    </p>
                    <div className="link_div">
                      <a href="#">
                        READ MORE <AiFillCaretRight className="icon_post1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4  col-xs-12">
              <div className="blog_list_post">
                <div className="img_holder">
                  <img src={blog3} className="img_responsive"></img>
                  <div className="opacity_hv">
                    <div className="icon">
                      <span>
                        <a href="#">+</a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="post">
                  <ul>
                    <li>
                      <a href="#">
                        <BsTagFill className="icon_post" /> Healthy
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <AiOutlineClockCircle className="icon_post" /> J21st
                        Aug, 2015
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <HiChatAlt2 className="icon_post" /> 21
                      </a>
                    </li>
                  </ul>
                  <div className="text_about">
                    <h4>
                      <a href="#">
                        You should add 5 things in your daily meals.
                      </a>
                    </h4>
                    <p>
                      As more and more people are turning to organic lifestyles
                      & trying improve their health...
                    </p>
                    <div className="link_div">
                      <a href="#">
                        READ MORE <AiFillCaretRight className="icon_post1" />
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
