import { ISectionProps } from './type'

import './style.scss'

export default function SectionTitle(props: ISectionProps): JSX.Element {
    const { title } = props

    return <h3 className="section-title">{title}</h3>
}
