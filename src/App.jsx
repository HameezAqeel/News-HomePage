import Header from './Components/Header/Header'
import BlogLink from './Components/BlogLink/BlogLink'
import Sidebar from './Components/Sidebar/Sidebar'
import Main from './Components/Main/Main'
import './App.css'

function App() {

  return (
    <div className='container'>
     <Header />
     <div className="main">
      <Main />
      <Sidebar />
     </div>
     <BlogLink/>
    </div>
  )
}

export default App
