import React from 'react';
import { NavLink } from 'react-router-dom';

import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";

const navLinks = [
  {
    path: '/',
    class: 'nav-link',
    text: 'Global statistics',
  },

  {
    path: 'statistics-by-country',
    class: 'nav-link',
    text: 'Statistics by country',
  },

  {
    path: 'about',
    class: 'nav-link',
    text: 'About',
  },
];

export const Navigation = ()  => {

  return (
    <List>
      {
        navLinks.map((navLink: any) => (
          <ListItem button key={navLink.path}>
            <NavLink
              to={navLink.path}
              className={navLink.class}
            >
              {navLink.text}
            </NavLink>
          </ListItem>
        ))
      }
    </List>
  );
}
