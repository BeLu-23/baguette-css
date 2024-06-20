import { titleDescription } from "../utility/contentStrings";
import Separator from "./styling/Separator";
import'../css/TitleSection.css';
import FCDiv from "./styling/FCDiv";

const TitleSection = () => {

    return (
        <FCDiv>
            <h1>{titleDescription.title}</h1>
            <Separator />
            <div className="imageSection">
                <img className="titleImage" src="BaguetteCharakter_Round_Background.svg" alt='BaguetteImage' />
                <div className="description">
                    <h2>{titleDescription.subtitle}</h2>
                    <p>{titleDescription.description}</p>
                    <div className="noticeTile">
                        <h3>{titleDescription.noticeTitle}</h3>
                        <p>{titleDescription.notice}</p>
                    </div>
                </div>
            </div>
            <Separator />
        </FCDiv>
    )
}

export default TitleSection;