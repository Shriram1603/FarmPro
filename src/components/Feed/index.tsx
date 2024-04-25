import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  ActivityIndicator,
  RefreshControl,
  Alert,
} from 'react-native';

const Feed = () => {
  const {height, } = Dimensions.get('window');
  const [newsData, setNewsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const API_KEY = 'b45e2c184943494ab8d988efa8bd1734';
  const endpoint = 'https://newsapi.org/v2/top-headlines';
  const country = 'in';

  async function services(category = 'science') {
    let articles = await fetch(
      `${endpoint}?country=${country}&category=${category}`,
      {
        headers: {
          'X-API-KEY': API_KEY,
        },
      },
    );

    let result = await articles.json();
    articles = null;

    return result.articles;
  }

  const fetchData = async () => {
    try {
      const data = await services('health');
      setNewsData(data);
      console.log(data); // Log the data
      setIsLoading(false);
    } catch (error) {
      Alert.alert(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);

    // Fetch new data here, and update the state when done.
    fetchData().then(() => {
      setRefreshing(false);
    });
  };
  
  return (
    <View style={{height: height, padding: 0, backgroundColor: '#F5F5F5'}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={styles.header}>News Feeds</Text>
      </View>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <FlatList
          data={newsData}
          renderItem={({item}) => (
            <View
              style={{
                marginBottom: 20,
                alignItems: 'center',
                borderRadius: 10,
                borderWidth: 0.3,
                backgroundColor: '#F4F4F4',
              }}>
              {item.urlToImage && (
                <View style={{paddingTop: 10, paddingHorizontal: 5}}>
                  {/* <Text>{item.source.name}</Text> */}
                  <Image
                    source={{uri: item.urlToImage}}
                    style={{height: 200, resizeMode: 'cover'}}
                  />
                  <View style={{marginTop: 5, marginBottom: 5}}>
                    <Text
                      style={{
                        textAlign: 'justify',
                        color: '#171a17',
                        fontSize: 17,
                        fontWeight: 400,
                      }}>
                      {item.title}
                    </Text>
                  </View>
                  <View
                    style={{
                      marginBottom: 5,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={{color: 'grey'}}>{item.source.name}</Text>
                    <Text style={{color: 'grey'}}>
                      {new Date(item.publishedAt).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </Text>
                  </View>
                </View>
              )}
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      )}
    </View>
  );
};

export default Feed;

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
    marginBottom: 10,
    marginRight: 10,
    marginTop: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});