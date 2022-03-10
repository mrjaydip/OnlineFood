import "./allcsscode.css";
import { BsStarFill } from "react-icons/bs";
import restoimg1 from "./images/location_list_1.jpg";
export default function Top_renstorent() {
  return (
    <>
      <div className="restorent_main_div">
        <div className="container second_div">
          <div className="main_title_div">
            <span>
              <em></em>
            </span>
            <h2>Top Rated Restaurants</h2>
            <p>Cum doctus civibus efficiantur in imperdiet deterruisset</p>
          </div>
          <div className="row" style={{ paddingBottom: "25px" }}>
            <div className="col-lg-6">
              <div className="list_home">
                <ul>
                  <li>
                    <a href="#">
                      <img src={restoimg1} width="100%"></img>
                    </a>
                    <div className="info_div_inner">
                      <em>Italian</em>
                      <strong>
                        <BsStarFill
                          style={{
                            verticalAlign: "top",
                            paddingRight: "10%",
                            fontSize: "18px",
                            color: "#66cc66",
                          }}
                        />
                        9.5
                      </strong>
                      <h3>La Monnalisa</h3>
                      <small>8 Patriot Square E2 9NF</small>
                      <ul>
                        <li>
                          <span className="offer_icon">-30%</span>
                        </li>
                        <li>Average price $35</li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#">
                      <img src={restoimg1}></img>
                    </a>
                    <div className="info_div_inner">
                      <em>Italian</em>
                      <strong>
                        <BsStarFill
                          style={{
                            verticalAlign: "top",
                            paddingRight: "10%",
                            fontSize: "18px",
                            color: "#66cc66",
                          }}
                        />
                        9.5
                      </strong>
                      <h3>La Monnalisa</h3>
                      <small>8 Patriot Square E2 9NF</small>
                      <ul>
                        <li>
                          <span className="offer_icon">-30%</span>
                        </li>
                        <li>Average price $35</li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#">
                      <img src={restoimg1}></img>
                    </a>
                    <div className="info_div_inner">
                      <em>Italian</em>
                      <strong>
                        <BsStarFill
                          style={{
                            verticalAlign: "top",
                            paddingRight: "10%",
                            fontSize: "18px",
                            color: "#66cc66",
                          }}
                        />
                        9.5
                      </strong>
                      <h3>La Monnalisa</h3>
                      <small>8 Patriot Square E2 9NF</small>
                      <ul>
                        <li>
                          <span className="offer_icon">-30%</span>
                        </li>
                        <li>Average price $35</li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="list_home">
                <ul>
                  <li>
                    <a href="#">
                      <img src={restoimg1}></img>
                    </a>
                    <div className="info_div_inner">
                      <em>Italian</em>
                      <strong>
                        <BsStarFill
                          style={{
                            verticalAlign: "top",
                            paddingRight: "10%",
                            fontSize: "18px",
                            color: "#66cc66",
                          }}
                        />
                        9.5
                      </strong>
                      <h3>La Monnalisa</h3>
                      <small>8 Patriot Square E2 9NF</small>
                      <ul>
                        <li>
                          <span className="offer_icon">-30%</span>
                        </li>
                        <li>Average price $35</li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#">
                      <img src={restoimg1}></img>
                    </a>
                    <div className="info_div_inner">
                      <em>Italian</em>
                      <strong>
                        <BsStarFill
                          style={{
                            verticalAlign: "top",
                            paddingRight: "10%",
                            fontSize: "18px",
                            color: "#66cc66",
                          }}
                        />
                        9.5
                      </strong>
                      <h3>La Monnalisa</h3>
                      <small>8 Patriot Square E2 9NF</small>
                      <ul>
                        <li>
                          <span className="offer_icon">-30%</span>
                        </li>
                        <li>Average price $35</li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#">
                      <img src={restoimg1}></img>
                    </a>
                    <div className="info_div_inner">
                      <em>Italian</em>
                      <strong>
                        <BsStarFill
                          style={{
                            verticalAlign: "top",
                            paddingRight: "10%",
                            fontSize: "18px",
                            color: "#66cc66",
                          }}
                        />
                        9.5
                      </strong>
                      <h3>La Monnalisa</h3>
                      <small>8 Patriot Square E2 9NF</small>
                      <ul>
                        <li>
                          <span className="offer_icon">-30%</span>
                        </li>
                        <li>Average price $35</li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="banner_lazy">
            <div className="wrapper_div_banner">
              <div>
                <small>FooYes Delivery</small>
                <h3>We Deliver to your Office</h3>
                <p>Enjoy a tasty food in minutes!</p>
                <a href="#">Start Now!</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
