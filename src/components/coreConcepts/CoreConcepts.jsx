import {CORE_CONCEPTS} from "../../data.js";
import CoreConcept from "../coreConcept/CoreConcept.jsx";
import "./CoreConcepts.css"
import {Section} from "../section/Section.jsx";

export default function CoreConcepts() {
    return (<Section title="Core concepts" id="core-concepts">
            <ul>
                {CORE_CONCEPTS.map((coreConcept) =>
                    (<CoreConcept key={coreConcept.title} {...coreConcept} />))
                }
            </ul>
        </Section>);
}
