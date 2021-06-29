import { useEffect, useState } from 'react'

interface P {
    url: string
    method?: string
}

interface F {
    data: any
    loading: boolean
}

export function useFetchJson({ url, method = 'GET' }: P): F {
    console.log({ url, method })

    const [response, setResponse] = useState({
        data: null,
        loading: true,
    })

    useEffect(
        function () {
            fetch(url, { method: method })
                .then((resp) => resp.json())
                .then((json) =>
                    setResponse({
                        data: json,
                        loading: false,
                    })
                )
        },
        [url, method]
    )

    return response
}
