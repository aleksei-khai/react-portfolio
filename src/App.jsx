import { Header, Footer, Home, AboutMe } from "./components/index";

Header

function App() {


  return (
    <>
    <Header/>
    <main>
      <Home/>
      <div className="container">
        <h1>React Portfolio</h1>
      </div>
      <AboutMe/>
    </main>
    <Footer/>
    </>
  )
}

export default App
