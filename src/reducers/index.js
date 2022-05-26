import { useDebugValue } from "react";
import { combineReducers } from "redux";

import posts from "./posts";

// export default combineReducers({
//     posts: posts,
// });
    
//     Ici c'est l'écriture de base non simplifiée, par exemple posts: posts nous dit quelle id pour quelle useDebugValue, mais vu que c'est la même, alors on peut laisser qu'un seul posts

export default combineReducers({ posts });