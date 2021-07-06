import './App.css';
import { BaseLayout } from './layouts';
import { Home } from './pages';
import {Switch, Route, useHistory} from 'react-router-dom';
import {RealtorList} from "./components/realtor-list";

function App() {
    const history = useHistory();

    return (
        <BaseLayout>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/realtors">
                    <RealtorList/>
                </Route>
                <Route >
                    <h1> PAGE NOT FOUND <button onClick={() => history.push('/')}>Go home</button></h1>
                </Route>
            </Switch>
        </BaseLayout>
    )
}

export default App;
