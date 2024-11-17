import List from "./ts/components/List/List";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './ts/store';
import ItemDetails from "./ts/components/ItemDetails/ItemDetails";

function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Routes>
                    <Route path="/" element={<List />} />
                    <Route path="/:id/details" element={<ItemDetails/>} />
                </Routes>
            </Provider>
        </BrowserRouter>
    );
}

export default App;