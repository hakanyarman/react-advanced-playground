import { useContext, useEffect } from "react"
import AppContext from "./contexts/AppContext";


const MyComponent = () => {
    useEffect(() => {
        console.log("My component render/rerender edildi");
    }, [])
    const { username } = useContext(AppContext)
    return (
        <div style={{ border: "2px solid red", marginTop: 20, padding: 40 }}>
            <div>hakan</div>
            <span>username : {username}</span>
        </div>
    )
}

export default MyComponent