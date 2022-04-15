import 'bulmaswatch/superhero/bulmaswatch.min.css';
import { useState } from 'react';
import CodeEditor from './components/code-editor';
import Preview from './components/preview';
import bundle from './bundler/index';

// Convert react-dom render to React 18 syntax
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
const container = document.querySelector('#root');
const root = createRoot(container!);

const App = () => {
  const [input, setInput] = useState('');
  const [code, setCode] = useState('');

  const onClick = async () => {
    const output = await bundle(input);
    setCode(output);
  };

  return (
    <div>
      <CodeEditor
        initialValue='const a = 1;'
        onChange={(value) => setInput(value)}
      />
      <div>
        <button onClick={onClick}>Submit</button>
      </div>
      <Preview code={code} />
    </div>
  );
};

// Convert react-dom render to React 18 syntax
// ReactDOM.render(<App />, document.querySelector('#root'));
root.render(<App />);

/*  TEST CODE

import React from 'react';

const testComponent = () => {
  return (
    <div>
      <h1>Hello World!</h1>
      <p>This is a test paragraph</p>
    </div>
  );
};

testComponent();

*/
