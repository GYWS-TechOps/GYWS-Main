import "./Contact.css";
import { useState } from "react";
import { GeoAltFill, EnvelopeFill, TelephoneFill } from "react-bootstrap-icons";
import HCard from "../../HeaderCard/HCard";
import toast from "react-hot-toast";

function ContactUs() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

  }

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  const validatePhone = (phone) => {
    const re = /^[0-9\b]+$/;
    return re.test(phone) && phone.length === 10;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.firstName === "" || formData.lastName === "" || formData.email === "" || formData.phone === "" || formData.message === "") {
      toast.error("Please fill all the fields");
      return;
    }
    if (!validateEmail(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    if (!validatePhone(formData.phone)) {
      toast.error("Please enter a valid phone number");
      return;
    }
    if (formData.message.length < 30) {
      toast.error("Message should be atleast 30 characters long");
      return;
    }

    setLoading(true);

    try {
      let url = "https://gyws-backend-ptg5.onrender.com/api/contactUs";
      // url = "http://localhost:5000/api/contactUs";

      const response = await fetch(url,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      );

      const data = await response.json();

      if (data.status === true) {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: ""
        });
        setLoading(false);
        toast.success("Message Sent");
        window.scrollTo(0, 0);
      } else {
        setLoading(false);
        toast.error("Error sending message");
      }

    } catch (error) {
      setLoading(false);
      toast.error("Error sending message");
    }
  }

  return (
    <>
      <div className="contactUs">
        <div className="heading">
          <HCard head={"GET IN TOUCH"}></HCard><br />
        </div>

        <div className="box" style={{
        }}>
          <div className="contact form">
            <h2>
              <strong>SEND A MESSAGE</strong>
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="formBox" >
                <div className="row50">
                  <div className="inputBox">
                    <span></span>
                    <input type="text" placeholder="First Name" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
                  </div>

                  <div className="inputBox">
                    <span></span>
                    <input type="text" placeholder="Last Name" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
                  </div>
                </div>

                <div className="row50">
                  <div className="inputBox">
                    <span></span>
                    <input type="email" placeholder="Email Address" id="email" name="email" value={formData.email} onChange={handleChange} />
                  </div>

                  <div className="inputBox">
                    <span></span>
                    <input type="text" placeholder="Mobile" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                  </div>
                </div>

                <div className="row100">
                  <div className="inputBox">
                    <span></span>
                    <textarea placeholder="Write Your Message Here" id="message" name="message" value={formData.message} onChange={handleChange}></textarea>
                  </div>
                </div>

                <div className="row100">
                  <div className="inputBox">
                    {/* <input id="submitbutton" type="submit" value="SEND" /> */}
                    <button id="submitbutton" type="submit">
                      {loading ? "Sending..." : "Send"}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className="contact info">
            <h3>Contact Info</h3>
            <div className="infobox">
              <div>
                <span>
                  <GeoAltFill />
                </span>
                <p>
                  IIT Kharagpur , West Bengal <br />
                  INDIA
                </p>
              </div>
              <div>
                <span>
                  <EnvelopeFill />
                </span>
                <a href="mailto:gywsociety@gmail.com">gywsociety@gmail.com</a>
              </div>
              <div>
                <span>
                  <TelephoneFill />
                </span>
                <a href="tel:+918158878735">  +91 8158878735</a>
              </div>
            </div>
          </div>

          <div className="contact map ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3691.0241240906203!2d87.27507156219414!3d22.283160926123873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1693781012625!5m2!1sen!2sin&markers=color:red%7Clabel:I%7C22.283160926123873,87.27507156219414"
              style={{ border: "0" }}
              title="map"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
