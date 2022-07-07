import React from 'react';
import {  Link, useResolvedPath, useMatch } from "react-router-dom";

export default function NavBar () {
  return (
    <div>
        <nav className='nav'>
            <ul>
              <li>
                <Link to="/"> Page d'accueil </Link>
              </li>
                <CustomLink to="/Connexion"> Connexion </CustomLink>
            </ul>
        </nav>
    </div>
  );
}

// Function not the main page to be refreshed once clicking on a link

function CustomLink({to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true})

  return (
    <li className={ isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}