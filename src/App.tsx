import {Outlet} from "react-router-dom";
// import Home from "./Home";
// import Course_Recommender from "./Course_Recommender";
// import Cifar from "./Cifar";


function App() {
  return (
    // <Routes>
    //   <Route path="/ryan_portfolio" element={<Home />} />
    //   <Route path="/ryan_portfolio/course-recommender" element={<Course_Recommender />} />
    //   <Route path="/ryan_portfolio/cifar-gan" element={<Cifar />} />
    // </Routes>
    <nav>
        <Outlet />
    </nav>
  );
}

export default App;
