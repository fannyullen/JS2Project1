import { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import BasketContent from '../../components/Basket/BasketContent';
import Footer from '../../components/Footer/Footer';

function Basket() {

    return (
        <>
            <Header />
            <BasketContent />
            <Footer />
        </>
    )
}

export default Basket;

