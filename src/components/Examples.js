import { useState } from "react";
import TabButton from "./TabButton"
import { EXAMPLES } from "../data";
export default  function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();
  function handelSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }
    return ( <section id="examples">
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
      </section>);
}