import Footer from "../components/Footer";
import FCDiv from "../components/styling/FCDiv";
import Separator from "../components/styling/Separator";

interface GeneralPropertyScreenProps {
    header: string;
    children: React.ReactNode;
}

const GerneralPropertyScreen = ({header, children}: GeneralPropertyScreenProps) => {
    return (  
        <>
            <FCDiv>
                <h2>{header}</h2>
                <Separator />
                <a style={{marginTop: '8px'}} href="/">Back to Main Page</a>
                {children}
            </FCDiv>
            <Footer />
        </>
     );
}
 
export default GerneralPropertyScreen;