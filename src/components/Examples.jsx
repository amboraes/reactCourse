import TabButton from "./TabButton";
import { EXAMPLES } from "../data.js";
import { useState } from "react";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
  // SelectedTopic es el valor que se muestra, setSelectedTopic es una funcion que recarga el componente con el nuevo valor
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
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
    <Section title={"Examples"} id="examples">
      <>
        <Tabs
          buttons={
            <>
              <TabButton
                isSelected={selectedTopic === "components"}
                onClick={() => handleSelect("components")}
              >
                Component
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "jsx"}
                onClick={() => handleSelect("jsx")}
              >
                JSX
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "props"}
                onClick={() => handleSelect("props")}
              >
                PROPS
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "state"}
                onClick={() => handleSelect("state")}
              >
                State
              </TabButton>
            </>
          }
        >
          {tabContent}
        </Tabs>

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
      </>
    </Section>
  );
}
