import { /*useEffect,*/ useMemo } from 'react'
import { useState } from 'react'
import PageTitle from '../../components/PageTitle'

function sum(a: number, b: number) {
    const future = Date.now() + 2000
    while (future > Date.now()) {} // espera
    return a + b
}

export default function UseMemoExample(): JSX.Element {
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [num3, setNum3] = useState(0)

    /* ---------------------------------------------------------------- */
    /* Assim ficaria lento todos os inputs */
    /* ---------------------------------------------------------------- */

    const result = useMemo(() => sum(num1, num2), [num1, num2])

    /* ---------------------------------------------------------------- */
    /* Resolvendo utilizando useState e useEffect */
    /* ---------------------------------------------------------------- */

    // const [result, setResult] = useState(0)
    // useEffect(
    //     function () {
    //         setResult(sum(num1, num2))
    //     },
    //     [num1, num2]
    // )

    return (
        <>
            <PageTitle title="Hook useMemo()" subtitle="Retorna um valor armazenado." />

            <p>
                <input value={num1} onChange={(e) => setNum1(parseInt(e.target.value))} type="number" />
            </p>
            <p>
                <input value={num2} onChange={(e) => setNum2(parseInt(e.target.value))} type="number" />
            </p>
            <p>
                <input value={num3} onChange={(e) => setNum3(parseInt(e.target.value))} type="number" />
            </p>

            <p>
                <strong>Soma input 1 + input 2:</strong> <span className="btn">{result}</span>
            </p>
        </>
    )
}
