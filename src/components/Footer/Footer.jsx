import { useState } from 'react';

function Footer( props ){
    // template hook
    const [ hook, setHook ] = useState( null );
    
    return(
        <div>
            <h2>Footer</h2>
        </div>
    );
}

export default Footer;