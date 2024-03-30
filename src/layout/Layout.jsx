
import { Navbar, Container, Nav, Image } from 'react-bootstrap'
import { Link, Outlet, useLocation } from 'react-router-dom'
import Logo from './../assets/imgs/logo.png'
const Layout = () => {
  const location = useLocation()
  
  const ScrollToTop = () => {
    window.scrollTo(0, 0);
    return null;
  };
  return (
    <>
    
    <ScrollToTop/>
     <Navbar collapseOnSelect expand="lg" className='blue-normal p-0 w-100 shadow' fixed='top'>
  <Container fluid className='d-flex justify-content-between mx-5 px-2 p-0'>
    <Navbar.Brand href="/" className='ms-4 py-2 fs-large text-primary'>
      <Image src={Logo} width={60}/>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" className='toggle-icon'/>
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ms-auto">
        <Link to='/hntv' className={location.pathname === '/hntv' ? 'active-link nav-link' : 'nav-link'}>Projects</Link>
        <Link to='/hntv/aboutme' className={location.pathname === '/hntv/aboutme' ? 'active-link nav-link' : 'nav-link'}>About</Link>
        <Link to='/hntv/contact' className={location.pathname === '/hntv/contact' ? 'active-link nav-link' : 'nav-link'}>Contact</Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

      <Outlet />
    </>

  )
}

export default Layout