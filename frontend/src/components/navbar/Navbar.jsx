import navStyles from "./Navbar.module.css"
import navItems from "./NavItems"
import CartButton from "../cart/CartButton"
import { Link } from "react-router-dom"
const Navbar = () => {

  return (
    <header className={`${navStyles.header} container ${navStyles.light}`}>
      <nav className={`${navStyles.navbar} container flex`}>
        <div className={`${navStyles.title_container} flex`}>
          <span className={navStyles.title}>
            eKart
          </span>
        </div>
        <ul className={`${navStyles.nav} flex`}>
          {navItems.map(({ _id, name, link }) => (
            <li className={navStyles.nav_items} key={_id}>
              <a href={link}>
                <span>{name}</span>
              </a>
            </li>
          ))}
        </ul>
        <div className={`${navStyles.title_container} flex`}>
          <Link to='/cart'>
            <CartButton />
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar