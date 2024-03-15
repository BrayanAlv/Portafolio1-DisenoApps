import React, {useState, useEffect} from 'react'; // Importar React junto con useState y useEffect
import {StyleSheet, View, Text, ActivityIndicator} from 'react-native';

const url = "https://api.coindesk.com/v1/bpi/currentprice.json";

// Definición del componente funcional ApiBTC
export default function ApiBTC() {
    // Declaración de estados para la respuesta, carga y error
    const [response, setResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // useEffect para realizar la llamada a la API al mostrar el componente
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    setResponse(result); // Actualizar estado con la respuesta
                    setIsLoading(false); // Actualizar estado de carga
                },
                (error) => {
                    setError(error); // Actualizar estado con el error
                    setIsLoading(false); // Asegurarse de actualizar el estado de carga
                }
            );
    }, []); // El array vacío indica que este efecto se ejecuta solo al montar el componente

    // contenido mostrar
    const getContent = () => {
        if (isLoading) {
            // Mostrar indicador de carga si aún está cargando
            return (
                <View style={styles.centerContent}>
                    <Text style={styles.textSize}>Cargando datos...</Text>
                    <ActivityIndicator size='large' />
                </View>
            );
        }
        if (error) {
            // Mostrar mensaje de error si existe uno
            return <Text>Error al cargar los datos: {error.message}</Text>;
        }

        const rate = response?.bpi?.USD?.rate;
        return (
            <View style={styles.centerContent}>
                <Text style={styles.textSize}>BTC a USD | tasa: ${rate}</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            {getContent()} // Llamar a getContent para determinar qué mostrar
        </View>
    );
}

// Estilos para el componente
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', // Centrar contenido verticalmente
        alignItems: 'center', // Centrar contenido horizontalmente
    },
    centerContent: {
        alignItems: 'center', // Centrar contenido horizontalmente
    },
    textSize: {
        fontSize: 20, 
    },
});




