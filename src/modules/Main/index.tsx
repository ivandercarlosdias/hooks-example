import { BrowserRouter as Router } from 'react-router-dom'
import Sidebar from '../../components/Sidebar'
import MainNavbar from '../../components/MainNavbar'
import Content from '../../components/Content'

import './style.scss'

export default function App(): JSX.Element {
    return (
        <div className="main">
            <Router>
                <Sidebar>
                    <MainNavbar></MainNavbar>
                </Sidebar>
                <Content></Content>
            </Router>
        </div>
    )
}
