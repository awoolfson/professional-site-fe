import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const textVariants = {
    rest: {
        scale: 1,
        color: "black"
    },
    hover: {
        color: "green",
        scale: 1.2
    }
}

const arrowVariants = {
    rest: {
        color: "black",
        scale: 1,
        x: 0,
        transition: {
            duration: 2,
          }
    },
    hover: {
        color: "green",
        scale: 1,
        x: 10,
        transition: {
            x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 0.5
            },
        }
    }
}

const ArrowLink = ({ text, route }) => {
    return (
        <Link
            to={route}
            className="arrow-link"
            >
            <motion.div
                variants={textVariants}
                inital="rest"
                whileHover="hover"
                onHoverStart={e => {}}
                onHoverEnd={e => {}}
                >
                <p className="arrow-link-text">{text}</p>
                <motion.img
                    variants={arrowVariants}
                    src="/right-arrow.png" 
                    alt="arrow"
                    className="link-arrow"
                    >
                </motion.img>
            </motion.div>
        </Link>
    );
};

export default ArrowLink;