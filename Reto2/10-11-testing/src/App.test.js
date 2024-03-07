import {fireEvent, render} from '@testing-library/react'
import { ListadoNotas } from './components/ListadoNotas'
import App from './App'
import { InputNuevaNota } from './components/InputNuevaNota'


describe('REACT - Testeamos los componentes', () => {
    test('El listado se renderiza correctametne', () => {
        const r = render(<ListadoNotas/>)
        expect(r).toBeDefined();
    })

    test('El listado  renderiza un listado correctametne', () => {
        const notas = ["sacar la basura", "comprar leche"]
        const r = render(<ListadoNotas notas={notas}/>)
        expect(r).toBeDefined();
    })

    test('El listado renderiza, solo lo que debe renderizar', () => {
        const notas = ["sacar la basura", "comprar leche"]
        const r = render(<ListadoNotas notas={notas}/>)
        const div = r.getByLabelText('listado-notas')
        expect(div.childElementCount).toBe(2);
    })

})

describe('REACT - Hacemos test de integracion', () => {
    test('Renderizamos la app' , () => {
        const r = render(<App/>)
        expect(r).toBeDefined();
    })

    test('Se renderiza el input', () => {
        const placeHolderText = "Introduce nueva nota"
        const r = render(<App/>)
        const input = r.getAllByPlaceholderText(placeHolderText);
        expect(input).toBeDefined()
    })

    test('Cuando hacemos clic en boton AÑADIR se lanza el evento', () => {
        const funcionMock = jest.fn();
        const r = render(<InputNuevaNota addNuevaNota={funcionMock}/>)
        const button = r.getByText("Añadir");
        fireEvent.click(button)
        expect(funcionMock).toHaveBeenCalledTimes(1);
    })

    test('Añadimos una nueva nota', () => {
        const placeHolderText = "Introduce nueva nota"
        const r = render(<App/>)
        const input = r.getByPlaceholderText(placeHolderText)
        const button = r.getByText("Añadir");
        const div = r.getByLabelText("listado-notas")
        const hijosInicial = div.childElementCount
        fireEvent.change(input, { target:{ value:'Poner gasolina' }})
        fireEvent.click(button)
        const hijosFinal = div.childElementCount;
        expect(hijosFinal).toBeGreaterThan(hijosInicial)
        expect(hijosInicial).toBeLessThan(hijosFinal)
        expect(hijosInicial).not.toBe(hijosFinal)

    })

})