import { useStore } from "@/data/store";
import styled from 'styled-components';
import HeadInt from "@/components/head";
import Navigation from "@/components/navigation";
import { LuTrash2 } from 'react-icons/lu';
import Link from "next/link";

type Product = {
  id: string;
  image: string;
  name: string;
};


const PageLayout = styled.div `
    text-align: center;
`
const CartIntPage = styled.div `
    padding: 15vh 5%;
`
const ActionName = styled.h1 `
    font-family: 'Tektur', cursive;
    font-weight: bold;
    text-align: left;
    color: var(--var-color-white);
    font-size: calc(10px + 7vmin);
` 
const CartListContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`
const CartListItem = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 200px;
  padding: 10px 15px;
  width: 100%;
  font-family: 'Tektur', cursive;
  border: 1.5px solid var(--var-color-white);
  border-radius: 9px;
  flex-wrap: wrap;

  a {
    color: var(--var-color-white);
    font-weight: bold;
  }
  img {
    width: 260px;
    pointer-events: none;
  }
  h3 {
    color: var(--var-color-white);
    font-weight: bold;
  }
  @media only screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 400px;

    a {
      color: var(--var-color-white);
      font-weight: bold;
    }
    img {
      width: 260px;
      pointer-events: none;
    }
    h3 {
      color: var(--var-color-white);
      font-weight: bold;
      font-size: 25px;
    }
  }
`

const RemoveActionButton = styled.button `
  outline: none;
  padding: 12px;
  font-size: 22px;
  background: var(--var-color-white);
  color: var(--var-color-black);
  border-radius: 8px;
  border: none;
  cursor: pointer;
  margin-right: 10px;

  svg {
    vertical-align: middle;
    margin-top: -3px;
  }
`
const Cart = () => {
  const cart = useStore((state) => state.cart);
  const removeFromCart = useStore((state) => state.removeFromCart);
  return (
    <PageLayout>
      <HeadInt/>
      <Navigation/>
      <CartIntPage>
        <ActionName>Your Cart</ActionName>
        <CartListContainer>
          {cart.map((product) => (
            <CartListItem key={product.id}>
               <img src={product.image[0]} alt="" />
              <Link href={`/cars/${product.abbreviation}`}>
               <h3>{product.name}</h3>
              </Link>
              <h3>{product.horsepower} HP</h3>
              <h3>{product.year}</h3>
              <RemoveActionButton onClick={() => removeFromCart(product.id)}>
                  <LuTrash2/>
              </RemoveActionButton>
            </CartListItem>
          ))}
        </CartListContainer>
      </CartIntPage>
    </PageLayout>
  );
};

export default Cart;
