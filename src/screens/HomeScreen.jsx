import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  Animated,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import MapView from "react-native-maps";
import { Alert } from "react-native";
const Images = [
  { uri: "https://aibaeco.co.jp/a-plan/img/niwa_bg07.jpg" },
  {
    uri: "https://machinekoaruki.up.seesaa.net/image/IMGP8527-b-thumbnail2.jpg",
  },
  {
    uri:
      "https://kitonaru.com/wp-content/uploads/2019/06/E77DED62-5829-4DEC-9D68-CA6B044BD7B5.jpeg",
  },
  {
    uri:
      "http://yoshinostyle.jp/contents/arukikata/files/2018/05/%E7%84%A1%E4%BA%BA%E8%B2%A9%E5%A3%B2-550x400.jpg",
  },
];

const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = height / 4;
const CARD_WIDTH = CARD_HEIGHT - 50;

export default class HomeScreen extends Component {
  state = {
    scrolledX: 0,
    markers: [
      {
        coordinate: {
          latitude: 35.805844934604636,
          longitude: 139.4552292075749,
        },
        title: "久保製作所",
        description: "久保お手製のきゅうり専門",
        image: Images[0],
      },
      {
        coordinate: {
          latitude: 35.7767336743756,
          longitude: 139.40620031240488,
        },
        title: "無人販売＠所沢いち美味い",
        description: "自画自賛なので湖に沈めてみた",
        image: Images[1],
      },
      {
        coordinate: {
          latitude: 35.806392457663286,
          longitude: 139.4198903072799,
        },
        title: "フォーチュン農園",
        description: "フォーチュンってなんやねん",
        image: Images[2],
      },
      {
        coordinate: {
          latitude: 35.80150601975816,
          longitude: 139.49141753259633,
        },
        title: "ニコニコ広場",
        description: "花かいどう吉野ってなんやねん",
        image: Images[3],
      },
    ],
    region: {
      latitude: 35.79956020745804,
      longitude: 139.4687757696602,
      latitudeDelta: 0.01,
      longitudeDelta: 0.040142817690068,
    },
  };
  componentWillMount() {
    this.index = 0;
    this.animation = new Animated.Value(0);
  }
  componentDidMount() {
    // We should detect when scrolling has stopped then animate
    // We should just debounce the event listener here
    this.animation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
      if (index >= this.state.markers.length) {
        index = this.state.markers.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }
      clearTimeout(this.regionTimeout);
      this.regionTimeout = setTimeout(() => {
        if (this.index !== index) {
          this.index = index;
          const { coordinate } = this.state.markers[index];
          this.map.animateToRegion(
            {
              ...coordinate,
              latitudeDelta: this.state.region.latitudeDelta,
              longitudeDelta: this.state.region.longitudeDelta,
            },
            350
          );
        }
      }, 10);
    });
  }
  _renderItem({ item, index }) {
    return (
      <TouchableOpacity
        onPress={() => {
          Alert.alert("個別のページがModal表示予定お");
        }}
      >
        <View style={styles.card} key={index}>
          <Image
            source={item.image}
            style={styles.cardImage}
            resizeMode='cover'
          />
          <View style={styles.textContent}>
            <Text numberOfLines={1} style={styles.cardtitle}>
              {item.title}
            </Text>
            <Text numberOfLines={1} style={styles.cardDescription}>
              {item.description}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  render() {
    const interpolations = this.state.markers.map((marker, index) => {
      const inputRange = [
        (index - 1) * CARD_WIDTH,
        index * CARD_WIDTH,
        (index + 1) * CARD_WIDTH,
      ];
      const scale = this.animation.interpolate({
        inputRange,
        outputRange: [1, 2.5, 1],
        extrapolate: "clamp",
      });
      const opacity = this.animation.interpolate({
        inputRange,
        outputRange: [0.35, 1, 0.35],
        extrapolate: "clamp",
      });
      return { scale, opacity };
    });
    return (
      <View style={styles.container}>
        <StatusBar barStyle='dark-content' hidden={false} />

        <MapView
          ref={(map) => (this.map = map)}
          initialRegion={this.state.region}
          style={styles.container}
        >
          {this.state.markers.map((marker, index) => {
            const scaleStyle = {
              transform: [
                {
                  scale: interpolations[index].scale,
                },
              ],
            };
            const opacityStyle = {
              opacity: interpolations[index].opacity,
            };
            return (
              <MapView.Marker key={index} coordinate={marker.coordinate}>
                <Animated.View style={[styles.markerWrap, opacityStyle]}>
                  <Animated.View style={[styles.ring, scaleStyle]} />
                  <View style={styles.marker} />
                </Animated.View>
              </MapView.Marker>
            );
          })}
        </MapView>
        <Animated.View
          style={styles.scrollView}
          contentContainerStyle={styles.endPadding}
        >
          <Carousel
            style={styles.carouselStyle}
            ref={(c) => {
              this._carousel = c;
            }}
            data={this.state.markers}
            renderItem={this._renderItem}
            sliderWidth={width}
            itemWidth={180}
            onScroll={(event) => {
              this.animation.setValue(event.nativeEvent.contentOffset.x);
            }}
            useScrollView={true}
          />
        </Animated.View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    position: "absolute",
    bottom: -20,
    left: 0,
    right: 0,
    paddingVertical: 0,
  },
  carouselStyle: {
    padding: 25,
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH,
  },
  card: {
    padding: 10,
    elevation: 2,
    backgroundColor: "rgba(244,255,244, 1)",
    marginHorizontal: 10,
    margin: 30,
    shadowColor: "rgba(0,72,51, 0.9)",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 0, y: 0 },
    height: 150,
    width: CARD_WIDTH,
  },
  cardImage: {
    flex: 3,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  textContent: {
    flex: 1,
  },
  cardtitle: {
    fontSize: 12,
    marginTop: 5,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 12,
    color: "#444",
  },
  markerWrap: {
    alignItems: "center",
    justifyContent: "center",
  },
  marker: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(0,153,102, 0.9)",
  },
  ring: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "rgba(0,153,102, 0.5)",
    position: "absolute",
    borderWidth: 0.5,
    borderColor: "rgba(0,153,102, 0.5)",
  },
});
AppRegistry.registerComponent("mapfocus", () => HomeScreen);
