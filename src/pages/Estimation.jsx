import React from 'react'
import styles from '../pages/Estimation.module.css';
import economyEstimation from '../images/estimationsimage.png';
import story from '../images/story.png';
import fibonacci from '../images/fibonacci.png';

export default function Estimation() {
    return (
        <div className={styles.wrapperSection}>
            <section className={styles.mainSectionRole}>
                <h1>Agil Estimering</h1>
                <p>Hur snabbt kan ni bli klara? Är en fråga som alla produktägare ställer sig till utvecklingsteamet.</p>
                <img className={styles.imgEstimation} src={economyEstimation} alt="Estimering" />
            </section>
            <section className={styles.textBackgroundColor}>
                <p>Agila estimering är att man vill ha en gissning om framtiden och en idé när saker kan bli klara. Innan projektet vill man veta hur mycket jobb som finns i vår backlog. Om tex något kommer att ta väldigt lång tid kanske det ska vänta till förmån för annat som går fortare men som ändå ger mycket värde. Vi behöver alltså kunna estimera backloggen.</p>
                <br />
                <p> Vanligtvis mäter man oftast  i timmar men eftersom det är svårt att gissa hur långt det tar för varje person att genomföra arbetet så kan man använda story points för att estimera stories. Story points poängsätter alla user stories. User stories definierar vad och varför i backloggen.</p>
                <img className={styles.storyImg} src={story} alt="story" />
                <br />
                <p>För att se vad som som är mest oviktigt/enkelt till mest ovärderligt/tidskrävande svårt, så kan man göra det via Fibonacci skalan. Fibonacci skalan poängsätter man storyn och kan därmed se vad som behövs lägga mer energi åt eller inte i projektet. </p>
                <img className={styles.fibonacciImg} src={fibonacci} alt="fibonacci-skalan" />
            </section>
        </div >
    )
}
