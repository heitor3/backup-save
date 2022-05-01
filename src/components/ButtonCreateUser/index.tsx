import React from "react";
import { Image, ImageProps, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";

type Props = TouchableOpacityProps & ImageProps & {
  source?: any;
}
export function ButtonCreateUser({ source, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container}
      {...rest}
    >
      <Image
        {...rest}
        source={source}
        style={styles.image}
      />
    </TouchableOpacity>
  );
}