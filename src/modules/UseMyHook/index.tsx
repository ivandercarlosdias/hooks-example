import PageTitle from '../../components/PageTitle'
import { useFetchJson } from '../../hooks/UseFetchJson'

export default function UseMyHookExample() {
    const url = 'http://files.cod3r.com.br/curso-react/estados.json'

    const response = useFetchJson(url, method: 'get')
    console.log(response)

    return (
        <>
            <PageTitle
                title="Hook personalizado"
                subtitle="Criar seus próprios Hooks permite que você extraia a lógica de um componente em funções reutilizáveis."
            />
        </>
    )
}
