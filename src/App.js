import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StateHook from './components/StateHook';
import SwitchCaseIfElseIf from './components/SwitchCaseIfElseIf';

function App() {
  return (
   
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<StateHook />}></Route>
        <Route path='/switchcase' element={<SwitchCaseIfElseIf />}> </Route>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
