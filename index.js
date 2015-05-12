"use strict";

const Main = React.createClass({
  
  render: function() {
    let Jumbotron = ReactBootstrap.Jumbotron;
    let Button = ReactBootstrap.Button;
    return (<div>
                <Navigation/>
                <Jumbotron style={{textAlign:'center'}}>
                        <h1>Under Construction</h1>
                        <p>This is the start of the new Gattaca Limited website.</p>
                        <p><Button bsStyle='primary'>Learn more</Button></p>
                </Jumbotron>
            </div>);
  }
});

React.render(
  React.createElement(Main, null),
  document.getElementById('content')
);