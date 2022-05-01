import React from "react";
import { View, Image, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import Icon  from "react-native-vector-icons/Entypo";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";


type Props = TouchableOpacityProps & {
    name: string;
    city: string;
    uf: string;
    uri: string;

}

export function ListItem({ name, city, uf, uri, ...rest }: Props) {
    return (
        <TouchableOpacity
            style={styles.container}
            {...rest}
            activeOpacity={0.7}
        >
            <View>
                <Image
                    source={{ uri }}
                    style={styles.imgPet}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.content}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.city}>{city + " - " + uf}</Text>
            </View>
            <View>
                <Icon
                    name="chevron-thin-right"
                    color={theme.colors.textColorWhite}
                    size={16}
                />
            </View>

        </TouchableOpacity>
    );
}