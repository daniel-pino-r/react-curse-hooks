import { useContador } from "../hooks/useContador"

//useState
// REFACTOR
export const FirstPage = () => {
  let a=100;
  let b=10;
  let c=1;
  const { valor, modificarEstado, reset} = useContador(a)
  return (
    <>
      <h1>Contador mejorado</h1>
      <hr />
      <h1>{ valor }</h1>
      <button onClick={() => modificarEstado(-b)}>RESTAR 10</button>
      <button onClick={() => modificarEstado(+c)}>SUMAR 1</button>
      <button onClick={reset}>Reset</button>
    </>
  )
} 
// por favor 