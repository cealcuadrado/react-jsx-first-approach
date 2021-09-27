import './App.css';

function App() {

  const i = 5;
  
  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title"><i className="fas fa-user fa-fw"></i> This is my card</h4>
        </div>
        <div className="card-body">
          <p>Hello. This is my card :)</p>

          <p>2 + 2 = {2 + 2}</p>
          
          <p>i = {i}</p>

          <p>i * 2 = {i * 2}</p>

          <p>i<sup>3</sup> = {i * i * i}</p>

          <p>i is higher than 6?: {i > 6 ? 'true' : 'false'}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
