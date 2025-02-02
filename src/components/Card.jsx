import { Children } from 'react';

export default function Card(props) {
    const { headingText, headingClasses, children } = props;

    return (
        <div className="card">
            <h2 className={
                `card__heading margin-block-start-5 ${headingClasses}`
            }>
                {headingText}
            </h2>
                {children}
        </div>
    )
}