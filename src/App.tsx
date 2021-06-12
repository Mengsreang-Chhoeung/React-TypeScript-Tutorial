import React from 'react';
import './style.css';

const App: React.FC = () => {

  // initial value
  const i: number = 1;

  // initial style
  const myStyle: React.CSSProperties = {
    backgroundColor: 'red',
    color: 'white',
  };

  return (
    <React.Fragment>
      {/* Introduction to JSX */}
      <h1>Welcome to React Tutorial😋!</h1>
      <h2>Coding...</h2>
      <h2>Eating...</h2>
      <h2>Sleeping...</h2>

      {/* JavaScript Expression in JSX */}
      <h2>{10 + 20}</h2>

      {/* Ternary Expression in JSX */}
      <h2>{i === 1 ? "Hello React" : "Bye TypeScript"}</h2>

      {/* Css Internal Style */}
      <h2 style={myStyle}>Hello React</h2>

      {/* Css Inline Style */}
      <h2 style={{backgroundColor: 'blue', color: 'white'}}>Bye TypeScript</h2>

      {/* Css External Style */}
      <h2 className="my__header__style">Love NextJS</h2>

      {/* This is a comment */}

      {/* Note for attribute htmlFor and className that is for normal html tag are for and class */}
      <label htmlFor="hello">Hello</label>
      <h2 className="world">World</h2>
    </React.Fragment>
  );
};

export default App;