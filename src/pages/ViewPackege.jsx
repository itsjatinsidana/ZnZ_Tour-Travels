import Navbar from "./Navbar"

const ViewPackage = () =>{
    return(
    <>
    <Navbar/>
    <section className="rooms1 section-padding bg-blck">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="section-subtitle">
          <span>Explore the Golden City: Best Amritsar Tour Packages for an <br />Unforgettable Experience!</span>
        </div>
        <div className="section-title">
          <span>Our Packages</span>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <div className="owl-carousel owl-theme">

           {/* Customize Plans */}
           <div className="item">
            <div className="position-re o-hidden">
              <img src="img/rooms/customizeplan.jpg" alt="" style={{ height: "525px" }} />
            </div>
            <span className="category">
              <a href="rooms2.html">Book</a>
            </span>
            <div className="con">
           
              <h5><a href="room-details.html">Customize Plans</a></h5>
              <div className="line" />
              <div className="row facilities">
                <div className="col col-md-5 text-end">
                  <div className="permalink">
                    <a href="/customizeplan">Details <i className="ti-arrow-right" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
          {/* 1 Day Trip */}
          <div className="item">
            <div className="position-re o-hidden">
              <img src="img/rooms/golden (3).jpg" alt="" style={{ height: "525px" }} />
            </div>
            <span className="category">
              <a href="rooms2.html">Book</a>
            </span>
            <div className="con">
             
              <h5><a href="room-details.html">1 Day Trip</a></h5>
              <div className="line" />
              <div className="row facilities">
                <div className="col col-md-5 text-end">
                  <div className="permalink">
                    <a href="/dayone">Details <i className="ti-arrow-right" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2 Day Trip */}
          <div className="item">
            <div className="position-re o-hidden">
              <img src="img/rooms/ranglapunjab.jpg" alt="" style={{ height: "525px" }} />
            </div>
            <span className="category">
              <a href="rooms2.html">Book</a>
            </span>
            <div className="con">
            
              <h5><a href="room-details.html">2 Day Trip</a></h5>
              <div className="line" />
              <div className="row facilities">
                <div className="col col-md-5 text-end">
                  <div className="permalink">
                    <a href="/daytwo">Details <i className="ti-arrow-right" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Day Trip */}
          <div className="item">
            <div className="position-re o-hidden">
              <img src="img/rooms/statue.jpg" alt="" style={{ height: "525px" }} />
            </div>
            <span className="category">
              <a href="rooms2.html">Book</a>
            </span>
            <div className="con">
          
              <h5><a href="room-details.html">3 Day Trip</a></h5>
              <div className="line" />
              <div className="row facilities">
                <div className="col col-md-5 text-end">
                  <div className="permalink">
                    <a href="/daythree">Details <i className="ti-arrow-right" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

         

        </div>
      </div>
    </div>
  </div>
</section>



    </>
    )
}
export default ViewPackage