import InputComponent from "../input/input";
import { changeInputX, changeInputY } from "../../store/state";
import ButtonComponent from "../button/button";
import './box.css'

const BoxComponent = {
    view: () => m('div#box-component', [
        m(InputComponent, {
            oninput: value => changeInputX(value)
        }),
        m('h1','X'),
        m(InputComponent, {
            oninput: value => changeInputY(value)
        }),
        m(ButtonComponent, {
            
        })
    ])

}