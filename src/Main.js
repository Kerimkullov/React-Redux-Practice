import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { Link } from 'react-router-dom';
import { withLocalize, Translate} from 'react-localize-redux';
import LanguageToggle from './LangugageToggle';
import './App.css';
import translations from "./translations.json";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.props.initialize({
      languages: [
        { name: "Eng", code: "en" },
        { name: "Ru", code: "ru" },
        { name: "Tr", code: "tr"}
      ],
      translation: translations,
      options: { renderToStaticMarkup }
    });
  }
  render() {
    return (
    <div className='nav'>
        <li>LogO</li>   
        <Link to='/home' className='link'>
            <Translate id="nav.home">Home</Translate>
        </Link> 
        <Link to='/about' className='link'>
            <Translate id="nav.about">About</Translate>
        </Link>   
        <Link to='/shop' className='link'>
            <Translate id="nav.shop">Shop</Translate>
        </Link>   
        <header>
          <LanguageToggle />
        </header> 
        </div>
    );
  }
}

export default withLocalize(Main);


