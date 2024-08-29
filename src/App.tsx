
// import './App.css'
import Navbar from "./components/Navbar"
function App() {
  return (
  
     <section data-bs-theme="dark" className='container-fluid border'>
       <Navbar/>
      <div className="row">
        <div className="col-6 d-none d-lg-block bg-primary">aside</div>
        <div className="col bg-danger">main</div>
      </div>
     </section>
   
  )
}

export default App
