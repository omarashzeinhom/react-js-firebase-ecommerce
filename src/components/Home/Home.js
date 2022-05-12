import React from "react";
import "./Home.css";
import Product from "../Product/Product";
//images import
import BGVID from "../../assets/images/background/background.mp4";

function Home() {
  return (
      <div className="home">
        <div className="home__container">
          <div className="home__row">
            {/* Optimize performance here */}
            <video
              autoPlay={true}
              muted={true}
              loop={false}
              className="home__image"
              loading="lazy"
              alt="home__bgimg"
              src={BGVID}
              type="video/mp4"
            />
                        {/* Optimize performance here */}

          </div>

          <div className="home__row">
            <Product
              // Name
              title="Lip stick"
              //Price
              price={19.99}
              //Rating
              rating={4}
              //Image
              image="https://res.cloudinary.com/du9aympvd/image/upload/v1652280154/product1_fcepwt.webp"
            />
            <Product
              title="Purse"
              price={79.99}
              image="https://res.cloudinary.com/du9aympvd/image/upload/v1652280152/product_2_n1hlhj.webp"
              rating={3}
            />
          </div>

          <div className="home__row">
            <Product
              title="USB Flash Drive 8GB"
              price={3.99}
              image="https://res.cloudinary.com/du9aympvd/image/upload/v1652279961/pexels-eprism-studio-335257_p96vx2.webp"
              rating={3}

            />
          </div>

          <div className="home__row">
            <Product
              title="Camera"
              price={99.99}
              image="https://res.cloudinary.com/du9aympvd/image/upload/v1652279962/pexels-math-90946_isoyso.webp"
              rating={2}
            />
          </div>
        </div>
        {/* End home and home__container*/}
      </div>
  );
}

export default Home;
