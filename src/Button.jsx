import { useContext } from "react";
import AppContext from "./contexts/AppContext";

const ButtonStyle = {
    "backgroundColor": "green",
    "width": "300px"
}

const Button = ({ children }) => {
    const { username, setUsernameState } = useContext(AppContext)
    const handleClick = () => {
        setUsernameState("sabit değer")
    }
    return (
        <button style={ButtonStyle} onClick={handleClick}>
            {children}
            {username}
        </button>
    )
}

export default Button;