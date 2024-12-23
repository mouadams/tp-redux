import { useDispatch } from "react-redux"
import { clearList } from "./actions"

export default function ClearBtn() {
    const dispatch = useDispatch()
    function handleClear() {
        dispatch(clearList())
    }
    return (
        <div>
            <button onClick={handleClear}>Vider liste</button>
        </div>
    )
    
}