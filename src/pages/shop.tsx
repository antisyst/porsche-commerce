import { styled } from "styled-components";
import Navigation from "@/components/navigation";
import HeadInt from "@/components/head";
import CarCards from "@/components/cards";
import { Fade } from "react-awesome-reveal";

const ShopInt = styled.div `
    padding: 15vh 5%;

    @media only screen and (max-width: 800px) {
        padding: 15vh 0;
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

const PageLayout = styled.div `
    text-align: center;
`


const Shop = () => {
    return(
        <PageLayout>
            <HeadInt/>
            <Navigation/>
            <ShopInt className="action_opened action_closed">
            <Fade direction='left' delay={450}>
                <ActionName className="action_opened action_closed">Shop</ActionName>
            </Fade>
                 <CarCards />
            </ShopInt>
        </PageLayout>
    )    
}

export default Shop;