import { useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator, FlatList } from "react-native";

// URL de donde se obtendrán los datos de las publicaciones
const url = "https://jsonplaceholder.typicode.com/posts";

export default function post() {
    // Estados para almacenar los datos, el estado de carga y los errores
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // useEffect para realizar la petición fetch apenas se monta el componente
    useEffect(() => {
        fetch(url)
            .then(response => response.json()) // Convertir la respuesta en JSON
            .then(result => {
                setIsLoading(false); // Detener la carga al obtener los resultados
                setData(result); // Almacenar los datos obtenidos
            }, error => {
                setIsLoading(false); // Detener la carga en caso de error
                setError(error); // Almacenar el error
            });
    }, []); // Lista de dependencias vacía significa que esto se ejecuta solo al montar el componente

    const getContent = () => {
        if (isLoading) {
            return (
                <View>
                    <Text style={styles.textProps}>Cargando datos...</Text>
                    <ActivityIndicator size="large" color="green" />
                </View>
            );
        }
        if (error) {
            return <Text>Ocurrió un error: {error.toString()}</Text>; 
        }
        return (
            <FlatList
                showsVerticalScrollIndicator={false}
                data={data}
                keyExtractor={(item) => item.id.toString()} 
                renderItem={({item}) => (
                    <View style={styles.postContainer}>
                        <Text style={styles.postTitle}>{item.title}</Text>
                    </View>
                )}
            />
        );
    };

    // Renderizar el contenido en el componente
    return (
        <View style={styles.container}>
            {getContent()}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
    },
    textProps: {
        fontSize: 34, 
    },
    postContainer: {
        marginVertical: 8, 
    },
    postTitle: {
        fontSize: 18, 
    },
});
