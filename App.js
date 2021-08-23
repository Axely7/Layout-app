import React from 'react';
import {StyleSheet,View, Image, Text, ScrollView} from 'react-native';




const App = () =>  {
  return (
    <>
    {/* <View style={styles.contenedor}>
        <View style={styles.caja1}></View>
        <View style={styles.caja2}></View>
        <View style={styles.caja3}></View>
        <View style={styles.caja4}></View>
    </View> */}
    <ScrollView>
        <View style={{flexDirection: 'row'}}>

            <Image 
                style = {styles.banner}
                source={require('./assets/img/bag.jpg')}>
            </Image>
        </View>

        <View style={styles.contenedor}>
          <Text style={styles.titulo}>Qué hacer en Paris</Text>
          <ScrollView horizontal={true}>
            <Image
                    style={styles.ciudad}
                    source={require('./assets/img/actividad1.jpg')}
                ></Image>
            <Image
                  style={styles.ciudad}
                  source={require('./assets/img/actividad2.jpg')}
              ></Image>
            <Image
                  style={styles.ciudad}
                  source={require('./assets/img/actividad3.jpg')}
              ></Image>
            <Image
                  style={styles.ciudad}
                  source={require('./assets/img/actividad4.jpg')}
              ></Image>
            <Image
                  style={styles.ciudad}
                  source={require('./assets/img/actividad5.jpg')}
              ></Image>
           
          </ScrollView>

          <Text style={styles.titulo}>Los mejores alojamientos</Text>
          <View>
            <Image style={styles.mejores}
                source={require('./assets/img/mejores1.jpg')}>
            </Image>
            <Image style={styles.mejores}
                source={require('./assets/img/mejores2.jpg')}>
            </Image>
            <Image style={styles.mejores}
                source={require('./assets/img/mejores3.jpg')}>
            </Image>
          </View>
        </View>

        <Text style={styles.titulo}>Hospedajes en LA</Text>

        <View
          style={styles.listado}>
          <View style={styles.listadoItem}>
            <Image 
                style={styles.mejores}
                source={ require('./assets/img/hospedaje1.jpg')}>

            </Image>
          </View>

          <View style={styles.listadoItem}>
            <Image 
                style={styles.mejores}
                source={ require('./assets/img/hospedaje2.jpg')}>

            </Image>
          </View>

          <View style={styles.listadoItem}>
            <Image 
                style={styles.mejores}
                source={ require('./assets/img/hospedaje3.jpg')}>

            </Image>
          </View>
          <View style={styles.listadoItem}>
            <Image 
                style={styles.mejores}
                source={ require('./assets/img/hospedaje4.jpg')}>

            </Image>
          </View>
          
        </View>
    </ScrollView>
    </>
    
  );
};

const styles = StyleSheet.create({
  // contenedor: {
  //   backgroundColor: 'cornflowerblue',
  //   flex:1, /*Toma todo el espacio disponible en el telefono */
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  //   alignItems: 'center'
  // },
  // caja1:{
  //   padding: 20,
  //   backgroundColor: 'navy',
   
  // },
  // caja2:{
  //   padding: 20,
  //   backgroundColor: 'yellow',
   
  // },
  // caja3:{
  //   padding: 20,
  //   backgroundColor: 'green',
  // },
  // caja4:{
  //   padding: 20,
  //   backgroundColor: 'teal',
  // },
  banner:{
    height: 250,
    flex: 1
  },
  titulo:{
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 20
  },
  contenedor:{
    marginHorizontal: 10
  },
  ciudad:{
    width: 250,
    height: 300,
    marginRight: 10
  },
  mejores:{
    width: '100%',
    height: 200,
    marginVertical: 5
  },
  listado:{
    flexDirection: 'row',
    flexWrap:'wrap',
    justifyContent: 'space-between'
  },
  listadoItem:{
    flexBasis:'50%'
  }

});

export default App;
