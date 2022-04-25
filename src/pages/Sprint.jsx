import React from 'react'
import styles from '../pages/Sprint.module.css';
import sprint from '../images/framework.png';

export default function Sprint() {
    return (
        <div className={styles.wrapper}>
            <section className={styles.mainSection}>
                <h1>Sprint</h1>
                <h3>En sprint är en förutbestämd tidsperiod och inom den ramen ska Development Teamet ha utvecklat en del av produkten. Sprinten får inte vara längre än en månad. Teamet använder sig också utav en Sprint backlog som tidigare har nämnts. Listan som teamet använder sig under en sprint.</h3>
                <img src={sprint} alt="sprint" />
            </section>
            <div className={styles.textBackgroundColor}>
                <section>
                    <h2>Sprint Planning</h2>
                    <p>Innan en sprint görs behöver produktägaren, Scrum Master och Development Teamet gå igenom de önskemål som finns för sprinten. Därefter tittar Development Teamet igenom kraven och uppskattar hur lång tid det kommer att ta. När det är klart tar teamet fram en Sprint Backlog som de följer under sprintens gång.</p>
                </section>
                <section>
                    <h2>Sprint Retrospective</h2>
                    <p>För varje sprint utvärderar man den, ser efter vad som har gjort och vad som inte hade gjorts. Själva utvärdering av varje sprint kallas för Sprint Retrospective. Att utvärdera görs för att kunna bli ännu bättre och se till så att nästa sprint blir bättre. Det kan vara bra att utvärdera efter varje sprint eftersom det kan ha stoppat problem som uppkommit under sprinten innan de vuxit sig för stora.</p>
                </section>
                <section>
                    <h2>Sprint Review</h2>
                    <p> En sprint review görs för produktägaren och andra inbjudna intressenter. Detta för att visa funktionerna som har gjorts. Meningen med detta är att alla ska få en förståelse för hur projektet ligger till. <strong> Tänk på att mötet får ta max fyra timmar.</strong> </p>
                </section>
            </div>
        </div>
    )
}
