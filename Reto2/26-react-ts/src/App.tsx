
import Header from './Componentes/Header';
import Title from './Componentes/Title';
import ProductList from './Componentes/ProductList';

function App(): JSX.Element {
  return (
    <div>
      <Header name="TypeShopping"/>
      <div className='p-4'>
        <Title title ="Tu primera web con Ts y React"/>
        <ProductList/>
      </div>
    </div>
  );
}

export default App;
