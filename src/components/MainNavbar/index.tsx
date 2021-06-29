import { Link } from 'react-router-dom'
import './style.scss'

export default function MainNavbar(): JSX.Element {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                    <Link to="/usestate">useState()</Link>
                    <Link to="/useeffect">useEffect()</Link>
                    <Link to="/usememo">useMemo()</Link>
                    <Link to="/usecallback">useCallback()</Link>
                    <Link to="/usecontext">useContext()</Link>
                </li>
            </ul>
        </nav>
    )
}
