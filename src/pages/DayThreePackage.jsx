import Navbar from "./Navbar"

const DayThreePackage = () => {
    return (
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
            <section className="rooms-page section-padding" data-scroll-index={1} style={{
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
                            <p className="mb-30" style={{
                                fontSize: "16px",
                                fontWeight: "normal",
                                textAlign: "justify"
                            }}>
                                <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                                    9:00 AM — Golden Temple Darshan
                                </span>
                                <br />
                                Begin your day with a peaceful visit to the Golden Temple. Immerse yourself in the spiritual aura and admire the breathtaking architecture reflected in the holy Sarovar.
                                <br />
                                <br />
                                <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                                    11:00 AM — Choose Your Experience:
                                </span>

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
                                                    <p
                                                        className="mb-30"
                                                        style={{
                                                            fontSize: "16px",
                                                            fontWeight: "normal",
                                                            textAlign: "justify"
                                                        }}
                                                    >
                                                        <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                                                            9:00 AM — Golden Temple Darshan
                                                        </span>
                                                        <br />
                                                        Begin your day with a peaceful visit to the Golden Temple. Immerse yourself in the spiritual aura and admire the breathtaking architecture reflected in the holy Sarovar.
                                                        <br /><br />

                                                        <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                                                            11:00 AM — Choose Your Experience:
                                                        </span>
                                                        <br /><br />

                                                        <span style={{ fontWeight: "bold" }}>
                                                            Option 1: Extended Visit to Jallianwala Bagh & Partition Museum
                                                        </span>
                                                        <br />
                                                        Spend more time exploring the powerful history of Jallianwala Bagh, understanding the stories behind the memorial.
                                                        <br />
                                                        Then, dive into an in-depth journey at the Partition Museum, where personal accounts and historical artifacts paint a vivid picture of India's Partition.
                                                        (This option gives you more time to thoroughly experience both sites.)
                                                        <br /><br />

                                                        <strong>OR</strong>
                                                        <br /><br />

                                                        <span style={{ fontWeight: "bold" }}>
                                                            Option 2: Heritage Walk with a Brief Jallianwala Bagh Visit
                                                        </span>
                                                        <br />
                                                        Start with a brief stop at Jallianwala Bagh to pay your respects and witness the key spots inside the memorial.
                                                        <br />
                                                        Then, continue on a captivating Heritage Walk through Amritsar’s narrow lanes and bustling bazaars. Discover hidden gems, centuries-old havelis, and experience the city's true cultural charm.
                                                        <br /><br />

                                                        <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                                                            1:30 PM — Special Amritsari Kulcha Break (On Us!)
                                                        </span>
                                                        <br />
                                                        Time for a mouthwatering treat — enjoy piping hot, authentic Amritsari Kulchas with chole and lassi at one of the city's famous spots. This one's on us — your meal is covered!
                                                    </p>

                                                    <p className="mb-30" style={{
                                                        fontSize: "16px",
                                                        fontWeight: "normal",
                                                        textAlign: "justify"
                                                    }}>
                                                        <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                                                            2:00 PM — Depart for Wagah Border
                                                        </span>
                                                        <br />
                                                        Head towards the Wagah Border early to secure a good viewing spot for the electrifying Beating Retreat Ceremony.
                                                        <br /><br />
                                                        <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                                                            4:00 PM — Wagah Border Ceremony
                                                        </span>
                                                        <br />
                                                        Witness the iconic India-Pakistan border ceremony filled with patriotic energy, cheering crowds, and an unforgettable atmosphere.
                                                        <br /><br />
                                                        <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                                                            7:30 PM — Dinner at an Iconic Amritsar Restaurant

                                                        </span>
                                                        <br />
                                                        Experience a memorable dinner at one of Amritsar’s most iconic dining spots. (A curated list of restaurant options will be shared with you — pick your favorite!)

                                                        <br />
                                                        <br />
                                                        <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                                                            9:00 PM — Return to Stay


                                                        </span>

                                                        <br />
                                                        You’ll be taken back to your accommodation for a restful end to your incredible day in Amritsar.
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
                                <p className="mb-30" style={{
                                    fontSize: "16px",
                                    fontWeight: "normal",
                                    textAlign: "justify"
                                }}>
                                    <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                                        Start Time: 9:30 AM
                                    </span>

                                    <br />
                                    9:30 AM — Breakfast at Kanha Sweets

                                    <br />
                                    Start your day with a hearty Amritsari breakfast at the iconic Kanha Sweets, famous for its crispy puri-chole and sweet halwa. A true local favorite to energize your morning!

                                    <br />
                                    <br /> <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                                        10:15 AM — Visit Durgiana Mandir
                                    </span>
                                    <br />
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
                                                            fontSize: "16px",
                                                            fontWeight: "normal",
                                                            textAlign: "justify"
                                                        }}>
                                                            <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                Start Time: 9:30 AM
                                                            </span>
                                                            <br /><br />

                                                            <span style={{ fontWeight: "bold" }}>
                                                                9:30 AM — Breakfast at Kanha Sweets

                                                            </span>
                                                            <br />
                                                            Start your day with a hearty Amritsari breakfast at the iconic Kanha Sweets, famous for its crispy puri-chole and sweet halwa. A true local favorite to energize your morning!

                                                            <br /><br />

                                                            <span style={{ fontWeight: "bold" }}>
                                                                10:15 AM — Visit Durgiana Mandir
                                                            </span>
                                                            <br />
                                                            Head to the Durgiana Mandir, also known as the Silver Temple, resembling the Golden Temple's architecture. It’s a beautiful Hindu shrine dedicated to Goddess Durga, Lord Vishnu, and Hanuman.
                                                        </p>

                                                        <p className="mb-30" style={{
                                                            fontSize: "16px",
                                                            fontWeight: "normal",
                                                            textAlign: "justify"
                                                        }}>
                                                            <span style={{ fontWeight: "bold" }}>
                                                                11:00 PM — Partition Museum Visit

                                                            </span>
                                                            <br />
                                                            Explore the emotionally powerful Partition Museum, where personal stories, photographs, and exhibits bring to life the impact of the 1947 Partition on millions.


                                                            <br /><br />

                                                            <span style={{ fontWeight: "bold" }}>
                                                                12:15 PM —  Market Stroll: Hall Bazaar, Katra Jaimal Singh & Guru Bazaar

                                                            </span>
                                                            <br />
                                                            Get ready for a lively shopping experience in Amritsar's most iconic markets. Browse vibrant phulkari work, sparkling jewelry, Punjabi juttis, fabrics, and souvenirs in Hall Bazaar, Katra Jaimal Singh, and Guru Bazaar.

                                                            <br /><br />

                                                            <span style={{ fontWeight: "bold" }}>
                                                                1:15 PM — Famous Giani di Lassi Break

                                                            </span>
                                                            <br />
                                                            Cool down with the legendary Pede Wali Lassi from Giani di Lassi — thick, creamy, and a true taste of Amritsar.

                                                            <br /><br />

                                                            <span style={{ fontWeight: "bold" }}>
                                                                1:30 PM —  Lunch at an Iconic Amritsar Restaurant

                                                            </span>
                                                            <br />
                                                            Enjoy a flavorful lunch at one of Amritsar’s top-rated restaurants. We’ll recommend the best based on your mood — whether it’s a rustic dhaba or a contemporary Punjabi kitchen.

                                                            <br /><br />

                                                            <span style={{ fontWeight: "bold" }}>
                                                                3:00 PM — Visit Ram Tirath Temple

                                                            </span>
                                                            <br />
                                                            Step into mythology at the Ram Tirath Temple, believed to be the birthplace of Lav and Kush, sons of Lord Ram. The site features a sacred pond, ancient caves, and a giant Hanuman statue.
                                                            <br /><br />

                                                            <span style={{ fontWeight: "bold" }}>
                                                                4:30 PM — Sadda Pind (Tickets & Dinner Included!)


                                                            </span>
                                                            <br />
                                                            Experience traditional Punjabi village life at Sadda Pind — from folk dances, live music, tractor rides, and artisan crafts to a delicious Punjabi dinner.
                                                            ✅ Entry and dinner are fully covered — a cultural evening you’ll never forget!
                                                            <br /><br />

                                                            <span style={{ fontWeight: "bold" }}>

                                                                10:00 PM — Return to Stay


                                                            </span>
                                                            <br />
                                                            Wind down and return to your welcoming ZnZ Travel & Stays accommodation after a fun-filled and memorable day.
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
                            <div className="section-title">Day 3 Trip</div>
                            <div className="col-md-12">
                                <p className="mb-30" style={{
                                    fontSize: "16px",
                                    fontWeight: "normal",
                                    textAlign: "justify"
                                }}>
                                    <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                                        Start Time: 9:30 AM
                                    </span>
                                    <br />
                                    9:00 AM — Breakfast at Bharawan Da Dhaba (Ranjit Avenue)


                                    <br />
                                    Start your day with a flavorful Punjabi breakfast at the iconic Bharawan Da Dhaba, known for its rich, traditional dishes served in a cozy setting.

                                    <br />
                                    <br /> <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                                        10:00 AM — Punjab State War Heroes Memorial & Museum

                                    </span>
                                    <br />
                                    Pay tribute to the valor of Punjab's soldiers. Explore insightful exhibits, aircraft displays, and stories that bring India’s military history to life.



                                    <br />
                                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
                                        <div className="col-md-12">
                                            <div className="butn-dark mt-15 mb-30" >
                                                {" "}
                                                <a href="" type="button"

                                                    data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal3" style={{ textDecoration: "none", backgroundColor: "#ab8a62" }}>
                                                    <span>Read Full Itinerary</span>
                                                </a>{" "}
                                            </div>
                                        </div>


                                    </div>
                                    <div className="modal fade" id="exampleModal3" tabIndex="-1">
                                        <div className="modal-dialog  modal-xl modal-dialog-scrollable">
                                            <div className="modal-content">

                                                {/* Modal Header */}
                                                <div className="modal-header">
                                                    <h5 className="modal-title"> <div className="section-title">Day 3 Trip</div></h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                </div>

                                                {/* Modal Body */}
                                                <div className="modal-body">
                                                    <div className="col-md-12">
                                                        <p className="mb-30" style={{
                                                            fontSize: "16px",
                                                            fontWeight: "normal",
                                                            textAlign: "justify"
                                                        }}>
                                                            <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                                                                Start Time: 9:30 AM
                                                            </span>
                                                            <br />
                                                            9:00 AM — Breakfast at Bharawan Da Dhaba (Ranjit Avenue)


                                                            <br />
                                                            Start your day with a flavorful Punjabi breakfast at the iconic Bharawan Da Dhaba, known for its rich, traditional dishes served in a cozy setting.

                                                            <br />
                                                            <br /> <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                                                                10:00 AM — Punjab State War Heroes Memorial & Museum

                                                            </span>
                                                            <br />
                                                            Pay tribute to the valor of Punjab's soldiers. Explore insightful exhibits, aircraft displays, and stories that bring India’s military history to life.



                                                            <br />
                                                            <br /> <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                                                                11:30 AM — Visit Pul Kanjri


                                                            </span>
                                                            <br />
                                                            Explore Pul Kanjri, a peaceful heritage site connected to Maharaja Ranjit Singh and the India-Pakistan history. A serene and culturally significant stop.

                                                            <br />
                                                            <br /><span style={{ fontWeight: "bold", fontSize: "18px" }}>
                                                                1:00 PM — Real Village Visit & Lunch


                                                            </span>
                                                            <br />
                                                            Experience the soul of Punjab with a true village visit. Stroll through farmlands, meet local families, and enjoy a freshly cooked Punjabi meal in a rustic, heartwarming setting. A truly authentic slice of local life.
                                                            <br />
                                                            <br /><span style={{ fontWeight: "bold", fontSize: "18px" }}>
                                                                4:00 PM — Iconic Amritsar Street Food Tasting



                                                            </span>
                                                            <br />
                                                            Back in town, embark on a flavorful walk through Amritsar’s most loved street food spots. Try legendary tandoori snacks, spicy chaats, and sweet treats with our guide.
                                                            <br />
                                                            <br /><span style={{ fontWeight: "bold", fontSize: "18px" }}>
                                                                1:00 PM — Real Village Visit & Lunch


                                                            </span>
                                                            <br />
                                                            Experience the soul of Punjab with a true village visit. Stroll through farmlands, meet local families, and enjoy a freshly cooked Punjabi meal in a rustic, heartwarming setting. A truly authentic slice of local life.


                                                            <br />
                                                            <br /><span style={{ fontWeight: "bold", fontSize: "18px" }}>
                                                                7:00 PM — Kulfa Stop



                                                            </span>
                                                            <br />
                                                            Savor the famous Amritsari Kulfa — a rich dessert layered with falooda, rabri, and crushed ice. It’s cold, creamy, and absolutely unforgettable.
                                                            <br />
                                                            <br /><span style={{ fontWeight: "bold", fontSize: "18px" }}>
                                                                7:30 PM — Gobindgarh Fort (Tickets & Experiences on Us!)



                                                            </span>
                                                            <br />
                                                            End your trip with an evening at Gobindgarh Fort, packed with heritage and culture:
                                                            <br />✅ Live folk performances (Bhangra, Gidda, Gatka)
                                                            <br />✅ 360° Light & Sound Show
                                                            <br />✅ Artisan shops, museums & exhibits
                                                            <br />✅ Cultural ambiance all around

                                                            <br />
                                                            <br /><span style={{ fontWeight: "bold", fontSize: "18px" }}>
                                                                9:00 PM — Dinner at Amritsar Haveli



                                                            </span>
                                                            <br />
                                                            Enjoy a grand Punjabi dinner at the traditional-style Amritsar Haveli — perfect for your final night in the city.
                                                            <br />
                                                            <br /><span style={{ fontWeight: "bold", fontSize: "18px" }}>
                                                                10:00 PM — Return to Stay



                                                            </span>
                                                            <br />
                                                            Head back to your welcoming ZnZ Travel & Stays accommodation after a rich, immersive day in Amritsar.
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
                                        <p>Welcome kits containing all eassentials for Amritsar trip.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="page-list-icon">
                                        {" "}
                                        <span className="flaticon-wifi" />{" "}
                                    </div>
                                    <div className="page-list-text">
                                        <p> 24x7 representative available.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="page-list-icon">
                                        {" "}
                                        <span className="flaticon-group" />{" "}
                                    </div>
                                    <div className="page-list-text">
                                        <p> 7-seater cars
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="page-list-icon">
                                        {" "}
                                        <span className="flaticon-breakfast" />{" "}
                                    </div>
                                    <div className="page-list-text">
                                        <p>Major entry tickets included.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="page-list-icon">
                                        {" "}
                                        <span className="flaticon-wifi" />{" "}
                                    </div>
                                    <div className="page-list-text">
                                        <p>In-vehicle Wifi available if required.</p>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
export default DayThreePackage