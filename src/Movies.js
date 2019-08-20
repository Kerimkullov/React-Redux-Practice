import React from "react";
import { withLocalize, Translate } from "react-localize-redux";
import movieTranslations from "./translations.json";

class Movies extends React.Component {
  constructor(props) {
    super(props);

    this.props.addTranslation(movieTranslations);
  }

  render() {
    return(
       <h1>
    <Translate id="movie.title">Jurassic Park</Translate> <br/>
    <Translate id="movie.text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id quam iste tenetur. Harum, dolorem eum dolor itaque, perspiciatis officiis repellat pariatur perferendis totam iure odit vitae amet atque? Temporibus laborum soluta corrupti maiores eos recusandae atque praesentium excepturi ratione aut.psum dolor, sit amet consectetur adipisicing elit. Sunt velit recusandae dolor laborum placeat laudantium iste veritatis excepturi delectus a fugiat non, quaerat facere consectetur quisquam! Labore excepturi modi consequatur accusamus! Minus, id non veniam atque ad earum architecto iusto.</Translate>
  </h1>
    )
  }
}

export default withLocalize(Movies);