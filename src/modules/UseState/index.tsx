import { useState } from 'react'

import PageTitle from '../../components/PageTitle'
import SectionTitle from '../../components/SectionTitle'

import './style.scss'

export default function UseStateExample(): JSX.Element {
    const [count, setCount] = useState(0)

    return (
        <>
            <PageTitle title="Hook useState()" subtitle="Estado em componentes." />
            <SectionTitle title="Exercício #1"></SectionTitle>
            <p>{count}</p>
        </>
    )
}
