import Separator from "./Separator";

const Footer = () => {
    return ( 
        <>
            <Separator />
            <div className="footer">
                <div className="footerLinks">
                    <a href='/impressum'>Impressum</a>
                    <a href='/privacy-policy'>Privacy Policy</a>
                </div>
                <div className="rights">
                    <p>
                    {'© ' + new Date().getFullYear() + ' BaguetteCss. All Rights reserved.'}
                    </p>
                </div>
            </div>
            <Separator />
        </>
     );
}
 
export default Footer;