import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import About from "./Components/About";
import Cars from "./Components/Cars/Cars";
import Counter from "./Components/Counter";
import Layout from "./Layout/Layout";
function App() {
  const Myrouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Counter />} />
        <Route path="/cars" index element={<Cars />} />
      </Route>
    )
  );
  return <RouterProvider router={Myrouter}></RouterProvider>;
}

export default App;
