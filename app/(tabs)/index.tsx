import React, { useEffect, useState } from 'react';
import { ScrollView, Text, Image, Dimensions, StyleSheet, View, ActivityIndicator, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import {getPopularMovies, searchMovies} from '../../services/MovieService';
import {Movie} from '../../models/Movie';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const [popularMovies, setPopularMovies] = useState([Movie]);
  const [topRatedMovies, setTopRatedMovies] = useState([Movie]);
  const [movieSearchResults, setMovieSearchResults] = useState([Movie]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchText, setSearchText] = useState('');
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();


  useEffect(() => {
    fetchPopularMovies();
    fetchTopRatedMovies();
  }, []);

  //Handle movie search
  const handleSearch = () => {
         searchMovies(searchText).then(data => {
          setMovieSearchResults(data.results);
            navigation.navigate('MovieList', { movies: data.results});
        }) ;
  };

  //To get popular movies list
 async function fetchPopularMovies() {
        getPopularMovies().then(data => {
          setIsLoading(false);
          setPopularMovies(data.results);
        }) ;
  }

  //To Top rated movies list
  async function fetchTopRatedMovies() {
        getPopularMovies().then(data => {
          setIsLoading(false);
          setTopRatedMovies(data.results);
        }) ;
  }

  //Show loader while api calls in progress
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading data...</Text>
      </View>
    );
  }

  //Show error
  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  if (!isLoading) {
    return (
      <><View>
        <ScrollView style={styles.scrollViewContent} showsVerticalScrollIndicator={false}>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.input}
              placeholder="Search..."
              value={searchText}
              onChangeText={text => setSearchText(text)}
            />
            <Button title="Search" onPress={handleSearch} />
          </View>
          <Text style={styles.popularText}>Popular</Text>
          <ScrollView horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollViewContent}>

            {popularMovies.map((item) => (
              <View key={item.id}>
                <Image source={{ uri: 'https://image.tmdb.org/t/p/w185' + item.poster_path }} style={styles.posterImage} />
                <Text style={styles.movieTitle}>{item.original_title}</Text>
                <Text style={styles.releaseDate}>{item.release_date}</Text>
                <Text style={styles.voteAverage}>{item.vote_average}</Text>
              </View>

            ))}
          </ScrollView>
          <Text style={styles.topRatedText}>Top Rated</Text>
          <ScrollView horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollViewContent}>

            {topRatedMovies.map((item) => (
              <View key={item.id}>
                <Image source={{ uri: 'https://image.tmdb.org/t/p/w185' + item.poster_path }} style={styles.latestImage} />
              </View>

            ))}
          </ScrollView>

        </ScrollView>
      </View>
      </>

    );
  }
}

const styles = StyleSheet.create({
  searchContainer: {
    marginTop: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1, // Allows the TextInput to take up available space
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
    marginRight: 10,
    color: 'black'
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
    marginTop: 10
  },
  popularText: {
    fontSize: 28,
    marginTop: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  topRatedText: {
    fontSize: 28,
    marginTop: 5,
    color: 'black',
    fontWeight: 'bold',
  },
  movieTitle: {
    fontSize: 20,
    marginLeft: 11,
    marginTop: 2,
    color: 'black',
    fontWeight: 'bold',
  },
  releaseDate: {
    fontSize: 15,
    marginLeft: 11,
    marginTop: 2,
    color: 'black',
    fontWeight: 'medium',
  },
  voteAverage: {
    fontSize: 15,
    marginLeft: 11,
    marginTop: 2,
    color: 'black',
    fontWeight: 'medium',
  },
  scrollViewContent: {
    marginTop: 5,
    marginBottom: 20
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