import { View, Text } from "react-native-reanimated/lib/typescript/Animated";

import api from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../services/routes";

type SpotListProps ={
    tech: string;
}

interface Spot{
    _id: string;
    company: string;
    price: number | null;
    thumbnail_url: string;
}

export function SpotList({tech}: SpotListProps) {
    return(
        <View>
            <Text> Empresas que usam </Text><Text> Variavel </Text>
        </View>
    )
}