import { Link, animateScroll as scroll } from 'react-scroll'

function Footer() {


  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="side1">
            <div className="row">
              <div className="col-md-3">
                <h1 className="logo">Aazhi</h1>
                <p className="footer-text">
                  Lorem ipsum Here are thriteen health benefits of apples Lorem
        
                </p>
              </div>
              <div className="col-md-3">
                <p className="footer-title">Address</p>
                <ul>
                  <li>
                  <Link   
                         spy={true}
                         smooth={true}
                         duration={1000}
                  > 4/67, </Link>
                  </li>
                  <li>
                  <Link spy={true} smooth={true} duration={1000} >Kuloorchandai road, </Link>
                  </li>
                  <li>
                  <Link spy={true} smooth={true} duration={1000}>Allam Patti,  </Link>
                  </li>
                  <li>
                  <Link spy={true} smooth={true} duration={1000}> Virudhunagar  </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="side2">
            <div className="row">
              <div className="col-md-3">
                <p className="footer-title">Contact</p>
                <ul>
                  <li>
                    <Link to="#" >kavitha@aazhibiocup.com</Link>
                  </li>
                  <li>
                    <Link to="#" > </Link>
                  </li>
                  <li>
                    <Link to="#" >+91 98432 70011</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <p className="footer-title">Social Media</p>
                <ul>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://github.com/darkleas" > Github</a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://twitter.com/burhankocadag0" > Twitter</a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/burhan-kocada%C4%9F-49a3331a5/"> Linkedin</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => scroll.scrollToTop(2500)} src="" className="gotop"><i className="fas fa-level-up-alt"></i></button>

    </footer>
  );
}
export default Footer;