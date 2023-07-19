import styled from 'styled-components';
import Link from 'next/link';
import { CountUp } from 'use-count-up';
import { Fade } from "react-awesome-reveal";
import { GoArrowUpRight } from 'react-icons/go';
const ShowcaseInt = styled.div `
    height: 100vh;
    display: flex;
    flex-direction: column;
    font-family: 'Tektur', cursive;
    padding: 20vh 6%;
    justify-content: flex-start;

    @media only screen and (max-width: 800px) {
    padding: 16vh 6%;
    }

    a {
        text-decoration: none;
        padding: 14px 16px;
        font-size: 21px;
        margin-top: 2vh;
        display: inline-block;
        border-radius: 2px;
        transition: all 0.3s ease-out;
        text-transform: uppercase;
        color: var(--var-color-black);
        border: 1.5px solid var(--var-color-white);
        background: var(--var-color-white);

        @media only screen and (max-width: 800px) {
          font-size: 18px;
        }

        &:hover {
            transform: scale(1.02);
            background: none;
            padding: 14px 18px;
            color: var(--var-color-white);
            svg {
                transform: rotate(45deg);
            }
        }

        svg {
            vertical-align: middle;
            font-size: 28px;
            margin-top: -4px;
            transition: all 0.3s ease-out;
            display: inline-block;
        }

        &:nth-child(2) {
           text-decoration: none;
            padding: 14px 16px;
            font-size: 21px;
            margin-top: 2vh;
            margin-left: 8px;
            display: inline-block;
            border-radius: 2px;
            transition: all 0.3s ease-out;
            text-transform: uppercase;
            color: var(--var-color-white);
            border: 1.5px solid var(--var-color-white);
            background: none;

            @media only screen and (max-width: 800px) {
                font-size: 18px;
              }
        }
    }
`
const RouterFlex = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`
const ShowcaseContent = styled.h1 `
   font-weight: bold;
   text-align: left;
   font-size: calc(10px + 8vmin);
   background: linear-gradient(180deg, var(--var-color-white), var(--var-color-primary));
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
   color: var(--var-color-white);

   @media only screen and (max-width: 800px) {
     font-size: calc(10px + 10vmin);
   }
`
const SecondContent = styled.p `
    background: linear-gradient(180deg, var(--var-color-white), var(--var-color-primary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: var(--var-color-white);
    text-align: left;
    font-weight: normal;
    width: 50%;
    font-size: calc(10px + 1.2vmin);


    @media only screen and (max-width: 800px)  {
        width: 90%;
       font-size: calc(10px + 2vmin);
    }
`
const SpecsContainer = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 31vh;

    @media only screen and (max-width: 800px) {
        margin-top: 4vh;
    }
`
const SpecsItem = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    justify-content: center;
    font-weight: bold;
    color: var(--var-color-white);
    font-size: calc(10px + 5.6vmin);

    @media only screen and (max-width: 800px) {
      font-size: calc(10px + 6.2vmin);
    }
    
   h1 {
    font-size: calc(10px + 5.6vmin);
    padding-left: 10px;
    background: linear-gradient(180deg, var(--var-color-white), var(--var-color-primary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: var(--var-color-white);

    @media only screen and (max-width: 800px) {
        font-size: calc(10px + 6.2vmin);
      }
   }
   
    p {
        color: var(--var-color-primary);
        font-size: 19px;
        text-align: center;
    }
`
const ContentAll = styled.div `
    text-align: right;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`
const SpecsItemInline = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
`

const Showcase = () => {
    return(
        <ShowcaseInt className='ShowkrtInt'>
            <ContentAll className='action_opened action_closed'>
                <Fade direction='up' delay={1000}>
                  <ShowcaseContent className='action_opened action_closed'>Spark of The Future</ShowcaseContent>
                </Fade>
                <Fade direction='up' delay={1200}>
                    <SecondContent className='action_opened action_closed'>
                    The Taycan - all-new, innovative and ready for
                    the future. It is characterised by the features
                    that define every Porsche: pure emotion and
                    maximum driving pleasure.
                    </SecondContent>
                </Fade>
                <Fade direction='up' delay={1500}>
                    <RouterFlex className='action_opened action_closed'>
                        <Link href='/shop'>Discover <GoArrowUpRight/></Link>
                        <Link href='/'>Learn More <GoArrowUpRight/></Link>
                    </RouterFlex>
                </Fade>
            </ContentAll>
            <SpecsContainer className='action_opened action_closed'>
                <Fade direction='up' delay={1400}>
                <SpecsItem>
                    <SpecsItemInline>
                      <CountUp isCounting end={357} duration={8} />
                        <h1>km</h1>
                    </SpecsItemInline>       
                    <p>Driving Range</p>
                </SpecsItem>
                </Fade>
                <Fade direction='up' delay={1800}>
                <SpecsItem>
                    <SpecsItemInline>
                      <CountUp isCounting end={750} duration={10} />
                       <h1>hp</h1>
                    </SpecsItemInline>
                    <p>Overboost Power with Launch Control</p>
                </SpecsItem>
                </Fade>
                <Fade direction='up' delay={1800}>
                <SpecsItem>
                    <SpecsItemInline>
                      <CountUp isCounting end={2.6} duration={3} />
                       <h1>s</h1>
                    </SpecsItemInline>
                    <p>0 - 100 km with Launch Control</p>
                </SpecsItem>
                </Fade>
            </SpecsContainer>
        </ShowcaseInt>
    )
}

export default Showcase;