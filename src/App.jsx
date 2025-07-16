import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all"; 

// as we know we have to register, we make globally only need to do this once
// App file or Main file is the best choice
gsap.registerPlugin(ScrollTrigger, SplitText);   

const App = () => {
  return (
    <div className="flex-center h-[100vh]">
      <h1 className="text-3xl text-indigo-300">Hello, GSAP!</h1>
      <nav><p>i am found</p></nav>
    </div>
  )
}

export default App
