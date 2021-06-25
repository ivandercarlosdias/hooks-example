import { ITitleProps } from './type'

import './style.scss'

export default function PageTitle(props: ITitleProps): JSX.Element {
    const { title, subtitle, error } = props

    return (
        <div className={`title ${error ? 'title-error' : ''}`}>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </div>
    )
}
