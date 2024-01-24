import React, { useEffect, useState } from 'react';
import { TodoForm } from '../components/Form.jsx';
import { List } from '../components/List.jsx';
import Loading from '../components/Loading.jsx';
import {Formik} from "formik";

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [items, setItems] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            const currentItems = localStorage.getItem('todos');
            setIsLoading(false);
            setItems(currentItems === null ? [] : JSON.parse(currentItems));
        }, 3000);
        return () => {};
    }, []);

    const handleUpdateItem = (newItems) => {
        setItems(newItems);
    };

    return (
        <div className="p-1" style={{ backgroundColor: 'antiquewhite' }}>
            <h1>Todo-list</h1>
            <Formik>
                <TodoForm disabled={isLoading} handleUpdateItem={handleUpdateItem} />

            </Formik>
            {isLoading ? (
                <div className="text-center mt-2">
                    <Loading />
                </div>
            ) : (
                <List handleUpdateItem={handleUpdateItem} items={items} />
            )}
        </div>
    );
}

export default App;