import { useContext } from "react"
import AppContext from "./contexts/AppContext"
import Button from "./Button"


const SecondComponent = () => {
    const { username } = useContext(AppContext)
    return (
        <div style={{ border: "2px solid black", marginTop: 20, padding: 40 }}>
            <div>hello from second component</div>
            <div>
                username : {username}
            </div>
            <Button>sabit değerle değiştir global statei</Button>
        </div>
    )
}

export default SecondComponent