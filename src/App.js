import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Header from "./components/header";
import Footer from "./components/footer";
export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/*" exact element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}
