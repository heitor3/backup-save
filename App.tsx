import React from 'react';


import { Home } from './src/screens/Home';
import { SignIn } from './src/screens/SignIn';
import { Search } from './src/screens/Search';
import { Welcome } from './src/screens/Welcome';
import { CreateUser } from './src/screens/CreateUser';
import { CreateOng } from './src/screens/CreateOng';
import { CreatePet } from './src/screens/CreatePet';
import { StatusBar, Text } from 'react-native';
import { Routes } from './src/routes';
import { DetailsPet } from './src/screens/DetailsPet';

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      
      <CreatePet />
      {/* <Routes /> */}
      {/* terminar a navegação apos criar as telas finais */}
    </>
  );
}