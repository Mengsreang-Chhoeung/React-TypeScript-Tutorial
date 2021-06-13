import React from 'react';
import Greeting from './components/greeting';

const App: React.FC = () => {

  return (
    <React.Fragment>
      <Greeting greeting={"React JS"} version={17.2}/>
      <Greeting greeting={"Angular"} version={12.2}/>
      <Greeting greeting={"Vue JS"} version={3.2}/>
    </React.Fragment>
  );
};

export default App;