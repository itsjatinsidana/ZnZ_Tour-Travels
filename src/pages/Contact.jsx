import React, { useRef } from "react";
import Navbar from "./Navbar";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1dtpu0o",    // Replace with your EmailJS service ID
        "template_vxi6j0c",   // Replace with your EmailJS template ID
        form.current,
        "T5GZa8ePUdtU6cJCH"     // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          Swal.fire("Message Sent", "We will get back to you soon.", "success");
          form.current.reset();
        },
        (error) => {
          Swal.fire("Error", "Message could not be sent.", "error");
          console.error("EmailJS error:", error);
        }
      );
  };

  return (
    <>
      <Navbar />
      <div
        className="banner-header section-padding valign bg-img bg-fixed"
        data-overlay-dark={3}
        data-background="img/slider/aboutus.png"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-left caption mt-90">
              <h5>Get in touch</h5>
              <h1>Contact Us</h1>
            </div>
          </div>
        </div>
      </div>

      <section className="contact section-padding">
        <div className="container">
          <div className="row mb-90">
            <div className="col-md-6 mb-60">
              <h3>ZnZ Travel & Stays</h3>
              <p>
                At ZNZ Travel and Stays, we are a group of passionate Amritsaris
                who want the world to experience our city the way we have—
                authentically, wholeheartedly, and like a true local...
              </p>
              <div className="reservations mb-30">
                <div className="icon"><span className="flaticon-call" /></div>
                <div className="text"><p>Reservation</p> <a href="tel:8054540854">+91-80-54-54-08-54</a></div>
              </div>
              <div className="reservations mb-30">
                <div className="icon"><span className="flaticon-envelope" /></div>
                <div className="text"><p>Email Info</p> <a href="mailto:znzgroupasr@gmail.com">znzgroupasr@gmail.com</a></div>
              </div>
              <div className="reservations">
                <div className="icon"><span className="flaticon-location-pin" /></div>
                <div className="text"><p>Address</p> 2nd Floor, SCF 33, D-Block, Ranjit Avenue, Amritsar</div>
              </div>
            </div>

            <div className="col-md-5 mb-30 offset-md-1">
              <h3>Get in touch</h3>
              <form ref={form} onSubmit={sendEmail} className="contact__form">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input name="name" type="text" placeholder="Your Name *" required />
                  </div>
                  <div className="col-md-6 form-group">
                    <input name="email" type="email" placeholder="Your Email *" required />
                  </div>
                  <div className="col-md-6 form-group">
                    <input name="phone" type="text" placeholder="Your Number *" required />
                  </div>
                  <div className="col-md-6 form-group">
                    <input name="subject" type="text" placeholder="Subject *" required />
                  </div>
                  <div className="col-md-12 form-group">
                    <textarea name="message" rows={4} placeholder="Message *" required />
                  </div>
                  <div className="col-md-12">
                    <button type="submit" className="butn-dark2">
                      <span>Send Message</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Google Map */}
          <div className="row">
            <div className="col-md-12 map animate-box" data-animate-effect="fadeInUp">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396.0637174870617!2d74.85476437561715!3d31.659476474150622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919657ffc119307%3A0x91eb17ac49b84e09!2sZnZ%20Travel%20and%20Stays!5e0!3m2!1sen!2sin!4v1748075825222!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
