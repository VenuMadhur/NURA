import { useState } from "react";
import Header from "./components/Header";
import HealthSection from "./components/HealthSection";
import PeopleSection from "./components/PeopleSection";
import Hero from "./components/Hero";
import "./App.css";

function App() {
  const [selected, setSelected] = useState();

  return (
    <div>
      <Header />
      <main>
        <Hero />
        <div className="section-switcher">
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
        </div>

        {selected === "health" && <HealthSection />}
        {selected === "people" && <PeopleSection />}
      </main>
    </div>
  );
}

export default App;
