import { useCallback, useState } from 'react'
import UseCallbackButtons from './Buttons'
import PageTitle from '../../components/PageTitle'

export default function UseCallbackExample(): JSX.Element {
    const [count, setCount] = useState(0)

    const inc = useCallback(
        function (num: number) {
            setCount((current) => current + num)
        },
        [setCount]
    )

    return (
        <>
            <PageTitle title="Hook useCallback()" subtitle="Retorna uma função armazenada." />

            <p>
                <strong>Contador: {count}</strong>
            </p>

            <UseCallbackButtons inc={inc} />
        </>
    )
}
