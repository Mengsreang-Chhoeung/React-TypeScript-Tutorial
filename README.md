# ឯកសារ React + TypeScript ជាភាសាខ្មែរ

![react-typescript thumbnail](/_thumbnail_doc/react-typescript.jpg "React TypeScript Tutorial")

## តម្រូវការមុននឹងសិក្សា React + TypeScript:

- មុននឹងអ្នកអាចរៀននឹង **React JS** បាន អ្នកត្រូវមានចំណេះដឹងទាក់ទងនឹងភាសា _JavaScript, HTML និង CSS_ ជាមុនសិន។ បើទោះបីជា **React JS** មិនប្រើប្រាស់ **HTML** ក្តី តែវាប្រើ **JSX** ដែលវាដូចទៅនឹង **HTML** ដែរ ដូច្នេះ **HTML** គឺនៅតែជាចំណេះដឹងដែលសំខាន់សម្រាប់អ្នក។ យើងនៅតែប្រើប្រាស់ **CSS** ដដែល សម្រាប់កំណត់ _Style_ ទៅឲ្យ **Web page** ហើយចំណែកឯ **JavaScript** វិញគឺយើងអាចប្រើបានទាំងពីរ Versions ពោលគឺ _**ES5**_ និង _**ES6**_។

## លក្ខណៈពិសេសរបស់ React + TypeScript:

- **JSX – JSX** គឺជា **_JavaScript syntax extension_**។ វាប្រើសម្រាប់សរសេរកូដ _**XML**_ ដើម្បីបង្ហាញលទ្ធផលនៅលើ _Browser_។
- **Components** – នៅក្នុង **React** អ្វីៗទាំងអស់សុទ្ធតែជា **_Components_** ទាំងអស់។ ដូច្នេះការបង្កើត _Web page_ នៅក្នុង **React** គឺយើងសរសេរវាជា _**Components**_ នីមួយៗឲ្យដាច់ពីគ្នា។
- **License** – **React** បង្កើតឡើងដោយក្រុមហ៊ុន **Facebook** នៅថ្ងៃទី២៩ ខែឧសភា ឆ្នាំ២០១៣។

## អ្វីទៅជា React?😯

- **React** ជា _library_ របស់ **JavaScript** ដែលប្រើសម្រាប់យកមកបង្កើតជា _**User Interface**_ របស់ _**Website**_។

## អ្វីទៅជា TypeScript?😲

- **TypeScript** គឺដូចទៅចឹង **JavaScript** ដែរ ចំណុចដែលខុសគ្នានោះគឺថា ការសរសេរកូដដោយប្រើ **TypeScript** គឺប្រើប្រភេទទិន្នន័យត្រឹមត្រូវ តែបើ **JavaScript** វិញគឺចង់ប្រើប្រភេទទិន្នន័យអ្វីក៏បាន។

- **TypeScript** មិនអាចប្រតិបត្តិកូដរបស់ខ្លួនទៅលើ _Web Browser_ បាននោះទេ ដូច្នេះ **TypeScript** ត្រូវបំលែងកូដទាំងនោះទៅជាកូដរបស់ **JavaScript** ដើម្បីអាចប្រតិបត្តិនៅលើ _Web Browser_ បាន។

## តើធ្វើយ៉ាងមិចបានអាចសរសេរ React + TypeScript បាន?🤔

- ត្រូវចំណាំថា ដើម្បីសរសេរ **React** បានយើងត្រូវការបង្កើត _Project_ របស់ **React** ដោយប្រើប្រាស់ _**Command Prompt**_ ឬ _**Git Bash**_។ តែមុននឹងបង្កើត _Project_ យើងត្រូវទាញយកនូវ **NodeJS** មកក្នុងកុំព្យូទ័ររបស់សិន: https://nodejs.org/en/
- បន្ទាប់ពីបានទាញយកនូវ **NodeJS** បានជោគជ័យ យើងត្រូវទាញយកនៅ _**packages manager(npm or yarn)**_។ សម្រាប់ _npm_ គឺវាមានស្រាច់មកជាមួយ **NodeJS** ដែលយើងបានទាញយកគន្លងមក តែបើចង់ប្រើប្រាស់ _yarn_ វិញយើងត្រូវទាញយកវាបន្ថែមទៀត: https://classic.yarnpkg.com/en/docs/install។
- បន្ទាប់ពីបានទាញយកនូវ **NodeJS** និង **Packages Manager** រួចរាល់មកហើយ ចំណុចបន្ទាប់គឺយើងបង្កើត _React Project_ ដែលមាន _Command_ ដូចខាងក្រោម:

```
npx create-react-app projectname --template typescript : សម្រាប់អ្នកប្រើប្រាស់ npm។
```

```
yarn create react-app projectname --template typescript : សម្រាប់អ្នកប្រើប្រាស់ yarn។
```

