import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Header from "./components/header";
import Footer from "./components/footer";
import Dashboard from "./pages/dashboard";
import Sidebar from "./components/sidebar";
export default function App() {
  const isLogin = true;
  return (
    <div className="App">
      {isLogin ? (
        <Routes>
          <Route path="/dashboard" exact element={<Dashboard />} />
        </Routes>
      ) : (
        <Routes>
          <Header />
          <Route path="/*" exact element={<Home />} />
        </Routes>
      )}
      <Footer />
    </div>
  );
}
