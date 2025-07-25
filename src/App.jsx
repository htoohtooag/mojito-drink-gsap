import gsap from "gsap";
import { ScrollTrigger, SplitText, CSSPlugin } from "gsap/all"; 
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails";
import About from "./components/About";
import Art from "./components/Art";
import Menu from "./components/Menu";
import Contact from "./components/Contact";

// as we know we have to register, we make globally only need to do this once
// App file or Main file is the best choice
gsap.registerPlugin(ScrollTrigger, SplitText, CSSPlugin);   

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Menu />
      <Contact />
    </main>
  )
}
export default App
