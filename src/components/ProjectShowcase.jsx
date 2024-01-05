import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const variants = {
    rest: {
        scale: 1
    },
    hover: {
        scale: 1.05,
        transition: {
            // repeat: Infinity,
            // repeatType: "loop",
            type: "spring",
            duration: 0.3
        }
    }
}

const ProjectShowcase = ({ items, num }) => {
    return (
        <motion.div 
            className={`project-${num}`}
            variants={variants}
            initial="rest"
            whileHover="hover"
            onHoverStart={e => {}}
            onHoverEnd={e => {}}
        >
            <Link
                to={items.url}
                className="project-link-wrapper"
            >
                <div className="project-inner">
                    <img 
                        src={items.image}
                        alt={items.image}
                        className="project-image"
                    />
                    <div className="project-inner-text">
                        <h2>{items.title}</h2>
                        <p className="project-desc">{items.description}</p>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}

export default ProjectShowcase;