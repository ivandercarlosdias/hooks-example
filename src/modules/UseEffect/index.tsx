import { useEffect, useState } from 'react'

import PageTitle from '../../components/PageTitle'
import SectionTitle from '../../components/SectionTitle'

export default function UseEffectExample(): JSX.Element {
    // Exercicio #1
    const [number, setNumber] = useState(0)
    const [numberTriple, setTriple] = useState(0)

    function calcTriple(num: number) {
        if (num >= 0) {
            return num * 3
        } else {
            return -1
        }
    }

    useEffect(
        function () {
            setTriple(calcTriple(number))
        },
        [number]
    )

    useEffect(
        function () {
            if (number > 1000) {
                document.title = 'Calma ai, não precisa exagerar !!!'
            }
        },
        [number]
    )

    // Exercicio #2
    const [status, setStatusNumber] = useState('Impar')

    useEffect(
        function () {
            setStatusNumber(number % 2 === 0 ? 'Par' : 'Ímpar')
        },
        [number]
    )

    return (
        <>
            <PageTitle
                title="Hook useEffect()"
                subtitle="Permite executar efeitos colaterais em componentes funcionais."
            />

            <SectionTitle title="Exercício #1" />
            <p>
                <strong>Triplo do número é:</strong> {numberTriple === -1 ? 'Digite um número válido!' : numberTriple}
            </p>
            <p>
                <input
                    value={number}
                    onChange={(e) => setNumber(parseInt(e.target.value))}
                    type="number"
                    placeholder="Digite um número"
                />
            </p>

            <SectionTitle title="Exercício #2" />
            <p>
                <strong>Esse é um número:</strong> {status}
            </p>
        </>
    )
}
