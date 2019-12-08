import React from 'react';
import Contact from './Contact';

// class App extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             name: ''
//         };
//     }

//     render() {
//         return (
//             <div>
//                 <button onClick={() => {this.setState(
//                     {name: 'hyeona'}
//                 );}}>Click</button>
//                <h1>Hello!!@@! {this.state.name}</h1>
//             </div>
//         );
//     }
// }


class App extends React.Component {
    render() {
        return (
            <Contact/>
        );
    }
}


export default App;