import styled from 'styled-components';
import Navigation from '@/components/navigation';
import HeadInt from '@/components/head';
import { Fade } from 'react-awesome-reveal';

const PageLayout = styled.div `
    text-align: center;
`
const MoreInt = styled.div `
    padding: 15vh 5%;

    @media only screen and (max-width: 800px) {
        padding: 15vh 2%;
    }
`
const ActionName = styled.h1 `
    font-family: 'Tektur', cursive;
    font-weight: bold;
    text-align: left;
    color: var(--var-color-white);
    font-size: calc(10px + 7vmin);

    @media only screen and (max-width: 800px) {
        margin-left: 20px;
       font-size: calc(10px + 8vmin);
    }
`
const MoreContent = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`
const MoreContentInt = styled.p `
    color: var(--var-color-white);
    font-size: 18px;
    font-family: 'Tektur', cursive;
`
const More = () => {
    return(
        <PageLayout>
            <Navigation/>
            <HeadInt/>
            <MoreInt>
            <Fade direction='left' delay={450}>
                <ActionName className="action_opened action_closed">Discover More</ActionName>
            </Fade>
            <MoreContent>
                <MoreContentInt>
                The history of the Porsche automobile brand began in 1948 with the Type 356, but the groundwork for the company was laid in the design office of Professor Ferdinand Porsche. The first order book in 1930 recorded the start-up phase of a legend in the making.
                It sits unremarkably in a gray safe in a climate-controlled room: the first ledger of the Porsche design office, stored in a fireproof room in the archive of the Porsche Museum. In the timeworn ledger one can find order number 1, placed on August 21, 1930. The job involved manufacturing individual components for a “Hesselmann engine,” a cross between a diesel and a gas engine—a sign of the company’s innovative spirit since its inception. Order number 7 was of another dimension altogether. “Small-car project,” reads the description in the ledger. The Wanderer company planned to motorize the masses and needed a concept with which it could economically and inexpensively develop what was then considered a luxury item into a Volks-Wagen—a car for the people. A clever idea, as history would demonstrate. The order book provides an illuminating look at how Ferdinand Porsche and his small team of just nineteen employees embodied the vision of design creativity.
                On April 25, 1931, Professor Porsche had his company officially entered in the commercial register. From that day forward, “Dr. Ing. h.c. F. Porsche GmbH, Konstruktionen und Beratung für Motoren und Fahrzeuge,” based in Stuttgart, was officially on the books. The first five projects were started in 1930 in St. Ulrich, Austria. The drawing board was in the bedroom of Porsche’s son Ferry. But the office moved to Stuttgart at the beginning of 1931, initially renting space in the city center. The idea of a neutral design office was still unheard of in the automotive world. Ferdinand Porsche did not, at the time, harbor the intention of building his own cars. His aim was to carry out technical projects for a variety of clients as well as charge licensing fees and patent royalties. The first order book illustrates in impressive fashion how the Porsche office became a hotbed of innovation for the German automotive industry.
                </MoreContentInt>
            </MoreContent>
            </MoreInt>
        </PageLayout>
    )
}

export default More;