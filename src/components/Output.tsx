import '../App.css';

interface OutputProps {
    text: string
}

const Output = ({ text }: OutputProps) => {
    return (
        <div className="example">
            <p className="colorRed">{text}</p>
        </div>
    )
}

export default Output;