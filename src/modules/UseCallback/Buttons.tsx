import React from 'react'

interface FuncProps {
    inc(num: number): void
}

function UseCallbackButtons(props: FuncProps): JSX.Element {
    console.log('Renderizou o UseCallbackButtons')
    return (
        <div>
            <button className="btn" onClick={() => props.inc(1)}>
                +1
            </button>
            <button className="btn" onClick={() => props.inc(5)}>
                +5
            </button>
            <button className="btn" onClick={() => props.inc(10)}>
                +10
            </button>
        </div>
    )
}

export default React.memo(UseCallbackButtons)
