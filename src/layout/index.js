import { Home } from "../templates/Home";
import { El } from "../utils/creatElement"
import { Footer } from "./footer/footer"
import { Header } from "./header/header"

export const Layout= () => {
    return El({
        element: "div",
        children: [
            Header() , Home() , Footer()
        ]
    });
}
