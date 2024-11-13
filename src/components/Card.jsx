import style from "./Card.module.css";

export default function Card({ title, description, buttonText }) {
    return (
        <div className={style.card}>
            <div className={style.topSection}>600x400</div>
            <div className={style.botSection}>
                <h5 className={style.h5}>{title}</h5>
                <p className={style.p}>{description}</p>
                <button className={style.button}>{buttonText}</button>
            </div>
        </div>
    );
}