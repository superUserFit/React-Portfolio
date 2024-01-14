import { Col, Container, Row, Nav, Tab } from "react-bootstrap";
import chatApp from "../assets/chat_app.png";
import portfolio from "../assets/portfolio.png";
import yii2_ecommerce from "../assets/yii2-ecommerce.png";
import colorSharp2 from  "../assets/color-sharp-2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {

  const projects_tab_1 = [
    {
      title: "Campus Connect",
      description: "Final Year Project",
      imgUrl: chatApp,
    },
    {
      title: "Portfolio Website",
      description: "Personal Project",
      imgUrl: portfolio,
    },
    {
      title: "Yii2 E-commerce",
      description: "Personal Project",
      imgUrl: yii2_ecommerce,
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
                <p>In my journey as a passionate learner and aspiring developer, I've undertaken various projects to enhance and apply my programming skills. These projects not only showcase my technical proficiency but also reflect my dedication to continuous learning and innovation.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills justify-content-center align-items-center mb-5" id="pills-tab">
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
                          projects_tab_1.map((project, index) => {
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
                      <p>Coming Soon</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Coming Soon</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img alt="Background" className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}