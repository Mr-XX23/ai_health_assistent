import AppLayout from "../../layout/userlayout/AppLayout"
import EndQns from "./BillingQns/EndQns"
import Compare from "./Hero/Compare"
import Content from "./Hero/Content"
import Hero from "./Hero/Hero"
import Qns from "./Hero/Qns"


const Pricingpage = () => {
    return (
        <AppLayout>
            <Hero/>
            <Content/>
            <Compare/>
            <Qns/>
            <EndQns/>
        </AppLayout>
    )
}

export default Pricingpage