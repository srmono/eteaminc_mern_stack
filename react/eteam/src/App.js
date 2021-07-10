import React from 'react'
import './App.css';
import HookCounter from './hooks/HookCounter'
import HookCounterTwo from './hooks/HookCounterTwo'
import HookObject from './hooks/HookObject'
import ToolsArray from './hooks/ToolsArray'
import HookCounterOne from './hooks/HookCounterOne'
import ScreenHook from './hooks/ScreenHook'
import MouseContainer from './hooks/MouseContainer'
import DataFetch from './hooks/DataFetch'
import ComponentC from './hooks/ComponentC'

export const UserContext = React.createContext()
export const EteamContext = React.createContext()

function App() {
  return (
    <div className="App">

    <UserContext.Provider  value={'venkat'}>
      <EteamContext.Provider value={'EteamInc'}>
          <ComponentC />
      </EteamContext.Provider>
    </UserContext.Provider>
      

      {/* <DataFetch /> */}
      {/* <MouseContainer /> */}
      {/* <ScreenHook /> */}
      {/* <HookCounterOne /> */}
      {/* <HookCounterTwo /> */}
    </div>
  );
}

export default App;
