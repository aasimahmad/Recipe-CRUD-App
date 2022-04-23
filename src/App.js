import React, {useState} from 'react'
import CounterClass from "./CounterClass";
import CounterHooks from "./CounterHooks";

export const ThemeContext = React.createContext()

function App() {
  console.log("Render App");
  const [theme, setTheme] = useState('red')

  return (
    <ThemeContext.Provider value={{backgroundColor: theme}}>
      Counter
      <CounterClass initialCount={0} />
      Counter Hooks
      <CounterHooks initialCount={0} />
      <button onClick={() => setTheme(prevTheme => {
        return prevTheme === 'red' ? 'magenta' : 'red'
      })}>Toggle Theme</button>
    </ThemeContext.Provider>
  );
}

export default App;
