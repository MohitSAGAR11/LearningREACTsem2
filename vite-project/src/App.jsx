import "./App.css";
import Counter from "./components/counter";
import ToggleVisibility from "./components/ToggleVisibility";
import ControlledInput from "./components/ControlledInput";
import AdditemList from "./components/AdditemList";
import FormReset from "./components/FormReset";
function App() {
  return (
    <>
      <Counter />;
      <div>
      <ToggleVisibility />
      </div>
      <div>
        <ControlledInput />
      </div>
      <div>
        <AdditemList />
      </div>
      <div>
        <FormReset />
      </div>
    </>
  );
}

export default App;
