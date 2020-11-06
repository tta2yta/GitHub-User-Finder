import logo from './logo.svg';
import './App.css';
import GitUsers from './components/GitUsers';

function App() {
  return (
    <div className="container">
    <div className="Main">
      <div className="left"></div>
      <div className="center">
      <header className="header"><h2>GetHub User Finder</h2></header>
      <GitUsers />
      </div>
      <div className="right"></div>
      
    
    </div>
    <div className="footer">
      <div className="left"></div>
      <div className="footer-center">
      <header className="footer-center-header"><h2>GetHub User Finder</h2></header>
      </div>
      <div className="right"></div>
      
    
    </div>
    </div>
  );
}

export default App;
