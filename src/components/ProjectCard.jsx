export default function ProjectCard({
    iconName,
    title,
    description,
    link
}) {
    return (
        <div className="project-card | card bg-primary-500 clr-neutral-100">
            <div className={`project-card__image | project-card__${iconName}-icon`} alt="poke app icon" />
            <h3 className="project-card__title | card__heading fs-750 clr-neutral-100">{title}</h3>
            <p className="project-card__description | fs-600">{description}</p>
            <div className="project-card__button-container | margin-block-end-6">
                <a href={link} className="project-card__link | bg-accent-500 padding-inline-10 padding-block-4 fs-400">Visit</a>
            </div>
        </div>
    )
}