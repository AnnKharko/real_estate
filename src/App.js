import './App.css';
import { BaseLayout } from './layouts';
import {HomeDetails, Main} from './pages';
import {Switch, Route, useHistory} from 'react-router-dom';
import {RealtorList, RealtorInfo, Login} from "./components";

function App() {
    const history = useHistory();

    return (
        <BaseLayout>
            <Switch>
                <Route path="/" exact>
                    <Main/>
                </Route>
                <Route path="/homes/:id" exact>
                    <HomeDetails/>
                </Route>
                <Route path="/realtors">
                    <RealtorList/>
                </Route>
                <Route path="/realtors/:id" exact>
                    <RealtorInfo/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route >
                    <h1> PAGE NOT FOUND <button onClick={() => history.push('/')}>Go home</button></h1>
                </Route>
            </Switch>
        </BaseLayout>
    )
}

export default App;
