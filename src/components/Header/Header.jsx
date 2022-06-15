import { useState } from 'react';
import {useSelector} from 'react-redux';

function Header( props ){
    // template hook
    const [ hook, setHook ] = useState( null );
    const animalReducer = useSelector((store) => store.animalReducer);
    const plantReducer = useSelector((store) => store.plantReducer);
    
    return(
        <div>
            <h1>Header</h1>
            <p>Moochie Jinks</p>
            <h1>Animals: {animalReducer}</h1>
            <h1>Plants: {plantReducer}</h1>
        </div>
    );
}

export default Header;