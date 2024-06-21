import '../css/PropertyAssembly.css';
import { tileStrings } from '../utility/contentStrings';
import FCDiv from './styling/FCDiv';
import CollapsableListItem from './styling/CollapsableListItem';
import ListLink from './ListLink';

const PropertyAssembly = () => {

    return ( 
        <FCDiv>
            <h2>Start learning about CSS...</h2>
            <FCDiv>
            <ul style={{marginBottom: '8px'}}>
                <CollapsableListItem title='Introduction to CSS' destination='/introduction-to-css' topElement={true}>
                        <ListLink title='What is Css?' destination='/introduction-to-css/whatIsCss'/>
                        <ListLink title='Creating a CSS File' destination='/introduction-to-css/creatingCssFile'/>
                        <ListLink title='Linking CSS to HTML' destination='/introduction-to-css/linkingCssHtml'/>
                        <ListLink title='Css Syntax' destination='/introduction-to-css/cssSyntax'/>
                        <ListLink title='Selectors' destination='/introduction-to-css/selectors'/>
                        <ListLink title='Combining Selectors' destination='/introduction-to-css/combiningSelectors'/>
                </CollapsableListItem>
                <CollapsableListItem title='Property Groups'  destination='' topElement={true}>
                    <CollapsableListItem title='Layout' destination=''>
                        <ListLink title='display' destination=''/>
                        <ListLink title='position' destination=''/>
                        <ListLink title='top, right, left, bottom' destination=''/>
                        <ListLink title='float' destination=''/>
                        <ListLink title='clear' destination=''/>
                        <ListLink title='z-index' destination=''/>
                        <ListLink title='flex' destination=''/>
                        <ListLink title='grid' destination=''/>
                    </CollapsableListItem>
                    <CollapsableListItem title='Box-Modell & Spacing & Borders' destination=''>
                        <ListLink title='margin' destination=''/>
                        <ListLink title='padding' destination=''/>
                        <CollapsableListItem title='Borders' destination=''>
                            <ListLink title='border' destination=''/>
                            <ListLink title='border-radius' destination=''/>
                            <ListLink title='border-color' destination=''/>
                            <ListLink title='border-style' destination=''/>
                            <ListLink title='border-width' destination=''/>
                            <ListLink title='outline' destination=''/>
                        </CollapsableListItem>
                        <ListLink title='flex' destination=''/>
                        <ListLink title='grid' destination=''/>
                        <ListLink title='width' destination=''/>
                        <ListLink title='height' destination=''/>
                        <ListLink title='box-sizing' destination=''/>
                        <CollapsableListItem title='Spacing' destination='' >
                            <ListLink title='gap' destination=''/>
                        </CollapsableListItem>
                    </CollapsableListItem>
                    <CollapsableListItem title='Typography' destination=''>
                        <ListLink title='font-family' destination=''/>
                        <ListLink title='font-size' destination=''/>
                        <ListLink title='font-weight' destination=''/>
                        <ListLink title='font-style' destination=''/>
                        <ListLink title='line-height' destination=''/>
                        <ListLink title='text-align' destination=''/>
                        <ListLink title='text-decoration' destination=''/>
                        <ListLink title='letter-spacing' destination=''/>
                    </CollapsableListItem>
                    <CollapsableListItem title='Color & Background' destination='/color-background-properties'>
                        <ListLink title={tileStrings.color.property} destination={`/color-background-properties/${tileStrings.color.property}`}/>
                        <ListLink title='opacity' destination=''/>
                        <ListLink title='background-color' destination=''/>
                        <ListLink title='baclground-image' destination=''/>
                        <ListLink title='background-repeat' destination=''/>
                        <ListLink title='background-position' destination=''/>
                        <ListLink title='background-size' destination=''/>
                        <ListLink title='background-clip' destination=''/>
                    </CollapsableListItem>
                    <CollapsableListItem title='Effects' destination=''>
                        <ListLink title='box-shadow' destination=''/>
                        <ListLink title='box-shadow' destination=''/>
                        <ListLink title='filter' destination=''/>
                    </CollapsableListItem>
                    <CollapsableListItem title='Transforms & Animations' destination=''>
                        <ListLink title='transform' destination=''/>
                        <ListLink title='transition' destination=''/>
                        <ListLink title='animation' destination=''/>
                    </CollapsableListItem>
                    <CollapsableListItem title='Visibility & Display' destination=''>
                        <ListLink title='Visibility' destination=''/>
                        <ListLink title='display' destination=''/>
                        <ListLink title='overflow' destination=''/>
                        <ListLink title='clip' destination=''/>
                    </CollapsableListItem>
                    <CollapsableListItem title='Interactivity' destination=''>
                        <ListLink title='cursor' destination=''/>
                        <ListLink title='pointer-events' destination=''/>
                        <ListLink title='resize' destination=''/>
                        <ListLink title='user-select' destination=''/>
                    </CollapsableListItem>
                    <CollapsableListItem title='Media Queries' destination=''>
                        <ListLink title='@media' destination=''/>
                        <ListLink title='min-width, max-width, min-height, max-height' destination=''/>
                    </CollapsableListItem>
                    <CollapsableListItem title='Pseudo-classes & Pseudo-elements' destination=''>
                        <ListLink title=':hover' destination=''/>
                        <ListLink title=':focus' destination=''/>
                        <ListLink title=':active' destination=''/>
                        <ListLink title=':before' destination=''/>
                        <ListLink title=':after' destination=''/>
                    </CollapsableListItem>
                    <CollapsableListItem title='Lists' destination=''>
                        <ListLink title='list-style' destination=''/>
                        <ListLink title='list-style-type' destination=''/>
                        <ListLink title='list-style-position' destination=''/>
                        <ListLink title='list-style-image' destination=''/>
                    </CollapsableListItem>
                    <CollapsableListItem title='Tables' destination=''>
                        <ListLink title='border-collapse' destination=''/>
                        <ListLink title='border-spacing' destination=''/>
                        <ListLink title='table-layout' destination=''/>
                    </CollapsableListItem>
                </CollapsableListItem>
                <CollapsableListItem title='Challenges' destination='' topElement={true}>
                    <ListLink title='Create Mr. Baguette using Css' destination=''/>
                    <ListLink title='Make Mr. Baguette dance' destination=''/>
                </CollapsableListItem>
            </ul>
            <br/>
            </FCDiv>
        </FCDiv>
     );
}
 
export default PropertyAssembly;