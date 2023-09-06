import React from 'react'
import "./header.css"
import IcoImg from '../../assets/images/eCommerce-logo.jpg'
import { AiOutlineSearch } from "react-icons/ai";
import Card from './Card';
import User from './User';

const Header = () => {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header")
    header.classList.toggle("active", this.window.scrollY > 100)
  })
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })

  return (
    <>
      <header className='header'>
        <div className='scontainer flex'>
          <div className='logo'>
            <img src ={IcoImg} alt="" height={70} width={70}/>
          </div>
          <div className='search flex'>
            <AiOutlineSearch className='searchIcon' />
            <input type='text' placeholder='Search...'/>
          </div>
          <div className='account flexCenter'>
            <Card />
            <User />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
