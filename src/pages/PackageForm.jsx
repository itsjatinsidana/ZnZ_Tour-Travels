import Navbar from "./Navbar"
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import Swal from "sweetalert2";

import axios from "axios";

const PackageForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        checkIn: "",
        checkOut: "",
        phoneNumber: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // ✅ Validation: Check if any field is empty
        if (!formData.checkIn || !formData.checkOut || !formData.phoneNumber) {
            Swal.fire({
                icon: "error",
                title: "Oops!",
                text: "Please fill out all the fields!",
            });
            return;
        }

        // ✅ Validation: Check if phone number is exactly 10 digits
        if (!/^\d{10}$/.test(formData.phoneNumber)) {
            Swal.fire({
                icon: "error",
                title: "Invalid Phone Number",
                text: "Phone number must be exactly 10 digits!",
            });
            return;
        }
        const emailJSData = {
            service_id: "service_jf6k53b",
            template_id: "template_xyxtonl",
            user_id: "LvEjDrCif2WTsiHUy",
            template_params: {
                check_in: formData.checkIn,
                check_out: formData.checkOut,
                phone_number: formData.phoneNumber,
            },
        };

        try {
            const response = await axios.post("https://api.emailjs.com/api/v1.0/email/send", emailJSData, {
                headers: { "Content-Type": "application/json" },
            });
            console.log("email sent successfully")
            setFormData({ checkIn: "", checkOut: "", phoneNumber: "" })

            navigate("/viewpackage");
        } catch (error) {
            alert("Oops... Something went wrong!");
            console.error("EmailJS Error:", error);
        }
    };


    return (
        <>
            <Navbar />
            <section className="testimonials">
                <div
                    className="background bg-img bg-fixed section-padding pb-0"
                    data-background="img/slider/2.jpg"
                    data-overlay-dark={2}
                >
                    <div className="container">
                        <div className="row">
                            {/* Reservation */}
                            <div className="col-md-5 mb-30 mt-30">
                                <p>
                                    <i className="star-rating" />
                                    <i className="star-rating" />
                                    <i className="star-rating" />
                                    <i className="star-rating" />
                                    <i className="star-rating" />
                                </p>
                                <h5>
                                    Escape Awaits! Choose Your Dates & Let Us Handle the Rest!
                                </h5>
                                <div className="reservations mb-30">
                                    <div className="icon color-1">
                                        <span className="flaticon-call" />
                                    </div>
                                    <div className="text">
                                        <p className="color-1">Reservation</p>{" "}
                                        <a className="color-1" href="tel: +91-8054540854">
                                            +91-8054540854
                                        </a>
                                    </div>
                                </div>
                                <p>
                                    <i className="ti-check" />
                                    <small>Call us, it's toll-free.</small>
                                </p>
                            </div>
                            {/* Booking From */}
                            <div className="col-md-5 offset-md-2">
                                <div className="booking-box">
                                    <div className="head-box">
                                        <h6>ZnZ &amp; Tour&Travels</h6>
                                        <h4>Package Booking Form</h4>
                                    </div>
                                    <div className="booking-inner clearfix">
                                        <form
                                            onSubmit={handleSubmit}
                                            className="form1 clearfix"

                                        >
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="input1_wrapper">
                                                        <label style={{ display: "block", color: "black", fontSize: "16px" }}>Check In</label>


                                                        <div className="input1_inner">
                                                            <input
                                                                type="date"
                                                                className="form-control "
                                                                placeholder="Check in"
                                                                name="checkIn"
                                                                onChange={handleChange}
                                                                value={formData.checkIn}

                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="input1_wrapper">
                                                    <label style={{ display: "block", color: "black", fontSize: "16px" }}>Check Out</label>

                                                        <div className="input1_inner" >
                                                            <input
                                                                type="date"
                                                                className="form-control "
                                                                placeholder="Check out"
                                                                name="checkOut"
                                                                onChange={handleChange}
                                                                value={formData.checkOut}

                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-12">
                                                    <div className="input1_wrapper">
                                                    <label style={{ display: "block", color: "black", fontSize: "16px" }}>Phone Number</label>

                                                        <div className="input1_inner">
                                                            <input
                                                                type="number"
                                                                className="form-control "
                                                                placeholder="Phone number"
                                                                name="phoneNumber"
                                                                onChange={handleChange}
                                                                value={formData.phoneNumber}


                                                            />
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="col-md-12">
                                                    <button type="submit" className="btn-form1-submit mt-15">
                                                        View Packages
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
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
export default PackageForm