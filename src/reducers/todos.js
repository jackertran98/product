var uniqid = require("uniqid");
const init = [
  {
    id: uniqid(),
    product: "Iphone"
  }
];

const initialState = {
  loading: false,
  products: [{ id: Math.random(), value: "iPhone" }]
};

export default function todos(state = initialState, action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        products: [
          ...state.products,
          { id: Math.random(), value: action.payload }
        ]
      };
    case "DELETE_PRODUCT":
      return state.filter(cancle => cancle.id !== action.payload.id);
    case "EDIT_PRODUCT":
      const newProducts = state.products.map(pr => {
        if (pr.id === action.payload.id) {
          return (pr = action.payload);
        }
        return pr;
      });
      return {
        ...state,
        products: newProducts
      };

    default:
      return state;
  }
}
