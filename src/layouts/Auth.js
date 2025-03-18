import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import FooterSmall from "components/Footers/FooterSmall.js";

// views

import Login from "views/auth/Login.js";
import forget from "views/auth/forget";
import Register from "views/auth/Register.js";

export default function Auth() {
  return (
    <>
      <Navbar transparent />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage:
                "url('https://us.123rf.com/450wm/bigandt/bigandt1502/bigandt150200175/36057942-close-up-de-gazon-artificiel-de-football-sur-une-journ%C3%A9e-ensoleill%C3%A9e.jpg?ver=6')",
            }}
          ></div>
          <Switch>
          <Route path="/auth/login" exact component={Login} />
          <Route path="/auth/forget" exact component={forget} />
          <Route path="/auth/register" exact component={Register} />
            <Redirect from="/auth" to="/auth/login" />
          </Switch>
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
