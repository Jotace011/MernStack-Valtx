//vamos a construir una aplicacion de seleccion y busqueda de emisoras de radio en streaming

const { render,screen, fireEvent, waitForElementToBeRemoved, queryByLabelText } = require("@testing-library/react")
import App from './App'

const mockArray = [{
    "changeuuid": "5c35b1e1-ab9b-4cf3-9c09-20830a9b68d5",
    "stationuuid": "a4a3c3c4-d499-48e0-bec1-226868d22968",
    "serveruuid": "5209335e-b186-4032-9aa1-2caf79159549",
    "name": "__COUNTRYHITS.FM__ by rautemusik (rm.fm)",
    "url": "https://country-high.rautemusik.fm/?ref=radiobrowser",
    "url_resolved": "https://rautemusik-de-hz-fal-stream18.radiohost.de/country?ref=radiobrowser",
    "homepage": "https://countryhits.fm/",
    "favicon": "",
    "tags": "alternative country,alternative rock,americana,classic country,classic rock,country,hits,nashville,new country,rock,texas country",
    "country": "Germany",
    "countrycode": "DE",
    "iso_3166_2": null,
    "state": "North Rhine-Westphalia",
    "language": "english,german",
    "languagecodes": "de,en",
    "votes": 619,
    "lastchangetime": "2024-01-10 00:01:08",
    "lastchangetime_iso8601": "2024-01-10T00:01:08Z",
    "codec": "MP3",
    "bitrate": 192,
    "hls": 0,
    "lastcheckok": 1,
    "lastchecktime": "2024-03-05 04:13:01",
    "lastchecktime_iso8601": "2024-03-05T04:13:01Z",
    "lastcheckoktime": "2024-03-05 04:13:01",
    "lastcheckoktime_iso8601": "2024-03-05T04:13:01Z",
    "lastlocalchecktime": "2024-03-05 04:13:01",
    "lastlocalchecktime_iso8601": "2024-03-05T04:13:01Z",
    "clicktimestamp": "2024-03-05 20:24:08",
    "clicktimestamp_iso8601": "2024-03-05T20:24:08Z",
    "clickcount": 39,
    "clicktrend": 2,
    "ssl_error": 0,
    "geo_lat": null,
    "geo_long": null,
    "has_extended_info": false
}]

/*
//0 - la aplicacion debe renderizar correctamente


1- el nombre de la aplicacion debe mostrarse en algun lugar => "OpenRadioCamp"

2- Debemos poder buscar radios por nombre
2a - La aplicacion debe tener un campo input con el placeholder => "Escribe el nombre de la radio"
2b - La aplicacion debe tener un boton de busqueda => Texto "BUSCAR"
2c - Cuando hacemos clic en el boton buscar, se dee ejecutar la funcion de busqueda una sola vez

3 - DEbe existir un listado de emisoras
3aa- debe existir un listado de emisoras
3a - El listado debe inicializar vacio
3b - Cuando se hace una busqueda valida, el listado debe mostrar al menos un resultado
3c - Cuando hacemos una busqueda invalida, el listado debe mostrar un mensaje " No se han encontrado emisoras para esta busqueda"


*/

beforeEach(() => render(<App/>))

describe('La aplicacion debe renderizar correctamente', () => {
    test('la aplicacion debe correr', () => {
        const r = render(<App />)
        expect(r).toBeDefined   
    })
})

describe('1- el nombre de la aplicacion debe mostrarse en algun lugar => "OpenRadioCamp"', () => { 
    test('1- el nombre de la aplicacion debe mostrarse en algun lugar => "OpenRadioCamp"', () => {
        const nombre = "OpenRadioCamp"
        const el = screen.getByText(nombre)
        expect(el).toBeInTheDocument()
    })
 })

 describe('2- Debemos poder buscar radios por nombre', () => {
    test('La aplicacion debe tener un campo input con el placeholder => "Escribe el nombre de la radio"', () => {
        const placeholdertext = "Escribe el nombre de la radio"
        const input = screen.getByPlaceholderText(placeholdertext)
        expect(input).toBeInTheDocument();

    })

    test('2b - La aplicacion debe tener un boton de busqueda => Texto "BUSCAR"', () => {
        const buttonText = "Buscar"
        const button = screen.getByText(buttonText)
        expect(button).toBeInTheDocument();
    })
    
    test('2c - Cuando hacemos clic en el boton buscar, se dee ejecutar la funcion de busqueda una sola vez',  () => {
        const mockFn = jest.fn()
        const buttonText = "Buscar"
        const button = screen.getByText(buttonText)
        button.addEventListener("click", mockFn)
        fireEvent.click(button)
        expect(mockFn).toHaveBeenCalledTimes(1)
    })
 })

 describe('3 - DEbe existir un listado de emisoras', () => {
    test('3a- debe existir un listado de emisoras', () => {
        const listado = screen.getByLabelText("listado-emisoras");
        expect(listado).toBeInTheDocument()
    })

    test('3a - El listado debe inicializar vacio', () => {
        const listado = screen.getByLabelText("listado-emisoras");
        const childrenCount = listado.childElementCount;
        expect(childrenCount).toBe(0)
    })

    // test('3b - Cuando se hace una busqueda valida, el listado debe mostrar al menos un resultado',async () => {
    //     const placeholdertext = "Escribe el nombre de la radio"
    //     const input = screen.getByPlaceholderText(placeholdertext)
    //     const buttonText = "Buscar"
    //     const button = screen.getByText(buttonText)
    //     fireEvent.change(input, {target: {value: 'Country'}})
    //     fireEvent.click(button)
    //     const listado = screen.getByLabelText("listado-emisoras");
    //     const childrenCount = listado.childElementCount;
    //     expect(childrenCount).toBeGreaterThanOrEqual(0)
    // })


 })