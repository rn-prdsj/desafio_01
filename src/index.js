import React, {Component} from 'react';
import {SafeAreaView, ScrollView, Text, StatusBar} from 'react-native';
import Posts from './components/Pos/Posts';
import Header from './components/Hea/Header';
import './config/ReactotronConfig';

export default class App extends Component {
  state = {
    posts: [
      {
        id: 0,
        title: 'React Native',
        autor: 'Pedro Jr',
        description:
          'O React Native combina as melhores partes do desenvolvimento nativo com o React, uma melhor biblioteca JavaScript da classe para criar interfaces de usuário.',
      },
      {
        id: 1,
        title: 'SafeAreaView',
        autor: 'Pedro Jr',
        description:
          'O objetivo do SafeAreaView é renderizar o conteúdo dentro dos limites da área segura de um dispositivo. No momento, é aplicável apenas a dispositivos iOS com iOS versão 11 ou posterior.',
      },
      {
        id: 2,
        title: 'StatusBar',
        autor: 'Pedro Jr',
        description:
          'Componente para controlar a barra de status do aplicativo.',
      },
      {
        id: 3,
        title: 'StyleSheet',
        autor: 'Pedro Jr',
        description:
          'Um StyleSheet é uma abstração semelhante ao CSS StyleSheets',
      },
      {
        id: 4,
        title: 'ScrollView',
        autor: 'Pedro Jr',
        description:
          'Componente que envolve a plataforma ScrollView enquanto fornece integração com o sistema de "resposta" de travamento por toque.',
      },
      {
        id: 5,
        title: 'Text',
        autor: 'Pedro Jr',
        description: 'Um componente React para exibição de texto.',
      },
      {
        id: 6,
        title: 'Header',
        autor: 'Pedro Jr',
        description: 'Componente Header da aplicação.',
      },
      {
        id: 7,
        title: 'Posts',
        autor: 'Pedro Jr',
        description: 'Componente Posts da aplicação',
      },
    ],
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#7a42f4'}}>
        <StatusBar backgroundColor="#7a42f4" barStyle="light-content" />
        <Header />
        <ScrollView>
          {this.state.posts.map(post => (
            <Posts key={post.id} post={post} />
          ))}
        </ScrollView>
        <Text style={{padding: 20, color: '#000', textAlign: 'center'}}>
          © 2019 rn-prdsj.
        </Text>
      </SafeAreaView>
    );
  }
}
