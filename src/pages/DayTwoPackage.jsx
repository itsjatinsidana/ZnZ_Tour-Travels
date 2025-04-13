import Navbar from "./Navbar"

const DayTwoPackage = () => {
    return (
        <>
            <>
                <Navbar />
                <header className="header slider">
                    <div className="owl-carousel owl-theme">
                        {/* The opacity on the image is made with "data-overlay-dark="number". You can change it using the numbers 0-9. */}
                        <div
                            className="text-center item bg-img"
                            data-overlay-dark={3}
                            data-background="img/slider/golden.jpg"
                        />
                        <div
                            className="text-center item bg-img"
                            data-overlay-dark={3}
                            data-background="img/slider/partition_muesem.jpeg"
                        />
                        <div
                            className="text-center item bg-img"
                            data-overlay-dark={3}
                            data-background="img/slider/khulche.jpg"

                        />
                    </div>
                    {/* arrow down */}
                    <div className="arrow bounce text-center">
                        <a href="#" data-scroll-nav={1} className="">
                            {" "}
                            <i className="ti-arrow-down" />{" "}
                        </a>
                    </div>
                </header>
                {/* Room Content */}
                <section className="rooms-page section-padding" data-scroll-index={1}
                style={{
                    backgroundImage: "url('img/slider/background.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    // filter: "blur(5px)",
                  }}>
                    <div className="container">
                        {/* project content */}
                        <div className="row">
                            <div className="col-md-12">
                                <span>
                                    <i className="star-rating" />
                                    <i className="star-rating" />
                                    <i className="star-rating" />
                                    <i className="star-rating" />
                                    <i className="star-rating" />
                                </span>
                                <div className="section-subtitle">Wheels up, worries down!</div>
                                <div className="section-title">Day 1 Trip</div>
                            </div>
                            <div className="col-md-8">
                                <p className="mb-30"style={{  fontSize: "16px",
                                                        fontWeight: "bold"}}>
                                    9:00 AM — Golden Temple Darshan
                                    Begin your day with a peaceful visit to the Golden Temple. Immerse yourself in the spiritual aura and admire the breathtaking architecture reflected in the holy Sarovar.
                                    <br />

                                    11:00 AM — Choose Your Experience:
                                    <br />
                                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
                                        <div className="col-md-12">
                                            <div className="butn-dark mt-15 mb-30" >
                                                {" "}
                                                <a href="" type="button"

                                                    data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal" style={{ textDecoration: "none", backgroundColor: "#ab8a62" }}>
                                                    <span>Read Full Itinerary</span>
                                                </a>{" "}
                                            </div>
                                        </div>

                                        
                                    </div>
                                    <div className="modal fade" id="exampleModal" tabIndex="-1">
                                        <div className="modal-dialog  modal-xl modal-dialog-scrollable">
                                            <div className="modal-content">

                                                {/* Modal Header */}
                                                <div className="modal-header">
                                                    <h5 className="modal-title"> <div className="section-title">Day 1 Trip</div></h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                </div>

                                                {/* Modal Body */}
                                                <div className="modal-body">
                                                    <div className="col-md-12">
                                                        <p className="mb-30" style={{
                                                            fontSize: "18px",
                                                            fontWeight: "bold"
                                                        }}>
                                                            9:00 AM — Golden Temple Darshan
                                                            Begin your day with a peaceful visit to the Golden Temple. Immerse yourself in the spiritual aura and admire the breathtaking architecture reflected in the holy Sarovar.
                                                            <br />
                                                            <br />
                                                            11:00 AM — Choose Your Experience:
                                                            <br />

                                                            Option 1: Extended Visit to Jallianwala Bagh & Partition Museum <br />

                                                            Spend more time exploring the powerful history of Jallianwala Bagh, understanding the stories behind the memorial.<br />

                                                            Then, dive into an in-depth journey at the Partition Museum, where personal accounts and historical artifacts paint a vivid picture of India's Partition.<br />
                                                            (This option gives you more time to thoroughly experience both sites.)
                                                            <br />
                                                            <br />
                                                            OR
                                                            <br />
                                                            <br />
                                                            Option 2: Heritage Walk with a Brief Jallianwala Bagh Visit
                                                            <br />
                                                            Start with a brief stop at Jallianwala Bagh to pay your respects and witness the key spots inside the memorial.

                                                            Then, continue on a captivating Heritage Walk through Amritsar’s narrow lanes and bustling bazaars. Discover hidden gems, centuries-old havelis, and experience the city's true cultural charm.
                                                            <br />  <br />

                                                            1:30 PM — Special Amritsari Kulcha Break (On Us!)
                                                            Time for a mouthwatering treat — enjoy piping hot, authentic Amritsari Kulchas with chole and lassi at one of the city's famous spots. This one's on us — your meal is covered!
                                                            <br />

                                                        </p>
                                                        <p className="mb-30" style={{
                                                            fontSize: "18px",
                                                            fontWeight: "bold"
                                                        }}>
                                                            2:00 PM — Depart for Wagah Border
                                                            Head towards the Wagah Border early to secure a good viewing spot for the electrifying Beating Retreat Ceremony.
                                                            <br /><br />
                                                            4:00 PM — Wagah Border Ceremony
                                                            Witness the iconic India-Pakistan border ceremony filled with patriotic energy, cheering crowds, and an unforgettable atmosphere.
                                                            <br /><br />
                                                            7:00 PM — Return to Stay
                                                            Head back to your luxurious ZnZ Travel & Stays accommodation for a relaxing evening.
                                                            <br />
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Modal Footer */}
                                                <div className="modal-footer">
                                                    <button type="button" className="btn " data-bs-dismiss="modal" style={{ backgroundColor: "#ab8a62" }}>
                                                        Close
                                                    </button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>



                                </p>


                                <div className="section-title">Day 2 Trip</div>
                                <div className="col-md-12">
                                    <p className="mb-30" style={{  fontSize: "16px",
                                                        fontWeight: "bold"}}>
                                        Start Time: 9:30 AM
                                        <br />
                                        9:30 AM — Visit Shaheeda Sahib
                                        <br />
                                        Begin your day with a visit to Shaheeda Sahib Gurudwara, a sacred place dedicated to Baba Deep Singh Ji, the legendary Sikh warrior who fought bravely for the sanctity of the Golden Temple.

                                        <br />
                                        <br />
                                        10:30 AM — Visit Durgiana Mandir
                                        Head to the Durgiana Mandir, also known as the Silver Temple, resembling the Golden Temple's architecture. It’s a beautiful Hindu shrine dedicated to Goddess Durga, Lord Vishnu, and Hanuman.

                                        <br />
                                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
                                            <div className="col-md-12">
                                                <div className="butn-dark mt-15 mb-30" >
                                                    {" "}
                                                    <a href="" type="button"

                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal2" style={{ textDecoration: "none", backgroundColor: "#ab8a62" }}>
                                                        <span>Read Full Itinerary</span>
                                                    </a>{" "}
                                                </div>
                                            </div>

                                           
                                        </div>
                                        <div className="modal fade" id="exampleModal2" tabIndex="-1">
                                            <div className="modal-dialog  modal-xl modal-dialog-scrollable">
                                                <div className="modal-content">

                                                    {/* Modal Header */}
                                                    <div className="modal-header">
                                                        <h5 className="modal-title"> <div className="section-title">Day 2 Trip</div></h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                    </div>

                                                    {/* Modal Body */}
                                                    <div className="modal-body">
                                                        <div className="col-md-12">
                                                            <p className="mb-30" style={{
                                                                fontSize: "18px",
                                                                fontWeight: "bold"
                                                            }}>
                                                                Start Time: 9:30 AM
                                                                <br />
                                                                9:30 AM — Visit Shaheeda Sahib
                                                                <br />
                                                                Begin your day with a visit to Shaheeda Sahib Gurudwara, a sacred place dedicated to Baba Deep Singh Ji, the legendary Sikh warrior who fought bravely for the sanctity of the Golden Temple.

                                                                <br />
                                                                <br />
                                                                10:30 AM — Visit Durgiana Mandir
                                                                Head to the Durgiana Mandir, also known as the Silver Temple, resembling the Golden Temple's architecture. It’s a beautiful Hindu shrine dedicated to Goddess Durga, Lord Vishnu, and Hanuman.
                                                            </p>
                                                            <p className="mb-30" style={{
                                                                fontSize: "18px",
                                                                fontWeight: "bold"
                                                            }}>
                                                                12:00 PM — Lunch Break (Meal of Your Choice)
                                                                Enjoy a relaxing lunch at a restaurant of your preference. We’ll recommend some great local spots — whether you’re in the mood for classic Punjabi cuisine or something light and refreshing.
                                                                <br />
                                                                <br />
                                                                1:30 PM — Visit Ram Tirath Temple
                                                                Explore the historic Ram Tirath Temple, believed to be the birthplace of Lav and Kush (sons of Lord Ram). It holds great significance from the Ramayana era, with a sacred pond and ancient structures.
                                                                <br />
                                                                <br />
                                                                3:00 PM — Sadda Pind (Tickets on Us!)
                                                                Step into a vibrant Punjabi village experience at Sadda Pind — a live cultural village showcasing traditional Punjabi life. From folk dances, pottery, and handcrafts to tractor rides and live music, it’s a perfect way to soak in Punjab’s rich heritage.
                                                                ✅ Tickets are covered by us, including the meal inside Sadda Pind!
                                                                <br />
                                                                <br />
                                                                6:00 PM — Return to Stay
                                                                Head back to your cozy ZnZ Travel & Stays accommodation for a restful evening.
                                                                <br />
                                                            </p>
                                                        </div>
                                                    </div>

                                                    {/* Modal Footer */}
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn " data-bs-dismiss="modal" style={{ backgroundColor: "#ab8a62" }}>
                                                            Close
                                                        </button>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>



                                    </p>

                                </div>
                                <div className="row">
                                    {/* <div className="col-md-6">
                                        <h6>Check-in</h6>
                                        <ul className="list-unstyled page-list mb-30">
                                            <li>
                                                <div className="page-list-icon">
                                                    {" "}
                                                    <span className="ti-check" />{" "}
                                                </div>
                                                <div className="page-list-text">
                                                    <p>Check-in from 9:00 AM - anytime</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="page-list-icon">
                                                    {" "}
                                                    <span className="ti-check" />{" "}
                                                </div>
                                                <div className="page-list-text">
                                                    <p>Early check-in subject to availability</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div> */}
                                    {/* <div className="col-md-6">
                                        <h6>Check-out</h6>
                                        <ul className="list-unstyled page-list mb-30">
                                            <li>
                                                <div className="page-list-icon">
                                                    {" "}
                                                    <span className="ti-check" />{" "}
                                                </div>
                                                <div className="page-list-text">
                                                    <p>Check-out 7:00 PM — Return to Stay</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="page-list-icon">
                                                    {" "}
                                                    <span className="ti-check" />{" "}
                                                </div>
                                                <div className="page-list-text">
                                                    <p>Express check-out</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div> */}
                                    {/* <div className="col-md-12">
                                        <h6>Special check-in instructions</h6>
                                        <p>
                                            Guests will receive an email 5 days before arrival with check-in
                                            instructions; front desk staff will greet guests on arrival For
                                            more details, please contact the property using the information
                                            on the booking confirmation.
                                        </p>
                                    </div>
                                    <div className="col-md-12">
                                        <h6>Pets</h6>
                                        <p>Pets not allowed</p>
                                    </div>
                                    <div className="col-md-12">
                                        <h6>Children and extra beds</h6>
                                        <p>
                                            Children are welcome Kids stay free! Children stay free when
                                            using existing bedding; children may not be eligible for
                                            complimentary breakfast Rollaway/extra beds are available for $
                                            10 per day.
                                        </p>
                                    </div> */}
                                    <div className="col-md-12">
                                        <div className="butn-dark mt-15 mb-30">
                                            {" "}
                                            <a href="rooms2.html">
                                                <span>Book Now</span>
                                            </a>{" "}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 offset-md-1">
                                <h6>Amenities</h6>
                                <ul className="list-unstyled page-list mb-30">
                                    <li>
                                        <div className="page-list-icon">
                                            {" "}
                                            <span className="flaticon-group" />{" "}
                                        </div>
                                        <div className="page-list-text">
                                            <p>1-2 Persons</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="page-list-icon">
                                            {" "}
                                            <span className="flaticon-wifi" />{" "}
                                        </div>
                                        <div className="page-list-text">
                                            <p>Free Wifi</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="page-list-icon">
                                            {" "}
                                            <span className="flaticon-clock-1" />{" "}
                                        </div>
                                        <div className="page-list-text">
                                            <p>200 sqft room</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="page-list-icon">
                                            {" "}
                                            <span className="flaticon-breakfast" />{" "}
                                        </div>
                                        <div className="page-list-text">
                                            <p>Breakfast</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="page-list-icon">
                                            {" "}
                                            <span className="flaticon-towel" />{" "}
                                        </div>
                                        <div className="page-list-text">
                                            <p>Towels</p>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </>

        </>
    )
}
export default DayTwoPackage