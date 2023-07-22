import { Cart } from "../components/pages/cart/Cart";
import CheckoutContainer from "../components/pages/checkout/CheckoutContainer";
import ItemDetailContainer from "../components/pages/itemDetail/ItemDetailContainer";
import ItemListContainer from "../components/pages/itemListContainer/ItemListContainer";

export const routes = [
    {
        id: "home",
        path: "/",
        Element: ItemListContainer
    },
    {
        id: "store",
        path: "/tienda/:categoria",
        Element: ItemListContainer
    },
    {
        id: "detail",
        path: "/itemDetail/:id",
        Element: ItemDetailContainer
    },
    {
        id: "cart",
        path: "/cart",
        Element: Cart
    },
    {
        id: "checkout",
        path: "/checkout",
        Element: CheckoutContainer
    },

]