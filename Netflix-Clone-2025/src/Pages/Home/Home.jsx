import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer';
import Banner from '../../Components/Banner/Banner';
import RowList from '../../Components/Rows/RowList/RowList';
import Row from '../../Components/Rows/Row/Row';

function Home() {
  return (
    <div>
      
      <Header />
      <Banner />
      <RowList />
    
      <Footer />
    </div>
  );
}

export default Home