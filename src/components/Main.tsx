import { Header } from './header/Header';
import { Blocks } from './blocks/Blocks';
import { Footer } from './footer/Footer';
import { ScrollRestoration } from 'react-router-dom';

export const Main = () => {
    return (
        <>
            <ScrollRestoration />
            <Header page="main"/>
            <Blocks/>
            <Footer/>
        </>
    );
};