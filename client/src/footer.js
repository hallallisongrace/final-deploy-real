import React from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css'
// import github from './assets/assets/githubicon.png';
// import linkedin from './assets/assets/linkedinicon.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGithub,
  faLinkedin,
  faYoutube,
  faTwitter,
  faInstagram,
  faFacebook
} from "@fortawesome/free-brands-svg-icons";




class Footer extends React.Component
{
  render()
  {
    return (
<footer>               

    

<div className ="footer-area">


    <div className="footer-columns">
     <div ClassName="footeroptions" id="footer-left">
     <ul className="nav-item">
      <Link className="nav-link active" aria-current="page"path to="/">Home</Link>
      </ul>
        <ul className="nav-item">
              <Link className="nav-link" path to="/about">About</Link>
        </ul>
        <ul className="nav-item">
              <Link className="nav-link" path to="/contact">Contact</Link>
        </ul>
        <ul className="nav-item">
              <Link className="nav-link" path to="/add">Add Attractions</Link>
        </ul>

      </div>
      <div className="dropdown-container">
 <ul className="nav-item dropdown">
              <Link className="nav-link dropdown-path toggle" path to="/#" id="navbarDropdown" role="butpath ton" data-bs-path toggle="dropdown" aria-expanded="false">
                Seasons
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                <ul><Link className="dropdown-item" path to="https://cincinnatiusa.com/trip-ideas/spring"  target="_blank">Spring</Link></ul>
                <ul><Link className="dropdown-item" path to="https://cincinnatiusa.com/trip-ideas/summer"  target="_blank">Summer</Link></ul>
                <ul><Link className="dropdown-item" path to="https://cincinnatiusa.com/trip-ideas/fall"  target="_blank">Autumn</Link></ul>
                <ul><Link className="dropdown-item" path to="https://cincinnatiusa.com/trip-ideas/winter"  target="_blank">Winter</Link></ul>
              </ul>
              </ul>
              <ul className="nav-item dropdown">
              <Link className="nav-link dropdown-path toggle" path to="/#" id="navbarDropdown2" role="butpath ton" data-bs-path toggle="dropdown" aria-expanded="false">
                Destinations
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <ul><Link className="dropdown-item" path to="https://wandercincinnati.com/2019/12/01/over-the-rhine-cincinnati/"  target="_blank">Over the Rhine</Link></ul>
                <ul><Link className="dropdown-item" path to="https://www.cincinnatiparks.com/river-parks/smale-riverfront-park/" target="_blank" >Smale Riverfront Park</Link></ul>
                <ul><Link className="dropdown-item" path to="https://www.downpath towncincinnati.com/"  target="_blank">Downpath town</Link></ul>
                <ul><Link className="dropdown-item" path to="https://www.meetnky.com/" target="_blank" >Covingpath ton/Northern Kentucky</Link></ul>
              </ul>
              </ul>
              <ul className="nav-item dropdown">
              <Link className="nav-link dropdown-path toggle" path to="/#" id="navbarDropdown3" role="butpath ton" data-bs-path toggle="dropdown" aria-expanded="false">
                Experiences
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <ul><Link className="dropdown-item" path to="https://www.citybeat.com/arts-culture" target="_blank" >Culture</Link></ul>
                <ul><Link className="dropdown-item" path to="https://www.tripadvisor.com/Attractions-g5503747-Activities-c61-The_Cincinnati_Region.html" target="_blank" >Outdoors</Link></ul>
                <ul><Link className="dropdown-item" path to="https://phopath tos.citybeat.com/25-essential-foods-every-cincinnati-visipath tor-should-try/?slide=1&admin-ajaxwew" target="_blank" >Food</Link></ul>
                <ul><Link className="dropdown-item" path to="https://anniewearsit.com/cincinnati-official-travel-guide/" target="_blank" >Luxury</Link></ul>
              </ul>
            </ul>
            <ul className="nav-item">
              <Link className="nav-link" path to="/attractions">View Attractions</Link>
         </ul>
    
          {/* <h3 id="kable-title"></h3> */}
        </div>
        </div>
<div className="media-container" id="mediaIcons">
  <FontAwesomeIcon icon={faYoutube} />
    <FontAwesomeIcon icon={faInstagram} />
    <FontAwesomeIcon icon={faTwitter} />
    <FontAwesomeIcon icon={faFacebook} />
</div>

    <div className="shelby-container" id="shelby-footer">
    
    <h3 id="dom-title">Domynique Shelby</h3>
    
    <div className="shelby-icons">
    <Link path to="https://github.com/dshelby24" ><FontAwesomeIcon icon={faGithub}/></Link> 
    <Link path to="https://www.linkedin.com/in/domynique-v-shelby/" ><FontAwesomeIcon icon={faLinkedin}/></Link> 
    </div>
    </div>
    

    <div className="watson-container">
    <div className="watson-title">
      <h3 id="phil-title">Philicia Watson</h3>
    </div>
    <div className="watson-icons">
        <Link path to="https://github.com/PhiliciaWatson" ><FontAwesomeIcon icon={faGithub}/></Link> 
        <Link path to="https://www.linkedin.com/in/philicia-watson-b26bba1b1/" ><FontAwesomeIcon icon={faLinkedin}/></Link> 
    </div>
    </div>

    <div className="hall-container">
    <div className="hall-title">
    <h3 id="all-title">Allison Hall</h3>
    </div>
    <div className="hall-icons">
    <Link path to="https://github.com/hallallisongrace" ><FontAwesomeIcon icon={faGithub}/></Link> 
    <Link path to="https://linkedin.com/in/hallallisongrace" ><FontAwesomeIcon icon={faLinkedin}/></Link> 
     </div>
     </div>
    

  


<div className="legalinfo">
<p>Site by TGR Agency</p>
<p>Copyright TGR Agency 2021</p>
<p>Terms & Conditions | Privacy | Legal Notice</p>
</div>

</div>

    </footer>




    )
  }
}
export default Footer;

