import React from 'react';
import Greeting from './components/greeting';
import Counter from './components/counter';
import InformationForm from './components/informationForm';

const App: React.FC = () => {

  return (
    <React.Fragment>
      {/* Greeting */}
      <Greeting greeting={"React JS"} version={17.2}/>
      <Greeting greeting={"Angular"} version={12.2}/>
      <Greeting greeting={"Vue JS"} version={3.2}/>
      
      {/* Counter */}
      <Counter count={0}/>

      {/* Information Form */}
      <InformationForm/>
    </React.Fragment>
  );
};

export default App;