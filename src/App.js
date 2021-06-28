import './App.css';
import { BaseLayout } from './layouts';
import { Home } from './pages';
import { useSelector } from "react-redux";

function App() {
    const store = useSelector(store => store);
    console.log('___________________');
    console.log(store);
    console.log('___________________');

    return (
        <BaseLayout>
            <Home/>
        </BaseLayout>
    )
}

export default App;
