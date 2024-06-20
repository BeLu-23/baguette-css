interface ListLinkProps {
    title: string;
    destination: string;
}

const ListLink = ({title, destination}: ListLinkProps) => {
    return (
        <li className={'circleListStyle'}>
            <a href={destination}>{title}</a>
        </li>
    );
}
 
export default ListLink;