import React, { Fragment, useState } from "react";

const SearchBar = () => {
  const [currentValue, setCurrentValue] = useState("");

  const _onClick = () => {
      const result = fetch("https://www.omdbapi.com/?s=man&apikey=4a3b711b").then(result =>{
      result.json().then(res=>{
          console.log("currentValue Function Component :", res);
      })    
      
      });
    
  };
  //fetch asenkron çalıştığı için promise, beklemesi için then yazarız 
  const _onChange = event => {
    setCurrentValue(event.target.value);
  };
  return (
    <Fragment>
      <input onChange={_onChange} />
      <button onClick={_onClick}>Search</button>
    </Fragment>
  );
};

// class SearchBarClass extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentValue: ""
//     };
//   }

//   _onClick = () => {
//     const { currentValue } = this.state;
//     console.log("currentValue Class Component :", currentValue);
//   }

//   _onChange = (event) => {
//     this.setState({ currentValue: event.target.value });
//   }

//   render() {
//     return (
//       <Fragment>
//         <input onChange={this._onChange} />
//         <button onClick={this._onClick}>Search</button>
//       </Fragment>
//     );
//   }
// }

export default SearchBar;

//ocClick=onClick() fonksiyonu tetiklenmeden gönderilmesi görekiyor, 
//onClick onClick fonk parametre göndermek için ()=> kullanarak gönderilmeli