import React, { Component } from "react";
import Axios from "axios";

class HttpGet1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      posts: [],
      array: [],
      count: [],
      arr: [],
      errorMsg: "",
    };
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    Axios.get("https://pokeapi.co/api/v2/gender/3/")
      .then((res) => {
        console.log(res.data.pokemon_species_details);
        this.setState({ posts: res.data.pokemon_species_details });
        this.setState({ arr: res.data.pokemon_species_details });
        // this.setState({search:res.target.value})
      })
      .catch((errors) => {
        console.log(errors);
        this.setState({ errorMsg: "Error Retreiving data" });
      });
  }
  onChange(e) {
    this.setState({ search: e.target.value }, () => {
      this.setState({
        posts: this.state.arr.filter((data) =>
          data.pokemon_species.name.startsWith(this.state.search)
        ),
      });
    });
  }
  // PostSearch(items){
  //     console.log(items)
  // }
  render() {
    let { posts, search } = this.state;
    return (
      <div>
        <h1>Pokeman</h1>
        <form>
          <input type="text" onChange={this.onChange} />
        </form>
        {posts.map((data, idx) => (
          <p key={idx}>{data.pokemon_species.name}</p>
        ))}
      </div>
    );
  }
}

export default HttpGet1;
