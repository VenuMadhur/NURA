import { useState } from "react";
import Header from "./components/Header";
import HealthSection from "./components/HealthSection";
import PeopleSection from "./components/PeopleSection";

function App() {
  const [selected, setSelected] = useState();

  return (
    <div>
      <Header />
      <button
        type="button"
        onClick={() => {
          setSelected("health");
        }}
      >
        My Health
      </button>
      <button
        type="button"
        onClick={() => {
          setSelected("people");
        }}
      >
        My People
      </button>
      <main>
        {selected === "health" && <HealthSection />}
        {selected === "people" && <PeopleSection />}
      </main>
    </div>
  );
}

export default App;
