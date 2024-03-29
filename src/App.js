import React, { useRef } from "react";
import "./App.css";
import homeImg from "./images/home.png";
import aboutImg from "./images/about.png";
import doctorImg from "./images/doc-2.png";
import bookImg from "./images/book.png";
import reviewImg from "./images/review-1.png";
import blogImg1 from "./images/blog-1.jpg";
import blogImg2 from "./images/blog-2.jpg";
import blogImg3 from "./images/blog-3.jpg";
import Form from "./Components/Form";

function App() {
  const navbarRef = useRef();

  const menuRef = useRef();

  const menuFunc = () => {
    menuRef.current.classList.toggle("fa-times");
    navbarRef.current.classList.toggle("active");
  };

  window.onscroll = () => {
    menuRef.current.classList.remove("fa-times");
    navbarRef.current.classList.remove("active");
  };
  return (
    <React.Fragment>
      {/* header section starts  */}
      <header className="header">
        <a href="#" className="logo">
          <i className="fas fa-heartbeat"></i> Clinicy
        </a>

        <nav className="navbar" ref={navbarRef}>
          <a href="#home">home</a>
          <a href="#services">services</a>
          <a href="#about">about</a>
          <a href="#doctors">doctors</a>
          <a href="#book">book</a>
          <a href="#review">review</a>
          <a href="#blogs">blogs</a>
        </nav>

        <div
          ref={menuRef}
          onClick={menuFunc}
          id="menu-btn"
          className="fas fa-bars"
        ></div>
      </header>
      {/* header section ends */}

      {/* home section starts  */}
      <section className="home" id="home">
        <div className="image">
          <img src={homeImg} alt="homeImg" />
        </div>

        <div className="content">
          <h3>stay safe, stay healthy</h3>
          <p>
            clinicy hospitals are distinguished in providing health care
            services of the highest possible quality.
          </p>
          <a href="#" className="btn">
            contact us <span className="fas fa-chevron-right"></span>
          </a>
        </div>
      </section>
      {/* home section ends */}

      {/* icons section starts  */}
      <section className="icons-container">
        <div className="icons">
          <i className="fas fa-user-md"></i>
          <h3>140+</h3>
          <p>doctors at work</p>
        </div>

        <div className="icons">
          <i className="fas fa-users"></i>
          <h3>1040+</h3>
          <p>satisfied patients</p>
        </div>

        <div className="icons">
          <i className="fas fa-procedures"></i>
          <h3>500+</h3>
          <p>bed facility</p>
        </div>

        <div className="icons">
          <i className="fas fa-circle-h"></i>
          <h3>80+</h3>
          <p>available hospitals</p>
        </div>
      </section>
      {/* icons section ends  */}

      {/* services section starts  */}
      <section className="services" id="services">
        <h1 className="heading">
          our <span>services</span>
        </h1>
        <div className="box-container">
          <div className="box">
            <i className="fas fa-heart-circle-check"></i>
            <h3>free checkups</h3>
            <p>
              A comprehensive medical examination for all body functions for
              free.
            </p>
            <a href="#" className="btn">
              learn more <span className="fas fa-chevron-right"></span>
            </a>
          </div>

          <div className="box">
            <i className="fa-sharp fa-solid fa-stethoscope"></i>
            <h3>24/7 ambulance</h3>
            <p>Ambulance service and emergency reception throughout the day.</p>
            <a href="#" className="btn">
              learn more <span className="fas fa-chevron-right"></span>
            </a>
          </div>

          <div className="box">
            <i className="fas fa-user-md"></i>
            <h3>expert doctors</h3>
            <p>Distinguished doctors in various medical specialties.</p>
            <a href="#" className="btn">
              learn more <span className="fas fa-chevron-right"></span>
            </a>
          </div>

          <div className="box">
            <i className="fas fa-pills"></i>
            <h3>medicines</h3>
            <p>Full provision of all patients' needs, including medicines.</p>
            <a href="#" className="btn">
              learn more <span className="fas fa-chevron-right"></span>
            </a>
          </div>

          <div className="box">
            <i className="fas fa-procedures"></i>
            <h3>bed facility</h3>
            <p>Beds are available, whether emergency or reception</p>
            <a href="#" className="btn">
              learn more <span className="fas fa-chevron-right"></span>
            </a>
          </div>

          <div className="box">
            <i className="fas fa-heartbeat"></i>
            <h3>total care</h3>
            <p>Comprehensive medical care for all patient needs.</p>
            <a href="#" className="btn">
              learn more <span className="fas fa-chevron-right"></span>
            </a>
          </div>
        </div>
      </section>
      {/* services section ends  */}

      {/* about section starts  */}
      <section className="about" id="about">
        <h1 className="heading">
          <span>about</span> us
        </h1>

        <div className="row">
          <div className="image">
            <img src={aboutImg} alt="aboutImg" />
          </div>

          <div className="content">
            <h3>we take care of your healthy life</h3>
            <p>
              In clinicy hospitals, we provide various forms of health care for
              all reception and emergency cases, and we make sure that the
              service provided is of the highest possible quality.
            </p>
            <p>
              We serve different ages of patients, including children and the
              elderly, and we are keen to provide psychological treatment and
              psychological support to the patient who needs it.
            </p>
            <a href="#" className="btn">
              learn more <span className="fas fa-chevron-right"></span>
            </a>
          </div>
        </div>
      </section>
      {/* about section starts  */}

      {/* doctors section starts */}
      <section className="doctors" id="doctors">
        <h1 className="heading">
          our <span>doctors</span>
        </h1>

        <div className="box-container">
          <div className="box">
            <img src={doctorImg} alt="doctorImg" />
            <h3>Mohamed Ali</h3>
            <span>expert doctor</span>
            <div className="share">
              <a href="#" className="fab fa-facebook-f"></a>
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-instagram"></a>
              <a href="#" className="fab fa-linkedin"></a>
            </div>
          </div>

          <div className="box">
            <img src={doctorImg} alt="doctorImg" />
            <h3>Ibrahim Mohamed</h3>
            <span>expert doctor</span>
            <div className="share">
              <a href="#" className="fab fa-facebook-f"></a>
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-instagram"></a>
              <a href="#" className="fab fa-linkedin"></a>
            </div>
          </div>

          <div className="box">
            <img src={doctorImg} alt="doctorImg" />
            <h3>Mohamed Elsayed</h3>
            <span>expert doctor</span>
            <div className="share">
              <a href="#" className="fab fa-facebook-f"></a>
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-instagram"></a>
              <a href="#" className="fab fa-linkedin"></a>
            </div>
          </div>

          <div className="box">
            <img src={doctorImg} alt="doctorImg" />
            <h3>Abdallah Hassan</h3>
            <span>expert doctor</span>
            <div className="share">
              <a href="#" className="fab fa-facebook-f"></a>
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-instagram"></a>
              <a href="#" className="fab fa-linkedin"></a>
            </div>
          </div>

          <div className="box">
            <img src={doctorImg} alt="doctorImg" />
            <h3>Ahmed Abdelrahman</h3>
            <span>expert doctor</span>
            <div className="share">
              <a href="#" className="fab fa-facebook-f"></a>
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-instagram"></a>
              <a href="#" className="fab fa-linkedin"></a>
            </div>
          </div>

          <div className="box">
            <img src={doctorImg} alt="doctorImg" />
            <h3>Saif Said</h3>
            <span>expert doctor</span>
            <div className="share">
              <a href="#" className="fab fa-facebook-f"></a>
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-instagram"></a>
              <a href="#" className="fab fa-linkedin"></a>
            </div>
          </div>
        </div>
      </section>
      {/* doctors section ends */}

      {/* booking section starts  */}
      <section className="book" id="book">
        <h1 className="heading">
          <span>book</span> now
        </h1>

        <div className="row">
          <div className="image">
            <img src={bookImg} alt="bookingImg" />
          </div>

          <Form />
        </div>
      </section>
      {/* booking section ends  */}

      {/* review section starts  */}
      <section className="review" id="review">
        <h1 className="heading">
          client's <span>review</span>
        </h1>

        <div className="box-container">
          <div className="box">
            <img src={reviewImg} alt="reviewImg" />
            <h3>Abdelaziz Ali</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <p className="text">
              I have dealt with clinicy hospital, frankly, a distinguished
              service and a high degree of quality. They care about all aspects
              of the patient, not just the disease. I recommend it to everyone
              who wants a distinguished service.
            </p>
          </div>

          <div className="box">
            <img src={reviewImg} alt="reviewImg" />
            <h3>Yahia Mohamed</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <p className="text">
              Competitive prices compared to competitors One of the few
              hospitals that offer great value for a reasonable price. I would
              recommend this hospital to anyone who wants the best value for
              money.
            </p>
          </div>

          <div className="box">
            <img src={reviewImg} alt="reviewImg" />
            <h3>Yousef Mahmouhd</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <p className="text">
              I have been suffering from back pain and I found excellent service
              in my clinicy I would like to say that this hospital is one of the
              best hospitals I have dealt with.
            </p>
          </div>
        </div>
      </section>
      {/* review section ends  */}

      {/* blogs section starts  */}
      <section className="blogs" id="blogs">
        <h1 className="heading">
          our <span>blogs</span>
        </h1>

        <div className="box-container">
          <div className="box">
            <div className="image">
              <img src={blogImg1} alt="blogImg" />
            </div>
            <div className="content">
              <div className="icon">
                <a href="#">
                  {" "}
                  <i className="fas fa-calendar"></i> 1st may, 2021{" "}
                </a>
                <a href="#">
                  {" "}
                  <i className="fas fa-user"></i> by admin{" "}
                </a>
              </div>
              <h3>diabetes treatment</h3>
              <p>
                Learn about the different types of drugs used to treat diabetes.
              </p>
              <a href="#" className="btn">
                learn more <span className="fas fa-chevron-right"></span>
              </a>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src={blogImg2} alt="blogImg" />
            </div>
            <div className="content">
              <div className="icon">
                <a href="#">
                  {" "}
                  <i className="fas fa-calendar"></i> 1st may, 2021{" "}
                </a>
                <a href="#">
                  {" "}
                  <i className="fas fa-user"></i> by admin{" "}
                </a>
              </div>
              <h3>electron microscope</h3>
              <p>What are the uses of the microscope in the medical field?</p>
              <a href="#" className="btn">
                learn more <span className="fas fa-chevron-right"></span>
              </a>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src={blogImg3} alt="blogImg" />
            </div>
            <div className="content">
              <div className="icon">
                <a href="#">
                  {" "}
                  <i className="fas fa-calendar"></i> 1st may, 2021{" "}
                </a>
                <a href="#">
                  {" "}
                  <i className="fas fa-user"></i> by admin{" "}
                </a>
              </div>
              <h3>medical equipments</h3>
              <p>The most important medical devices in diagnosis</p>
              <a href="#" className="btn">
                learn more <span className="fas fa-chevron-right"></span>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* blogs section ends */}

      {/* footer section starts */}
      <section className="footer" id="footer">
        <div className="box-container">
          <div className="box">
            <h3>quick links</h3>
            <a href="#">
              {" "}
              <i className="fas fa-chevron-right"></i> home{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-chevron-right"></i> services{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-chevron-right"></i> about{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-chevron-right"></i> doctors{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-chevron-right"></i> book{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-chevron-right"></i> review{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-chevron-right"></i> blogs{" "}
            </a>
          </div>

          <div className="box">
            <h3>our services</h3>
            <a href="#">
              {" "}
              <i className="fas fa-chevron-right"></i> dental care{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-chevron-right"></i> message therapy{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-chevron-right"></i> cardioloty{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-chevron-right"></i> diagnosis{" "}
            </a>
            <a href="#">
              <i className="fas fa-chevron-right"></i> ambulance service
            </a>
          </div>

          <div className="box">
            <h3>contact info</h3>
            <a href="#">
              {" "}
              <i className="fas fa-phone"></i> +123-456-7890{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-phone"></i> +111-222-3333{" "}
            </a>
            <a href="#" className="exept">
              <i className="fas fa-envelope"></i> contact@Clinicy.com
            </a>
            <a href="#">
              <i className="fas fa-map-marker-alt"></i> Egypt, cario - 400104
            </a>
          </div>

          <div className="box">
            <h3>follow us</h3>
            <a href="#">
              {" "}
              <i className="fab fa-facebook-f"></i> facebook{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fab fa-twitter"></i> twitter{" "}
            </a>
            <a href="#">
              {" "}
              <i class="fab fa-snapchat"></i> snapchat{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fab fa-instagram"></i> instagram{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fab fa-linkedin"></i> linkedin{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fab fa-pinterest"></i> pinterest{" "}
            </a>
          </div>
        </div>

        <div className="credit">
          © 2023 <span>Clinicy</span>. All rights reserved.
        </div>
      </section>
      {/* footer section ends  */}
    </React.Fragment>
  );
}

export default App;
