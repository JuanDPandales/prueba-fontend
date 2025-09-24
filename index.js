import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';
import App from './src/App';

// registerRootComponent llama a AppRegistry.registerComponent('main', () => App);
// También se asegura de que si hay un error de registro, 
// el error se reporte apropiadamente
registerRootComponent(App);