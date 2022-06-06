import React, { Component } from "react";

// Stateful
// const Button = () => {
//   const [name, setName] = useState("Hola Mundo");
//   return (
//     <div>
//       <h1> {name}</h1>
//     </div>
//   );
// };

// Stateless
// const Button = () => <(
//   <div>
//     <h1> {name}</h1>
//   </div>
// );>

// class App extends Component {
//   constructor() {
//     super();
//   }
//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//       </div>
//     );
//   }
// }

function ComponentWrapper(WrapperComponent) {
  class Wrapper extends Component {
    render() {
      return <WrapperComponent {...this.props} />;
    }
  }

  return Wrapper;
}
