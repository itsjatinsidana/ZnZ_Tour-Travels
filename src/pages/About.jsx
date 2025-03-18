import Navbar from "./Navbar"

const About = () =>{
    return(
        <>
        <Navbar/>

        <>
  <div
    className="banner-header section-padding valign bg-img bg-fixed"
    data-overlay-dark={4}
    data-background="img/slider/1.jpg"
  >
    <div className="container">
      <div className="row">
        <div className="col-md-12 caption mt-90">
          <h5>Luxury Hotel</h5>
          <h1>About Us</h1>
        </div>
      </div>
    </div>
  </div>
  {/* About */}
  <section className="about section-padding">
    <div className="container">
      <div className="row">
        <div
          className="col-md-6 mb-30 animate-box"
          data-animate-effect="fadeInUp"
        >
          <span>
            <i className="star-rating" />
            <i className="star-rating" />
            <i className="star-rating" />
            <i className="star-rating" />
            <i className="star-rating" />
          </span>
          <div className="section-subtitle">The Cappa Luxury Hotel</div>
          <div className="section-title">Enjoy a Luxury Experience</div>
          <p>
            Welcome to the best five-star deluxe hotel in New York. Hotel
            elementum sesue the aucan vestibulum aliquam justo in sapien rutrum
            volutpat. Donec in quis the pellentesque velit. Donec id velit ac
            arcu posuere blane.
          </p>
          <p>
            Hotel ut nisl quam nestibulum ac quam nec odio elementum sceisue the
            aucan ligula. Orci varius natoque penatibus et magnis dis parturient
            monte nascete ridiculus mus nellentesque habitant morbine.
          </p>
          {/* reservation */}
          <div className="reservations">
            <div className="icon">
              <span className="flaticon-call" />
            </div>
            <div className="text">
              <p>Reservation</p> <a href="tel:855-100-4444">855 100 4444</a>
            </div>
          </div>
        </div>
        <div
          className="col col-md-3 animate-box"
          data-animate-effect="fadeInUp"
        >
          {" "}
          <img src="img/rooms/8.jpg" alt="" className="mt-90 mb-30" />{" "}
        </div>
        <div
          className="col col-md-3 animate-box"
          data-animate-effect="fadeInUp"
        >
          {" "}
          <img src="img/rooms/2.jpg" alt="" />{" "}
        </div>
      </div>
    </div>
  </section>
  {/* Pricing */}
  <section className="pricing section-padding bg-blck">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="section-subtitle">
            <span>Best Prices</span>
          </div>
          <div className="section-title">
            <span>Extra Services</span>
          </div>
          <p className="color-2">
            The best prices for your relaxing vacation. The utanislen quam
            nestibulum ac quame odion elementum sceisue the aucan.
          </p>
          <p className="color-2">
            Orci varius natoque penatibus et magnis disney parturient monte
            nascete ridiculus mus nellen etesque habitant morbine.
          </p>
          <div className="reservations mb-30">
            <div className="icon">
              <span className="flaticon-call" />
            </div>
            <div className="text">
              <p className="color-2">For information</p>{" "}
              <a href="tel:855-100-4444">855 100 4444</a>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="owl-carousel owl-theme">
            <div className="pricing-card">
              <img src="img/pricing/1.jpg" alt="" />
              <div className="desc">
                <div className="name">Room cleaning</div>
                <div className="amount">
                  $50<span>/ month</span>
                </div>
                <ul className="list-unstyled list">
                  <li>
                    <i className="ti-check" /> Hotel ut nisan the duru
                  </li>
                  <li>
                    <i className="ti-check" /> Orci miss natoque vasa ince
                  </li>
                  <li>
                    <i className="ti-close unavailable" />
                    Clean sorem ipsum morbin
                  </li>
                </ul>
              </div>
            </div>
            <div className="pricing-card">
              <img src="img/pricing/2.jpg" alt="" />
              <div className="desc">
                <div className="name">Drinks included</div>
                <div className="amount">
                  $30<span>/ daily</span>
                </div>
                <ul className="list-unstyled list">
                  <li>
                    <i className="ti-check" /> Hotel ut nisan the duru
                  </li>
                  <li>
                    <i className="ti-check" /> Orci miss natoque vasa ince
                  </li>
                  <li>
                    <i className="ti-close unavailable" />
                    Clean sorem ipsum morbin
                  </li>
                </ul>
              </div>
            </div>
            <div className="pricing-card">
              <img src="img/pricing/3.jpg" alt="" />
              <div className="desc">
                <div className="name">Room Breakfast</div>
                <div className="amount">
                  $30<span>/ daily</span>
                </div>
                <ul className="list-unstyled list">
                  <li>
                    <i className="ti-check" /> Hotel ut nisan the duru
                  </li>
                  <li>
                    <i className="ti-check" /> Orci miss natoque vasa ince
                  </li>
                  <li>
                    <i className="ti-close unavailable" />
                    Clean sorem ipsum morbin
                  </li>
                </ul>
              </div>
            </div>
            <div className="pricing-card">
              <img src="img/pricing/4.jpg" alt="" />
              <div className="desc">
                <div className="name">Safe &amp; Secure</div>
                <div className="amount">
                  $15<span>/ daily</span>
                </div>
                <ul className="list-unstyled list">
                  <li>
                    <i className="ti-check" /> Hotel ut nisan the duru
                  </li>
                  <li>
                    <i className="ti-check" /> Orci miss natoque vasa ince
                  </li>
                  <li>
                    <i className="ti-close unavailable" />
                    Clean sorem ipsum morbin
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Facilties */}
  <section className="facilties section-padding">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-subtitle">Our Services</div>
          <div className="section-title">Hotel Facilities</div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div
            className="single-facility animate-box"
            data-animate-effect="fadeInUp"
          >
            <span className="flaticon-world" />
            <h5>Pick Up &amp; Drop</h5>
            <p>
              We’ll pick up from airport while you comfy on your ride, mus
              nellentesque habitant.
            </p>
            <div className="facility-shape">
              {" "}
              <span className="flaticon-world" />{" "}
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="single-facility animate-box"
            data-animate-effect="fadeInUp"
          >
            <span className="flaticon-car" />
            <h5>Parking Space</h5>
            <p>
              Fusce tincidunt nis ace park norttito sit amet space, mus
              nellentesque habitant.
            </p>
            <div className="facility-shape">
              {" "}
              <span className="flaticon-car" />{" "}
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="single-facility animate-box"
            data-animate-effect="fadeInUp"
          >
            <span className="flaticon-bed" />
            <h5>Room Service</h5>
            <p>
              Room tincidunt nis ace park norttito sit amet space, mus
              nellentesque habitant.
            </p>
            <div className="facility-shape">
              {" "}
              <span className="flaticon-bed" />{" "}
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="single-facility animate-box"
            data-animate-effect="fadeInUp"
          >
            <span className="flaticon-swimming" />
            <h5>Swimming Pool</h5>
            <p>
              Swimming pool tincidunt nise ace park norttito sit space, mus
              nellentesque habitant.
            </p>
            <div className="facility-shape">
              {" "}
              <span className="flaticon-swimming" />{" "}
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="single-facility animate-box"
            data-animate-effect="fadeInUp"
          >
            <span className="flaticon-wifi" />
            <h5>Fibre Internet</h5>
            <p>
              Wifi tincidunt nis ace park norttito sit amet space, mus
              nellentesque habitant.
            </p>
            <div className="facility-shape">
              {" "}
              <span className="flaticon-wifi" />{" "}
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="single-facility animate-box"
            data-animate-effect="fadeInUp"
          >
            <span className="flaticon-breakfast" />
            <h5>Breakfast</h5>
            <p>
              Eat tincidunt nisa ace park norttito sit amet space, mus
              nellentesque habitant
            </p>
            <div className="facility-shape">
              {" "}
              <span className="flaticon-breakfast" />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Team */}
  <section className="team section-padding bg-cream">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-subtitle">Professionals</div>
          <div className="section-title">Meet The Team</div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 owl-carousel owl-theme">
          <div className="item">
            <div className="img">
              {" "}
              <img src="img/team/4.jpg" alt="" />{" "}
            </div>
            <div className="info">
              <h6>Valentina Karla</h6>
              <p>General Manager</p>
              <div className="social valign">
                <div className="full-width">
                  <a href="#">
                    <i className="ti-instagram" />
                  </a>
                  <a href="#">
                    <i className="ti-twitter" />
                  </a>
                  <a href="#">
                    <i className="ti-facebook" />
                  </a>
                  <a href="#">
                    <i className="ti-pinterest" />
                  </a>
                  <p>valentina@hotel.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="img">
              <img src="img/team/1.jpg" alt="" />{" "}
            </div>
            <div className="info">
              <h6>Micheal White</h6>
              <p>Guest Service Department</p>
              <div className="social valign">
                <div className="full-width">
                  <a href="#">
                    <i className="ti-instagram" />
                  </a>
                  <a href="#">
                    <i className="ti-twitter" />
                  </a>
                  <a href="#">
                    <i className="ti-facebook" />
                  </a>
                  <a href="#">
                    <i className="ti-pinterest" />
                  </a>
                  <p>micheal@hotel.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="img">
              {" "}
              <img src="img/team/2.jpg" alt="" />{" "}
            </div>
            <div className="info">
              <h6>Olivia Martin</h6>
              <p>Reservations Manager</p>
              <div className="social valign">
                <div className="social valign">
                  <div className="full-width">
                    <a href="#">
                      <i className="ti-instagram" />
                    </a>
                    <a href="#">
                      <i className="ti-twitter" />
                    </a>
                    <a href="#">
                      <i className="ti-facebook" />
                    </a>
                    <a href="#">
                      <i className="ti-pinterest" />
                    </a>
                    <p>olivia@hotel.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="img">
              {" "}
              <img src="img/team/5.jpg" alt="" />{" "}
            </div>
            <div className="info">
              <h6>Mariana Dana</h6>
              <p>F&amp;B Manager</p>
              <div className="social valign">
                <div className="full-width">
                  <a href="#">
                    <i className="ti-instagram" />
                  </a>
                  <a href="#">
                    <i className="ti-twitter" />
                  </a>
                  <a href="#">
                    <i className="ti-facebook" />
                  </a>
                  <a href="#">
                    <i className="ti-pinterest" />
                  </a>
                  <p>mariana@hotel.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="img">
              {" "}
              <img src="img/team/3.jpg" alt="" />{" "}
            </div>
            <div className="info">
              <h6>Enrico Brown</h6>
              <p>Head Chef</p>
              <div className="social valign">
                <div className="full-width">
                  <a href="#">
                    <i className="ti-instagram" />
                  </a>
                  <a href="#">
                    <i className="ti-twitter" />
                  </a>
                  <a href="#">
                    <i className="ti-facebook" />
                  </a>
                  <a href="#">
                    <i className="ti-pinterest" />
                  </a>
                  <p>enrico@hotel.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="img">
              {" "}
              <img src="img/team/6.jpg" alt="" />{" "}
            </div>
            <div className="info">
              <h6>Victoria Dan</h6>
              <p>Meetings and Events Manager</p>
              <div className="social valign">
                <div className="full-width">
                  <a href="#">
                    <i className="ti-instagram" />
                  </a>
                  <a href="#">
                    <i className="ti-twitter" />
                  </a>
                  <a href="#">
                    <i className="ti-facebook" />
                  </a>
                  <a href="#">
                    <i className="ti-pinterest" />
                  </a>
                  <p>victoria@hotel.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Testiominals */}
  <section className="testimonials"></section>
</>

        </>
    )
}
export default About