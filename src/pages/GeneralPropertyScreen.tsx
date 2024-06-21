import BackToMain from "../components/BackToMain";
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
                <h1>{header}</h1>
                <BackToMain />
                <Separator />
                {children}
            </FCDiv>
            <Footer />
        </>
     );
}
 
export default GerneralPropertyScreen;