import '../../css/ListItems.css';
import { useState } from "react";
import { SlArrowRight } from "react-icons/sl";

interface CollapsableListItemProps {
    title: string;
    topElement?: boolean;
    destination: string;
    children: React.ReactNode;
}
const CollapsableListItem = ({title, topElement, destination, children}: CollapsableListItemProps ) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return ( 
        <li className='hasArrow' 
            style={{marginTop: topElement ? '8px' : ''}}
            >
            <span className={`arrow ${isOpen ? 'rotate' : ''}`} onClick={toggleOpen} 
                style={{
                    position: topElement ? undefined : 'relative',
                    left: topElement ? undefined : '-20px',
                    top: topElement ? undefined : '2px',
                }}
            >
                <SlArrowRight />
            </span>
            &nbsp;&nbsp;
            <a href={destination} 
                style={{
                    position: topElement ? undefined : 'relative',
                    left: topElement ? undefined : '-24px',

                }}
            >{title}</a>
            <ul className={`nested ${isOpen ? 'active' : ''}`}>
                {children}
            </ul>
        </li>
     );
}
 
export default CollapsableListItem;