import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import AppModal from "./appmodal";
import ViewApp from "./movieappview";
import SearchApp from "./searchapp";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card: [
        {
          img:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQxODYzNTQzOV5BMl5BanBnXkFtZTgwMTI2MDYwMDE@._V1_SX300.jpg",
          title: "Peaky Blinders",
          rate: "https://forja.tn/stars/stars-3.png"
        },
        {
          img:
            "https://upload.wikimedia.org/wikipedia/en/thumb/b/b8/Spider-Man_Into_the_Spider-Verse_%282018_poster%29.png/220px-Spider-Man_Into_the_Spider-Verse_%282018_poster%29.png",
          title: "Peaky Blinders",
          rate: "3"
        },
        {
          img:
            "https://m.media-amazon.com/images/M/MV5BOTM3NzE5OTE1Nl5BMl5BanBnXkFtZTgwNzQwNjM3NjM@._V1_SX300.jpg",
          title: "Bumblebee",
          rate: "2"
        },
        {
          img:
            "https://m.media-amazon.com/images/M/MV5BNzY1MDA2OTQ0N15BMl5BanBnXkFtZTgwMTkzNjU2NTM@._V1_SX300.jpg",
          title: "Mortal Engines",
          rate: "3"
        },
        {
          img:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5MTkzNTY5Ml5BMl5BanBnXkFtZTgwNjU4MzY1MTI@._V1_SX300.jpg",
          title: "Twin Peaks",
          rate: "5"
        },
        {
          img:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM3ODMyMjc3MV5BMl5BanBnXkFtZTgwNDgzNDc5NzE@._V1_SX300.jpg",
          title: "House of Cards",
          rate: "4"
        },
        {
          img:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQxODYzNTQzOV5BMl5BanBnXkFtZTgwMTI2MDYwMDE@._V1_SX300.jpg",
          title: "Peaky Blinders",
          rate: "3"
        },
        {
          img:
            "https://upload.wikimedia.org/wikipedia/en/thumb/b/b8/Spider-Man_Into_the_Spider-Verse_%282018_poster%29.png/220px-Spider-Man_Into_the_Spider-Verse_%282018_poster%29.png",
          title: "Peaky Blinders",
          rate: "3"
        },
        {
          img:
            "https://m.media-amazon.com/images/M/MV5BOTM3NzE5OTE1Nl5BMl5BanBnXkFtZTgwNzQwNjM3NjM@._V1_SX300.jpg",
          title: "Bumblebee",
          rate: "2"
        },
        {
          img:
            "https://m.media-amazon.com/images/M/MV5BNzY1MDA2OTQ0N15BMl5BanBnXkFtZTgwMTkzNjU2NTM@._V1_SX300.jpg",
          title: "Mortal Engines",
          rate: "3"
        },
        {
          img:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5MTkzNTY5Ml5BMl5BanBnXkFtZTgwNjU4MzY1MTI@._V1_SX300.jpg",
          title: "Twin Peaks",
          rate: "5"
        },
        {
          img:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM3ODMyMjc3MV5BMl5BanBnXkFtZTgwNDgzNDc5NzE@._V1_SX300.jpg",
          title: "House of Cards",
          rate: "4"
        }
      ],
      InputSearch: "",
      MinRate: ""
    };
  }
  HandelInputSearch = event => {
    this.setState({
      InputSearch: event.target.value
    });
    console.log(this.state.InputSearch);
  };

  addMovie = movie => {
    this.setState({
      card: this.state.card.concat(movie)
    });
    console.log(this.state.card);
  };
  GetIndexRate = IndexRate => {
    this.setState({
      MinRate: IndexRate
    });
  };

  render() {
    return (
      <div className="App">
        <SearchApp
          HandelInputSearch={this.HandelInputSearch}
          minrate={this.GetIndexRate}
          nbrerate={this.state.MinRate}
        />
        <ViewApp
          card={this.state.card.filter(
            el =>
              el.title
                .toLowerCase()
                .includes(this.state.InputSearch.toLowerCase()) &&
              el.rate >= this.state.MinRate
          )}
        />
        <AppModal addMovie={this.addMovie} />
      </div>
    );
  }
}

export default App;
