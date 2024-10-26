import { useUser } from "@clerk/clerk-react"
import { Navigate } from "react-router-dom"

interface ptotectedInterface {
    element:React.ReactNode
}
const ProtectedComp:React.FC<ptotectedInterface> = ({element})=>{
    const {isSignedIn} = useUser()
    if(!isSignedIn){
        return <Navigate to={'/'}/>
    }

    return element
}

export default ProtectedComp