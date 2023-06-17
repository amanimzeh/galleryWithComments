/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Home from './src/screens/Home';
import store from './src/redux/store';
import {Provider} from 'react-redux';
export interface ImageData {
  id: number;
  imageUrl: string;
}
const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
