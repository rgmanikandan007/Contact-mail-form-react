import React, { useState } from "react";
import { FaAddressBook } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { CiMail } from "react-icons/ci";

function Mailer() {
  const [result, setResult] = useState("");

  const Sendmail = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "");
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        setResult(data.message || "Something went wrong.");
        console.error("Error:", data);
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("Failed to submit the form. Please try again.");
    }
  };

  return (
    <div className="mailer-container">
      <div className="mailer">
        <h2>Play & Learn - Let's Connect!</h2>
        <p>
          Discover the joy of learning through fun, interactive, and creative
          activities. Reach out to us with your questions, suggestions, or
          feedback. We'd love to hear from you!
        </p>
        <form onSubmit={Sendmail}>
          <label>Username:</label>
          <input type="text" placeholder="Enter Username" name="username" required />
          <label>Email:</label>
          <input type="email" placeholder="Enter Email" name="email" required />
          <label>Message:</label>
          <textarea placeholder="Enter Message" name="message" required />
          <div className="mailer-btn">
            <input type="submit" value="Send" />
          </div>
        </form>
        <p>{result}</p>
      </div>

      <div className="information">
        <div className="address">
          <div className="icon">
            <FaAddressBook />
          </div>
          <div>
            <h3>Address:</h3>
            <p>
              Yemaraj Gardens, Periyar Nagar, Thayaarthoppu Road, Bungalow
              Surandai, Surandai - 627 859, <br />
              Tenkasi District, Tamilnadu, India
            </p>
          </div>
        </div>
        <div className="callus">
          <div className="icon">
            <IoIosCall />
          </div>
          <div>
            <h3>Call Us:</h3>
            <p>+91 9444069888</p>
          </div>
        </div>
        <div className="mail">
          <div className="icon">
            <CiMail />
          </div>
          <div>
            <h3>Mail Info:</h3>
            <p>arumugam@playlearnsciencepark.com</p>
            <p>customersupport@playlearnsciencepark.com</p>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d126109.47263858102!2d77.41593370000001!3d8.9794152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1736146621852!5m2!1sen!2sin"
            width="600"
            height="200"
            style={{ marginRight: "2px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Mailer;
