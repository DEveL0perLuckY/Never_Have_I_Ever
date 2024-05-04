import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

const CustomHeader = ({ onPress }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingTop: 20 }}>
      <TouchableOpacity onPress={onPress}>
        <FontAwesomeIcon icon={faCog} size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default CustomHeader;
