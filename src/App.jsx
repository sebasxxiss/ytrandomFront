import Header from "./Components/Header";
import Main from "./Components/Main";
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
