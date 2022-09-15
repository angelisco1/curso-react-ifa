import Cmp11Hoc from "./11-hoc/Cmp11Hoc"

const App = () => {
  return (
    <div>
      <h1>Curso de React</h1>
      {/* <Cmp01ExpresionesYListas /> */}
      {/* <Cmp02Propiedades /> */}
      {/* <Cmp03Estados /> */}
      {/* <Cmp04UseEffect /> */}
      {/* <Cmp05ContextApi /> */}
      {/* <Cmp06Children /> */}
      {/* <Cmp07Referencias /> */}
      {/* <Cmp08FragmentsYMemo /> */}
      {/* <Cmp09FormulariosYCustomHook /> */}
      {/* <Cmp10UseReducer /> */}
      <Cmp11Hoc />
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