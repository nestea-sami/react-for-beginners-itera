// import { useState } from 'react';
import { FC } from "react";
import { PureComponent } from "react";
import './App.css';
import data from './biography.json';
import { Footer } from './Footer';


type H1Props = { userName: string }; 
const AppH1: FC<H1Props> = (props) => (
  <h1>Hello, {props.userName}</h1>
);


type H2Props = { text: string }; 
const AppH2: FC<H2Props> = (props) => (
  <h2>{props.text}</h2>
);

type Props = { children: string };
class AppP extends PureComponent<Props> {
  render() {
    return <p>{this.props.children}</p>;
  }
}

const Email = (p: { email: string }) => (
  <a href={`mailto:${p.email}`}>{p.email}</a>
);

const Instagram = (p: { inst: string }) => (
  <a href={p.inst}>{p.inst}</a>
);
class GitHub extends PureComponent<Props> {
  render() {
    return <a href={this.props.children}>{this.props.children}</a>;
  }
}

const App = () => {
  const userInfo = data;
  return (
    <div className="App">
      <AppH1 userName = {userInfo.name} />
      <div className="User">
        <AppH2 text = "About me:" />
        <AppP>{data.name}</AppP>
        <AppP>{data['b-day']}</AppP>
        <AppH2 text = "Contacts:" />
        <ul>
          <li><Email email={userInfo.contacts.email} /></li>
          <li><Instagram inst={userInfo.contacts.instagram} /></li>
          <li><GitHub>{userInfo.contacts.github}</GitHub></li>
        </ul> 
      </div>
      
      <Footer copyright='C'/>
    </div>
  )
}

export default App;
