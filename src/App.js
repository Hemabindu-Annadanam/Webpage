
import Header from './components/Header';
import Footer from './components/Footer';
import RouterComp from './RoutesComp';
import { ToastContainer } from 'react-toastify';

const App = () => {

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header/>
      <RouterComp  />
       <ToastContainer position="top-center" autoClose={3000} />
      <Footer />
    </div>
  );
};

export default App;


