import style from "./Card.module.css"
function Card(){
    console.log(style);
    return (
        <div className={style.Card}>
            <p>Hello There</p>
        </div>
    )
}

export default Card;