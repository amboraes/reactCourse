import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";

// function CoreConcept({image, title, description}) {
function App() {
  return (
    // <Fragment> this is an alternative that will work on older projects too
    <>
      {/*//This one will work on modern projects*/}
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
    // </Fragment>
  );
}

export default App;
