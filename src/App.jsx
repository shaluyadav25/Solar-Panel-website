import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage/HomePage"
import Layout from "./Components/Layout/Layout"

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
        <Route path="/" element={<HomePage/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App