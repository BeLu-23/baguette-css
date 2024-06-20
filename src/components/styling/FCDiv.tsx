interface FCDivProps {
    children: React.ReactNode;
}

const FCDiv = ({children}: FCDivProps) => {
    return ( 
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            {children}

        </div>
     );
}
 
export default FCDiv;