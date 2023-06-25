import React from 'react';

//desktop
import curiosity from '../images/desktop/image-curiosity.jpg';
import earth from '../images/desktop/image-deep-earth.jpg';
import fisheye from '../images/desktop/image-fisheye.jpg';
import above from '../images/desktop/image-from-above.jpg';
import grid from '../images/desktop/image-grid.jpg';
import hero from '../images/desktop/image-hero.jpg';
import interactive from '../images/desktop/image-interactive.jpg';
import nightArcade from '../images/desktop/image-night-arcade.jpg';
import borealis from '../images/desktop/image-pocket-borealis.jpg';
import soccer from '../images/desktop/image-soccer-team.jpg';
//Mobile
import mobCuriosity from '../images/mobile/image-curiosity.jpg';
import mobEarth from '../images/mobile/image-deep-earth.jpg';
import mobFisheye from '../images/mobile/image-fisheye.jpg';
import mobAbove from '../images/mobile/image-from-above.jpg';
import mobGrid from '../images/mobile/image-grid.jpg';
import mobHero from '../images/mobile/image-hero.jpg';
import mobInteractive from '../images/mobile/image-interactive.jpg';
import mobNightArcade from '../images/mobile/image-night-arcade.jpg';
import mobBorealis from '../images/mobile/image-pocket-borealis.jpg';
import mobSoccer from '../images/mobile/image-soccer-team.jpg';
//icons
import close from '../images/icon-close.svg';
import facebook from '../images/icon-facebook.svg';
import hamburger from '../images/icon-hamburger.svg';
import instagram from '../images/icon-instagram.svg';
import pinterest from '../images/icon-pinterest.svg';
import twitter from '../images/icon-twitter.svg';
import logo from '../images/logo.svg';

const deskImages = {
  curiosity:curiosity,
  earth:earth,
  fisheye:fisheye,
  above:above,
  grid:grid,
  hero:hero,
  interactive:interactive,
  nightArcade:nightArcade,
  borealis:borealis,
  soccer:soccer,
}

const mobImages = {
  curiosity:mobCuriosity,
  earth:mobEarth,
  fisheye:mobFisheye,
  above:mobAbove,
  grid:mobGrid,
  hero:mobHero,
  interactive:mobInteractive,
  nightArcade:mobNightArcade,
  borealis:mobBorealis,
  soccer:mobSoccer,
}

const icons = {
  close:close,
  facebook:facebook,
  hamburger:hamburger,
  instagram:instagram,
  pinterest:pinterest,
  twitter:twitter,
  logo:logo,
}

const Image = (props) => {
    const {name, classes, type} = props;
  return (
    <img src={type === 'mobile'? mobImages[name] : type === 'icon' ? icons[name] : deskImages[name]} className={classes} alt="selected img" />
  )
}

export default Image;