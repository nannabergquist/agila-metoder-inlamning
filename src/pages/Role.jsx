import React from 'react'
import Powner from "../images/product-owner.png";
import Team from "../images/team.png";
import Smaster from "../images/scrum-master.png";
import styles from "../pages/Role.module.css";

export default function Role() {
    return (
        <div className={styles.wrapperSection}>
            <section className={styles.mainSectionRole}>
                <h1>Scrum: Roller</h1>
                <h3>Projekt metoden Scrum använder sig utav tre roller; Product Owner, Development Team och Scrum Master. Dessa tre rollerna är nyckeln för en bra framgång av projektet så därför är det viktigt att känna till dessa roller och veta vad dessa roller innefattar innan man använder sig utav Scrum.</h3>
                <img className={styles.imgRole} src={Powner} alt="product-owner" />
                <img className={styles.imgRole} src={Team} alt="developer-team" />
                <img className={styles.imgRole} src={Smaster} alt="scrum-master" />
            </section>
            <div className={styles.textBackgroundColor}>
                <section>
                    <h2>Product Owner</h2>
                    <p>Har ansvar att ta fram backlog som är tydlig för Development Teamet att förstå. Om det skulle vara några frågetecken så är det Product Owner som måste se till att ändra så att Development Teamet kan lättare förstå och genomföra sitt jobb.
                        Product Owner kan också ta hjälp av Scrum Master när han/hon ska ta fram Product Backlog så målen på listan blir tydliga och lättförståeliga för gruppen.</p>
                </section>
                <section>
                    <h2>Development Team</h2>
                    <p>Är teamet som utvecklar produkten med hjälp av målen i backlogen. Med hjälp av Scrum så har Development teamet väldigt mycket frihet. För i själva backlogen säger man vad som ska göras men det är upp till själva teamet att bestämma hur det ska uppnås. Det kan också bestämma hur mycket de hinner per Sprint pcj vad de vill göra under Sprinten. Det teamet inte kan styra är deadline då projektet ska vara klart och en lista över vad som är viktigt.</p>
                </section>
                <section>
                    <h2>Scrum Master</h2>
                    <p>Är ledaren i gruppen, Scrum Master hjälper Development Team och Product Owner samt ser till så att alla kommer överens och tolka varandra. Man kan säga helt enkelt att Scrum Master ser till så att allt funkar i gruppen.</p>
                    <br />
                    <p><strong>För Product Owner så kan Scrum Master hjälpa till att:</strong></p>
                    <p> Se till så att alla förstår målen</p>
                    <p> Hjälpa till med backlog</p>
                    <br />
                    <p><strong> För Development Teamet kan Scrum Master hjälpa till med bland annat:</strong></p>
                    <p> Coachar dem och hjälper dem att vara fokuserade</p>
                    <p> Kan också hjälpa team i organisationer som inte har fullt förståelse för arbetsmetoden Scrum.</p>
                </section>
            </div>
        </div>
    )
}
