import {Component, StrictMode} from 'react';
import './App.css';

const Header = () => {
  return <h2>Hello world!</h2>
}

const Field = () => {
  const holder = 'Type here';
  const styleField = {
    width: '300px'
  };

  return <input 
        placeholder={holder} 
        type='text' 
        style={styleField}/>
}

// class Field extends Component {
//   render() {
//     const holder = 'Type here';
//     const styleField = {
//       width: '300px'
//     };

//     return <input 
//             placeholder={holder} 
//             type='text' 
//             style={styleField}/>
//   }
// }

const Btn = () => {
  const text = 'Log in';
  const logged = false;
  
  return <button>{logged ? 'Enter' : text}</button>
}

function App() {
  return (
    <div className="App">
      <StrictMode>
        <Header/>
      </StrictMode>
      <Field/>
      <Btn/>
    </div>
  );
}

export {Header};
export default App;
