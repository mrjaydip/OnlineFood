import "./allcsscode.css";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaRegComment } from "react-icons/fa";
import gallery1 from "./images/blog-1.jpg";
import gallery2 from "./images/blog-2.jpg";
import gallery3 from "./images/blog-3.jpg";
import gallery4 from "./images/blog-4.jpg";
import gallery5 from "./images/blog-5.jpg";
import gallery6 from "./images/blog-6.jpg";
import img_admin_1 from "./images/avatar.jpg";

export default function Gallery() {
  return (
    <>
      <div className="container margin_title1">
        <div className="row">
          <h4
            className="text-center pb-2 "
            style={{
              marginTop: "-15px",
              fontFamily: "monospace",
              fontSize: "30px",
            }}
          >
            Gallery
          </h4>
          <div className="col-lg-9">
            <div className="row">
              <div className="col-lg-6 col-md-6 mb-4">
                <Card
                  style={{
                    borderTop: "none",
                    borderTopLeftRadius: "15px",
                    borderTopRightRadius: "15px",
                    boxShadow: "0px 0px 20px 0px rgb(0 0 0 / 10%)",
                    overflow: "hidden",
                  }}
                  className="card_"
                >
                  <Card.Img
                    src={gallery1}
                    style={{
                      borderTopLeftRadius: "15px",
                      borderTopRightRadius: "15px",
                    }}
                    className="gallery_img_hv"
                  />
                  <a href="#" className="hover_tab">
                    Read More
                  </a>
                  <Card.Body>
                    <h6>Category - 20 Nov. 2017</h6>
                    <Card.Title>
                      <h3>Ea exerci option hendrerit</h3>
                    </Card.Title>
                    <Card.Text>
                      Quodsi sanctus pro eu, ne audire scripserit quo. Vel an
                      enim offendit salutandi, in eos quod omnes epicurei, ex
                      veri qualisque scriptorem mei.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer
                    style={{
                      backgroundColor: "white",
                      paddingLeft: "30px",
                      paddingRight: "30px",
                    }}
                  >
                    <ul>
                      <li>
                        <div className="card_inner_img">
                          <img src={img_admin_1} />
                        </div>
                        Admin
                      </li>
                      <li>
                        <FaRegComment className="icon_gallery_footer" />
                        20
                      </li>
                    </ul>
                  </Card.Footer>
                </Card>
              </div>
              <div className="col-lg-6 col-md-6 ">
                <Card
                  style={{
                    borderTopLeftRadius: "15px",
                    borderTopRightRadius: "15px",
                    boxShadow: "0px 0px 20px 0px rgb(0 0 0 / 10%)",
                    overflow: "hidden",
                  }}
                  className="card_"
                >
                  <Card.Img
                    src={gallery2}
                    style={{
                      borderTopLeftRadius: "15px",
                      borderTopRightRadius: "15px",
                    }}
                    className="gallery_img_hv"
                  />
                  <a href="#" className="hover_tab">
                    Read More
                  </a>
                  <Card.Body>
                    <h6>Category - 20 Nov. 2017</h6>
                    <Card.Title>
                      <h3>At usu sale dolorum offendit</h3>
                    </Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer
                    style={{
                      backgroundColor: "white",
                      paddingLeft: "30px",
                      paddingRight: "30px",
                      overflow: "hidden",
                    }}
                  >
                    <ul>
                      <li>
                        <div className="card_inner_img">
                          <img src={img_admin_1} />
                        </div>
                        Admin
                      </li>
                      <li>
                        <FaRegComment className="icon_gallery_footer" />
                        20
                      </li>
                    </ul>
                  </Card.Footer>
                </Card>
              </div>
              <div className="col-lg-6 col-md-6 mb-4">
                <Card
                  style={{
                    borderTopLeftRadius: "15px",
                    borderTopRightRadius: "15px",
                    boxShadow: "0px 0px 20px 0px rgb(0 0 0 / 10%)",
                    overflow: "hidden",
                  }}
                  className="card_"
                >
                  <Card.Img
                    src={gallery3}
                    style={{
                      borderTopLeftRadius: "15px",
                      borderTopRightRadius: "15px",
                    }}
                    className="gallery_img_hv"
                  />
                  <a href="#" className="hover_tab">
                    Read More
                  </a>
                  <Card.Body>
                    <h6>Category - 20 Nov. 2017</h6>
                    <Card.Title>
                      <h3>Iusto nominavi petentium in</h3>
                    </Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer
                    style={{
                      backgroundColor: "white",
                      paddingLeft: "30px",
                      paddingRight: "30px",
                    }}
                  >
                    <ul>
                      <li>
                        <div className="card_inner_img">
                          <img src={img_admin_1} />
                        </div>
                        Admin
                      </li>
                      <li>
                        <FaRegComment className="icon_gallery_footer" />
                        20
                      </li>
                    </ul>
                  </Card.Footer>
                </Card>
              </div>
              <div className="col-lg-6 col-md-6">
                <Card
                  style={{
                    borderTopLeftRadius: "15px",
                    borderTopRightRadius: "15px",
                    boxShadow: "0px 0px 20px 0px rgb(0 0 0 / 10%)",
                    overflow: "hidden",
                  }}
                  className="card_"
                >
                  <Card.Img
                    src={gallery4}
                    style={{
                      borderTopLeftRadius: "15px",
                      borderTopRightRadius: "15px",
                    }}
                    className="gallery_img_hv"
                  />
                  <a href="#" className="hover_tab">
                    Read More
                  </a>
                  <Card.Body>
                    <h6>Category - 20 Nov. 2017</h6>
                    <Card.Title>
                      <h3>Assueverit concludaturque quo</h3>
                    </Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer
                    style={{
                      backgroundColor: "white",
                      paddingLeft: "30px",
                      paddingRight: "30px",
                    }}
                  >
                    <ul>
                      <li>
                        <div className="card_inner_img">
                          <img src={img_admin_1} />
                        </div>
                        Admin
                      </li>
                      <li>
                        <FaRegComment className="icon_gallery_footer" />
                        20
                      </li>
                    </ul>
                  </Card.Footer>
                </Card>
              </div>
              <div className="col-lg-6 col-md-6 mb-4">
                <Card
                  style={{
                    borderTopLeftRadius: "15px",
                    borderTopRightRadius: "15px",
                    boxShadow: "0px 0px 20px 0px rgb(0 0 0 / 10%)",
                    overflow: "hidden",
                  }}
                  className="card_"
                >
                  <Card.Img
                    src={gallery5}
                    style={{
                      borderTopLeftRadius: "15px",
                      borderTopRightRadius: "15px",
                    }}
                    className="gallery_img_hv"
                  />
                  <a href="#" className="hover_tab">
                    Read More
                  </a>
                  <Card.Body>
                    <h6>Category - 20 Nov. 2017</h6>
                    <Card.Title>
                      <h3>Nec nihil menandri appellantur</h3>
                    </Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer
                    style={{
                      backgroundColor: "white",
                      paddingLeft: "30px",
                      paddingRight: "30px",
                    }}
                  >
                    <ul>
                      <li>
                        <div className="card_inner_img">
                          <img src={img_admin_1} />
                        </div>
                        Admin
                      </li>
                      <li>
                        <FaRegComment className="icon_gallery_footer" />
                        20
                      </li>
                    </ul>
                  </Card.Footer>
                </Card>
              </div>
              <div className="col-lg-6 col-md-6">
                <Card
                  style={{
                    borderTopLeftRadius: "15px",
                    borderTopRightRadius: "15px",
                    boxShadow: "0px 0px 20px 0px rgb(0 0 0 / 10%)",
                    overflow: "hidden",
                  }}
                  className="card_"
                >
                  <Card.Img
                    src={gallery6}
                    style={{
                      borderTopLeftRadius: "15px",
                      borderTopRightRadius: "15px",
                    }}
                    className="gallery_img_hv"
                  />
                  <a href="#" className="hover_tab">
                    Read More
                  </a>
                  <Card.Body>
                    <h6>Category - 20 Nov. 2017</h6>
                    <Card.Title>
                      <h3>Nec nihil menandri appellantur</h3>
                    </Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer
                    style={{
                      backgroundColor: "white",
                      paddingLeft: "30px",
                      paddingRight: "30px",
                    }}
                  >
                    <ul>
                      <li>
                        <div className="card_inner_img">
                          <img src={img_admin_1} />
                        </div>
                        Admin
                      </li>
                      <li>
                        <FaRegComment className="icon_gallery_footer" />
                        20
                      </li>
                    </ul>
                  </Card.Footer>
                </Card>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="widget">
              <div className="widget_main_title">
                <h4>Latest Post</h4>
              </div>
              <ul>
                <li>
                  <div className="alignleft">
                    <a href="#">
                      <img src={gallery5} />
                    </a>
                  </div>
                  <small>Category - 11.08.2016</small>
                  <h3>
                    <a href="#">Verear qualisque ex minimum...</a>
                  </h3>
                </li>
                <li>
                  <div className="alignleft">
                    <a href="#">
                      <img src={gallery6} />
                    </a>
                  </div>
                  <small>Category - 11.08.2016</small>
                  <h3>
                    <a href="#">Verear qualisque ex minimum...</a>
                  </h3>
                </li>
                <li>
                  <div className="alignleft">
                    <a href="#">
                      <img src={gallery4} />
                    </a>
                  </div>
                  <small>Category - 11.08.2016</small>
                  <h3>
                    <a href="#">Verear qualisque ex minimum...</a>
                  </h3>
                </li>
              </ul>
            </div>
            <div className="widget">
              <div
                className="widget_main_title"
                style={{ padding: "70px 0 0 0" }}
              >
                <h4 style={{ display: "flex" }}>Categories</h4>
              </div>
              <ul>
                <li>
                  <div className="alignleft1">
                    <a href="#">
                      Food<span>(12)</span>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="alignleft1">
                    <a href="#">
                      Places to visit <span>(21)</span>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="alignleft1">
                    <a href="#">
                      New Places <span>(44)</span>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="alignleft1">
                    <a href="#">
                      Suggestions and guides <span>(31)</span>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="widget">
              <div className="widget_main_title">
                <h4>Latest Post</h4>
              </div>
              <div className="tags">
                <a href="#">Food</a>
                <a href="#">Bars</a>
                <a href="#">Cooktails</a>
                <a href="#">ShopsBest Offers</a>
                <a href="#">Transports</a>
                <a href="#">Restaurants</a>
              </div>
              {/* <ul >
                <li>
                  <div className="alignleft">
                    <a href="#">
                      <img src={gallery5} />
                    </a>
                  </div>
                  <small>Category - 11.08.2016</small>
                  <h3>
                    <a href="#">Verear qualisque ex minimum...</a>
                  </h3>
                </li>
                <li>
                  <div className="alignleft">
                    <a href="#">
                      <img src={gallery6} />
                    </a>
                  </div>
                  <small>Category - 11.08.2016</small>
                  <h3>
                    <a href="#">Verear qualisque ex minimum...</a>
                  </h3>
                </li>
                <li>
                  <div className="alignleft">
                    <a href="#">
                      <img src={gallery4} />
                    </a>
                  </div>
                  <small>Category - 11.08.2016</small>
                  <h3>
                    <a href="#">Verear qualisque ex minimum...</a>
                  </h3>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
