import { Route, Routes } from 'react-router'
import './App.css'
import AllCopanies from './component/AllCompanies'
import Companies from './component/Companies'

function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<AllCopanies/>}  />
        <Route path="/companies/:id" element={<Companies />} />

      </Routes>
    </div>
  )
}

export default App