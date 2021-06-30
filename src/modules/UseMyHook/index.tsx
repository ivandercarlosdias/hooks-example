import PageTitle from '../../components/PageTitle'
import { useFetchJson } from '../../hooks/UseFetchJson'

interface IStateProps {
    nome: string
    sigla: string
}

export default function UseMyHookExample() {
    const url = 'http://files.cod3r.com.br/curso-react/estados.json'
    const response = useFetchJson(url, 'get')

    function showStates(states: any): JSX.Element {
        return states.map((state: IStateProps) => (
            <li key={state.nome}>
                {state.nome} - {state.sigla}
            </li>
        ))
    }

    return (
        <>
            <PageTitle
                title="Hook personalizado"
                subtitle="Criar seus próprios Hooks permite que você extraia a lógica de um componente em funções reutilizáveis."
            />
            <ul>{!response.loading ? showStates(response.data) : false}</ul>
        </>
    )
}
