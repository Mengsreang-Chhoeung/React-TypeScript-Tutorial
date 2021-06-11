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
- បន្ទាប់ពីបានទាញយកនូវ **NodeJS** បានជោគជ័យ យើងត្រូវទាញយកនៅ _**packages manager(npm or yarn)**_។ សម្រាប់ _npm_ គឺវាមានស្រាច់មកជាមួយ **NodeJS** ដែលយើងបានទាញយកគន្លងមក តែបើចង់ប្រើប្រាស់ _yarn_ វិញយើងត្រូវទាញយកវាបន្ថែមទៀត: https://classic.yarnpkg.com/en/docs/install/។
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

- បន្ទាប់មក អ្នកបើក Browser ហើយវាយនៅ Address ដែលផ្តល់ដោយ React:

![react-start-console thumbnail](/_thumbnail_doc/start-react-console.jpg "React Start Console")
