import logo from './logos/white.svg'
import TransactionsList from "./content/transactions/List"
import "./vendor/bootstrap.min.css"
import "./vendor/dataTables.bootstrap4.min.css"
import "./vendor/dore.dark.greenlime.css"
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12" style={{ marginTop: '100px' }}>
            <h1 className="text-primary font-weight-bold">Explorer</h1>
            <TransactionsList />
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
