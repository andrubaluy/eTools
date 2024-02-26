import './App.css'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import Navbar from './Components/Navbar/Navbar'

function App() {

  let helloWorld = "Hello World"
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="Welcome"/>
    </>
  )
}

export default App
