import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function MainContent(props) {
    const {theme, toggleTheme} = useContext(ThemeContext);
    // ThemeContext로부터 현재 설정된 테마 값을 받아와 실제 화면의 콘텐츠를 랜더링
    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                padding: "1.5rem",
                backgroundColor: theme == "light" ? "white" : "black",
                color: theme == "light" ? "black" : "white",
            }}
        >
            <p>테마 변경이 가능한 웹사이트를 구현한 이견희입니다.</p>
            <button onClick={toggleTheme}>테마변경</button>
        </div>// 테마 변경 버튼 누름 -> ThemeContext로부터 받은 toggleTheme()함수 호출
        // -> ThemeContext값 변경
    );
}

export default MainContent;