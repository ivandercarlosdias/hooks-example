import { useState } from 'react'

import PageTitle from '../../components/PageTitle'
import SectionTitle from '../../components/SectionTitle'

import { initialUserInfo } from './data'

import { IUserInfoProps } from './types'

export default function UseStateExample(): JSX.Element {
    const [count, setCount] = useState(0)
    const [user, setUserInfo] = useState<IUserInfoProps>(initialUserInfo)

    return (
        <>
            <PageTitle title="Hook useState()" subtitle="Estado em componentes." />

            <SectionTitle title="Exercício #1" />
            <p>
                <span>{count}</span>
                <button className="btn" onClick={() => setCount(count + 1)}>
                    Contador
                </button>
                <button className="btn" onClick={() => setCount((current) => current + 50)}>
                    +50
                </button>
                <button className="btn" onClick={() => setCount(100)}>
                    Definir valor como 100
                </button>
            </p>

            <SectionTitle title="Exercício #2" />
            <ul>
                <li>Nome: {user.firstName}</li>
                <li>Sobrenome: {user.lastName}</li>
                <li>Senha: {user.password}</li>
            </ul>
            <input
                value={user.firstName}
                onChange={(e) =>
                    setUserInfo((x) => ({
                        ...x,
                        firstName: e.target.value,
                    }))
                }
                type="text"
                placeholder="Nome"
            />
            <input
                value={user.lastName}
                onChange={(e) =>
                    setUserInfo((x) => ({
                        ...x,
                        lastName: e.target.value,
                    }))
                }
                type="text"
                placeholder="Sobrenome"
            />
            <input
                value={user.password}
                onChange={(e) =>
                    setUserInfo((x) => ({
                        ...x,
                        password: e.target.value,
                    }))
                }
                type="password"
                placeholder="Nova senha"
            />
        </>
    )
}
