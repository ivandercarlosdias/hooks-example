import { Switch, Route } from 'react-router-dom'

import Home from '../../modules/Home'
import UseStateExample from '../../modules/UseState'
import UseEffectExample from '../../modules/UseEffect'
import NotFound from '../../modules/NotFound'

import './style.scss'

export default function Content(): JSX.Element {
    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/usestate">
                    <UseStateExample />
                </Route>
                <Route path="/useeffect">
                    <UseEffectExample />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </main>
    )
}
