import { useContext } from "react";
import AppContext from "./contexts/AppContext";

const ButtonStyle = {
    "backgroundColor": "green",
    "width": "300px"
}



const Button = ({ children }) => {
    const { username } = useContext(AppContext)
    return (
        <button style={ButtonStyle}>
            {children}
            {username}
        </button>
    )
}

export default Button;