import {useState} from 'react';
import TabButton from "../tabButton/TabButton.jsx";
import {EXAMPLES} from "../../data.js";
import "./examples.css"
import {Section} from "../section/Section.jsx";
import Tabs from "../tabButton/Tabs.jsx";

export default function Examples() {

    const tabButtons = Object.keys(EXAMPLES);
    const [selectedTopic, setSelectedTopic] = useState("");

    const handleSelect = topic => setSelectedTopic(topic);

    const tabContent = !selectedTopic ? (<p>Please Select a topic.</p>) : (<div className="tab">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
    </div>);
    return (<Section title="Examples" id="examples">
        <Tabs buttonContainer="menu"
            buttons={tabButtons.map((tabButton) => (<TabButton
            key={tabButton}
            onClick={() => handleSelect(tabButton)}
            isSelected={tabButton === selectedTopic}
        >
            {EXAMPLES[tabButton].title}
        </TabButton>))}>
            {tabContent}
        </Tabs>
    </Section>);
}
