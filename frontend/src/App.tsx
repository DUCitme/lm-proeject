import AppRouter from '@core/router';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { store } from './stores/store';
import { ToastContainer } from 'react-toastify';

import 'virtual:windi.css';
import 'react-toastify/dist/ReactToastify.css';

import { ChakraProvider } from '@chakra-ui/react';
import BOOK_API from './apis/book-api';

const App: React.FC = () => {
    const persistor = persistStore(store);

    useEffect(() => {
        BOOK_API.getAllBooks().then((res) => {
            console.log(res);
        });
    });
    return (
        <ChakraProvider>
            <Provider store={store}>
                <PersistGate loading={<div>loading...</div>} persistor={persistor}>
                    <AppRouter />
                    <ToastContainer limit={5} />
                </PersistGate>
            </Provider>
        </ChakraProvider>
    );
};

export default App;
