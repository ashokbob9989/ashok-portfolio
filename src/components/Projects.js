import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/portfolio.jpg";
import projImg2 from "../assets/img/libraryManagementSystem.png";
import projImg3 from "../assets/img/powerBi.jpg"; 
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Portfolio",
      description: "A personal portfolio website built using React and JavaScript to showcase my projects and skills.",
      imgUrl: projImg1,
      url: "https://github.com/ashokbob9989/Portfolio"
    },
    {
      title: "Library Management System",
      description: "A comprehensive system for managing library operations, built with Java, Spring Boot, and other technologies.",
      imgUrl: projImg2,
      url: "https://github.com/ashokbob9989/Library_Management_System_Project.git",
      video: "https://shorturl.at/uoTSo",
    },
    {
      title: "Dashboard",
      description: "A data analysis and visualization project using Power BI to create interactive dashboards and reports.",
      imgUrl: projImg3,
      url: "https://github.com/ashokbob9989/PowerBI_Project",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are some of the projects I have worked on. Each project showcases different skills and technologies I have used.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Add your projects here.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Add your projects here.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  )
}