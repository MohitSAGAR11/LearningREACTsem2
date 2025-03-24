import React, { PureComponent } from 'react'
import TodoList from './components/TodoList'
import Counter from './components/Counter'
import ThemeToggle from './components/ThemeToggle'
import ToggleText from './components/ToggleText'
import StopWatch from './components/StopWatch'
import RandomColor from './components/RandomColor'
import SimpleForm from './components/SimpleForm'
import Accordian from './components/Accordian'
import SearchFilter from './components/SearchFilter'
import CharacterCounter from './components/CharacterCounter'
import DropdownSelector from './components/DropdownSelector'
import ProductList from './components/ProduceList'
import Clock from './components/Clock'

const App = () => {
  return (
    <div>
      <TodoList />
      <Counter />
      <ThemeToggle /> 
      <ToggleText />
      <StopWatch />
      <RandomColor />
      <SimpleForm />
      <Accordian />
      <SearchFilter />
      <CharacterCounter />
      <DropdownSelector />
      <ProductList />
      <Clock />
    </div>
  )
}
  

export default App;
