import { Link } from 'react-router-dom'
import './style.scss'

export default function MainNavbar(): JSX.Element {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                    <Link to="/usestate">useState()</Link>
<<<<<<< HEAD
                    <Link to="/useeffect">useEffect()</Link>
=======
>>>>>>> 5bc2d1968d34be673c5ed77304f4bca99711f30a
                </li>
            </ul>
        </nav>
    )
}
