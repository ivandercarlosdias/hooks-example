import { useEffect, useState } from 'react'

interface IUseFetchJsonProps {
    data: IData[]
    loading: boolean
}

interface IData {
    nome: string
    sigla: string
}

export function useFetchJson(url: string, method = 'GET'): IUseFetchJsonProps {
    const [response, setResponse] = useState({
        data: [],
        loading: true,
    })

    function fetchData() {
        fetch(url, { method: method })
            .then((resp) => resp.json())
            .then((json) =>
                setResponse({
                    data: json,
                    loading: false,
                })
            )
    }

    useEffect(fetchData, [url, method])

    return response
}
