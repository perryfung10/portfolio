import "./App.css";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import Router from "./Pages/utilies/Router";
import Footer from "./components/Footer/Footer";
import MainNavbar from "./components/MainNavbar/MainNavbar";


function App() {
  return (
    <div className="App">
      <header>
        <MainNavbar />
      </header>
      <main>
       <Home />
       <About />
       <Projects />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
