button dropdown
---------------

Make dropdown from any button!

import it
    import { ButtonDropdownComponent } from 'button-dropdown/button-dropdown';

include it

    ...
    directives: [ ButtonDropdownComponent ]
    ...

use in template

    <button-dropdown>
         <div content id="avatar" >
             <button>  awesome </button>
         </div>
         <div list >         
               <ul>
    	           <li> list for dropdown item </li>
            	    <li> list for dropdown item </li>   
    	    </ul>    
	     </div>
	</button-dropdown>