- បន្ទាប់ពីបង្កើត _Project_ រួចហើយយើងធ្វើការ `cd projectname` ដើម្បីចូលទៅក្នុង _Project Folder_ នោះបន្ទាប់មកយើង _Run Project_ ដោយប្រើ _command_

```
npm start សម្រាប់ npm ឬ yarn start សម្រាប់ yarn
```

- បន្ទាប់មក អ្នកបើក _Browser_ ហើយវាយនៅ _Address_ ដែលផ្តល់ដោយ **React**:

![react-start-console thumbnail](/_thumbnail_doc/start-react-console.JPG "React Start Console")

- លទ្ធផលបន្ទាប់ពីប្រតិបត្តិនៅលើ _Web browser_:

![react-start-up thumbnail](/_thumbnail_doc/react-start-up-page.JPG "React Start Up Page")

## រៀបចំ Project Folder ឲ្យបានត្រឹមត្រូវ:🤭

- ខាងក្រោមនេះគឺជា _Project Folder_ ដែល **React** បានផ្តល់ឲ្យ:

![react-project-folder thumbnail](/_thumbnail_doc/react-project-folder.JPG "React Project Folder")

- ដើម្បីផ្លាស់ប្តូរឈ្មោះរបស់ _Project_ របស់យើងពី _React App_ ទៅជា _React TypeScript Tutorial_ បាន យើងត្រូវចូលរក file `index.html` នៅក្នុង folder `public`:

![react-public-folder thumbnail](/_thumbnail_doc/public-folder.JPG "React Public Folder")

- រួចកែអក្សរនៅក្នុង `<title></title>` tag:

`public / index.html`

![react-index-html thumbnail](/_thumbnail_doc/index-html.JPG "React index.html")

- នៅក្នុង Folder `src` មាន file ជាច្រើនដែលយើងមិនត្រូវការប្រើ ចឹងអាចលុប file ទាំងអស់នោះបាន:

- ពេលមិនទាន់បានលុប

![react-src-folder thumbnail](/_thumbnail_doc/src-folder-before.JPG "React Src Folder Before Removed")

- បន្ទាប់ពីលុបរួច

![react-src-folder thumbnail](/_thumbnail_doc/src-folder-after.JPG "React Src Folder After Removed")

- ចូលទៅក្នុង `index.tsx` នៅក្នុង folder `src` ហើយធ្វើការលុបកូដដែលយើងមិនត្រូវប្រើ:

- ពេលមិនទាន់បានលុប

`src / index.tsx`

![react-index-tsx thumbnail](/_thumbnail_doc/index-tsx-before.JPG "React Index Before Removed Unused Code")

- បន្ទាប់ពីលុបរួច

`src / index.tsx`

![react-index-tsx thumbnail](/_thumbnail_doc/index-tsx-after.JPG "React Index After Removed Unused Code")

- បញ្ជាក់បន្តិចទាក់ទងនឹង file `index.tsx` ខាងលើនេះ ដែល file មួយនេះមានតួនាទីដើរតួជា _main program_ នៅក្នុង **React** ដោយសារតែ វាបានចាប់ file `index.html` ដែលស្ថិតនៅក្នុង folder `public` ដែលក្នុងនោះគឺមាន `<div id="root"></div>` ដូច្នេះវាបានចាប់ _id_ `root` តាមរយះនឹងមក ហើយយកមក _render_ ក្នុង **App Component** ដែលស្ថិតនៅក្នុង file `App.tsx`។

- ចូលទៅក្នុង `App.tsx` នៅក្នុង folder `src` ហើយធ្វើការលុបកូដដែលយើងមិនត្រូវប្រើ:

- ពេលមិនទាន់បានលុប

`src / App.tsx`

![react-app-tsx thumbnail](/_thumbnail_doc/app-tsx-before.JPG "React App Before Removed Unused Code")

- បន្ទាប់ពីលុបរួច

`src / App.tsx`

![react-app-tsx thumbnail](/_thumbnail_doc/app-tsx-after.JPG "React App After Removed Unused Code")

- បន្ទាប់មកយើងនឹងឃើញលទ្ធផលនៅលើ _Web Browser_ បែបនេះ:

![react-start-up-page thumbnail](/_thumbnail_doc/react-start-up-page-after-change.JPG "React Start Up Page")

## អ្វីទៅជា JSX?🤔

- **React** ប្រើ _**JSX**_ សម្រាប់បង្កើតជា _UI_ នៅលើ _Web Browser_។ ហើយវាជាជម្រើសដ៏ល្អមួយសម្រាប់ការសរសេរកូដ​ **JavaScript** នៅក្នុង _**JSX**_។

- **JSX** គឺដូចទៅនឹង **HTML** អញ្ចឹង។

