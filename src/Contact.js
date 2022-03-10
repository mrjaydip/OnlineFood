import "./App.css";
import { BsLifePreserver, BsCloudUpload } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { useState } from "react";
export default function Contact() {
  function handleSubmit(event) {
    alert();
    event.preventDefault();
  }
  return (
    <>
      <div className="contact_main_div">
        <div className="opacity_pack">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-9 col-lg-10 col-md-8">
                <h1>Contact Foody</h1>
                <p>A successful restaurant experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg_gray">
        <div className="container margin_title">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-4">
              <div className="box_contact">
                <BsLifePreserver className="icon_contact" />
                <h2>Help Center</h2>
                <a href="#">635-3547-381</a> -
                <a href="#"> Jaydipsoliya11@gmail.com</a>
                <small>MON to FRI 9am-6pm SAT 9am-2pm</small>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="box_contact">
                <FiMapPin className="icon_contact" />
                <h2>Address</h2>
                <div style={{ fontSize: "16px" }}>
                  6th Forrest Ray, London - 10001 UK
                </div>
                <small>MON to FRI 9am-6pm SAT 9am-2pm</small>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="box_contact">
                <BsCloudUpload className="icon_contact" />
                <h2>Submissions</h2>
                <a href="#">635-3547-381</a> -
                <a href="#"> Jaydipsoliya11@gmail.com</a>
                <small>MON to FRI 9am-6pm SAT 9am-2pm</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container margin_60_20">
        <h5>Drop Us a Line</h5>
        <div className="row">
          <div className="col-lg-4 col-md-6 add_bottom_25">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Name"
                  id="name_contact"
                  name="name-contact"
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="email"
                  placeholder="Email"
                  id="email_contact"
                  name="email-contact"
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  type="email"
                  placeholder="Message"
                  id="message_contact"
                  name="message-contact"
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Are you human? 3 + 1 ="
                  id="verify_contact"
                  name="verify_contact"
                />
              </div>
              <div className="form-group">
                <input
                  className="btn_1 gradient full-width"
                  type="submit"
                  id="submit-contact"
                  value="submit"
                />
              </div>
            </form>
          </div>
          <div className="col-lg-8 col-md-6 add_bottom_25">
            <iframe
              class="map_contact"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14872.070420229242!2d72.95786724999999!3d21.2707707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1642243661107!5m2!1sen!2sin"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
