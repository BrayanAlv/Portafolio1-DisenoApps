import { useState, useEffect} from "react";
import { flushSync } from "react-dom";
import { Text, View, ActivityIndicator, Image } from "react-native-web";

const url = "https://pokeapi.deno.dev/pokemon";

export default function PokeDex() {

    const [data, setData] =useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch() 
            .then(response => response.jsont)
            .then(result => {
                setIsLoading(false);
                setData(result);
            }, error => {
                setIsLoading(false);
                setError(error);
            })
    }, []);
    return(
        <View>
            <Text>Loading data ...</Text>
            <ActivityIndicator size="large"></ActivityIndicator>
        </View>
    );
}


const styles = StyleSheet.create({
    textProps: {
        fontSize: 36,
    }
})