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
          <a href="tel: +91-8054540854">
            <div className="icon d-flex justify-content-center align-items-center">
              <i className="flaticon-call" />
            </div>
            <div className="call">
              <span> +91-8054540854</span> <br />
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
                  <p>Reservation</p> <a href="tel:+91-8054540854">+91-8054540854</a>
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
                      <a href="post.html">Partition Museum</a>
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
                      <a href="post.html">Jallianwala Bagh</a>
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
                      <a href="post.html">Temple</a>
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
                      <a href="post.html">Wagah Border</a>
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



      <section className="rooms-page section-padding" data-scroll-index={1}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {" "}
              <span>
                <i className="star-rating" />
                <i className="star-rating" />
                <i className="star-rating" />
                <i className="star-rating" />
                <i className="star-rating" />
              </span>
              <div className="section-subtitle">ZnZ Tour and Travels</div>
              <div className="section-title">Must-Try Food
                Places in Amritsar</div>
              <p className="mb-30" style={{
                fontSize: "16px",
                fontWeight: "bold"
              }}>
                Amritsar, the culinary heart of Punjab, offers a delightful mix of vegetarian and non-vegetarian dishes that cater to every taste. From the iconic Amritsari Kulcha and Langar at the Golden Temple for vegetarians to the mouth-watering Tandoori Chicken and Fish Amritsari for non-veg lovers, the city is a paradise for foodies. Whether you crave rich, buttery flavors or spicy tandoori delights, Amritsar’s street food and dhabas serve up authentic Punjabi flavors that you simply can’t miss!
              </p>
            </div>
            <div className="col-md-12">
              <div className="reservations">
                <div className="icon">
                  <span className="flaticon-call" />
                </div>
                <div className="text">
                  <p>Reservations</p> <a href="tel:+91-8054540854">+91-8054540854</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="services ">
        <div className="container">
          <div className="row">
            <div
              className="col-md-6 p-0 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div className="img left">
                <a href="post.html">
                  <img src="img/spa/veg.png" alt="" style={{height:"490px"}} />
                </a>
              </div>
            </div>
            <div
              className="col-md-6 p-0 bg-cream valign animate-box"
              data-animate-effect="fadeInRight"
            >
              <div className="content">
                <div className="cont text-left">

                  <h4>🍃 Vegetarian Food in Amritsar</h4>
                  <p>
                    Amritsar is a paradise for vegetarians, offering some of the most flavorful and iconic Punjabi dishes. The legendary Amritsari Kulcha, stuffed with spiced potatoes or paneer, served with tangy chole and pickles, is a must-try. No visit is complete without experiencing the Langar at the Golden Temple, where thousands are served a wholesome, simple meal daily. Traditional dishes like Sarson da Saag with Makki di Roti, paired with white butter and jaggery, showcase the rich flavors of Punjab. Don’t forget to try Lassi, a thick and creamy yogurt drink, perfect to cool down after a spicy meal!
                  </p>
                  <p>
                    <span className="flaticon-clock" /> Daily: 7.00 am to 9.00 pm{" "}

                  </p>

                </div>
                <div className="col-md-4">
                  <div className="butn-dark mt-15 mb-30">
                    {" "}
                    <a href="rooms2.html">
                      <span>View Veg places</span>
                    </a>{" "}
                  </div>
                </div>

              </div>

            </div>

          </div>
          <div className="row">
            <div
              className="col-md-6 bg-cream p-0 order2 valign animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div className="content">
                <div className="cont text-left">

                  <h4>🍗 Non-Vegetarian Food in Amritsar</h4>
                  <p>
                    For non-vegetarian food lovers, Amritsar is nothing short of a culinary haven. The city is famous for its Tandoori Chicken, marinated in yogurt and spices, then roasted to perfection in a traditional clay oven. Another local favorite is Fish Amritsari, crispy, deep-fried fish fillets infused with tangy flavors. If you love rich and creamy dishes, Butter Chicken and Mutton Curry served with naan or rice will leave you craving for more. The famous dhabas and street food joints in Amritsar offer an unmatched taste of Punjab’s bold and hearty non-veg delights.
                  </p>
                  <p>
                    <span className="flaticon-clock" /> Daily: 6.00 am to 9.00 pm{" "}
                  </p>
                </div>
                <div className="col-md-4">
                  <div className="butn-dark mt-15 mb-30">
                    {" "}
                    <a href="rooms2.html">
                      <span>View Non-veg places</span>
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 p-0 order1 animate-box"
              data-animate-effect="fadeInRight"
            >
              <div className="img">
                <a href="post2.html">
                  <img src="img/spa/nonveg.png" alt="" style={{height:"490px"}}/>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>


    </>
  )
}
export default Home