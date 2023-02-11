import React from "react"
import * as styles from "./Card.module.css";

export default function Card(props){
    return (<div className={styles.card}>
        <div className={styles.body}>
            <img className={styles.image} src={props.img}/>
            <h2 className={styles.title}>{props.id}{props.name}</h2>
            <div className={styles.description}>{props.type}</div>
        </div>
        <button className={styles.btn}>View Pokemon</button>
    </div>);
}