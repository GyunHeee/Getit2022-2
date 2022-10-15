import React from "react";
import {useState} from "react";

/*
class ConfirmButton extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            isConfirmed: false,
        };

        this.handleConfirm = this.handleConfirm.bind(this);
    }

    handleConfirm = () {
        this.setState((prevState) => ({
            isConfirmed: !prevState.isConfirmed,
        }));
    }

    render() {
        return (
            <button
                onClick = {this.handleConfirm}
                disabled ={this.state.isConfirmed}
            >
                {this.state.isConfirmed ? "확인됨" : "확인하기"}
            </button>
        );
    }
}
*/

function ConfirmButton(props) {
    const [isConfirmed, setIsConfirmed] = useState(false);
    // useState() 훅을 ㄱ사용하여 state처리
    const handleConfirm = () => {
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
    }; // arrow function을 이용하여 이벤트 핸들러 생성

    return (
        <button onClick={handleConfirm} disabled={isConfirmed}>
            {isConfirmed ? "확인됨" : "확인하기"}
        </button>
    );
}

export default ConfirmButton;