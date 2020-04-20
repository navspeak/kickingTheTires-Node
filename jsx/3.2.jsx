const testData = [
	  {name: "Navneet", avatar_url: "https://avatars3.githubusercontent.com/u/8266931?v=4", company: "NavWorks"},
      {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
  	 {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
	];

//api.github.com/users/navspeak

// const CardList = (props) => (
//     <div>
//       <Card {...testData[0]}/>
//       <Card {...testData[1]}/>
//       <Card {...testData[2]}/>
//     </div>
// );


const CardList = ({profile}) => (
  <div>
    {profile.map(profile => <Card {...profile}/>)}
  </div>
);
// [<Card />, <Card />, <Card />]
// [React.CreateElement(), React.CreateElement(), React.CreateElement()]

class Card extends React.Component {
  render(){
    const profile = this.props;
    return(
        <div className="github-profile" style={{ margin: '5rem',  border: '2px solid black'}}>
          <img src={profile.avatar_url} />
          <div className="info" style={{display: 'inline-block', marginLeft: 20}}>
            <div className="name" style={{fontSize: '125%'}}>{profile.name}</div>
            <div className="company">{profile.company}</div>
          </div>
        </div>
    )
  }
};

class Form extends React.Component {
  userNameInput = React.createRef();
  handleSubmit = (event) => {
      event.preventDefault();
      console.log(this.userNameInput.current.value)
  }
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="GitHub Username"
                 ref={this.userNameInput} required/>
          <button>Add Card</button>
        </form>
    )
  }

}

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     profiles: testData,
  //   }
  // }
  state = {
    profiles: testData,
  }
  render(){
    return (
        <div>
        <div className="header" >{this.props.title}</div>
        <Form />
        <CardList profile={this.state.profiles}/>
        </div>
    );
  }
}

// const App = ({title}) => {
//   <div className="header" >{title}</div>
// };

ReactDOM.render(
    <App title="The Github Card App" />,
    mountNode,
);

//github.com/MichekeBertoli/css-in-js