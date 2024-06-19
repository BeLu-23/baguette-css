import "../App.css"
import { titleDescription } from "../utility/contentStrings";
import Separator from "./Separator";

const TitleSection = () => {

    return (
        <>
            <h1>{titleDescription.title}</h1>
            <Separator />
            <div className="titleSection">
                <img className="titleImage" src="BaguetteCharakter_Round_Background.svg" alt='BaguetteImage' />
                <div className="description">
                    <h2>{titleDescription.subtitle}</h2>
                    <p>{titleDescription.description}</p>
                    <div className="noticeTile">
                        <h3>{titleDescription.noticeTitle}</h3>
                        <p className="notice">{titleDescription.notice}</p>
                    </div>
                </div>
            </div>
            <Separator />
            <div className="propertyLink">
                <a href='/properties'>Go to learn some CSS Properties</a>
            </div>
        </>
    )
}

export default TitleSection;