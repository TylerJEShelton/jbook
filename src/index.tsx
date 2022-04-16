import 'bulmaswatch/superhero/bulmaswatch.min.css';
import CodeCell from './components/code-cell';
import TextEditor from './components/text-editor';

// Convert react-dom render to React 18 syntax
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
const container = document.querySelector('#root');
const root = createRoot(container!);

const App = () => {
  return (
    <div>
      {/* <CodeCell /> */}
      <TextEditor />
    </div>
  );
};

// Convert react-dom render to React 18 syntax
// ReactDOM.render(<App />, document.querySelector('#root'));
root.render(<App />);