- បើសិនជាយើងសរសេរធាតុជាច្រើននៅក្នុង _**JSX**_ យើងត្រូវក្តោបធាតុទាំងអស់នោះនៅក្នុង _Container_ មួយដូច `<div></div>` tag ឬ `<React.Fragment></React.Fragment>` ជាដើម។

`src / App.tsx`

```
import React from 'react';

const App: React.FC = () => {

  // JSX are in return() method...
  return (
    <React.Fragment>
      <h1>Welcome to React Tutorial😋!</h1>
      <h2>Coding...</h2>
      <h2>Eating...</h2>
      <h2>Sleeping...</h2>
    </React.Fragment>
  );
};

export default App;
```

- **JavaScript Expression** អាចប្រើនៅក្នុង JSX បានដោយគ្រាន់តែក្តោបនូវកូដ **JavaScript** ជាមួយនឹង _curly brackets_ `{}`:

`src / App.tsx`

```
import React from 'react';

const App: React.FC = () => {
  return (
    <React.Fragment>

      {/* JavaScript Expression in JSX */}
      <h2>{10 + 20}</h2>

    </React.Fragment>
  );
};

export default App;
```

- យើងមិនអាចប្រើប្រាស់នូវ `if else statement` នៅក្នុង _**JSX**_ បាននោះទេ តែយើងអាចប្រើ `ternary expression` ជំនួសបាន:

`src / App.tsx`

```
import React from 'react';

const App: React.FC = () => {

  // initial value
  const i: number = 1;

  return (
    <React.Fragment>

      {/* Ternary Expression in JSX */}
      <h2>{i === 1 ? "Hello React" : "Bye TypeScript"}</h2>

    </React.Fragment>
  );
};

export default App;
```

- យើងអាចប្រើប្រាស់ _**CSS**_ បានបីរបៀបដូចទូទៅដែរពោលគឺ _inline, internal និង external_:

- Inline Style:

`src / App.tsx`

```
import React from 'react';

const App: React.FC = () => {
  return (
    <React.Fragment>

      {/* Css Inline Style */}
      <h2 style={{backgroundColor: 'blue', color: 'white'}}>Bye TypeScript</h2>

    </React.Fragment>
  );
};

export default App;
```

- Internal Style:

`src / App.tsx`

```
import React from 'react';

const App: React.FC = () => {

  // initial style
  const myStyle: React.CSSProperties = {
    backgroundColor: 'red',
    color: 'white',
  };

  return (
    <React.Fragment>

      {/* Css Internal Style */}
      <h2 style={myStyle}>Hello React</h2>

    </React.Fragment>
  );
};

export default App;
```

- External Style:

`src / App.tsx`

```
import React from 'react';
import './style.css';

const App: React.FC = () => {
  return (
    <React.Fragment>

      {/* Css External Style */}
      <h2 className="my__header__style">Love NextJS</h2>

    </React.Fragment>
  );
};

export default App;
```

`src / style.css`

```
.my__header__style{
    background-color: green;
    color: white;
}
```

- ពេលដែលយើងចង់ `comment` ទៅលើកូដនៅក្នុង _**JSX**_ គឺយើងដាក់វានៅក្នុង _curly brackets_ ជាមួយនឹង `/* … */` ពោលគឺបែបនេះ `{/* … */}`។

`src / App.tsx`

```
import React from 'react';

const App: React.FC = () => {
  return (
    <React.Fragment>

      {/* This is a comment */}

    </React.Fragment>
  );
};

export default App;
```

- **ចំណាំ** - យើងគួរតែប្រើ `className` និង `htmlFor` _attribute_ ជំនួស `class` និង `for`:

`src / App.tsx`

```
import React from 'react';

const App: React.FC = () => {
  return (
    <React.Fragment>

      {/* Note for attribute htmlFor and className that is for normal html tag are for and class */}
      <label htmlFor="hello">Hello</label>
      <h2 className="world">World</h2>

    </React.Fragment>
  );
};

export default App;
```

## អ្វីទៅជា Component?🤔

- **Component** ធ្វើឲ្យយើងអាចបំបែកនូវ _UI_ ទៅជាប្រភេទ _UI_ ដែលមានឯករាជ្យ។

![react-component-structure thumbnail](/_thumbnail_doc/react-component-structure.JPG "React Component Structure")

- នៅក្នុង **React** `component` ត្រូវបានបែងចែកជាពីរគឺ _`Functional Component`_ និង _`Class Based Component`_។

- `Class Based Component:`

`src / components / classComponents / HelloClassComponent.tsx`

```
import React from 'react';

class HelloClassComponent extends React.Component {
    render(){
        return(
            <React.Fragment>
                <h1>Hello Class Component🌚!</h1>
            </React.Fragment>
        );
    };
};

export default HelloClassComponent;
```

- `Functional Component:`

`src / components / functionComponents / HelloFunctionComponent.tsx`

