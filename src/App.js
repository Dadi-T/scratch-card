import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Body from "./components/Body/Body";
function App() {
  return (
    <div className="App ">
      <div className="bg-[#FBF7ED]">
        <Header />
        <Banner />
      </div>
      <Body />
    </div>
  );
}

export default App;
