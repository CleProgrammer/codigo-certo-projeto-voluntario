import Section1 from "./section1/section1"
import Section2 from "./section2/section2"
import Section3 from "./section3/section3"
import Section4 from "./section4/section4"
import Footer from "./footer/footer"

import { useEffect } from "react"
import Aos from 'aos'
import 'aos/dist/aos.css'

function SectionGroup() {
    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <div>
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Footer/>
        </div>
    )
}

export default SectionGroup