import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Counter from "./components/counter";

function App() {
  return (
    <div>
      <Navbar />
      <Card cardTitle="1" cardDescription="This is card 1"/>
      <Card cardTitle="2" cardDescription="This is card 2"/>
      <Card cardTitle="3" cardDescription="This is card 3"/>
      {/* <h1> heeellloooo </h1> */}
      <Counter />
    </div>
  );
}

export default App;
