import React, { useState } from 'react'
import { IContextProps, IInitialStateProps } from './types'

const initialState: IInitialStateProps = {
    number: 123,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim laborum, culpa ipsa porro molestiae commodi suscipit cum blanditiis voluptas eius minima omnis quia atque pariatur nihil eaque sapiente accusamus voluptatem.',
}

export const AppContext = React.createContext(initialState)

export function Store(props: IContextProps): JSX.Element {
    const [state, setState] = useState(initialState)

    return <AppContext.Provider value={state}>{props.children}</AppContext.Provider>
}
