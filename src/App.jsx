import Header from "./components/header/Header";
import CoreConcept from "./components/coreConcept/CoreConcept";
import TabButton from "./components/tabButton/TabButton";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import { useState } from "react";

function App() {
    const tabButtons = Object.keys(EXAMPLES);
    const [selectedTopic, setSelectedTopic] = useState("");
    function handleSelect(topic) {
        setSelectedTopic(topic);
    }

    const tabContent = !selectedTopic ? (
        <p>Please Select a topic.</p>
    ) : (
        <div className="tab">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
        </div>
    );

    return (
        <div>
            <Header />
            <main>
                <section id="core-concepts">
                    <h2>Core concepts</h2>
                    <ul>
                        {CORE_CONCEPTS.map((coreConcept) => (
                            <CoreConcept key={coreConcept.title} {...coreConcept} />
                        ))}
                    </ul>
                </section>

                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        {tabButtons.map((tabButton) => (
                            <TabButton
                                key={tabButton}
                                onSelect={() => handleSelect(tabButton)}
                                isSelected={tabButton === selectedTopic}
                            >
                                {EXAMPLES[tabButton].title}
                            </TabButton>
                        ))}
                    </menu>
                    {tabContent}
                </section>
            </main>
        </div>
    );
}

export default App;
