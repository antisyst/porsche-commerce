import React, { useState, useEffect } from "react";
import MainLogo from "@/utils/logo";
import styled from 'styled-components';
import { BsBag } from 'react-icons/bs';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoCloseOutline } from 'react-icons/io5';
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const Header = styled.header`
  position: fixed;
  transition: all 0.3s ease-out;
  width: 100%;
  background: none;
  padding: 1rem 5rem;

  @media only screen and (max-width: 991px) {
    padding: 2.2rem 2rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    list-style: none;
    display: flex;
    gap: 2rem;

    @media only screen and (max-width: 767px) {
      top: 0;
      height: 100vh;
      justify-content: center;
      transition: 1s;
      gap: 0;
    }
  }

  a {
    font-size: 18px;
    text-decoration: none;
    transition: all 0.3s ease-out;
    color: var(--var-color-primary);
    margin: 0 6px;
    font-family: 'Tektur', cursive;

    &:hover {
        color: var(--var-color-white);
    }

    @media only screen and (max-width: 767px) {
      font-size: 4rem;
    }
  }

  #logo {
z-index: 10000;

    svg {
        width: 110px;
        transition: all 0.3s ease-out;
        height: 110px;

        @media only screen and (max-width: 767px) {
          width: 95px;
          height: 70px;
        }
    }

    @media only screen and (max-width: 767px) {
      font-size: 3.2rem;
    }
  }

  #ham-menu {
    display: none;

    @media only screen and (max-width: 767px) {
      display: block;
      color: #ffffff;
      font-size: 3.1rem;
    }
  }
`;

const BudgetInt = styled.div `
border-radius: 50%;
padding: 7px 10px;
z-index: 10000;
transition: all 0.3s ease-out;

@media only screen and (max-width: 767px)  {
    position: absolute;
    right: -105px;
    position: absolute;
    top: -24px;
    padding: 4px;
    background: none;

    &:hover {
      background: none;
    }
}  

a {
    text-align: center;
    color: var(--var-color-white);
    font-size: 30px;

    @media only screen and (max-width: 800px) {
      cursor: none;

      &:hover {
        background: none;
      }
    }

    svg {
        margin-top: 5px;

        @media only screen and (max-width: 767px) {
          margin-top: 0
        }
    }
  }

  @media only screen and (max-width: 800px) {
    &:hover {
      background: none ;
     }
  }

  &:hover {
    background: var(--var-color-hover) ;
   }
`
const RespButtons = styled.div `
z-index: 10000;
display: none;

   svg {
    color: var(--var-color-white);
    font-size: 35px;
   }
   @media only screen and (max-width: 800px) {
    display: inline-block;
   }
`
const Navigation = () => {

  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
    const elements = document.getElementsByClassName("action_opened");
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i] as HTMLElement;
      element.style.visibility = isActive ? "visible" : "hidden";
    }
  };

  const closeMenu = () => {
    setIsActive(false);
    const elements = document.getElementsByClassName("action_opened");
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i] as HTMLElement;
      element.style.visibility = "visible";
      element.style.transition = "all 0.5s ease-out";
    }
  };

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let navbarClasses = ["navbar"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }

    return(
        <Header className={navbarClasses.join(" ")}>
        <Nav>
          <Fade direction='down' delay={600} triggerOnce={true}>
            <Link href="/" id="logo">
              <MainLogo/>
            </Link>
          </Fade>
          <ul id="nav-bar" className={isActive ? "active" : ""}>
          <Fade direction='down' delay={630} triggerOnce={true}>
            <li className="action_pp">
              <Link href="/" onClick={closeMenu}>
                 Home
             </Link>
            </li>
          </Fade>
          <Fade direction='down' delay={660} triggerOnce={true}>
            <li>
              <Link href="/shop" onClick={closeMenu}>
                Shop
              </Link>
            </li>
          </Fade>
          <Fade direction='down' delay={690} triggerOnce={true}>
            <li>
              <Link href="/more" onClick={closeMenu}>
                More
              </Link>
            </li>
          </Fade>
          <Fade direction='down' delay={720} triggerOnce={true}>
            <li>
              <Link href="mailto: porschesupport@gmail.com" onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </Fade>
          </ul>
          <Fade direction='down' delay={760} triggerOnce={true}>
          <BudgetInt>
              <Link href="/cart">
                <BsBag/>
              </Link>
          </BudgetInt>
          </Fade>
          <RespButtons onClick={toggleMenu}>
          {isActive ? <IoCloseOutline /> : <RxHamburgerMenu />}
          </RespButtons>
        </Nav>
      </Header>
    )
}
export default Navigation;