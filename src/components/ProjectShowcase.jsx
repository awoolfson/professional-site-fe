import { Link } from "react-router-dom";

const ProjectShowcase = ({ items }) => {
    return (
        <div className="project-showcase">
            <Link
                to={items.url}
            >
                <img 
                    src={items.image} 
                    alt={items.image} 
                    className="project-image"
                />
                <h2>{items.title}</h2>
                <p>{items.description}</p>
            </Link>
        </div>
    );
}

export default ProjectShowcase;