import { useEffect, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsGithub } from "react-icons/bs";
import logo from "../assets/logo.png";


export const NavigationBar = () => {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', onScroll);

        return () => window.addEventListener('scroll', onScroll);
    }, []);


    const onUpdateActiveLink = (value : string) => {
        setActiveLink(value);
    }


    return (
        <Navbar expand="lg" className={scrolled ? 'scrolled' : '' }>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Brand href="#home"><img src={logo} alt="Logo" className="logo" /></Navbar.Brand>
            <Navbar.Collapse id="navbar-nav">
                <Nav className="ms-auto text-center">
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink("home")}>Home</Nav.Link>
                    <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink("skills")}>Skills</Nav.Link>
                    <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink("projects")}>Projects</Nav.Link>
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href="tel:+60128066867" target="_blank" rel="noopener"><IoLogoWhatsapp size={20} color="white" /></a>
                        <a href="https://github.com/superUserFit" target="_blank" rel="noopener"><BsGithub size={20} color="white" /></a>
                    </div>
                    <a href="tel:+60128066867" target="_blank"><button type="button" className="vvd">Let's Connect</button></a>
                </span>
            </Navbar.Collapse>
        </Navbar>
    );
}