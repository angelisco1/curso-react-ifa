import Cmp06Children from "./06-children/Cmp06Children"

const App = () => {
  return (
    <div>
      <h1>Curso de React</h1>
      {/* <Cmp01ExpresionesYListas /> */}
      {/* <Cmp02Propiedades /> */}
      {/* <Cmp03Estados /> */}
      {/* <Cmp04UseEffect /> */}
      {/* <Cmp05ContextApi /> */}
      <Cmp06Children />
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