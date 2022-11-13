import styled from "styled-components";
import './DisplayFlex.css';

const StyleSignal = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
`;

const TrafficSignal = styled(StyleSignal)`
    background-color: ${(props) => {
        if(props.warning) {return 'yellow'}
        else if(props.wait) {return 'red'}
        else return 'green'
    }}
`;

function Signal() {
    return (
        <div className="flexContainer2">
            <TrafficSignal wait></TrafficSignal>
            <TrafficSignal></TrafficSignal>
            <TrafficSignal warning></TrafficSignal>
        </div>
    )
}

export default Signal;