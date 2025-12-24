import {Routes, Route} from "react-router-dom";
import Home from "./Home";
import Course_Recommender from "./Course_Recommender";
import Cifar from "./Cifar";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/course-recommender" element={<Course_Recommender />} />
      <Route path="/cifar-gan" element={<Cifar />} />
    </Routes>
  );
}

export default App;
