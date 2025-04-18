import React from 'react';
import classes from '../css/Header.module.css';
import { Link } from 'react-router-dom'


export const Header:React.FC = () => {
  return (
    <header className={classes.header}>
      <ul>
        <li><Link to="/">Blog</Link></li>
        <li><Link to="/contact">お問い合わせ</Link></li>
      </ul>
    </header>
  );
}
