import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { store } from './redux/store';
import { Provider } from 'react-redux';

import Navigation from './Navigation';

export default function App() {
    const Stack = createNativeStackNavigator();
    return (
        <Provider store={store}>
            <Navigation />
        </Provider>
    );
}
