import 'bulmaswatch/superhero/bulmaswatch.min.css';
import CellList from './components/cell-list';
import { Provider } from 'react-redux';
import { store } from './state';

// Convert react-dom render to React 18 syntax
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
const container = document.querySelector('#root');
const root = createRoot(container!);

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <CellList />
      </div>
    </Provider>
  );
};

// Convert react-dom render to React 18 syntax
// ReactDOM.render(<App />, document.querySelector('#root'));
root.render(<App />);
