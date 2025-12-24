import {Routes, Route} from "react-router-dom";
import Home from "./Home";
import Course_Recommender from "./Course_Recommender";
import Cifar from "./Cifar";


function App() {
  return (
    <Routes>
      <Route path="/ryan_portfolio" element={<Course_Recommender />} />
      <Route path="/ryan_portfolio/course-recommender" element={<Home/>} />
      <Route path="/ryan_portfolio/cifar-gan" element={<Cifar />} />
    </Routes>
  );
}

export default App;
