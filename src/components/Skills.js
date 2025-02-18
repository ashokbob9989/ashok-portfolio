import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Here are some of the technical skills and expertise I have acquired over the years. These skills have been honed through various projects and experiences in the field of competitive programming, web development, software development and more.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={meter1} alt="Languages" />
                  <h5>Languages: C/C++, Java, Spring, Spring Boot</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Technical Skills" />
                  <h5>Technical Skills: Data Structures, Algorithms, Object-Oriented Programming, Problem Solving</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Tech-Stack" />
                  <h5>Tech-Stack: HTML, CSS, JavaScript, Power BI, Excel</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Soft Skills" />
                  <h5>Soft Skills: Leadership, Teamwork, Time Management, Open Communicator</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Tools" />
                  <h5>Tools: Git/GitHub, VSCode, Linux, Postman, Insomnia, WinSCP, Unix, Swagger, IntelliJ</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Cloud" />
                  <h5>Cloud: AWS, Azure, Google Cloud Platform</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Database" />
                  <h5>Database: MySQL, MongoDB, PostgreSQL</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};
