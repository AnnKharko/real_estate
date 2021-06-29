import './App.css';
import { BaseLayout } from './layouts';
import { Home } from './pages';
import {useDispatch, useSelector} from "react-redux";

function App() {
    const {note, wishlist, homes} = useSelector(({note:{note}, wishlist:{wishlist}, homes: {homes}}) => ({note, wishlist, homes}));
    // console.log('___________________');
    // console.log();
    // console.log('___________________');
const dispatch = useDispatch();
    return (
        <BaseLayout>
            <p>{note.length} {wishlist.length} {homes.length}</p>
            <Home/>
        </BaseLayout>
    )
}

export default App;
