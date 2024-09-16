import { useState } from "react";
import { CORE_CONCEPTS, EXAMPLES } from "./data.js";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";

// function CoreConcept({image, title, description}) {
function App() {
  // SelectedTopic es el valor que se muestra, setSelectedTopic es una funcion que recarga el componente con el nuevo valor
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    // console.log("Hello");
  }

  let tabContent = <p>Please select a topic</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
            {/*<CoreConcept*/}
            {/*  title={CORE_CONCEPTS[0].title}*/}
            {/*  description={CORE_CONCEPTS[0].description}*/}
            {/*  image={CORE_CONCEPTS[0].image}*/}
            {/*/>*/}
            {/*<CoreConcept {...CORE_CONCEPTS[1]} />*/}
            {/*<CoreConcept {...CORE_CONCEPTS[2]} />*/}
            {/*<CoreConcept {...CORE_CONCEPTS[3]} />*/}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}
            >
              Component
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}
            >
              PROPS
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>
          </menu>
          {/*{!selectedTopic ? <p>Please select a topic</p> : null}*/}
          {/*/!*El && hace lo mismo que el ?, solo muestra lo que lo acompaña si es cerdadero*!/*/}
          {/*{selectedTopic && (*/}
          {/*  <div id="tab-content">*/}
          {/*    <h3>{EXAMPLES[selectedTopic].title}</h3>*/}
          {/*    <p>{EXAMPLES[selectedTopic].description}</p>*/}
          {/*    <pre>*/}
          {/*      <code>{EXAMPLES[selectedTopic].code}</code>*/}
          {/*    </pre>*/}
          {/*  </div>*/}
          {/*)}*/}
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
