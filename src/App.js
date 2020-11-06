import logo from './logo.svg';
import './App.css';
import GitUsers from './components/GitUsers';

function App() {
  return (
    <div className="Main">
      <div className="left">left</div>
      <div className="center">
      <header className="header"><h2>GetHub User Finder</h2></header>
      <GitUsers />
      </div>
      <div className="right">right</div>
      
    
    </div>
  );
}

export default App;
