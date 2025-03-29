import Navbar from "./Navbar"

const Home = () => {
  return (
    <>

      <div class="progress-wrap cursor-pointer">
        <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
      <Navbar />

      <header className="header slider-fade">
        <div className="owl-carousel owl-theme">
          {/* The opacity on the image is made with "data-overlay-dark="number". You can change it using the numbers 0-9. */}
          <div
            className="text-center item bg-img"
            data-overlay-dark={2}
            data-background="img/slider/partition_muesem.jpeg"
          >
            <div className="v-middle caption">
              <div className="container">
                <div className="row">
                  <div className="col-md-10 offset-md-1">
                    <span>
                      <i className="star-rating" />
                      <i className="star-rating" />
                      <i className="star-rating" />
                      <i className="star-rating" />
                      <i className="star-rating" />
                    </span>
                    <h4>Luxury Hotel &amp; Best Resort</h4>
                    <h1>Enjoy a Luxury Experience</h1>
                    <div className="butn-light mt-30 mb-30">
                      {" "}
                      <a href="#" data-scroll-nav={1}>
                        <span>Rooms &amp; Suites</span>
                      </a>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="text-center item bg-img"
            data-overlay-dark={2}
            data-background="img/slider/golden.jpg"
          >
            <div className="v-middle caption">
              <div className="container">
                <div className="row">
                  <div className="col-md-10 offset-md-1">
                    <span>
                      <i className="star-rating" />
                      <i className="star-rating" />
                      <i className="star-rating" />
                      <i className="star-rating" />
                      <i className="star-rating" />
                    </span>
                    <h4>Unique Place to Relax &amp; Enjoy</h4>
                    <h1>The Perfect Base For You</h1>
                    <div className="butn-light mt-30 mb-30">
                      {" "}
                      <a href="#" data-scroll-nav={1}>
                        <span>Rooms &amp; Suites</span>
                      </a>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="text-center item bg-img"
            data-overlay-dark={3}
            data-background="img/slider/banner1.JPG"
          >
            <div className="v-middle caption">
              <div className="container">
                <div className="row">
                  <div className="col-md-10 offset-md-1">
                    <span>
                      <i className="star-rating" />
                      <i className="star-rating" />
                      <i className="star-rating" />
                      <i className="star-rating" />
                      <i className="star-rating" />
                    </span>
                    <h4>The Ultimate Luxury Experience</h4>
                    <h1>Enjoy The Best Moments of Life</h1>
                    <div className="butn-light mt-30 mb-30">
                      {" "}
                      <a href="#" data-scroll-nav={1}>
                        <span>Rooms &amp; Suites</span>
                      </a>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* slider reservation */}
        <div className="reservation">
          <a href="tel: 7717300031">
            <div className="icon d-flex justify-content-center align-items-center">
              <i className="flaticon-call" />
            </div>
            <div className="call">
              <span> 7717300031</span> <br />
              Reservation
            </div>
          </a>
        </div>
      </header>

      <section className="about section-padding" style={{
        backgroundImage: "url('img/slider/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        // filter: "blur(5px)",
      }}>
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
              <div className="section-subtitle">ZnZ Travel & Stays</div>
              <div className="section-title">Discover the Culture, Heritage, and
                Treasures of Amritsar with us.</div>
              <p>
                At ZNZ Travel and Stays, we are a
                group of passionate Amritsaris who
                want the world to experience our city
                the way we have—authentically,
                wholeheartedly, and like a true local.
                Having lived here since childhood, we
                know the real essence of Amritsar—its
                vibrant streets, soulful spirituality, rich
                history, and mouthwatering flavors.

              </p>
              <p>
                Through our curated and flexible plans
                and experiences, we invite you to see
                Amritsar through our eyes, beyond the
                usual tourist spots.
                We want every visitor to feel the same
                joy, warmth, and connection that we’ve
                cherished all our lives.
              </p>
              {/* call */}
              <div className="reservations">
                <div className="icon">
                  <span className="flaticon-call" />
                </div>
                <div className="text">
                  <p>Reservation</p> <a href="tel:855-100-4444">77173-00031</a>
                </div>
              </div>
            </div>
            <div
              className="col col-md-3 animate-box"
              data-animate-effect="fadeInUp"
            >
              <img src="img/rooms/aboutimg1.jpg" alt="" className="mt-90 mb-30" />
            </div>
            <div
              className="col col-md-3 animate-box"
              data-animate-effect="fadeInUp"
            >
              <img src="img/rooms/aboutimg2.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* amritsar attractions */}


      <section className="news section-padding bg-blck">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-subtitle">
                <span>ZnZ Travel & Stays</span>
              </div>
              <div className="section-title">
                <span>Attractions</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="owl-carousel owl-theme">
                {/* Existing Cards */}
                <div className="item">
                  <div className="position-re o-hidden">
                    <img src="img/news/goldentemple1.jpg" alt="" style={{ height: "500px" }} />
                    <div className="date">
                      <a href="post.html">
                        <span>Amritsar</span>
                      </a>
                    </div>
                  </div>
                  <div className="con">
                    <span className="category">
                      <a href="news.html">Amritsar</a>
                    </span>
                    <h5>
                      <a href="post.html">Golden Temple</a>
                    </h5>
                  </div>
                </div>

                <div className="item">
                  <div className="position-re o-hidden">
                    <img src="img/news/partition.JPG" alt="" style={{ height: "500px" }} />
                    <div className="date">
                      <a href="post.html">
                        <span>Dec</span> <i>04</i>
                      </a>
                    </div>
                  </div>
                  <div className="con">
                    <span className="category">
                      <a href="news.html">Amritsar</a>
                    </span>
                    <h5>
                      <a href="post.html">Partition Musiem</a>
                    </h5>
                  </div>
                </div>

                <div className="item">
                  <div className="position-re o-hidden">
                    <img src="img/news/jallianwalanbagh.jpg" alt="" style={{ height: "500px" }} />
                    <div className="date">
                      <a href="post.html">
                        <span>Dec</span> <i>06</i>
                      </a>
                    </div>
                  </div>
                  <div className="con">
                    <span className="category">
                      <a href="news.html">Amritsar</a>
                    </span>
                    <h5>
                      <a href="post.html">Jallian Wala Bagh</a>
                    </h5>
                  </div>
                </div>

                <div className="item">
                  <div className="position-re o-hidden">
                    <img src="img/news/ramtirath.jpg" alt="" style={{ height: "500px" }} />
                    <div className="date">
                      <a href="post.html">
                        <span>Dec</span> <i>08</i>
                      </a>
                    </div>
                  </div>
                  <div className="con">
                    <span className="category">
                      <a href="news.html">Amritsar</a>
                    </span>
                    <h5>
                      <a href="post.html">Ram Tirath</a>
                    </h5>
                  </div>
                </div>

                <div className="item">
                  <div className="position-re o-hidden">
                    <img src="img/news/ranjitsinghstatue.JPG" alt="" style={{ height: "500px" }} />
                    <div className="date">
                      <a href="post.html">
                        <span>Dec</span> <i>08</i>
                      </a>
                    </div>
                  </div>
                  <div className="con">
                    <span className="category">
                      <a href="news.html">Amritsar</a>
                    </span>
                    <h5>
                      <a href="post.html">Maharaja Ranjit Singh Statue</a>
                    </h5>
                  </div>
                </div>

                <div className="item">
                  <div className="position-re o-hidden">
                    <img src="img/news/waghborder.jpg" alt="" style={{ height: "500px" }} />
                    <div className="date">
                      <a href="post.html">
                        <span>Dec</span> <i>08</i>
                      </a>
                    </div>
                  </div>
                  <div className="con">
                    <span className="category">
                      <a href="news.html">Amritsar</a>
                    </span>
                    <h5>
                      <a href="post.html">Wagh Border</a>
                    </h5>
                  </div>
                </div>

                {/* New Card 1 */}
                <div className="item">
                  <div className="position-re o-hidden">
                    <img src="img/news/sadapind.jpg" alt="" style={{ height: "500px" }} />
                    <div className="date">
                      <a href="post.html">
                        <span>Dec</span> <i>10</i>
                      </a>
                    </div>
                  </div>
                  <div className="con">
                    <span className="category">
                      <a href="news.html">Amritsar</a>
                    </span>
                    <h5>
                      <a href="post.html">Sada Pind</a>
                    </h5>
                  </div>
                </div>

                {/* New Card 2 */}
                <div className="item">
                  <div className="position-re o-hidden">
                    <img src="img/news/durgianatemple.jpg" alt="" style={{ height: "500px" }} />
                    <div className="date">
                      <a href="post.html">
                        <span>Dec</span> <i>12</i>
                      </a>
                    </div>
                  </div>
                  <div className="con">
                    <span className="category">
                      <a href="news.html">Amritsar</a>
                    </span>
                    <h5>
                      <a href="post.html">Durgiana Temple</a>
                    </h5>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>




      <div className="rooms3 section-padding">


        <div className="container">

          <div className="col-md-12">
            <div className="section-subtitle">
              <span>ZnZ Travel & Stays</span>
            </div>
            <div className="section-title">
              <span style={{ color: "black" }}>Must Try Food Places In Amritsar</span>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="square-flip">
                <div className="square bg-img" data-background="img/rooms/kulche.jpg">
                  <span className="category">
                    <a href="rooms2.html">Book</a>
                  </span>
                  <div className="square-container d-flex align-items-end justify-content-end">
                    <div className="box-title">
                      <h6>150$ / Night</h6>
                      <h4>Junior Suite</h4>
                    </div>
                  </div>
                  <div className="flip-overlay" />
                </div>
                <div className="square2">
                  <div className="square-container2">
                    <h6>150$ / Night</h6>
                    <h4>Junior Suite</h4>
                    <p>
                      Hotel viverra tristique ustoni miss vitae sediam neque nivamus
                      aestan.
                    </p>
                    <div className="row room-facilities mb-30">
                      <div className="col-md-6">
                        <ul>
                          <li>
                            <i className="flaticon-group" /> 1-2 Persons
                          </li>
                          <li>
                            <i className="flaticon-wifi" /> Free Wifi
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul>
                          <li>
                            <i className="flaticon-bed" /> Twin Bed
                          </li>
                          <li>
                            <i className="flaticon-breakfast" /> Breakfast
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="btn-line">
                      <a href="room-details.html">Details</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="square-flip">
                <div className="square bg-img" data-background="img/rooms/kulche.jpg">
                  <span className="category">
                    <a href="rooms2.html">Book</a>
                  </span>
                  <div className="square-container d-flex align-items-end justify-content-end">
                    <div className="box-title">
                      <h6>200$ / Night</h6>
                      <h4>Family Room</h4>
                    </div>
                  </div>
                  <div className="flip-overlay" />
                </div>
                <div className="square2">
                  <div className="square-container2">
                    <h6>200$ / Night</h6>
                    <h4>Family Room</h4>
                    <p>
                      Hotel viverra tristique ustoni miss vitae sediam neque nivamus
                      aestan.
                    </p>
                    <div className="row room-facilities mb-30">
                      <div className="col-md-6">
                        <ul>
                          <li>
                            <i className="flaticon-group" /> 1-2 Persons
                          </li>
                          <li>
                            <i className="flaticon-wifi" /> Free Wifi
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul>
                          <li>
                            <i className="flaticon-bed" /> Twin Bed
                          </li>
                          <li>
                            <i className="flaticon-breakfast" /> Breakfast
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="btn-line">
                      <a href="room-details.html">Details</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="square-flip">
                <div className="square bg-img" data-background="img/rooms/kulche.jpg">
                  <span className="category">
                    <a href="rooms2.html">Book</a>
                  </span>
                  <div className="square-container d-flex align-items-end justify-content-end">
                    <div className="box-title">
                      <h6>250$ / Night</h6>
                      <h4>Double Room</h4>
                    </div>
                  </div>
                  <div className="flip-overlay" />
                </div>
                <div className="square2">
                  <div className="square-container2">
                    <h6>250$ / Night</h6>
                    <h4>Double Room</h4>
                    <p>
                      Hotel viverra tristique ustoni miss vitae sediam neque nivamus
                      aestan.
                    </p>
                    <div className="row room-facilities mb-30">
                      <div className="col-md-6">
                        <ul>
                          <li>
                            <i className="flaticon-group" /> 1-2 Persons
                          </li>
                          <li>
                            <i className="flaticon-wifi" /> Free Wifi
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul>
                          <li>
                            <i className="flaticon-bed" /> Twin Bed
                          </li>
                          <li>
                            <i className="flaticon-breakfast" /> Breakfast
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="btn-line">
                      <a href="room-details.html">Details</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-md-4">
        <div className="square-flip">
          <div className="square bg-img" data-background="img/rooms/6.jpg">
            <span className="category">
              <a href="rooms2.html">Book</a>
            </span>
            <div className="square-container d-flex align-items-end justify-content-end">
              <div className="box-title">
                <h6>300$ / Night</h6>
                <h4>Deluxe Room</h4>
              </div>
            </div>
            <div className="flip-overlay" />
          </div>
          <div className="square2">
            <div className="square-container2">
              <h6>300$ / Night</h6>
              <h4>Deluxe Room</h4>
              <p>
                Hotel viverra tristique ustoni miss vitae sediam neque nivamus
                aestan.
              </p>
              <div className="row room-facilities mb-30">
                <div className="col-md-6">
                  <ul>
                    <li>
                      <i className="flaticon-group" /> 1-2 Persons
                    </li>
                    <li>
                      <i className="flaticon-wifi" /> Free Wifi
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul>
                    <li>
                      <i className="flaticon-bed" /> Twin Bed
                    </li>
                    <li>
                      <i className="flaticon-breakfast" /> Breakfast
                    </li>
                  </ul>
                </div>
              </div>
              <div className="btn-line">
                <a href="room-details.html">Details</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="square-flip">
          <div className="square bg-img" data-background="img/rooms/8.jpg">
            <span className="category">
              <a href="rooms2.html">Book</a>
            </span>
            <div className="square-container d-flex align-items-end justify-content-end">
              <div className="box-title">
                <h6>350$ / Night</h6>
                <h4>Superior Room</h4>
              </div>
            </div>
            <div className="flip-overlay" />
          </div>
          <div className="square2">
            <div className="square-container2">
              <h6>350$ / Night</h6>
              <h4>Superior Room</h4>
              <p>
                Hotel viverra tristique ustoni miss vitae sediam neque nivamus
                aestan.
              </p>
              <div className="row room-facilities mb-30">
                <div className="col-md-6">
                  <ul>
                    <li>
                      <i className="flaticon-group" /> 1-2 Persons
                    </li>
                    <li>
                      <i className="flaticon-wifi" /> Free Wifi
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul>
                    <li>
                      <i className="flaticon-bed" /> Twin Bed
                    </li>
                    <li>
                      <i className="flaticon-breakfast" /> Breakfast
                    </li>
                  </ul>
                </div>
              </div>
              <div className="btn-line">
                <a href="room-details.html">Details</a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
            {/* <div className="col-md-4">
        <div className="square-flip">
          <div className="square bg-img" data-background="img/rooms/9.jpg">
            <span className="category">
              <a href="rooms2.html">Book</a>
            </span>
            <div className="square-container d-flex align-items-end justify-content-end">
              <div className="box-title">
                <h6>400$ / Night</h6>
                <h4>Wellness Room</h4>
              </div>
            </div>
            <div className="flip-overlay" />
          </div>
          <div className="square2">
            <div className="square-container2">
              <h6>400$ / Night</h6>
              <h4>Wellness Room</h4>
              <p>
                Hotel viverra tristique ustoni miss vitae sediam neque nivamus
                aestan.
              </p>
              <div className="row room-facilities mb-30">
                <div className="col-md-6">
                  <ul>
                    <li>
                      <i className="flaticon-group" /> 1-2 Persons
                    </li>
                    <li>
                      <i className="flaticon-wifi" /> Free Wifi
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul>
                    <li>
                      <i className="flaticon-bed" /> Twin Bed
                    </li>
                    <li>
                      <i className="flaticon-breakfast" /> Breakfast
                    </li>
                  </ul>
                </div>
              </div>
              <div className="btn-line">
                <a href="room-details.html">Details</a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
          </div>
        </div>
      </div>



    </>
  )
}
export default Home