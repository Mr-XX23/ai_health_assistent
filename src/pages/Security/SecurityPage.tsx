import AppLayout from '../../layout/userlayout/AppLayout'
import Content from './SubComponents/Content'
import EndContent from './SubComponents/EndContent'
import Hero from './SubComponents/Hero'
import MidContent from './SubComponents/MidContent'
import SecurityQns from './SubComponents/SecurityQns'

const SecurityPage = () => {
    return (
        <AppLayout>
            <Hero />
            <Content />
            <MidContent/>
            <EndContent />
            <SecurityQns />
        </AppLayout>
    )
}

export default SecurityPage 