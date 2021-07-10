import './App.css';
import RefsDemo from './components/RefsDemo'
import FocusInput from './components/FocusInput'
import FRParentInput from './components/FRParentInput'
import PortalDemo from './components/PortalDemo'
import Course from './components/Course'
import ErrorBoundary from './components/ErrorBoundary'
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter'
import ComponentC from './components/ComponentC'
import {UserProvider} from './components/useContext'
import PostList from './components/PostList'

function App() {
  return (
    <div className="App">

      <PostList />
      {/* <UserProvider value="Venkat"> */}
        {/* <ComponentC /> */}
      {/* </UserProvider> */}
      

      {/* <ClickCounter name="React"/>
      <HoverCounter  /> */}
      {/* <ErrorBoundary>
        <Course courseName="React" />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <Course courseName="Article" />
      </ErrorBoundary> */}
      
      {/* <PortalDemo /> */}
      {/* <FRParentInput /> */}
      {/* <FocusInput /> */}
      {/* <RefsDemo /> */}
    </div>
  );
}

export default App;
