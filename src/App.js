import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import Main from './pages/Main/Main';
import Letter from './pages/Letter/Letter';
import { observer } from "mobx-react-lite";

const App = observer(() => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/letter/:id' element={<Letter />} />
        <Route path="*" element={<Navigate to="/" replace />}
    />
      </Routes>
    </BrowserRouter>
  )
})

export default App;
