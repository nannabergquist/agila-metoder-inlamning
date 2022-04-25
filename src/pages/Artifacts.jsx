import React from 'react'
import Scrum from "../images/scrum.png";
import styles from '../pages/Artifacts.module.css';

export default function Artifacts() {
    return (
        <div className={styles.wrapper}>
            <section className={styles.mainSection}>
                <h1>Scrum artifacts </h1>
                <h3>Några av scrums artifacts är Product backlog, Sprint backlog samt Burndown Charts. Arifacterna är en slags dokument som hjälper till att hålla ordning på saker och ting.</h3>
                <img src={Scrum} alt="scrum" />
            </section>
            <div className={styles.textBackgroundColor}>
                <section>
                    <h2>Product backlog</h2>
                    <p>Är ett dokument som beskriver mål som ska följas och uppnås med den färdiga produkten. Det är Product Owner som tar fram dokumentet och är personens uppgift att alla kan förstå. Backlogens mål ska vara uppenbara och lätta att förstår sig på så att ingen kan missuppfatta dem.</p>
                </section>
                <section>
                    <h2>Sprint backlog</h2>
                    <p>Är en lista över de saker som Development Teamet har bedömt att de kan bli klara inom tidsramen för en sprint. Listan är också uppdelad så att vissa saker är viktigare än andra.</p>
                </section>
                <section>
                    <h2>Burndown Charts</h2>
                    <p>Är en visuell visning av hur mycket arbete som är kvar till dessa att projektet ska vara klart. Bilden har en Y-axel och en X-axel. Y-axeln utgör exempel på jobbet som är kvar att göra och X-axeln representerar tiden tills projektet är över. Önskemålet är att den ska visa en nedåtgående linje eftersom mängden arbete blir mindre desto närmare deadlinen man kommer. Detta är ett bra sätt för Development Teamet att se hur mycket arbete som finns kvar och hur lång tid det är kvar. Burndown Charts är en tydlig bild för teamet att se om man behöver jobba snabbare eller om man har en bra takt.</p>
                </section>
            </div>
        </div>
    )
}
