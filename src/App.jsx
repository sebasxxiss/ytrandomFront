import Header from "./Components/Header";
import Main from "./Components/MainContainer.jsx";
import SearchProvider from "./Contexts/searchProvider.jsx";

function App() {
  return (
    <SearchProvider>
      <Header>
        <Main />
      </Header>
    </SearchProvider>
  );
}

export default App;
