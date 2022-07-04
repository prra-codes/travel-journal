import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import data from "./data.js";

function App() {
  const allData = data.map((item) => {
    return <Card key={item.title} item={item} />;
  });

  return (
    <div>
      <Header />
      {allData}
    </div>
  );
}

export default App;
