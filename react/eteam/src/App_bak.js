import './App.css';
import MyComp from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo'
import Table from './components/Table';
import PureComp from './components/PureComp'
import ParentComp from './components/ParentComp';

function App() {
  return (
    <div className="App">

    {/* <ParentComp /> */}
    {/* <PureComp /> */}
      {/* <Table></Table> */}
      {/* <FragmentDemo /> */}
      {/* <LifecycleA /> */}

      {/* <NameList/> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <FunctionClick />
      <ClassClick/> */}
      {/* <Counter></Counter> */}
      {/* <Welcome name="Venkat" />
      <MyComp name="Sheyas" prof="eng"/> */}

      {/* <Message></Message> */}

      {/* <MyComp name="Venkat" prof="eng"> 
         <p> this is a children</p>
      </MyComp>
      <MyComp name="Nitya" prof="eng" />
      
      <Welcome name="Venkat" /> */}
    </div>
  );
}

export default App;
