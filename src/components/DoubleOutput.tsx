import '../App.css';

interface DoubleOutputProps {
    text1: string;
    text2: string;
}

const DoubleOutput = ({ text1, text2 }: DoubleOutputProps) => {
    return (
        <div className="example-container">
            <div className="example-box">{text1}</div>
            <div className="example-box with-border">{text2}</div>
        </div>
    )
}

export default DoubleOutput;