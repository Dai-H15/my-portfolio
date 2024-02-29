"use client"
import Link from 'next/link'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function MenuBar(){
    const Items_L: { [key: string]: string } = {
        "top":"トップページ",
        "profile":"プロフィール",
        "skills":"スキル",
        "works": "制作物",
    };
    const URLs_L: { [key: string]: string } = {
        "top":"/",
        "profile":"/profile",
        "skills":"/skils",
        "works": "/works",
        "github": "https://github.com/Dai-H15",
        "qiita": "https://qiita.com/Dai-H15",
        "wantedly": "https://www.wantedly.com/id/Dai_h15",
        "lapras":"https://lapras.com/public/Dai_H15",
    };
    const Items_E: { [key: string]: string } = {
        "github": "GitHub",
        "qiita": "Qiita",
        "wantedly": "Wantedly",
        "lapras": "Lapras",
    };
    const URLs_E: { [key: string]: string } = {
        "github": "https://github.com/Dai-H15",
        "qiita": "https://qiita.com/Dai-H15",
        "wantedly": "https://www.wantedly.com/id/Dai_h15",
        "lapras":"https://lapras.com/public/Dai_H15",
    };
    let res_L: JSX.Element[] =[];
    let res_E: JSX.Element[] =[];

    for(const key in Items_L){
        res_L.push(<Link key= {`${key}`} href={`${URLs_L[key]}`} className="link-underline link-underline-opacity-0"><Nav.Link as="div"> {Items_L[key]} </Nav.Link></Link>)}

    for(const key in Items_E){
            res_E.push( <Link key= {`${key}`} href={`${URLs_E[key]}`} className="link-underline link-underline-opacity-0"><NavDropdown.Item as="div"> {Items_E[key]} </NavDropdown.Item></Link>)}

    return(<div className="">
        <Navbar expand="lg" className="bg-body-tertiary" >
      <Container>
        <Link href="/"  className="link-underline link-underline-opacity-0">
        <Navbar.Brand >My Portfolio</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {res_L}
            <NavDropdown title="外部リンク" id="basic-nav-dropdown">
              {res_E}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>)
}
export default MenuBar;