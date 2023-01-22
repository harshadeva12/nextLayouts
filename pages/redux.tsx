import Increment from '../components/increment';
import Decrement from '../components/decrement'
import {useSelector } from 'react-redux';

function Home(){
    const count = useSelector((state) => state.counter.value);
    return (
        <div>
            <head>create next redux</head>
            <Increment/>{count}
            <Decrement/>
        </div>
    )
}
export default Home