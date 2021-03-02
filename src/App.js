import './App.css';
import GoogleMap from './components/GoogleMap';
import {Helmet} from "react-helmet";

function App() {
  return (
    <div className="App">
      <h1>Google Maps App</h1>
      <GoogleMap />

      <Helmet>
           <script defer data-key="bc572073-a9c3-49ca-95cb-def6a4e04d19" src="https://widget.tochat.be/bundle.js"></script>
       </Helmet>



    </div>
  );
}

export default App;
