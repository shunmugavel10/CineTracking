import { Image } from 'expo-image';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Movie } from '@/models/Movie';

function Favorite() {
  const [favMovies, setFavMovies] = useState([Movie]);

  useEffect(() => {
    getFavMovies();
  });

  //Get favorite movies list stored locally
  async function getFavMovies() {
    try {
      const movies = await AsyncStorage.getItem('FavMovies');
      if (movies !== null) {
        setFavMovies(JSON.parse(movies));
      }
    } catch (e) {
      console.error('Error retrieving data:', e);
    }
    return null;
  }

  return (
    <><View>
      <ScrollView style={styles.scrollViewContent} showsVerticalScrollIndicator={false}>
        {favMovies.map((item: { id: Key | null | undefined; poster_path: string; original_title: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; release_date: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; vote_average: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }) => (
          <View key={item.id} style={styles.movieList}>
            <Image source={{ uri: 'https://image.tmdb.org/t/p/w185' + item.poster_path }} style={styles.posterImage} />
            <View style={styles.movieDetails}>
              <Text style={styles.movieTitle}>{item.original_title}</Text>
              <Text style={styles.releaseDate}>{item.release_date}</Text>
              <Text style={styles.voteAverage}>{item.vote_average}</Text>
            </View>
          </View>
        ))}

      </ScrollView>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
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

export default Favorite

