import { El } from "../../utils/creatElement"

export const Header= () =>{
return El({
    element: "div",
    className: "bg-red-400 h-5",
    children: [
        El({
            element:"img",
        })
    ],
});
}