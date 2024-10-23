import "../section1/section1.css"
import Header from "./header/header"
import InfoAboutMe from "./infoaboutme/infoaboutme"

function Section1() {
    return (
        <section id='section1' className="section1">
            <Header/>
            <InfoAboutMe/>
        </section>
    )
}

export default Section1
