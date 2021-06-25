import { Switch, Route } from 'react-router-dom'

import Home from '../../modules/Home'
import UseStateExample from '../../modules/UseState'
<<<<<<< HEAD
import UseEffectExample from '../../modules/UseEffect'
=======
>>>>>>> 5bc2d1968d34be673c5ed77304f4bca99711f30a
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
<<<<<<< HEAD
                <Route path="/useeffect">
                    <UseEffectExample />
                </Route>
=======
>>>>>>> 5bc2d1968d34be673c5ed77304f4bca99711f30a
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </main>
    )
}
