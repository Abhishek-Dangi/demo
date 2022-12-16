import './Footer.css';
import { useState , useEffect } from 'react';

function Footer()
{

    const [footercontent , setFooterContent] = useState();

    useEffect(()=>{
     setInterval(()=>{
        if(localStorage.getItem("role")=="admin" || localStorage.getItem("role")=="user")
         setFooterContent(<div></div>);    
        else
         setFooterContent(<div>
             <div class="container">
        <div class="row">
            <div class="col-md-6 col-lg-3">
                <div class="footer-contact">
                    <h2>Office Contact</h2>
                    <p><i class="fa fa-map-marker-alt"></i>X Street, India</p>
                    <p><i class="fa fa-phone-alt"></i>XXX XXX XXXX</p>
                    <p><i class="fa fa-envelope"></i>info@example.com</p>
                    <div class="footer-social">
                        <a href=""><i class="fab fa-twitter"></i></a>
                        <a href=""><i class="fab fa-facebook-f"></i></a>
                        <a href=""><i class="fab fa-youtube"></i></a>
                        <a href=""><i class="fab fa-instagram"></i></a>
                        <a href=""><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-3">
                <div class="footer-link">
                    <h2>Services Areas</h2>
                    <a href="">Search Property</a>
                    <a href="">Brokrage Free</a>
                    <a href="">Search Best</a>
                    <a href="">Different Locations</a>
                    <a href="">Propery Comparison</a>
                </div>
            </div>
            <div class="col-md-6 col-lg-3">
                <div class="footer-link">
                    <h2>Useful Pages</h2>
                    <a href="">About Us</a>
                    <a href="">Contact Us</a>
                    <a href="">Our Team</a>
                    <a href="">Testimonial</a>
                </div>
            </div>
            <div class="col-md-6 col-lg-3">
                <div class="newsletter">
                    <h2>Newsletter</h2>
                    <p>
                        Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulpu
                    </p>
                    <div class="form">
                        <input class="form-control" placeholder="Email here" />
                        <button class="btn">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container footer-menu">
        <div class="f-menu">
            <a href="">Terms of use</a>
            <a href="">Privacy policy</a>
            <a href="">Cookies</a>
            <a href="">Help</a>
            <a href="">FQAs</a>
        </div>
    </div>
         </div>);    
     },2000);  
    },[]);  

  return(
    <div class="footer wow fadeIn" data-wow-delay="0.3s">
    { footercontent }
    <div class="container copyright">
        <div class="row">
            <div class="col-md-6">
                <p>&copy; <a href="#">RoomRent.com</a>, All Right Reserved.</p>
            </div>
            <div class="col-md-6">
                <p>Designed By <a href="">StackBatch45</a></p>
            </div>
        </div>
    </div>
</div>

  );
}

export default Footer;