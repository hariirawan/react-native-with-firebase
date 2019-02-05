import React, { Component } from 'react';
import { Text, View, Platform, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconKos from '../../../assets/icon/icon_ngekos.png';

import { styles } from './HomeNavigation.style';

export default class HomeNavigation extends Component {
  render() {
    return (
        <View style={styles.containerNav}>
            <View
              style={{
                marginTop: Platform.OS === 'android' ? 10 : null,
                marginHorizontal: 20
              }}
            >
              <View style={{display:'flex', flexDirection:'row', alignItems:'center', marginBottom:10}}>
                <View style={styles.sectionLogo}>
                  <Image 
                    source={IconKos} 
                    style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}/>
                </View>
                <View style={{flex:1}}>
                  <View style={styles.sectionTitle}>
                    <Text style={{ color: '#ffffff', fontSize: 20, flex: 1 }}>
                      NGEKOS
                    </Text>
                    <Icon
                      name="bell"
                      size={18}
                      color="#ffffff"
                      style={{ marginRight: 15 }}
                      />
                    <Icon name="alert-circle-outline" size={18} color="#ffffff" />
                  </View>
                  <View>
                    <Text style={{ color: '#ffffff', fontSize: 12 }}>
                      Selamat Sore Hari Irawan
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
    )
  }
}
