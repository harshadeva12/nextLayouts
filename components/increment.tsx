import {useDispatch} from "react-redux";
import {increment,addToSave} from '../pages/slices/counterSlice';
function Incrementt(){
    const dispatch = useDispatch();
    return (
        <div>
<button onClick={()=> dispatch(increment())}>Increment</button>
        </div>
    )
}
export default Incrementt