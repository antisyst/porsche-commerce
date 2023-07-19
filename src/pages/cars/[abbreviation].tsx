import { useRouter } from "next/router";
import cars from "@/data/data";
import Navigation from "@/components/navigation";
import { Car } from "@/data/data";
import { styled } from "styled-components";
import  { useEffect } from "react";
import HeadInt from "@/components/head";
import SwipInt from "@/components/swiper";
import  { useContext } from "react";
import { CartContext, CartItem } from "@/contexts/cartContext";
import { useStore } from '@/data/store';
import { Fade } from "react-awesome-reveal";
type ProductProps = {
  product: {
    id: string;
    name: string;
    price: number;
  };
};

const DomLayout = styled.div`
  text-align: center;
`;
const DomActionLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
const CarDetailsInt = styled.div`
  padding: 20vh 3%;

  @media only screen and (max-width: 900px) {
    padding: 10vh 3%;
  }
`;
const ActionObsItem = styled.div`
  width: 43%;
  flex-basis: 50%;
  margin: 15px;

  &:nth-child(1) {
    flex-basis: 45%;
  }

  img {
    width: 100%;
  }

  @media only screen and (max-width: 1100px) {
    width: 100%;
    flex-basis: 100%;
    margin: 10px 0;

    &:nth-child(1) {
      flex-basis: 100%;
      width: 100%;
    }
  }


  img {
    width: 100%;
  }
`;
const ActionNameInline = styled.h1`
  font-family: "Tektur", cursive;
  font-weight: bold;
  background: linear-gradient(
    180deg,
    var(--var-color-white),
    var(--var-color-primary)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: var(--var-color-white);
  text-align: left;
  color: var(--var-color-white);
  font-size: calc(10px + 2.5vmin);

  @media only screen and (max-width: 800px)  {
    font-size: calc(10px + 3vmin);
  }
`;
const SpecsItemIntBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 410px;
  max-height: auto;
  padding: 30px;
  border-radius: 12px;
  justify-content: flex-start;
  border: 3px solid var(--var-color-border);

  div {
    flex-basis: 47%;
  }

  p {
    color: var(--var-color-white);
    font-family: "Tektur", cursive;
    text-align: left;
    padding: 6px 0;
    font-size: 22px;

    @media only screen and (max-width: 800px) {
      font-size: 18px;
    }

    span {
      font-weight: bold;
    }
  }
  h2 {
    color: var(--var-color-white);
    font-family: "Tektur", cursive;
    font-size: 40px;
    margin-top: 6px;
    font-weight: 600;

    @media only screen and (max-width: 800px) {
      font-size: 30px;
    }

    span {
      font-weight: bold;
    }
  }
`;
const SpecsFlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 10px;
  justify-content: space-between;
`;
const PriceFlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 10px;
  width: 100%;
  vertical-align: middle;
  justify-content: space-between;
`;
const BasketActionOrder = styled.button`
  padding: 14px 18px;
  border-radius: 7px;
  background: var(--var-color-white);
  border: 1.5px solid var(--var-color-white);
  margin-top: 3px;
  transition: all 0.4s ease-out;
  cursor: pointer;
  font-size: 22px;
  outline: none;
  color: var(--var-color-black);
  font-family: "Tektur", cursive;
  font-weight: bold;

  &:hover {
    background: none;
    color: var(--var-color-white);
  }

  svg {
    vertical-align: middle;
    margin-top: -8px;
    padding-left: 7px;
    font-size: 35px;
  }
`;

const CarDetails: React.FC<ProductProps> = ({ product }) => {
  const router = useRouter();
  const { abbreviation } = router.query;

  const car: Car | undefined = cars.find(
    (car) => car.abbreviation === abbreviation
  );

  if (!car) {
    return <div>Car not found</div>;
  }

  const addToCart = useStore((state) => state.addToCart);

  useEffect(() => {
    const orderActions = document.getElementsByClassName("orderAction");
  
    function clickFunction(this: HTMLElement) {
      const element = this;
      element.innerHTML = "Loading";
      setTimeout(() => {
        element.innerHTML = "Ordered";
      }, 3000);
    }
  
    for (let i = 0; i < orderActions.length; i++) {
      orderActions[i].addEventListener("click", clickFunction.bind(orderActions[i] as HTMLElement));
    }
  });
  


  return (
    <DomLayout>
      <HeadInt />
      <Navigation />
      <CarDetailsInt key={car.id}>
        <DomActionLayout>
            <ActionObsItem>
              <SwipInt />
            </ActionObsItem>
          <ActionObsItem>
            <SpecsItemIntBox>
              <ActionNameInline>{car.name}</ActionNameInline>
              <SpecsFlexContainer>
                <div>
                  <p>
                    Year: <span>{car.year}</span>
                  </p>
                  <p>
                    Interior: <span>{car.interior}</span>
                  </p>
                  <p>
                    Color: <span>{car.color}</span>
                  </p>
                  <p>
                    Miles: <span>{car.miles}</span>
                  </p>
                  <p>
                    Drivetrain: <span>{car.drivetrain}</span>
                  </p>
                </div>
                <div>
                  <p>
                    Horsepower: <span>{car.horsepower} </span> hp
                  </p>
                  <p>
                    Fuel Efficiency: <span>{car.fuel}</span>
                  </p>
                  <p>
                    Torque: <span>{car.torque} Nm</span>
                  </p>
                  <p>
                    Battery: <span>{car.battery} kWh</span>
                  </p>
                </div>
              </SpecsFlexContainer>
              <PriceFlexContainer>
                <h2>
                  Price: <span>{car.price}</span>
                </h2>
                <BasketActionOrder onClick={() => addToCart(car)} className="orderAction">
                  Order Now 
                </BasketActionOrder>
              </PriceFlexContainer>
            </SpecsItemIntBox>
          </ActionObsItem>
        </DomActionLayout>
      </CarDetailsInt>
    </DomLayout>
  );
};
export default CarDetails;
