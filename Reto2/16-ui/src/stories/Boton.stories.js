import { Button } from "@material-ui/core";
import Boton from "../components/Boton"


export default {
    title: "Botón",
    component: Boton
};

//export const BotonMUI = () => <Boton text="HOla mundo" color="primary" />

const Template = args => <Boton {...args} />

export const Principal = Template.bind({})
Principal.args = {
    color: "primary",
    text: "Hola"
}

export const Secundario = Template.bind({})
Secundario.args = {
    color: "secondary",
    text: "Secundario"
}