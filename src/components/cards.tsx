import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Fade } from 'react-awesome-reveal';
import cars from '@/data/data';
interface Car {
  id: number;
  name: string;
  price: string;
  year: string;
  miles: string;
  color: string;
  abbreviation: string;
  image: string[];
}
const ShopContainer = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`
const CartItem = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  color: var(--var-color-white);
  width: 420px;
  margin: 7px;
  border-radius: 15px;
  background: var(--var-color-card);
  transition: all 0.4s ease-out;
  font-family: 'Tektur', cursive;
  height: 420px;

  &:hover {
    filter: brightness(1.32);

    img {
        transform: scale(1.02);
    }
  }

  h2 {
    font-weight: bold;
  }
  img {
    pointer-events: none;
    transition: all 0.4s ease-out;
  }

  a {
    text-decoration: none;
  color: var(--var-color-white);
  }

  @media only screen and (max-width: 800px) {
    width: 95.5%;
  }
`;
const CartItemPreview = styled.div `
    text-align: center;
    height: 241px;
    
    img {
        width: 100%;
    }
`
const CarSpecLittle = styled.div `
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    h2 {
        text-align: left;
    }
`
const CartItemAction = styled.div `
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    padding: 0 15px;
    justify-content: space-between;

    h1 {
        font-size: revert;
    }
`
const CartActionButton = styled.button `
    border: none;
    outline: none;
    padding: 10px 14px;
    font-size: 20px;
    border-radius: 7px;
    font-family: 'Tektur', cursive;
    font-weight: bold;
    cursor: pointer;
    background: var(--var-color-white);
    font-weight: bold;
`
const CarCards = () => {
  return (
    <ShopContainer className="action_opened action_closed">
      {cars.map((car) => (
          <Fade direction='up' delay={500} triggerOnce={true}>
          <CartItem key={car.id}>
              <Link key={car.abbreviation} href={`/cars/${car.abbreviation}`}>
                <CartItemPreview>
                  {car.image.map((imageUrl) => (
                    <img key={imageUrl} src={imageUrl} alt={car.name}  />
                  ))}
              </CartItemPreview>
            <CarSpecLittle>
                <h2>{car.name}</h2>
                <p>Year: {car.year}</p>
                <p>Miles: {car.miles}</p>  
            </CarSpecLittle>
            <CartItemAction>
                <h1>{car.price}</h1>
                <CartActionButton>Discover More</CartActionButton>
            </CartItemAction>
            </Link>
          </CartItem>
        </Fade>
      ))}
    </ShopContainer>
  );
};

export default CarCards;
