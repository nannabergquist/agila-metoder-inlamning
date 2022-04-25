import React from 'react'
import Powner from "../images/product-owner.png";
import Team from "../images/team.png";
import Smaster from "../images/scrum-master.png";

export default function Role() {
    return (
        <>
            <section>
                <h1>Scrum: Roller</h1>
                <h3>Projekt metoden Scrum använder sig utav tre roller; Product Owner, Development Team och Scrum Master. Dessa tre rollerna är nyckeln för en bra framgång av projektet så därför är det viktigt att känna till dessa roller och veta vad dessa roller innefattar innan man använder sig utav Scrum.</h3>
            </section>
            <section>
                <h2>Product Owner</h2>
                <h3>Har ansvar att ta fram backlog som är tydlig för Development Teamet att förstå. Om det skulle vara några frågetecken så är det Product Owner som måste se till att ändra så att Development Teamet kan lättare förstå och genomföra sitt jobb.
                    Product Owner kan också ta hjälp av Scrum Master när han/hon ska ta fram Product Backlog så målen på listan blir tydliga och lättförståeliga för gruppen.</h3>
                <img src={Powner} alt="product-owner" />
            </section>
            <section>
                <h2>Development Team</h2>
                <h3>Är teamet som utvecklar produkten med hjälp av målen i backlogen. Med hjälp av Scrum så har Development teamet väldigt mycket frihet. För i själva backlogen säger man vad som ska göras men det är upp till själva teamet att bestämma hur det ska uppnås. Det kan också bestämma hur mycket de hinner per Sprint pcj vad de vill göra under Sprinten. Det teamet inte kan styra är deadline då projektet ska vara klart och en lista över vad som är viktigt.</h3>
                <img src={Team} alt="developer-team" />
            </section>
            <section>
                <h2>Scrum Master</h2>
                <h3>Är ledaren i gruppen, Scrum Master hjälper Development Team och Product Owner samt ser till så att alla kommer överens och tolka varandra. Man kan säga helt enkelt att Scrum Master ser till så att allt funkar i gruppen.

                    För Product Owner så kan Scrum Master hjälpa till att:
                    Se till så att alla förstår målen
                    Hjälpa till med backlog

                    För Development Teamet kan Scrum Master hjälpa till med bland annat:
                    Coachar dem och hjälper dem att vara fokuserade
                    Kan också hjälpa team i organisationer som inte har fullt förståelse för arbetsmetoden Scrum.
                </h3>
                <img src={Smaster} alt="scrum-master" />
            </section>
        </>
    )
}
