import './App.css';
import Footer from './components/Footer/Footer';
import Todos from './components/Todos/Todos';

function App() {
  return (
    <div className="App">
      <h1>Todo List by React</h1>
      <Todos></Todos>
      <Footer></Footer>
    </div>
  );
}

export default App;
