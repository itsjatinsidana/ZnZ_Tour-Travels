import Navbar from "./Navbar"

const About = () => {
  return (
    <>
      <Navbar />

      <>
        <div
          className="banner-header section-padding valign bg-img bg-fixed"
          data-overlay-dark={4}
          data-background="img/slider/aboutus.png"
          style={{
            backgroundAttachment: "fixed",
            
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            minHeight: "450px", // match image height
           
          
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12 caption mt-90">

                <h1>About Us</h1>
              </div>
            </div>
          </div>
        </div>
        {/* About */}
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
                <div className="section-title">ZnZ Travel & Stays</div>
                <div className="" style={{ fontSize: "35px" }}>Discover the Culture, Heritage, and <br /><br />
                  Treasures of Amritsar with us.</div>
                <br />
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
                    <p>Reservation</p> <a href="tel:+91-8054540854">+91-80-54-54-08-54</a>
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

        <>
        
          <section className="section-padding bg-blck">
          <div className="container bg-blck" style={{ backgroundColor: "#DFD0B8", marginBottom:"80px" }}>
            <div className="col-md-12">
              <div className="section-subtitle">Professionals</div>
              <div className="section-title">Meet The Team</div>

            </div>
          </div>
          <div className="container">
  <div className="row mb-5">
    <div className="col-lg-6 mb-4">
      <img
        src="img/slider/founder1.jpg"
        alt="Loveleen Kaur Dhillon"
        className="img-fluid rounded"
        style={{ width: "100%", height: "530px", objectFit: "cover" }}
      />
    </div>
    <div className="col-lg-6 d-flex flex-column justify-content-center" style={{ backgroundColor: "#FAF6E9", padding: "20px" }}>
      <h4><a href="#">Loveleen Kaur Dhillon</a></h4>
      <p>A proud Amritsari by heart and heritage, our founder has lived in the city her entire life, deeply connected to its soul, stories, and spirit. With a background in Medical Sciences (B.Sc.), she brings a thoughtful, nurturing touch to everything she does—whether it's tending to her beloved plants or curating unforgettable experiences for travelers.

</p>
<p>A passionate advocate of Amritsar’s rich culture and heritage, she has been welcoming guests into her home and heart for many years. Her deep-rooted ties to the city’s social fabric and her insider knowledge make her the perfect ambassador for authentic Amritsar experiences. From hidden culinary gems to soulful spiritual moments, she knows just how to help visitors feel the essence of the city.


</p>
<p>
Driven by her love for tourism and community, she founded this venture to showcase the best of Amritsar through warmth, hospitality, and unforgettable journeys.
</p>
      <hr className="border-2" />
    </div>
  </div>

  <div className="row mb-5 flex-lg-row-reverse">
    <div className="col-lg-6 mb-4">
      <img
        src="img/slider/founder2.jpg"
        alt="Gurleen Kaur Dhillon"
        className="img-fluid rounded"
        style={{ width: "560px", height: "530px", objectFit: "cover" }}
      />
    </div>
    <div className="col-lg-6 d-flex flex-column justify-content-center" style={{ backgroundColor: "#FAF6E9", padding: "20px" }}>
      <h4><a href="#">Gurleen Kaur Dhillon</a></h4>
      
      <p>
                        An engineer by education and a law graduate by choice, Gurleen Kaur Dhillon brings a unique blend of structure, insight, and creativity to the team. Though not originally from Amritsar, marriage brought her to this vibrant city, and what started as a new chapter soon turned into a deep, enduring love for its culture, people, and heritage.

                      </p>
                      <p>
                        A regular face on Amritsar’s heritage walks, Gurleen thrives on introducing visitors to the city's rich history and hidden stories. With a background in commercial arts and a passion for visual storytelling, she personally scouts, visits, shoots, and edits content from every corner of Amritsar—ensuring every experience is both authentic and beautifully captured.

                      </p>
                      <p>
                        Before co-founding this venture, she successfully managed other businesses, bringing valuable experience and an entrepreneurial spirit. Her appreciation for art, culture, and meaningful travel experiences makes her a natural guide and storyteller, helping guests discover Amritsar in a way that’s both immersive and inspiring.
                      </p>
      <hr className="border-2" />
    </div>
  </div>
</div>

          </section>

        </>


        {/* Pricing */}

        {/* Team */}
   
        {/* Testiominals */}
        <section className="testimonials"></section>
      </>

    </>
  )
}
export default About