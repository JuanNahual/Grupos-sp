import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Error404 from 'containers/errors/Error404';
import Home from 'containers/pages/Home';
import store from './store';
import { Provider } from 'react-redux';
import Contacto from 'containers/pages/Contacto';
import Empresas from 'containers/pages/Empresas';



function App() {
  return (
    <Provider store={store}>
    <Router basename="/Grupos-sp">
      <Router>
        <Routes>
            

            {/* Home Display */}
            <Route path="/Home" element={<Home /> } />
            <Route path="/Contacto" element={<Contacto /> } />
            <Route path="/Empresas" element={<Empresas /> } />
            {/* Error Display */}
            <Route path="*" element={<Error404 /> } />



        </Routes>
      </Router>
      </Router>
    </Provider>
    
  );
}

export default App;
