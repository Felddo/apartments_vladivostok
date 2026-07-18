import { Header } from './header/Header';
import { Blocks } from './blocks/Blocks';
import { BookingSteps } from './Booking/BookingSteps';
import { Footer } from './footer/Footer';
import { ScrollRestoration } from 'react-router-dom';
import { getMainSchema } from '../utils/seo';

// export const Main = () => {
//     return (
//         <>
//             <title>Апартаменты во Владивостоке посуточно — Аренда жилья у моря</title>
//             <meta name="description" content="Забронируйте уютные апартаменты в центре Владивостока. Вид на море и Золотой мост, бесконтактное заселение, отчетные документы." />
//             <meta name="keywords" content="аренда квартир владивосток, снять жилье посуточно, апартаменты владивосток, жилье у моря владивосток" />
//             <script
//                 type="application/ld+json"
//                 dangerouslySetInnerHTML={{
//                     __html: JSON.stringify(getMainSchema())
//                 }}
//             />

//             <ScrollRestoration />
//             <Header page="main"/>
//             <div className='px-[5%] py-10'>
//                 <Blocks/>
//                 <BookingSteps/>
//             </div>
//             <Footer/>
//         </>
//     );
// };

export const Main = () => {
    return (
        <>
            <title>Апартаменты во Владивостоке посуточно — Аренда жилья у моря</title>
            <meta name="description" content="Забронируйте уютные апартаменты в центре Владивостока. Вид на море и Золотой мост, бесконтактное заселение, отчетные документы." />
            <meta name="keywords" content="аренда квартир владивосток, снять жилье посуточно, апартаменты владивосток, жилье у моря владивосток" />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(getMainSchema())
                }}
            />

            <ScrollRestoration />
            <Header page="main"/>
            <main className='px-[5%] py-10 flex flex-col gap-6'> 
                
                <section>
                    <Blocks/>
                </section>

                <section>
                    <BookingSteps/>
                </section>
                
            </main>
            <Footer/>
        </>
    );
};