```
import React from 'react';

const HelloFunctionComponent: React.FC = () => {
    return(
        <React.Fragment>
            <h1>Hello Function Component🌝!</h1>
        </React.Fragment>
    );
};

export default HelloFunctionComponent;
```

`src / App.tsx`

```
import React from 'react';
import HelloClassComponent from './components/classComponents/HelloClassComponent';
import HelloFunctionComponent from './components/functionComponents/HelloFunctionComponent';

const App: React.FC = () => {
  return (
    <React.Fragment>

      {/* Components */}
      <HelloClassComponent/>
      <HelloFunctionComponent/>

    </React.Fragment>
  );
};

export default App;
```

- **ចំណាំ** - នៅក្នុង _Tutorial_ មួយនេះ យើងរៀនប្រើតែ _`Functional Component`_ តែមួយគត់។

## អ្វីទៅជា​ Props?🤔

- **Props** គឺដូចទៅនឹង _attribute_ របស់ **HTML** អញ្ចឹងដែលវាប្រើសម្រាប់បោះតម្លៃពី _`Parent Component`_ ទៅឲ្យ _`Child Component`_។

`src / App.tsx`

```
import React from 'react';
import Greeting from './components/functionComponents/Greeting';

const App: React.FC = () => {
  return (
    <React.Fragment>

      {/* Props */}
      <Greeting greeting={"React JS"} version={17.2}/>
      <Greeting greeting={"Angular"} version={12.2}/>
      <Greeting greeting={"Vue JS"} version={3.2}/>

    </React.Fragment>
  );
};

export default App;
```

`src / components / functionComponents / Greeting.tsx`

```
import React from "react";

// initial props by using interface
interface GreetingProps{
    // properties
    greeting: string;
    version: number;
};

const Greeting: React.FC<GreetingProps> = (props) => {

    // given property as props
    const {greeting, version} = props;

    return(
        <React.Fragment>
            <h1>Hello {greeting} Version: {version}.</h1>
        </React.Fragment>
    );
};

export default Greeting;
```

## អ្វីទៅជា State?🤔

- **State** ជាកន្លែងសម្រាប់ផ្ទុកទិន្នន័យ និងផ្លាស់ប្តូរទិន្នន័យបាន តាមអ្វីដែលយើងចង់ផ្លាស់ប្តូរ។ បើសិនជាយើងមិនប្រើ **State** ទេ ពេលដែលយើងចង់ផ្លាស់ប្តូរទិន្នន័យនៅលើ _User Interface_ គឺមិនអាចផ្លាស់ប្តូរបាននោះទេ ដូច្នេះតម្រូវការត្រូវឲ្យប្រើ **State** ជាចាំបាច់។

- ខាងក្រោមនេះគឺជាឧទាហរណ៏ទាក់ទងនឹងការប្រើប្រាស់ **State** ជាមួយនឹង **Props** ដោយប្រើ `useState()` hook:

`src / components / greeeting / index.tsx`

```
import React, {useState} from "react";

// initial props by using interface
interface GreetingProps{
    // properties
    greeting: string;
    version: number;
};

const Greeting: React.FC<GreetingProps> = (props) => {

    // given property as props
    const {greeting, version} = props;

    // given props into state
    const [greets, setGreets] = useState(greeting);
    const [verions, setVersions] = useState(version);

    return(
        <React.Fragment>
            <h1>Hello {greets} Version: {verions}.</h1>
        </React.Fragment>
    );
};

export default Greeting;
```

`src / App.tsx`

```
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
```

- បន្ទាប់ពីយើងបានសរសេរនូវឧទាហរណ៍ខាងលើរួចមកហើយ យើងបានឃើញថាការប្រើ State គឺយើងប្រើ `useState()` ដែលជា _method_ របស់ `React Hook`។ នៅក្នុងនោះ `const [greets, setGreets] = useState(greeting);` យើងឃើញថាគឺដូចទៅនឹងការបង្កើតអញ្ញាតធម្មតាចឹង ប៉ុន្តែការប្រកាសឈ្មោះអញ្ញតមួយនេះគឺមានពីរដែលផ្ទុកនៅក្នុង `square brackets []` ហើយឈ្មោះអញ្ញាតទាំងពីរនោះគឺសុទ្ធតែមានតួនាទីខុសគ្នាទាំងពីរ ពោលគឺ `greets` ប្រើសម្រាប់ទទួលតម្លៃរីឯ `setGreets` ប្រើសម្រាប់កំណត់តម្លៃ។ ចំណែកឯនៅក្នុង `useState(greeting)` គឺតម្លៃនៅក្នុង `useState()` គឺជាតម្លៃ _default_។​ នៅឧទាហរណ៍ខាងក្រោមទៀត យើងបានយល់ច្រើនទាក់ទងនឹងតម្លៃ _default_ មួយនេះ។
