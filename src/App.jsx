import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all"; 
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

// as we know we have to register, we make globally only need to do this once
// App file or Main file is the best choice
gsap.registerPlugin(ScrollTrigger, SplitText);   

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="h-dvh"></div>
    </main>
  )
}

export default App
