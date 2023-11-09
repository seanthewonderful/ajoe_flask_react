import { NavLink, Outlet } from "react-router-dom"
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"

const RootLayout = () => {
  return (
    <div className="root-layout">
			<header>
				<nav>
					<h1>Average Joe's Jury</h1>
					<NavLink to="/">Home</NavLink>
					<NavLink to="/about">About</NavLink>
				</nav>
			</header>

			<main>
				<Outlet />
			</main>
    </div>
  )
}

export default RootLayout