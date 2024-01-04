const ProjectShowcase = ({ description, image, float }) => {
    return (
        <div className={`project-showcase-${float}`}>
            <img src={image} alt={image} />
            <p>{description}</p>
        </div>
    );
}

export default ProjectShowcase;