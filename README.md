button dropdown for Angular 2 or 4 with scss
---------------

Make dropdown from any button!

Usage

```ts
import { ButtonDropdownModule } from 'button-dropdown';


// in module
@NgModule({
    ...
    imports: [CommonModule, ButtonDropdownModule],
    ...
})
```

use in template

```html
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
```
