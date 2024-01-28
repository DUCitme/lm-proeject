import AppRouter from '@core/router';
import React from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { store } from './stores/store';
import { ToastContainer } from 'react-toastify';

import 'virtual:windi.css';
import 'react-toastify/dist/ReactToastify.css';

import { ChakraProvider } from '@chakra-ui/react';

const App: React.FC = () => {
    const persistor = persistStore(store);

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
