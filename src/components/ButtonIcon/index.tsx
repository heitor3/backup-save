import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import Icon  from "react-native-vector-icons/FontAwesome";

import { styles } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  name?: any;
  color?: string;
  size?: number;
}

export function ButtonIcon({ title, name, color, size, ...rest }: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      {...rest}
    >
      <Text style={styles.title}>
        {title}
        {" "}
        <Icon
          name={name}
          color={color}
          size={size}
        />
      </Text>
    </TouchableOpacity>
  );
}