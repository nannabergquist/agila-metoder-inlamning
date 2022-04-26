import React from 'react'
import scrum from '../images/sprint.png';
import styles from '../pages/Start.module.css';
import talkingGuy from '../images/TalkingGuy.png';

export default function Start() {
    return (
        <div className={styles.wrapperSection}>
            <section className={styles.mainSectionRole}>
                <h1 className={styles.textInfo}>Ett enkelt sätt att lära sig om Scrum!</h1>
                <p>Välkommen att lära dig mer om Scrum och hur ni ska implementera metoden i ert projekt.</p>
                <img className={styles.imgScrum} src={scrum} alt="scrum" />
            </section>
            <section className={styles.textBackgroundColor}>
                <h3>Om Scrum</h3>
                <p>Scrum är en agil metod som används vid systemutveckling. Metoden Scrum uppkom under 1990-talet och används nu över hela världen. Scrum går ut på att man fokuserar på mindre delmål istället för större mål vilket gör det lättare att se vad som behöver göras och hur man ska göra det.</p>
                <img className={styles.talkingGuyImg} src={talkingGuy} alt="talking-guy" />
            </section>
        </div>
    )
}
