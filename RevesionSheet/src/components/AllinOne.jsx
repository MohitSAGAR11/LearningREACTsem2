import React, { useState, useEffect } from "react";

// 1. Todo List: Add and remove tasks.
function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {
    if (taskInput.trim() !== "") {
      setTasks([...tasks, taskInput.trim()]);
      setTaskInput("");
    }
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        placeholder="Enter task"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, i) => (
          <li
            key={i}
            onClick={() => removeTask(i)}
            style={{ cursor: "pointer" }}
          >
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}

// 2. Auto Reset Counter: Resets count to zero after 5 seconds.
function AutoResetCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(0);
    }, 5000);
    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div>
      <h2>Auto Reset Counter</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// 3. Theme Toggle: Switch between light and dark themes.
function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const style = {
    padding: "1rem",
    margin: "1rem 0",
    border: "1px solid gray",
    backgroundColor: theme === "light" ? "#f9f9f9" : "#333",
    color: theme === "light" ? "#000" : "#fff",
  };

  return (
    <div style={style}>
      <h2>Theme Toggle</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Current theme: {theme}</p>
    </div>
  );
}

// 4. Dynamic List Renderer: Add items to a list.
function DynamicList() {
  const [items, setItems] = useState([]);
  const [itemInput, setItemInput] = useState("");

  const addItem = () => {
    if (itemInput.trim() !== "") {
      setItems([...items, itemInput.trim()]);
      setItemInput("");
    }
  };

  return (
    <div>
      <h2>Dynamic List Renderer</h2>
      <input
        type="text"
        placeholder="Enter item"
        value={itemInput}
        onChange={(e) => setItemInput(e.target.value)}
      />
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

// 5. Toggle Text: Show or hide text.
function ToggleText() {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <h2>Toggle Text</h2>
      <button onClick={() => setVisible((prev) => !prev)}>Toggle</button>
      {visible && <p>Hello, world!</p>}
    </div>
  );
}

// 6. Stopwatch: Start, stop, and reset timer.
function Stopwatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div>
      <h2>Stopwatch</h2>
      <p>Time: {time}s</p>
      <button onClick={() => setRunning(true)}>Start</button>
      <button onClick={() => setRunning(false)}>Stop</button>
      <button
        onClick={() => {
          setTime(0);
          setRunning(false);
        }}
      >
        Reset
      </button>
    </div>
  );
}

// 7. Random Color Generator: Change background color.
function RandomColor() {
  const [color, setColor] = useState("#ffffff");

  const changeColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColor(randomColor);
  };

  const style = {
    backgroundColor: color,
    padding: "1rem",
    margin: "1rem 0",
  };

  return (
    <div style={style}>
      <h2>Random Color Generator</h2>
      <button onClick={changeColor}>Change Color</button>
      <p>Current color: {color}</p>
    </div>
  );
}

// 8. Simple Form Submission: Submit a name and display it.
function SimpleForm() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(name);
  };

  return (
    <div>
      <h2>Simple Form Submission</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <p>Submitted: {submitted}</p>
    </div>
  );
}

// 9. Accordion: Expand and collapse a section.
function Accordion() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h2>Accordion</h2>
      <button onClick={() => setOpen((prev) => !prev)}>Toggle</button>
      {open && <p>Accordion content here</p>}
    </div>
  );
}

// 10. Search Filter: Filter a list dynamically.
function SearchFilter() {
  const [search, setSearch] = useState("");
  const items = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Search Filter</h2>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredItems.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

// 11. Character Counter: Count characters in an input.
function CharacterCounter() {
  const [text, setText] = useState("");

  return (
    <div>
      <h2>Character Counter</h2>
      <input
        type="text"
        placeholder="Type something"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Character count: {text.length}</p>
    </div>
  );
}

// 12. Like/Dislike Button: Toggle like state.
function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <div>
      <h2>Like/Dislike Button</h2>
      <button onClick={() => setLiked((prev) => !prev)}>
        {liked ? "Unlike" : "Like"}
      </button>
    </div>
  );
}

// 13. Dropdown Selector: Display selected option.
function DropdownSelector() {
  const [selected, setSelected] = useState("");

  const handleSelectChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div>
      <h2>Dropdown Selector</h2>
      <select value={selected} onChange={handleSelectChange}>
        <option value="">--Select an option--</option>
        <option value="Apple">Apple</option>
        <option value="Banana">Banana</option>
        <option value="Cherry">Cherry</option>
      </select>
      <p>Selected: {selected}</p>
    </div>
  );
}

// 14. Product List: Display products with prices and total amount.
function ProductList() {
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
  ]);

  const totalPrice = products.reduce((sum, product) => sum + product.price, 0);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name}: ₹{product.price}
          </li>
        ))}
      </ul>
      <p>Total: ₹{totalPrice}</p>
    </div>
  );
}

// 15. Clock: Display real-time date and time.
function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h2>Clock</h2>
      <p>Time: {time.toLocaleTimeString()}</p>
    </div>
  );
}

// Main App Component: Render all the above components.
function App() {
  return (
    <div style={{ padding: "1rem" }}>
      <h1>Multi-Feature React App</h1>
      <TodoList />
      <AutoResetCounter />
      <ThemeToggle />
      <DynamicList />
      <ToggleText />
      <Stopwatch />
      <RandomColor />
      <SimpleForm />
      <Accordion />
      <SearchFilter />
      <CharacterCounter />
      <LikeButton />
      <DropdownSelector />
      <ProductList />
      <Clock />
    </div>
  );
}

export default App;
