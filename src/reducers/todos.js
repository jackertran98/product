var uniqid = require('uniqid');
const init=[{
    id:uniqid(),
    product:'Iphone'
}
]

export default function todos(state=init,action){
    switch (action.type) {
        case 'ADD_PRODUCT':
            return [...state,{id:uniqid(),product:action.payload}];
        case 'DELETE_PRODUCT':
            return state.filter(cancle=>cancle.id!==action.payload.id)
        case 'EDIT_PRODUCT':
            return state.map(product=>product.id==action.payload.id?[...state,{product:action.payload.name}]: product);
        default:
            return state;    
    }
}