import React from "react";
import { motion } from "framer-motion";
import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="about-page flex flex-col items-center p-6 bg-cover bg-center min-h-screen">
      <div className="about-us">
        <h1 className="text-black text-5xl font-bold">About Us</h1>
        <p className="text-textColor font-semibold text-xl">
          <br></br> Welcome to Bargain-Bites the premier destination for
          restaurant discounts! We partner with restaurants across the country
          to bring you the best deals on your favorite meals, all in one place.
          At Bargain-Bites, we believe that everyone should be able to enjoy
          great food at an affordable price. That's why we've made it our
          mission to connect you with top restaurants and their amazing menus,
          while offering you exclusive discounts and offers that you won't find
          anywhere else. <br></br>Whether you're in the mood for Italian,
          Chinese, American, or any other cuisine, our easy-to-use platform
          makes it simple to browse and order from your favorite restaurants
          online. Plus, with our regular deals and promotions, you'll always get
          the best value for your money. So why wait? Start exploring our
          website today and discover a world of delicious food and unbeatable
          discounts. Whether you're looking for a quick lunch or a romantic
          dinner, we've got you covered. <br></br>
          <br></br>Join our community of food lovers and start enjoying amazing
          discounts on your favorite restaurants today. With Bargain-Bites ,
          it's never been easier to eat well and save money at the same time!
          <br></br>
                  
        </p>
      </div>
      <h1 className="text-orange-400 text-3xl text-md ">Our Developers</h1>
      <div className="developers-section">
        <motion.div
          whileHover={{ scale: 0.85 }}
          className="developer-card flex items-center justify-center "
        >
          <div>
            <img
              src="https://drive.google.com/uc?export=view&id=1nSXVGFp71EijLjnFE-qLirnd4Vvbqi--"
              alt="Developer 1"
            />
            <h3>Aditya parashar</h3>
            <a href="https://www.linkedin.com/in/aditya-parashar-0979541ba/">
              LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 0.85 }}
          className="developer-card flex items-center justify-center"
        >
          <div>
            <img
              src="https://media.licdn.com/dms/image/D4D03AQHY2-I8QxRNwg/profile-displayphoto-shrink_800_800/0/1679061703390?e=1689206400&v=beta&t=ksquYcx84MNqfB4tjKFjpZIyKbdlSXawsgLLtC9mcdw"
              alt="Developer 2"
            />
            <h3>Nirbhay Chopra</h3>
            <a href="https://www.linkedin.com/in/nirbhay-chopra-00b50b241/">
              LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 0.85 }}
          className="developer-card flex items-center justify-center"
        >
          <div>
            <img
              src="https://media.licdn.com/dms/image/D4D03AQFaKNogNrT67Q/profile-displayphoto-shrink_800_800/0/1679689790513?e=2147483647&v=beta&t=K1wyrjcB5J9jSvibMYPCI3iYrJtp08NVPyN5l4Xjg1A"
              alt="Developer 3"
            />
            <h3>Karan Ahuja </h3>
            <a href="https://www.linkedin.com/in/karan-ahuja-b1b690201/">
              LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 0.85 }}
          className="developer-card flex items-center justify-center"
        >
          <div>
            <img
              src="https://drive.google.com/uc?export=view&id=1-r27bZ1xYFpS4geazIaG-yN7ElO_QBFX"
              alt="Developer 4"
            />
            <h3>Ajay Gupta</h3>
            <a href="https://www.linkedin.com/in/ajay-kumar-gupta-179209211/">
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutPage;
