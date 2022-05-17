import './App.css';
import { Routes, Route } from 'react-router-dom';
import TablesPage from './components/pages/TablesPages';
import NotFound from './components/pages/NotFound';
import TablePage from './components/pages/TablePage';
import { Container } from 'react-bootstrap'
import Header from './components/views/Header';
import Footer from './components/views/Footer';
import { fetchTable } from './redux/tablesRedux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchTable()), [dispatch]); 

  return (
    <Container>
      <Header/>
        <Routes>
          <Route path="/" element={<TablesPage />} />
          <Route path="/table/:tableId" element={<TablePage />} /> 
          <Route path="*" element={<NotFound />} /> 
        </Routes>
      <Footer/>
    </Container>
     
  );
}
export default App;
