import { useContext } from 'react'
import PageTitle from '../../components/PageTitle'
import { AppContext } from '../../data/Store'

export default function UseContextExample(): JSX.Element {
    const { number, text } = useContext(AppContext)

    return (
        <>
            <PageTitle
                title="Hook useContext()"
                subtitle="Aceita um objeto de contexto (o valor retornado de React.createContext) e retorna o valor atual do contexto. O valor de contexto atual é determinado pela prop value do<MyContext.Provider>mais próximo acima do componente de chamada na árvore."
            />
            <p>
                <strong>Número importado:</strong> {number}
            </p>
            <p>
                <strong>Texto importado:</strong> {text}
            </p>
        </>
    )
}
