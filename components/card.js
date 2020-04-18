import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Content } from 'native-base';
import { db } from './config'
import {Button, Text, Icon } from 'native-base'
import ToggleSwitch from 'toggle-switch-react-native'

export default function CardImageExample (props) {

  const [text,setext] = React.useState("Open Gate")
  const [togglelight,setogglelight] = React.useState(props.data.light)
  const [toggleAC,setoggleAC] = React.useState(props.data.AC)
  const [toggleDustbin,setoggleDustbin] = React.useState(props.data.Dustbin)

  function change(){
    setext("Gate Opened")
    db.ref('/Door').set({mainDoor : 'opened' })
    setTimeout(function(){setext("Open Gate")}, 1300)
  }

  function updateData(){
    db.ref('/Light').set({togglelight})
    db.ref('/AC').set({toggleAC})
    db.ref('/Dustbin').set({toggleDustbin})
  }

  return (
    <View style={{alignItems: 'center'}}>
      <Content>
        <Button rounded style={styles.button} onPress={change} >
          <Text style={styles.text}> {text} </Text>
        </Button>
      
        <Text>{'\n\n'}</Text>

        <ToggleSwitch
          isOn={togglelight}
          onColor="yellow"
          offColor="grey"
          label="Lights  "
          labelStyle={styles.text}
          size="medium"
          onToggle={ () => { setogglelight(!togglelight) }}
        />

        <Text>{'\n\n'}</Text>

        <ToggleSwitch
          isOn={toggleAC}
          onColor="blue"
          offColor="grey"
          label="   A/C  "
          labelStyle={styles.text}
          size="medium"
          onToggle={ () => { setoggleAC(!toggleAC) }}
        />

        <Text>{'\n\n'}</Text>

        <ToggleSwitch
          isOn={toggleDustbin}
          onColor="green"
          offColor="grey"
          label="Dustbin "
          labelStyle={styles.text}
          size="medium"
          onToggle={ () => { setoggleDustbin(!toggleDustbin) }}
        />

        {updateData()}
      </Content>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    height: 70,
    width: 200,
    backgroundColor: '#00CC99',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
    fontFamily: 'monospace',
  }
});