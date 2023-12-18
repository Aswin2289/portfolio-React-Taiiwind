import SideNav from "./components/Side-nav";
import Main from "./components/main";
import About from "./components/about";
function App() {
  return (
    <>
      <div>
        <SideNav />
      </div>
      <div>
        <Main />
      </div>
      <div>
        <About />
      </div>
    </>
  );
}

export default App;
