import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, useWindowDimensions, TouchableOpacity } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  useAnimatedGestureHandler, 
  useDerivedValue,
  interpolate,
  withSpring,
  runOnJS,
  withTiming,
  Easing
 } from 'react-native-reanimated';
import { colors } from '../../theme';

const ROTATION = 60;
const SWIPE_VELOCITY = 800;

const CardStack = (props) => {
  const { data, renderItem, onSwipeLeft, onSwipeRight } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(currentIndex + 1);
  const currentPet = data[currentIndex];
  const nextPet = data[nextIndex];
  const { width: screenWidth } = useWindowDimensions();
  const hiddenTranslateX = 2 * screenWidth;
  const translateX = useSharedValue(0);
  const rotate = useDerivedValue(() => interpolate(
    translateX.value,
    [0, hiddenTranslateX],
    [0, ROTATION]
  ) + 'deg');

  const cardStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value, },
      // { translateX: translateX.value / 3.6, }, // book effect
      { rotateY: rotate.value, }
    ],
    opacity: interpolate(translateX.value, [-hiddenTranslateX, 0, hiddenTranslateX], [0.9, 1, 0.9])
  }));

  const nextCardStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: interpolate(translateX.value, [-hiddenTranslateX, 0, hiddenTranslateX], [1, 0.95, 1]) }
    ],
    opacity: interpolate(translateX.value, [-hiddenTranslateX, 0, hiddenTranslateX], [1, 0.95, 1])
  }));
  
  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, context) => {
      context.startX = translateX.value;
    },
    onActive: (event, context) => {
      translateX.value = context.startX + event.translationX;
    },
    onEnd: (event) => {
      if (Math.abs(event.velocityX) < SWIPE_VELOCITY) {
        translateX.value = withTiming(0, { duration: 50, easing: Easing.bezier(0.25, 0.1, 0.25, 1) });
        return;
      }
      translateX.value = withTiming(
        hiddenTranslateX * Math.sign(event.velocityX), 
        {}, 
        () => runOnJS(setCurrentIndex)(currentIndex + 1)
      , { duration: 50, easing: Easing.bezier(0.25, 0.1, 0.25, 1) });
      const onSwipe = event.velocityX > 0 ? onSwipeRight : onSwipeLeft;
      onSwipe && runOnJS(onSwipe)(currentPet);
    }
  });

  useEffect(() => {
    translateX.value = 0;
    setNextIndex(currentIndex + 1);
  }, [currentIndex, translateX]);
/*
  useEffect(() => {
    const fetchFavoritesData =  () => {
      for(let i = 0; i < data[currentIndex].favoritePet.items.length; i++) {
        if (data[currentIndex].favoritePet.items[i].userID === data[0].userID) {
          console.log("YES")
        } else {
          console.log("NO")
        }
      }
    }
    fetchFavoritesData();
  }, [currentIndex])
*/
  const restartStack = () => {
    setCurrentIndex(0);
    setNextIndex(currentIndex + 1);
  }

  return (
      <View style={styles.root}>
        <Text style={styles.backText}>Przejrzano wszystkie propozycje.</Text>
        <TouchableOpacity style={styles.reloadButton} onPress={() => restartStack()}>
          <Text style={styles.reloadText}>Załaduj ponownie</Text>
        </TouchableOpacity>
        {nextPet && (
        <View style={styles.nextCardContainer}>
          <Animated.View style={[styles.animatedCard, nextCardStyle]}>
              {renderItem({ item: nextPet })}
          </Animated.View>
        </View>
        )}
        {currentPet && (
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View style={[styles.animatedCard, cardStyle]}>
              {renderItem({ item: currentPet })}
          </Animated.View>
        </PanGestureHandler>
        )}
        
      </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start', 
    alignItems: 'center', 
    flex: 1,
    backgroundColor: colors.white,
  },
  animatedCard: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextCardContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'absolute',
  },
  backText: {
    fontFamily: 'oxygen_regular',
    fontSize: 16,
    position: 'absolute',
    alignSelf: 'center',
    top: '45%',
  },
  reloadButton: {
    position: 'absolute',
    alignSelf: 'center',
    top: '49%',
  },
  reloadText: {
    fontFamily: 'oxygen_bold',
    fontSize: 16,
    color: colors.blue,
  },
})

export default CardStack;