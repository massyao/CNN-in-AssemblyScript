import React, { useState } from 'react';
import './App.css';

import waApi from '../wa-api';

function App() {
  const [value, setValue] = useState(5);
  const [result, setResult] = useState();
  const [scamble, setScramble] = useState('scramble this string');
  const [type, queryType] = useState('getType');

  let shape = waApi.Shape.wrap(waApi.getShape())

  return (
    <div className="App">
      <p>
        The factorial of
        <input value={value} onChange={evt => setValue(evt.target.value)} />
        is {result}
      </p>
      <button onClick={async () => setResult((await waApi).factorial(value))}>
        Calculate
      </button>


      <p>Scrambled string: {scamble}</p>
      <button onClick={async () => setScramble((await waApi).scramble(scamble))}>
        Scramble
      </button>

      <p>Shape  is: {type}</p>
      <button onClick={async () => queryType(waApi.__get_size(shape.get_size()))}>
        queryShape
      </button>

    </div>
  );
}

export default App;
