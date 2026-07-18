import { Header } from './header/Header';
import { Blocks } from './blocks/Blocks';
import { Footer } from './footer/Footer';
import { ScrollRestoration } from 'react-router-dom';

export const Main = () => {
    return (
        <>
            <title>Апартаменты во Владивостоке посуточно — Аренда жилья у моря</title>
            <meta name="description" content="Забронируйте уютные апартаменты в центре Владивостока. Вид на море и Золотой мост, бесконтактное заселение, отчетные документы." />
            <meta name="keywords" content="аренда квартир владивосток, снять жилье посуточно, апартаменты владивосток, жилье у моря владивосток" />
            <ScrollRestoration />
            <Header page="main"/>
            <Blocks/>
            <Footer/>
        </>
    );
};