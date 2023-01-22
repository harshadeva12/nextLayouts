import {useDispatch} from "react-redux";
import {decrement} from '../pages/slices/counterSlice';
function Decrement(){
    const dispatch = useDispatch();
    return (
        <div>
<button onClick={()=> dispatch(decrement())}>decrement</button>
        </div>
    )
}
export default Decrement