import Separator from "../components/Separator";

const PrivacyPolicy = () => {
    return ( 
        <div className="privacyPolicy">
            <h2>Privacy Policy</h2>
            <Separator />

            <h3>Data Protection</h3>
            <p>As website operators, we take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with legal data protection regulations and this privacy policy.</p>

            <h3>Access Data</h3>
            <p>We collect data on website accesses based on our legitimate interest (see Art. 6 para. 1 lit. f. GDPR) and store these as "server log files". The following data is logged:</p>

            <ul className="privatePolicyList">
                <li>Visited website</li>
                <li>Time of access</li>
                <li>Amount of data sent in bytes</li>
                <li>Source/reference from which you accessed the page</li>
                <li>Used browser</li>
                <li>Used operating system</li>
                <li>Used IP address</li>
            </ul>
    
            <p>The server log files are stored for a maximum of 7 days and then deleted. The storage of the data is for security reasons, e.g., to clarify cases of misuse.</p>

            <h3>Cookies</h3>
            <p>This website does not use cookies.</p>

            <h3>User Rights</h3>
            <p>As a user, you have the right to request free information about what personal data is stored about you. You also have the right to correct incorrect data and to restrict processing or delete your personal data. If applicable, you can also assert your right to data portability.</p>
        </div>
     );
}
 
export default PrivacyPolicy;