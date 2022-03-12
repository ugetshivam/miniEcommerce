import navStyles from "./Navbar.module.css"
import navItems from "./NavItems"
import CartButton from "../cart/CartButton"
import { FaHamburger } from "react-icons/fa"
import { Link } from "react-router-dom"
import Search from "./Search"
import { useState } from "react"
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const toggleNavbar = (e) => {
    e.preventDefault()
    setToggleMenu(!toggleMenu);
  }
  const toggleNavbarLink = () => {
    // e.preventDefault()
    setToggleMenu(!toggleMenu);
  }
  return (
    <header className={`${navStyles.header} container ${navStyles.light}`}>
      <nav className={`${navStyles.navbar} container flex`}>
        <div className={`${navStyles.title_container} flex`}>
          <span className={navStyles.title}>
            <Link to='/'>
              eKart
            </Link>
          </span>
        </div>
        <ul className={`${navStyles.nav} ${navStyles[toggleMenu]} flex`}>
          <li>
            <Search />
          </li>
          {navItems.map(({ _id, name, link }) => (
            <li className={navStyles.nav_items} key={_id}>
              <Link to={link} onClick={toggleNavbarLink}>
                <span>{name}</span>
              </Link>
            </li>
          ))}
        </ul>
        <ul className={`${navStyles.cart_div} flex`}>
          <li>
            <CartButton />
          </li>
          <li className={`${navStyles.mobile_div} flex`}>
            <button className={`${navStyles.mobile_btn}`} onClick={toggleNavbar}>
              <FaHamburger />
            </button>
          </li>
        </ul>

      </nav>
    </header>
  )
}

export default Navbar