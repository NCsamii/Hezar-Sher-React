import logo from './logo.svg';
import './App.css';
import Routing from './components/routing/routing';
import Home from "./pages/home";
function App() {
  return (
<Routing paths='/' page={<Home />} />
  );
}

export default App;
