import { IChildrenProps } from '../MainNavbar/type'

import './style.scss'

export default function Sidebar(props: IChildrenProps): JSX.Element {
    return <aside>{props.children}</aside>
}
