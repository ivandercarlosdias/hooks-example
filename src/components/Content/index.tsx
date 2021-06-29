import { Switch, Route } from 'react-router-dom'

import Home from '../../modules/Home'
import UseStateExample from '../../modules/UseState'
import UseEffectExample from '../../modules/UseEffect'
import UseMemoExample from '../../modules/UseMemo'
import UseCallbackExample from '../../modules/UseCallback'
import UseContextExample from '../../modules/useContext'
import UseReducerExample from '../../modules/UseReducer'
import UseMyHookExample from '../../modules/UseMyHook'
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
                <Route path="/usememo">
                    <UseMemoExample />
                </Route>
                <Route path="/usecallback">
                    <UseCallbackExample />
                </Route>
                <Route path="/usecontext">
                    <UseContextExample />
                </Route>
                <Route path="/usereducer">
                    <UseReducerExample />
                </Route>
                <Route path="/hook-personalizado">
                    <UseMyHookExample />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </main>
    )
}
