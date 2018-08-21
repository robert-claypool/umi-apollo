import { Component } from 'react';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

export default class MyApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'Loading...',
    };

    const client = new ApolloClient({
      uri: 'https://graphql-pokemon.now.sh',
    });

    client
      .query({
        query: gql`
          {
            pokemon(name: "Pikachu") {
              attacks {
                special {
                  name
                }
              }
            }
          }
        `,
      })
      .then(result => {
        this.setState({
          message: `Pikachu: attack 1 ${
            result.data.pokemon.attacks.special[0].name
          }, attack 2 ${result.data.pokemon.attacks.special[1].name}`,
        });
      });
  }

  render() {
    return (
      <div>
        <h1>Pokémon Data</h1>
        <p>{this.state.message}</p>
      </div>
    );
  }
}
