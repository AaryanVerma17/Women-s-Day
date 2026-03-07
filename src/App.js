import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import TributeWall from "./pages/TributeWall";
import WriteTribute from "./pages/WriteTribute";
import InspiringWomen from "./pages/InspiringWomen";
import ActsOfAppreciation from "./pages/ActsOfAppreciation";
import CardGenerator from "./pages/CardGenerator";

function App() {
  return (
    <div className="App min-h-screen flex flex-col">
      <BrowserRouter>
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tribute-wall" element={<TributeWall />} />
            <Route path="/write-tribute" element={<WriteTribute />} />
            <Route path="/inspiring-women" element={<InspiringWomen />} />
            <Route path="/acts-of-appreciation" element={<ActsOfAppreciation />} />
            <Route path="/card-generator" element={<CardGenerator />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="top-center" richColors />
      </BrowserRouter>
    </div>
  );
}

export default App;
