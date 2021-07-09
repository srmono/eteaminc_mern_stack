import './App.css';
import MyComp from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter'
function App() {
  return (
    <div className="App">

      <Counter></Counter>

      {/* <Message></Message> */}

      {/* <MyComp name="Venkat" prof="eng"> 
         <p> this is a children</p>
      </MyComp>
      <MyComp name="Nitya" prof="eng" />
      <MyComp name="Sheyas" prof="eng"/>
      <Welcome name="Venkat" /> */}
    </div>
  );
}

export default App;
