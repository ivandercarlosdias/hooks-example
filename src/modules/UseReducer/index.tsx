import { useReducer } from 'react'
import PageTitle from '../../components/PageTitle'

const initialShopState = {
    cart: [],
    products: [],
    user: null,
    number: 0,
}

function reducer(state: any, action: any) {
    switch (action.type) {
        case 'add':
            return { ...state, number: state.number + 2 }
        case 'multiple':
            return { ...state, number: state.number * 5 }
        case 'login':
            return { ...state, user: { name: action.payload } }
        case 'default':
            return state
    }
}

export default function UseReducerExample(): JSX.Element {
    const [state, dispatch] = useReducer(reducer, initialShopState)
    return (
        <>
            <PageTitle
                title="Hook useEffect()"
                subtitle="Uma alternativa para useState. Aceita um reducer do tipo (state, action) => newState e retorna o estado atual, junto com um método dispatch."
            />
            <p>
                {state.user ? <span>Olá, {state.user.name} </span> : <span>Bem vindo, visitante! Faça seu </span>}
                <button
                    className="btn"
                    onClick={() =>
                        dispatch({
                            type: 'login',
                            payload: 'Ivander',
                        })
                    }
                >
                    Login
                </button>
            </p>
            <p>
                {state.number}
                <button
                    className="btn"
                    onClick={() =>
                        dispatch({
                            type: 'add',
                        })
                    }
                >
                    Adiciona +2
                </button>
                <button
                    className="btn"
                    onClick={() =>
                        dispatch({
                            type: 'multiple',
                        })
                    }
                >
                    Multiplica * 5
                </button>
            </p>
        </>
    )
}
