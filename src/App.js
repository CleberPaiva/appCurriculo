import React from 'react';
import { StyleSheet, View, Image, Text, SafeAreaView, Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import foto from './assets/img/cleber.jpg';

const App = () => {

  function handleRedeSocial(rede_social){

    switch(rede_social){

      case 'linkedin':
        Alert.alert('Meu Linkedin', 'https://www.linkedin.com/in/cl%C3%A9ber-paiva-48988016a/')
      break
      case 'github':
        Alert.alert('Meu Github', 'https://github.com/CleberPaiva')
      break  
      case 'facebook':
        Alert.alert('Meu Facebook', 'https://www.facebook.com/cleber.paiva72')
      break  

    }
  }

  return (
    <>
      <View style={style.page}>
        <View style={style.container_cabecalho}>
           <Image style={style.foto} source={foto} /> 
           <Text style={style.nome}>Cleber Paiva</Text>
           <Text style={style.funcao}>Desenvolvedor Mobile e Front-End</Text>
           <View style={style.redes_sociais}>
             <TouchableOpacity onPress={() => handleRedeSocial('github')}>
                <Icon name="github" size={30} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleRedeSocial('facebook')}>
                  <Icon name="facebook" size={30} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleRedeSocial('linkedin')}>
                 <Icon name="linkedin" size={30} />
             </TouchableOpacity>
           </View>
        </View>
        <View style={style.card}>
          <View style={style.card_header}>
            <Text style={style.card_header_text}>Tecnologias</Text>
          </View>
          <View style={style.card_content}>
            <Text style={style.card_content_text}>HTML e CSS</Text>
            <Text style={style.card_content_text}>Javascript e Python</Text>
            <Text style={style.card_content_text}>React-native</Text>
          </View>
        </View>
        <View style={style.card}>
          <View style={style.card_header}>
            <Text style={style.card_header_text}>Forma????o Acad??mica</Text>
          </View>
          <View style={style.card_content}>
            <Text style={style.card_content_text}>MBA Engenharia de Software</Text>
            <Text style={style.card_content_text}>MBA Big Data</Text>
            <Text style={style.card_content_text}>Engenharia de Software</Text>
            <Text style={style.card_content_text}>Analise de Sistemas</Text>
          </View>
        </View>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  page: {
    backgroundColor: '#E7E7E7',
    flex: 1,
    alignItems: 'center',
  },
  container_cabecalho: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  foto: {
    width: 250,
    height: 250,
    borderRadius: 125,
  },
  nome: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 15,
  },
  funcao: {
    fontSize: 20,
    color: '#939393',
    marginBottom: 10,
  },
  redes_sociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width:'40%',
    marginTop: 20,
  },
  card: {
    width:'80%',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#939393',
    marginTop: 20,
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  card_content: {
    marginTop: 10,
  },
  card_content_text: {
    marginBottom: 10,
  },
  card_header_text: {
    fontSize: 18,
    fontWeight: 'bold',
  }

})

export default App;