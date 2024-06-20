import Separator from "./styling/Separator";
import '../css/Footer.css';
import FCDiv from "./styling/FCDiv";

const Footer = () => {
    return ( 
        <FCDiv>
            <Separator />
            <div className="footerLinks">
                <a href='/impressum'>Impressum</a>
                <a href='/privacy-policy'>Privacy Policy</a>
            </div>
            <div className="rights">
                <p>
                {'© ' + new Date().getFullYear() + ' BaguetteCss. All Rights reserved.'}
                </p>
            </div>
            <Separator />
        </FCDiv>
     );
}
 
export default Footer;