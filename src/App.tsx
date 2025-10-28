import { BrowserRouter } from "react-router-dom";
import Footer from "./components/layout/footer/footer.layout";
import Navbar from "./components/layout/navbar/navbar.layout";
import AppRouter from "./routes";

function App() {
  return (
    <div className="bg-black w-full min-h-screen">
      <BrowserRouter>
        <Navbar />
        <AppRouter />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
