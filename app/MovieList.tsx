import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, useEffect } from 'react';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import { Movie } from '@/models/Movie';
import AsyncStorage from '@react-native-async-storage/async-storage';


const MovieList = () => {
    const route = useRoute();
    let { movies } = route.params;
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    const ImageButton = ({ imageSource, onPress }) => {
        return (
            <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
                <Image source={imageSource} style={styles.buttonImage} />
            </TouchableOpacity>
        );
    };

    function handlePress(id: Key) {
        const selectedObject = movies.find((movie: { id: Key; }) => movie.id === id);
        navigation.navigate('MovieDetail', { selectedMovie: movies.find((movie: { id: Key; }) => movie.id === id) });
    };

    async function addToFav(movie: { id: Key | null | undefined; poster_path: string; original_title: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; release_date: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; vote_average: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }) {
        try {
            await AsyncStorage.setItem('FavMovies', JSON.stringify(movie));
            console.log('Data saved successfully!');
        } catch (e) {
            console.error('Error saving data:', e);
        }
    };

    return (
        <><View>
            <ScrollView style={styles.scrollViewContent} showsVerticalScrollIndicator={false}>
                {movies.map((movie: { id: Key | null | undefined; poster_path: string; original_title: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; release_date: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; vote_average: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }) => (
                    <TouchableOpacity onPress={() => handlePress(movie.id ?? '0')} key={movie.id}>
                        <View key={movie.id} style={styles.movieList}>
                            <Image source={{ uri: 'https://image.tmdb.org/t/p/w185' + movie.poster_path }} style={styles.posterImage} />
                            <View style={styles.movieDetails}>
                                <Text style={styles.movieTitle}>{movie.original_title}</Text>
                                <Text style={styles.releaseDate}>{movie.release_date}</Text>
                                <Text style={styles.voteAverage}>{movie.vote_average}</Text>
                            </View>
                            <ImageButton
                                imageSource={require('./assets/fav_icon.png')}
                                onPress={() => addToFav(movie)}
                            />
                        </View>
                    </TouchableOpacity>
                ))}

            </ScrollView>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    imageButtonContainer: {
        alignItems: 'flex-end',
        flexDirection: 'row'
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: 'clear',
        borderRadius: 5,
    },
    buttonImage: {
        width: 24, 
        height: 24,
        marginRight: 8,
    },
    buttonText: {
        fontSize: 16,
        color: '#333333',
    },
    container: {
        marginTop: 20
    },
    link: {
        marginTop: 15,
        paddingVertical: 15,
    },
    scrollViewContent: {
        marginTop: 5,
        marginBottom: 20
    },
    movieList: {
        flexDirection: 'row',
        padding: 20,
        borderWidth: 0.5,
        borderColor: 'gray',
        borderRightWidth: 0,
        borderLeftWidth: 0
    },
    movieDetails: {
        flexDirection: 'column',
        padding: 5,
        paddingBottom: 5
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 8,
        marginRight: 10,
        color: 'white'
    },
    popularText: {
        fontSize: 28,
        marginTop: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    topRatedText: {
        fontSize: 28,
        marginTop: 5,
        color: 'white',
        fontWeight: 'bold',
    },
    movieTitle: {
        fontSize: 20,
        marginLeft: 11,
        marginTop: 2,
        color: 'white',
        fontWeight: 'bold',
    },
    releaseDate: {
        fontSize: 15,
        marginLeft: 11,
        marginTop: 2,
        color: 'white',
        fontWeight: 'medium',
    },
    voteAverage: {
        fontSize: 15,
        marginLeft: 11,
        marginTop: 2,
        color: 'white',
        fontWeight: 'medium',
    },
    posterImage: {
        width: 120,
        height: 100,
        padding: 1,
        borderRadius: 8,
    },
    latestImage: {
        width: 170,
        height: 100,
        marginHorizontal: 5,
        borderRadius: 8,
        marginBottom: 60
    }
});

export default MovieList
