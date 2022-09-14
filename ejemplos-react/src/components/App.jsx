import Cmp04UseEffect from "./04-useEffect/Cmp04UseEffect"

const App = () => {
  return (
    <div>
      <h1>Curso de React</h1>
      {/* <Cmp01ExpresionesYListas /> */}
      {/* <Cmp02Propiedades /> */}
      {/* <Cmp03Estados /> */}
      <Cmp04UseEffect />
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