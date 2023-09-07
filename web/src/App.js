
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom' 
import CreateStudent from './createstudent';
import Student from './student';
import UpdateStudent from './updateStudent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Student/>}></Route>
          <Route path='/create' element={<CreateStudent/>}></Route>
          <Route path='/update/:id' element={<UpdateStudent/>}></Route>
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
