import React, { useEffect } from "react";
import { Image, Modal, Text, TouchableOpacity, View } from "react-native";
import File from "../../helpers/File";

export default function ImagePickerModal(props) {  
  useEffect(async () => { await File.requestPermission(); }, []);

  const pickImage = async (mode) => {
    let result = null;
    switch (mode) {
      case "camera":
        result = await File.getFromCamera();
        break;
      case "media":
        result = await File.getFromGallery();
        break;
    }
    // console.log(result);
    if (!result.canceled) {
      console.log(result);
      //let new_uri = result.assets[0].uri;
      // let new_uri = await File.save(result.uri);
      let new_uri = await File.save(result.assets[0].uri);
      props.setImage(new_uri);
    }
  };

  return (
    <Modal transparent={true} visible={props.modalVisible} onRequestClose={() => {props.setModalVisible(false); }} >
      <TouchableOpacity 
        style={{ flex: 1, justifyContent: "center", backgroundColor: "rgba(0,0,0,0.5)", }}
        onPress={() => { props.setModalVisible(false); }}
      >
        <View style={{ margin: 20, backgroundColor: "white", padding: 15 }}>
          <TouchableOpacity style={{ padding: 15 }} onPress={() => { setTimeout(async function(){  await pickImage("camera"); }, 100); props.setModalVisible(false); }} >
            <Text> Take Photo ...</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ padding: 15 }} onPress={() => { setTimeout(async function(){  await pickImage("media"); }, 100); props.setModalVisible(false); }} >
            <Text> Pick from gallery ...</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ padding: 15 }} onPress={() => {props.setModalVisible(false); }} >
            <Text>Remove Photo</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}
