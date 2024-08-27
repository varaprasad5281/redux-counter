import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/AppStore';
import Counter from './components/Counter';

function App() {
  return (
    <Provider store={store}>
      <Counter/>
    </Provider>
  );
}

export default App;
