import intermediate from "../assets/intermediate.svg";
import basic from "../assets/basic.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/color-sharp.png";

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
                        <p>I've acquired a range of skills during my studies, and now I'm excited to jump into the professional world. With a solid understanding of programming, I'm eager to apply my knowledge in the real-world industry. My enthusiasm for programming motivates me to continually learn and grow, positioning me well to contribute and succeed in the ever-changing professional landscape.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={intermediate} alt="Image" />
                                <p>Front End Development</p>
                            </div>
                            <div className="item">
                                <img src={intermediate} alt="Image" />
                                <p>Back End Development</p>
                            </div>
                            <div className="item">
                                <img src={basic} alt="Image" />
                                <p>UI \ UX Design</p>
                            </div>
                            <div className="item">
                                <img src={basic} alt="Image" />
                                <p>Video Editing</p>
                            </div>
                            <div className="item">
                                <img src={basic} alt="Image" />
                                <p>UI \ UX Design</p>
                            </div>
                            <div className="item">
                                <img src={basic} alt="Image" />
                                <p>Cloud Computing</p>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}