import React  from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';




const Footer =()=>{
    return(
        <>


<div className="container my-0 bg-light">

  <footer className="bg-dark text-center text-white">
 
  <div className="container p-4 pb-0">
    
    <section className="mb-4">

      <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/aryanagrawal987" target=""  role="button"
        ><FacebookIcon /></a>

     
      <a className="btn btn-outline-light btn-floating m-1" href="https://twitter.com/aryanagr" target="" role="button"
        ><TwitterIcon /></a>

     
    

     
      <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/aryanagrawal987/" target="" role="button"
        ><InstagramIcon /></a>

      <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/aryanagr/" target="" role="button"
        ><LinkedInIcon /></a>

    
      <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/aryanagr" target="" role="button"
        ><GitHubIcon /></a>
    </section>
    
  </div>
 


  <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
    © 2020 Copyright: ARYANAGR
   
  </div>

</footer>
  
</div>

        </>
    );
}
export default Footer;