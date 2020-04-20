const testData = [
	  {name: "Navneet", avatar_url: "https://avatars3.githubusercontent.com/u/8266931?v=4", company: "NavWorks"},
      {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
  	 {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
	];

//api.github.com/users/navspeak

const CardList = (props) => (
  <div>
    <Card />
    <Card />
    <Card />
  </div>
);

class Card extends React.Component {
  render(){
    //const profile = testData[0];
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


class App extends React.Component {
  render(){
    return (
        <div>
        <div className="header" >{this.props.title}</div>
        <CardList />
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