import Header from "./components/header/Header";
import CoreConcepts from "./components/coreConcepts/CoreConcepts.jsx";
import Examples from "./components/examples/Examples.jsx";

function App() {
    return (
        <>
            <Header/>
            <main>
                <CoreConcepts/>
                <Examples/>
            </main>
        </>
    );
}

export default App;
