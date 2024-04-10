import { Layout } from "../../../layout";
import { Home } from "../../../templates/Home";
import { El } from "../../../utils/creatElement"

export const HomePage = () => {
    return El ({
        element: "div",
        className: "",
        children: [Layout(Home)]
    });
}