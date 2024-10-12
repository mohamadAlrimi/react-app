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

import { CORE_CONCEPTS} from "./data.js";
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      <img src="https://gsmr8r.csb.app/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}
function CoreConcept(props){
  return(
<li>
  <img src={props.image} alt={props.title}/>
  <h3>{props.title}</h3>
  <p>{props.description}</p>
</li>
  );
}
function App() {
  return (
    <div>
      
        
        <Header/>
      

      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
             <CoreConcept {...CORE_CONCEPTS[0]}/>
             <CoreConcept {...CORE_CONCEPTS[1]}/>
             <CoreConcept {...CORE_CONCEPTS[2]}/>
             <CoreConcept {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
