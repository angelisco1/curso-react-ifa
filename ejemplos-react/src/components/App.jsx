import Cmp01ExpresionesYListas from './01-expresiones-y-listas/Cmp01ExpresionesYListas'

const App = () => {
  return (
    <div>
      <h1>Curso de React</h1>
      <Cmp01ExpresionesYListas />
    </div>
  )
}

// const App = () => {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement(
//       'h1',
//       {},
//       'Hola mundo!'
//     ),
//     React.createElement(
//       'label',
//       {},
//       'Otra cosa'
//     ),
//   )
// }

// const App = () => {
//   return jsx(
//     'div',
//     {
//       children: [
//         jsx(
//           'h1',
//           {
//             children: 'Hola mundo'
//           }
//         ),
//         jsx(
//           'label',
//           {
//             children: 'Algo'
//           }
//         ),
//       ]
//     }
//   )
// }


export default App