import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { useRoute } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const MovieDetail = () => {

    const route = useRoute();
    let { selectedMovie } = route.params;

    return (
        <><View>
            <View>
                <Image source={{ uri: 'https://image.tmdb.org/t/p/w185' + selectedMovie.poster_path }} style={styles.posterImage} />
                <Text style={styles.movieTitle}>{selectedMovie.original_title}</Text>
                <Text style={styles.releaseDate}>{selectedMovie.release_date}</Text>
                <Text style={styles.voteAverage}>{selectedMovie.vote_average}</Text>
            </View>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
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
        flex: 1, // Allows the TextInput to take up available space
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
        width: width * 1.0,
        height: width * 1.5,
        padding: 2,
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

export default MovieDetail
