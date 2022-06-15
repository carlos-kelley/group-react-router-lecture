import { useState } from 'react';

function _template( props ){
    // template hook
    const [ hook, setHook ] = useState( null );
    
    return(
        <div>
            <h2>_template</h2>
            <p>Props: { JSON.stringify( props ) }</p>
        </div>
    );
}

export default _template;