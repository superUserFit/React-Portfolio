import { Col } from "react-bootstrap";

interface ProjectCardProps {
    title: string;
    description: string;
    imgUrl: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imgUrl }) => {
    return (
        <Col size={12} sm={8} md={6}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt={title} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    );
};
