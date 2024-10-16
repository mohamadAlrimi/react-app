// import logo from './logo.svg';
// import './App.css';

// import { CORE_CONCEPTS } from "./data";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// Important:
// For this project to work on CodeSandbox, image assets ("assets") folder
// must be stored in the public folder (as it's the case by default in this project)
import { useState } from "react";
import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.js";
import CoreConcept from "./components/CoreConcept.js";
import TabButton from "./components/TabButton.js";
import { EXAMPLES } from "./data.js";
// import MyComponent from "./myComponent.js";

// const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

// function genRandomInt(max) {
//   return Math.floor(Math.random() * (max + 1));
// }

// function Header() {
//   const description = reactDescriptions[genRandomInt(2)];
//   return (
//     <header>
//       <img src="https://gsmr8r.csb.app/assets/react-core-concepts.png" alt="Stylized atom" />
//       <h1>React Essentials</h1>
//       <p>
//         {description} React concepts you will need for almost any app you are going to build!
//       </p>
//     </header>
//   );
// }
// function CoreConcept(props){
//   return(
// <li>
//   <img src={props.image} alt={props.title}/>
//   <h3>{props.title}</h3>
//   <p>{props.description}</p>
// </li>
//   );
// }
function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  function handelSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }
  return (
    <>
      <Header />

      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
            {/* <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === "components"}
              click={() => handelSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              click={() => handelSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              click={() => handelSelect("props")}
            >
              Prpos
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              click={() => handelSelect("state")}
            >
              State
            </TabButton>
          </menu>
          {!selectedTopic ? (
            <p>Please select a topic.</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
        </section>
        {/* <MyComponent/> */}
      </main>
    </>
  );
}

export default App;
