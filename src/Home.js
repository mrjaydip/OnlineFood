import "./allcsscode.css";
import teser_video from "./images/intro.mp4";
import teser_video1 from "./images/intro.ogv";
import Popular_category from "./Popular_category";
import Top_renstorent from "./Top_rated_restorent";
export default function Home() {
  return (
    <>
      <div className="slider_main_div">
        <div className="main_contanct_div">
          <div className="container ">
            <div className="row">
              <div className="col-md-12 col-lg-8 col-xl-7 text_center">
                <h1>Delivery or Takeaway Food</h1>
                <p>The best restaurants at the best price</p>
                <form>
                  <div className="serch_input">
                    <div className="col-md-12">
                      <div className="form_group">
                        <input
                          type="text"
                          placeholder="Address, neighborhood..."
                          className="input_search"
                        />
                        <button type="submit" className="btn_search">
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="search_trand">
                    <h5>Trending:</h5>
                    <ul>
                      <li>
                        <a href="#">Sushi</a>
                      </li>
                      <li>
                        <a href="#">Burgher</a>
                      </li>
                      <li>
                        <a href="#">Chinese</a>
                      </li>
                      <li>
                        <a href="#">Pizza</a>
                      </li>
                    </ul>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="video_div">
          <video autoPlay="true" loop className="teaser_video">
            <source src={teser_video} type="video/mp4" />
            <source src={teser_video1} type="video/ogv" />
          </video>
        </div>
      </div>
      <Popular_category />
      <Top_renstorent />
    </>
  );
}
