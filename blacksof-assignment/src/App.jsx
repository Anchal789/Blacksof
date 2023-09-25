import "./index.css"
import "./App.css"
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";
import PreFooter from "./components/PreFooter/PreFooter";

function App() {
  return (
    <div className="App w-[100%]">
      <Header/>
      <MainContent/>
      <PreFooter/>
      <Footer/>
    </div>
  );
}

export default App;
