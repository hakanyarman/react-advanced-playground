import { useContext } from "react"
import AppContext from "./contexts/AppContext"
import Button from "./Button"


const SecondComponent = () => {
    const { username, setUsernameState } = useContext(AppContext)
    return (
        <div style={{ border: "2px solid black", marginTop: 20, padding: 40 }}>
            <div>hello from second component</div>
            <div>
                username : {username}
            </div>
            <Button onClick={() => { setUsernameState("hakan") }}>alt component'e setUsername fonksiyonunu da paylaştık global statei değiştirmek için tıkla</Button>
        </div>
    )
}

export default SecondComponent