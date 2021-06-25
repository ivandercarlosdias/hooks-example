import PageTitle from '../../components/PageTitle'

import './style.scss'

export default function NotFound(): JSX.Element {
    return (
        <>
            <PageTitle title="Ops... Erro 404!" subtitle="Página não encontrada!" error />
        </>
    )
}
