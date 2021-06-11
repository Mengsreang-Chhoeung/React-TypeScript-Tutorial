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

![react-index-html thumbnail](/_thumbnail_doc/index-html.JPG "React index.html")

- នៅក្នុង Folder `src` មាន file ជាច្រើនដែលយើងមិនត្រូវការប្រើ ចឹងអាចលុប file ទាំងអស់នោះបាន:

- ពេលមិនទាន់បានលុប

![react-src-folder thumbnail](/_thumbnail_doc/src-folder-before.JPG "React Src Folder Before Removed")

- បន្ទាប់ពីលុបរួច

![react-src-folder thumbnail](/_thumbnail_doc/src-folder-after.JPG "React Src Folder After Removed")

- ចូលទៅក្នុង `index.tsx` នៅក្នុង folder `src` ហើយធ្វើការលុបកូដដែលយើងមិនត្រូវប្រើ:

- ពេលមិនទាន់បានលុប

![react-index-tsx thumbnail](/_thumbnail_doc/index-tsx-before.JPG "React Index Before Removed Unused Code")

- បន្ទាប់ពីលុបរួច

![react-index-tsx thumbnail](/_thumbnail_doc/index-tsx-after.JPG "React Index After Removed Unused Code")

- បញ្ជាក់បន្តិចទាក់ទងនឹង file `index.tsx` ខាងលើនេះ ដែល file មួយនេះមានតួនាទីដើរតួជា _main program_ នៅក្នុង **React** ដោយសារតែ វាបានចាប់ file `index.html` ដែលស្ថិតនៅក្នុង folder `public` ដែលក្នុងនោះគឺមាន `<div id="root"></div>` ដូច្នេះវាបានចាប់ _id_ `root` តាមរយះនឹងមក ហើយយកមក _render_ ក្នុង **App Component** ដែលស្ថិតនៅក្នុង file `App.tsx`។

- ចូលទៅក្នុង `App.tsx` នៅក្នុង folder `src` ហើយធ្វើការលុបកូដដែលយើងមិនត្រូវប្រើ:

- ពេលមិនទាន់បានលុប

![react-app-tsx thumbnail](/_thumbnail_doc/app-tsx-before.JPG "React App Before Removed Unused Code")

- បន្ទាប់ពីលុបរួច

![react-app-tsx thumbnail](/_thumbnail_doc/app-tsx-after.JPG "React App After Removed Unused Code")

- បន្ទាប់មកយើងនឹងឃើញលទ្ធផលនៅលើ _Web Browser_ បែបនេះ:

![react-start-up-page thumbnail](/_thumbnail_doc/react-start-up-page-after-change.JPG "React Start Up Page")
