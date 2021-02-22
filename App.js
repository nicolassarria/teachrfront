import * as React from 'react';
import {
  Text, 
  View,
  SafeAreaView,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image, } from 'react-native';

import Carousel from 'react-native-snap-carousel';


export default class App extends React.Component {



    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: [
          {
              title:"Frédérique Trudeau",
              text: "Professeur de Chimie",
              form: "Université Paris Dauphine",
              descr:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis ipsum id eros porta cursus. Pellentesque congue risus at nisi."
          },
          {
              title:"Noelle Tachel",
              text: "Professeur de Chimie",
              form: "Université Paris Sorbonne",
              descr:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis ipsum id eros porta cursus. Pellentesque congue risus at nisi."
          },
          {
              title:"Laure Sabourin",
              text: "Professeur de Chimie",
              form: "Hardvard",
              descr:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis ipsum id eros porta cursus. Pellentesque congue risus at nisi."
          },
          {
              title:"Malika Muhjah Amari",
              text: "Professeur de Chimie",
              form: "École ETNA alternance",
              descr:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis ipsum id eros porta cursus. Pellentesque congue risus at nisi."
          },
          {
              title:"Jasim Jaul Gaber",
              text: "Professeur de Chimie",
              form: "Institut d'études politiques de Paris",
              descr:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis ipsum id eros porta cursus. Pellentesque congue risus at nisi."
          },
          {
              title:"Alan Corona Campos",
              text: "Professeur de Chimie",
              form: "Université PSL",
              descr:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis ipsum id eros porta cursus. Pellentesque congue risus at nisi."
          },
          { 
              title:"Alin Hernández Briones",
              text: "Professeur de Chimie",
              form: "École Normale Supérieure",
              descr:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis ipsum id eros porta cursus. Pellentesque congue risus at nisi."
          },
          { 
              title:"Kazimiera Kowalska",
              text: "Professeur de Chimie",
              form: "The American University of Paris",
              descr:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis ipsum id eros porta cursus. Pellentesque congue risus at nisi."
          },
          { 
              title:"Nicoas Sarria",
              text: "Professeur de Chimie",
              form: "EPITECH",
              descr:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis ipsum id eros porta cursus. Pellentesque congue risus at nisi."
          },
          ],
 
        }   
  }
    _renderItem({item,index}){
        return (
          <View style={{
              backgroundColor:'white',
              borderRadius: 5,
              borderColor: 'black',
              height: 450,
              padding: 50,
              marginBottom: 100,
              marginLeft: 15,
              marginRight: 25,
              padding:20,
              shadowColor: "#000000",
              shadowOpacity: 0.8,
              shadowRadius: 2,
              shadowOffset: {
                height: 1,
                width: 1 } }}>
                  <Image
                  source={require('./assets/professeur.png')}
                  style={{ width: 60, height: 60, borderRadius: 35,marginLeft: 80, }}
                  />
            <Text style={{
              fontSize: 25,
              }}>{item.title}</Text>
            <Text style={{
              fontSize: 15,
              }}>{item.text}</Text>
           
           <Text style={{
              fontSize: 15,
              color: 'grey'
              }}>{"\n"}Formation</Text>
              <Text style={{
              fontSize: 15,
              }}>{item.form}</Text>
           <Text style={{
              fontSize: 15,
              color: 'grey'
              }}>{"\n"}Description</Text>
              <Text style={{
              fontSize: 15,
              }}>{item.descr}</Text>
            <TouchableOpacity style={styles.container}>
              <Text style={styles.loginText}>Prendre un cours avec ce Teach'r</Text>
            </TouchableOpacity> 
             
             <TouchableOpacity style={styles2.container}>
        
                
                <Text style={styles2.loginText}>Retirer ce Teach'r de mes favoris</Text>
              </TouchableOpacity> 
        
            
          </View>

        )
    }
  


    render() {
      return (
       
        <SafeAreaView style={{flex: 1, backgroundColor:'white', }}>
           <View style={{ 
          flex:1,
          backgroundColor:'white',
        }}>
          <View style={{ 
          flex:0.5,
          backgroundColor:'grey',
          marginBottom: 60,
        }}>
          <View style={{ 
          flex:1,
          backgroundColor:'#0687D6',}}>
            <Image
                  source={require('./assets/back.png')}
                  style={{ width: 40, height: 40,marginLeft: 15,marginTop:80}}
                  />
               <Text style={styles3.loginText}>Teach'rs favoris</Text>
              
          </View>
        </View>
          <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
              <Carousel
                layout={"default"}
                // ref={ref => this.carousel = ref}
                data={this.state.carouselItems}
                sliderWidth={300}
                itemWidth={300}
                renderItem={this._renderItem}
                onSnapToItem = { index => this.setState({activeIndex:index}) } />
          </View>
          </View>
        </SafeAreaView>
        
        
      );
  }
}

const styles = StyleSheet.create({
  container: {
    marginRight:5,
    marginLeft:5,
    marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#0687D6',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#0687D6',
    fontSize: 5,
    color:'#fff',
    textAlign:'center',
    paddingLeft : 10,
    paddingRight : 10
  },
  loginText: {
    fontSize: 10,
    color: 'white',
    textAlign: "center"
  }
  
});

const styles2 = StyleSheet.create({
  container: {
    marginRight:5,
    marginLeft:5,
    marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'white',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#FF5733',
    fontSize: 5,
    color:'#FF5733',
    textAlign:'center',
    paddingLeft : 10,
    paddingRight : 10
  },
  loginText: {
    fontSize: 10,
    color: '#FF5733',
    textAlign: "center"
  }
  
});

const styles3 = StyleSheet.create({
  container: {
    marginRight:5,
    marginLeft:5,
    marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'white',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#FF5733',
    fontSize: 5,
    color:'#FF5733',
    textAlign:'center',
    paddingLeft : 10,
    paddingRight : 10
  },
  loginText: {
    fontSize: 40,
    color: 'white',
    textAlign: "left",
    marginTop:50,
    marginLeft:15,
  }
  
});