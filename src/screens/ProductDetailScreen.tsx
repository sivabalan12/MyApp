import React, {useRef, useEffect, useState} from 'react';
import {
  Text,
  View,
  Animated,
  StyleSheet,
  TouchableOpacity,
  Platform,
  UIManager,
  LayoutAnimation,
  ScrollView,
  Dimensions,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import FastImage from 'react-native-fast-image';
import {AppFont} from '../theme/fonts/fonts';
import {
  BrandColors,
  NeutralColors,
  Opacity,
  SemanticColors,
} from '../theme/colors';
import {Images} from '../../assets/images';
import {Icons} from './../../assets/svg/index';
import {Rating} from 'react-native-ratings';
import {
  TabView,
  SceneMap,
  TabBar,
  SceneRendererProps,
  NavigationState,
} from 'react-native-tab-view';
import ProgressBar from 'react-native-animated-progress';
import {CircularProgressBase} from 'react-native-circular-progress-indicator';
import ActionSheet, {SheetManager} from 'react-native-actions-sheet';

const {width, height} = Dimensions.get('window');

const ProductDetailScreen = () => {
  // const scrollFunc = useRef(false);
  const renderTabBar = (
    props: SceneRendererProps & {navigationState: State},
  ) => (
    <TabBar
      {...props}
      scrollEnabled
      indicatorStyle={styles.indicator}
      style={styles.tabBar}
      tabStyle={styles.tabStyle}
      renderLabel={renderLabel}
      renderIcon={renderIcon}
      pressColor={'transparent'}
    />
  );
  const renderLabel = ({route, focused}) => {
    return (
      <AppFont
        fontType="CAPTION2MED"
        title={route.title}
        color={focused ? NeutralColors.mid400 : NeutralColors.mid90}
      />
    );
  };

  const renderIcon = ({route, focused}) => {
    return (
      <View style={{width: 22, height: 22, marginTop: -6, marginBottom: 2}}>
        <FastImage
          source={route.icon}
          style={{width: '100%', height: '100%'}}
          tintColor={focused ? NeutralColors.mid400 : NeutralColors.mid90}
        />
      </View>
    );
  };

  const SustainabilityTab = () => {
    const [index, setIndex] = useState(0);
    const [routes] = useState([
      {key: 'first', title: 'Planet'},
      {key: 'second', title: 'People'},
      {key: 'third', title: 'Profit'},
    ]);

    const PlanetTab = () => {
      const PlanetItems = ({title, value, icon}) => {
        const getRatingColor = () => {
          if (value < 25) {
            return SemanticColors.negative1_500;
          } else if (value < 50) {
            return SemanticColors.warning1_500;
          } else if (value < 75) {
            return SemanticColors.positive2_500;
          } else {
            return SemanticColors.positive1_500;
          }
        };

        return (
          <TouchableOpacity
            onPress={() => SheetManager.show('pallete')}
            style={{
              height: 76,
              width: '100%',
              borderBottomWidth: 1,
              borderBottomColor: NeutralColors.light40,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 16,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <CircularProgressBase
                value={value}
                radius={26}
                duration={1500}
                maxValue={100}
                activeStrokeColor={getRatingColor()}
                inActiveStrokeColor={NeutralColors.light30}
                inActiveStrokeOpacity={0.5}
                inActiveStrokeWidth={6}
                activeStrokeWidth={6}
                strokeLinecap="round">
                <View style={{width: 22, height: 22}}>
                  <FastImage
                    source={icon}
                    style={{width: '100%', height: '100%'}}
                    tintColor={getRatingColor()}
                  />
                </View>
              </CircularProgressBase>
              <AppFont
                fontType="CAPTION1MED"
                title={title}
                color={NeutralColors.mid400}
                style={{marginLeft: 12}}
              />
            </View>
            <FastImage
              source={Icons.arrow_small}
              style={{width: 16, height: 16, marginRight: 8}}
            />
          </TouchableOpacity>
        );
      };

      return (
        <View style={{flex: 1}}>
          <PlanetItems title={'Energy'} value={92} icon={Icons.energy} />
          <PlanetItems title={'Water'} value={48} icon={Icons.water} />
          <PlanetItems
            title={'Natural Resources'}
            value={72}
            icon={Icons.nature}
          />
          <PlanetItems
            title={'Operational Emissions'}
            value={72}
            icon={Icons.emission}
          />
          <PlanetItems title={'Operational GHGs'} value={48} icon={Icons.ghg} />
          <PlanetItems
            title={'Operational Encroachment'}
            value={92}
            icon={Icons.encroachment}
          />
        </View>
      );
    };

    const PeopleTab = () => <View style={[{flex: 1}]} />;

    const ProfitTab = () => <View style={[{flex: 1}]} />;

    const renderScene1 = SceneMap({
      first: PlanetTab,
      second: PeopleTab,
      third: ProfitTab,
    });

    const renderTabBar1 = (
      props: SceneRendererProps & {navigationState: State},
    ) => (
      <TabBar
        {...props}
        indicatorStyle={{
          height: '100%',
          backgroundColor: NeutralColors.light0,
          borderRadius: 28,
          borderWidth: 4,
          borderColor: BrandColors.main100,
        }}
        style={{
          backgroundColor: BrandColors.main100,
          height: 48,
          borderRadius: 28,
          marginHorizontal: 16,
          elevation: 0,
          marginBottom: 12,
        }}
        renderLabel={renderLabel1}
        pressColor={'transparent'}
      />
    );

    const renderLabel1 = ({route, focused}) => {
      return (
        <AppFont
          fontType="CAPTION1MED"
          title={route.title}
          color={focused ? NeutralColors.mid400 : NeutralColors.mid90}
        />
      );
    };

    return (
      <ScrollView
        // nestedScrollEnabled={scrollEnabled}
        ref={scrollRef}
        // scrollEnabled={scrollFunc.current}
        showsVerticalScrollIndicator={false}
        style={[styles.fill, {backgroundColor: NeutralColors.light35}]}>
        <View style={{marginTop: 16, marginHorizontal: 16}}>
          <View
            style={{
              width: '100%',
              height: 353,
              backgroundColor: NeutralColors.light0,
              borderRadius: 20,
            }}>
            <View style={{padding: 16}}>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 68,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderColor: BrandColors.main500,
                    marginRight: 10,
                  }}>
                  <AppFont
                    fontType="TITLE3MED"
                    title="8.9"
                    color={BrandColors.main500}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'column',
                    alignSelf: 'center',
                  }}>
                  <AppFont
                    fontType="BODYMED"
                    title="Very Good"
                    color={NeutralColors.mid400}
                  />
                  <AppFont
                    fontType="CAPTION2REG"
                    title="Check the scoring ranges"
                    color={NeutralColors.mid100}
                  />
                </View>
                <TouchableOpacity
                  onPress={() => {}}
                  style={{
                    justifyContent: 'center',
                    alignSelf: 'center',
                    position: 'absolute',
                    right: 0,
                  }}>
                  <FastImage
                    source={Icons.info_bold}
                    style={{width: 24, height: 24}}
                    tintColor={BrandColors.main500}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  backgroundColor: NeutralColors.light40,
                  width: '100%',
                  height: 1,
                  marginVertical: 12,
                }}></View>
              <AppFont
                fontType="CALLOUTDEFREG"
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labret et dolore elites sed do:"
                color={NeutralColors.mid90}
              />
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 12,
                  justifyContent: 'space-between',
                  marginBottom: 10,
                }}>
                <AppFont
                  fontType="CAPTION1REG"
                  title="Planet"
                  color={NeutralColors.mid200}
                />
                <AppFont
                  fontType="CALLOUTDEFMED"
                  title="9.2"
                  color={NeutralColors.mid400}
                />
              </View>
              <ProgressBar
                progress={92}
                height={8}
                backgroundColor={BrandColors.main500}
                trackColor={NeutralColors.light30}
              />
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 12,
                  justifyContent: 'space-between',
                  marginBottom: 10,
                }}>
                <AppFont
                  fontType="CAPTION1REG"
                  title="People"
                  color={NeutralColors.mid200}
                />
                <AppFont
                  fontType="CALLOUTDEFMED"
                  title="8.7"
                  color={NeutralColors.mid400}
                />
              </View>
              <ProgressBar
                progress={87}
                height={8}
                backgroundColor={BrandColors.main500}
                trackColor={NeutralColors.light30}
              />
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 12,
                  justifyContent: 'space-between',
                  marginBottom: 10,
                }}>
                <AppFont
                  fontType="CAPTION1REG"
                  title="Profit"
                  color={NeutralColors.mid200}
                />
                <AppFont
                  fontType="CALLOUTDEFMED"
                  title="9.0"
                  color={NeutralColors.mid400}
                />
              </View>
              <ProgressBar
                progress={90}
                height={8}
                backgroundColor={BrandColors.main500}
                trackColor={NeutralColors.light30}
              />
            </View>
          </View>
          <View
            style={{
              width: '100%',
              // height: 646,
              backgroundColor: NeutralColors.light0,
              borderRadius: 20,
              marginVertical: 16,
            }}>
            <View style={{padding: 16}}>
              <AppFont
                fontType="CAPTION1MED"
                title="ACHIEVEMENTS"
                color={NeutralColors.mid90}
              />
              <AppFont
                fontType="CALLOUTDEFREG"
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labret et dolore elites sed do:"
                color={NeutralColors.mid90}
                style={{marginTop: 8, marginBottom: 20}}
              />
            </View>
            <View style={[{height: 540}]}>
              <TabView
                navigationState={{index, routes}}
                renderScene={renderScene1}
                onIndexChange={setIndex}
                renderTabBar={renderTabBar1}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  };

  const HealthTab = () => {
    const [index, setIndex] = useState(0);
    const [routes] = useState([
      {key: 'first', title: 'Positive'},
      {key: 'second', title: 'Negative'},
    ]);

    const PositiveTab = () => (
      <View style={[{flex: 1, backgroundColor: 'green'}]} />
    );

    const NegativeTab = () => <View style={[{flex: 1}]} />;

    const renderScene1 = SceneMap({
      first: PositiveTab,
      second: NegativeTab,
    });

    const renderTabBar1 = (
      props: SceneRendererProps & {navigationState: State},
    ) => (
      <TabBar
        {...props}
        indicatorStyle={{
          height: '100%',
          backgroundColor: NeutralColors.light0,
          borderRadius: 28,
          borderWidth: 4,
          borderColor: BrandColors.main100,
        }}
        style={{
          backgroundColor: BrandColors.main100,
          height: 48,
          borderRadius: 28,
          marginHorizontal: 16,
          elevation: 0,
          marginBottom: 12,
        }}
        renderLabel={renderLabel1}
        pressColor={'transparent'}
      />
    );

    const renderLabel1 = ({route, focused}) => {
      return (
        <AppFont
          fontType="CAPTION1MED"
          title={route.title}
          color={focused ? NeutralColors.mid400 : NeutralColors.mid90}
        />
      );
    };

    return (
      <ScrollView
        nestedScrollEnabled={true}
        // onScroll={event =}
        // scrollEnabled={scrollFunc.current}
        showsVerticalScrollIndicator={false}
        style={[styles.fill, {backgroundColor: NeutralColors.light35}]}>
        <View style={{marginTop: 16, marginHorizontal: 16}}>
          <View
            style={{
              width: '100%',
              backgroundColor: NeutralColors.light0,
              borderRadius: 20,
            }}>
            <View style={{padding: 16}}>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 68,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderColor: SemanticColors.positive1_500,
                    marginRight: 10,
                  }}>
                  <AppFont
                    fontType="TITLE3MED"
                    title="9.2"
                    color={SemanticColors.positive1_500}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'column',
                    alignSelf: 'center',
                  }}>
                  <AppFont
                    fontType="BODYMED"
                    title="Excellent!"
                    color={NeutralColors.mid400}
                  />
                  <AppFont
                    fontType="CAPTION2REG"
                    title="Check the scoring ranges"
                    color={NeutralColors.mid100}
                  />
                </View>
                <TouchableOpacity
                  onPress={() => {}}
                  style={{
                    justifyContent: 'center',
                    alignSelf: 'center',
                    position: 'absolute',
                    right: 0,
                  }}>
                  <FastImage
                    source={Icons.info_bold}
                    style={{width: 24, height: 24}}
                    tintColor={BrandColors.main500}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{
              width: '100%',
              // height: 646,
              backgroundColor: NeutralColors.light0,
              borderRadius: 20,
              marginVertical: 16,
            }}>
            <View style={{padding: 16}}>
              <AppFont
                fontType="CAPTION1MED"
                title="NUTRITIONAL VALUES"
                color={NeutralColors.mid90}
              />
              <AppFont
                fontType="CALLOUTDEFREG"
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labret et dolore elites sed do:"
                color={NeutralColors.mid90}
                style={{marginTop: 8, marginBottom: 20}}
              />
            </View>
            <View style={[{height: 540}]}>
              <TabView
                navigationState={{index, routes}}
                renderScene={renderScene1}
                onIndexChange={setIndex}
                renderTabBar={renderTabBar1}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  };

  const ThirdRoute = () => (
    <View style={[styles.fill, {backgroundColor: NeutralColors.light35}]} />
  );

  type State = NavigationState<{
    key: string;
    title: string;
  }>;

  const renderScene = SceneMap({
    first: SustainabilityTab,
    second: HealthTab,
    third: ThirdRoute,
    fourth: ThirdRoute,
    fifth: ThirdRoute,
  });
  const [expanded, setExpanded] = useState(false);
  const HEADER_MAX_HEIGHT = expanded ? 463 : 392;
  const HEADER_MIN_HEIGHT = 73;
  const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
  const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

  const [scrollEnabled, setScrollEnabled] = useState(false);
  const scrollRef = useRef();

  const insets = useSafeAreaInsets();
  const scrollY = useRef(new Animated.Value(0)).current;

  const headerTranslate = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, -HEADER_SCROLL_DISTANCE],
    extrapolate: 'clamp',
  });

  const imageOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, 0],
    extrapolate: 'clamp',
  });
  const TextOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 0, 1],
    extrapolate: 'clamp',
  });
  const imageTranslate = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 100],
    extrapolate: 'clamp',
  });

  // useEffect(() => {
  //   console.log(TextOpacity);
  // }, [TextOpacity]);

  const titleScale = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, 0.8],
    extrapolate: 'clamp',
  });
  const titleTranslate = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 0, -8],
    extrapolate: 'clamp',
  });

  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  // const changeLayout = () => {
  //   LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  //   if (selectedIndex == 1) {
  //     setReturnHeight(true);
  //   } else if (selectedIndex == 0) {
  //     setReturnHeight(false);
  //   } else if (selectedIndex == 2) {
  //     setReturnHeight(true);
  //   }
  // };

  // useEffect(() => {
  //   changeLayout();
  // }, [selectedIndex]);

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(previousState => !previousState);
  };

  const initialLayout = {width: Dimensions.get('window').width};

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'Sustainability', icon: Icons.sustainability},
    {key: 'second', title: 'Health', icon: Icons.health},
    {key: 'third', title: 'Reviews', icon: Icons.reviews},
    {key: 'fourth', title: 'Recycling', icon: Icons.recycling},
    {key: 'fifth', title: 'Product Info', icon: Icons.info},
  ]);

  return (
    <View style={styles.fill}>
      {/* <Animated.View style={[{marginTop: HEADER_MAX_HEIGHT, width:'100%', height:'100%'}, {transform: [{translateY: headerTranslate}]}]}>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={renderTabBar}
        style={styles.containerTabView}
      />
      </Animated.View> */}
      <Animated.ScrollView
        // nestedScrollEnabled={true}
        style={styles.fill}
        scrollEventThrottle={1}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {
            useNativeDriver: true,
            listener: event => {
              const offsetY = event.nativeEvent.contentOffset.y;
              if (offsetY >= HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT -1) {
                // setScrollEnabled(true);
                console.log('offset', offsetY);
                scrollRef?.current?.setNativeProps({ nestedScrollEnabled: true });
              }
            },
          },
        )}
        contentInset={{
          top: HEADER_MAX_HEIGHT,
        }}
        contentOffset={{
          y: -HEADER_MAX_HEIGHT,
        }}
        // onScrollEndDrag={()=> {scrollFunc.current = true, console.log('end')}}
      >
        <View
          style={[
            {marginTop: HEADER_MAX_HEIGHT, width: '100%', height: height - 73},
          ]}>
          <TabView
            navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            renderTabBar={renderTabBar}
          />
        </View>
      </Animated.ScrollView>
      <Animated.View
        // pointerEvents="none"
        style={[
          {height: HEADER_MAX_HEIGHT},
          styles.header,
          {transform: [{translateY: headerTranslate}]},
        ]}>
        <Animated.View
          style={{
            opacity: imageOpacity,
            transform: [{translateY: imageTranslate}],
          }}>
          <View
            style={{
              width: '100%',
              height: 180,
              backgroundColor: NeutralColors.mid70,
            }}>
            <FastImage
              source={Images.banner_barilla}
              style={{width: '100%', height: '100%'}}
              resizeMode="cover"></FastImage>
            <View
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                backgroundColor: Opacity.black200,
              }}>
              <View style={{}}>
                <AnimatedTouchable
                  onPress={() => console.log('test onPress')}
                  style={{
                    zIndex: 2,
                    top: insets.top + 12,
                    left: 20,
                    position: 'absolute',
                    backgroundColor: Opacity.tangaroa300,
                    //   backgroundColor: '#fff',
                    height: 32,
                    width: 32,
                    borderRadius: 16,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <FastImage
                    source={Icons.arrow_left}
                    style={{width: 18, height: 18}}
                    tintColor={'white'}
                  />
                </AnimatedTouchable>
                <AnimatedTouchable
                  onPress={() => console.log('test onPress')}
                  style={{
                    zIndex: 2,
                    top: insets.top + 12,
                    position: 'absolute',
                    right: 20,
                    backgroundColor: Opacity.tangaroa300,
                    //   backgroundColor: '#fff',
                    height: 32,
                    width: 32,
                    borderRadius: 16,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <FastImage
                    source={Icons.settings}
                    style={{width: 18, height: 18}}
                    tintColor={'white'}
                  />
                </AnimatedTouchable>
                <AnimatedTouchable
                  onPress={() => console.log('test onPress')}
                  style={{
                    zIndex: 2,
                    top: insets.top + 12,
                    position: 'absolute',
                    right: 64,
                    backgroundColor: Opacity.tangaroa300,
                    //   backgroundColor: '#fff',
                    height: 32,
                    width: 32,
                    borderRadius: 16,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <FastImage
                    source={Icons.save}
                    style={{width: 18, height: 18}}
                    tintColor={'white'}
                  />
                </AnimatedTouchable>
              </View>
            </View>
            <View
              style={{
                zIndex: 2,
                bottom: -56,
                left: 24,
                position: 'absolute',
                backgroundColor: 'white',
                height: 104,
                width: 104,
                borderRadius: 52,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 4,
                borderColor: NeutralColors.light10,
              }}>
              <FastImage
                source={Images.penne_rigate}
                style={{width: '60%', height: '60%'}}
              />
            </View>
          </View>
          <View style={{marginTop: 68, marginLeft: 20}}>
            <AppFont
              fontType="TITLE3MED"
              title="Penne Rigate"
              color={NeutralColors.mid400}
              // style={{marginBottom:4}}
            />
            <AppFont
              fontType="CAPTION1REG"
              title="Barilla Group"
              color={NeutralColors.mid90}
              // style={{marginBottom:4}}
            />
          </View>
          <AnimatedTouchable
            onPress={() => toggleExpand()}
            style={{
              zIndex: 2,
              // top: 196,
              // right: 20,
              // position: 'absolute',
              // backgroundColor: Opacity.tangaroa300,
              height: expanded ? 124 : 53,
              marginHorizontal: 16,
              borderRadius: 16,
              // alignItems: 'center',
              // justifyContent: 'center',
              borderWidth: 1,
              borderColor: NeutralColors.light40,
              marginTop: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 15,
                marginTop: 14,
              }}>
              <View style={{flexDirection: 'row'}}>
                <AppFont
                  fontType="CAPTION1MED"
                  title="Advanced"
                  color={SemanticColors.positive2_600}
                  // style={{marginBottom:4}}
                />
                <View style={{top: 6}}>
                  <Rating
                    type="custom"
                    ratingImage={Icons.level_basic}
                    ratingColor={SemanticColors.positive2_500}
                    ratingBackgroundColor={NeutralColors.mid80}
                    readonly
                    startingValue={4}
                    imageSize={12}
                    tintColor={NeutralColors.light0}
                    style={{marginLeft: 6}}
                  />
                </View>
              </View>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <FastImage
                  source={expanded ? Icons.arrow_up : Icons.arrow_down}
                  style={{width: 12, height: 12}}
                  tintColor={NeutralColors.mid400}
                />
              </View>
            </View>
            {expanded && (
              <View style={{marginTop: 8, marginHorizontal: 15}}>
                <AppFont
                  fontType="CAPTION1REG"
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  color={NeutralColors.mid400}
                />
              </View>
            )}
          </AnimatedTouchable>
          <AnimatedTouchable
            onPress={() => console.log('test onPress')}
            style={{
              zIndex: 2,
              top: 196,
              right: 20,
              position: 'absolute',
              // backgroundColor: Opacity.tangaroa300,
              height: 34,
              width: 138,
              borderRadius: 17,
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 1,
              borderColor: NeutralColors.light40,
            }}>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <AppFont
                fontType="CAPTION2MED"
                title="Company Page"
                color={NeutralColors.mid400}
                // style={{marginBottom:4}}
              />
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <FastImage
                  source={Icons.arrow_right}
                  style={{width: 18, height: 18, marginTop: 1, marginLeft: 7}}
                  tintColor={NeutralColors.mid400}
                />
              </View>
            </View>
          </AnimatedTouchable>
        </Animated.View>
        <Animated.View
          style={[
            {
              alignItems: 'center',
              position: 'absolute',
              bottom: 20,
              left: 0,
              right: 0,
            },
            {
              opacity: TextOpacity,
            },
          ]}>
          <AppFont
            fontType="CAPTION1REG"
            title="Penne Rigate"
            color={NeutralColors.mid80}
            // style={{marginBottom:4}}
          />
          <View
            style={{
              width: '100%',
              height: 1,
              backgroundColor: NeutralColors.light40,
              position: 'absolute',
              bottom: -20,
            }}></View>
        </Animated.View>
      </Animated.View>
      <ActionSheet
        id={'pallete'}
        containerStyle={styles.actionSheet}
        gestureEnabled={true}
        indicatorStyle={{
          backgroundColor: NeutralColors.light40,
          width: 32,
          marginTop: 10,
        }}>
        <View>
          <View>
            <TouchableOpacity
              onPress={() => SheetManager.hide('pallete')}
              style={{
                position: 'absolute',
                right: 20,
                width: 32,
                height: 32,
                borderRadius: 16,
                backgroundColor: NeutralColors.light30,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <FastImage
                source={Icons.close}
                style={{width: 14, height: 14}}
                tintColor={NeutralColors.mid100}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ActionSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: NeutralColors.light0,
    overflow: 'hidden',
    // height: HEADER_MAX_HEIGHT,
  },
  indicator: {
    height: 3,
    backgroundColor: NeutralColors.mid400,
    borderRadius: 2,
    width: 0.8,
  },
  tabBar: {
    backgroundColor: NeutralColors.light0,
    height: 60,
    // elevation: 0,
  },
  tabStyle: {
    width: 'auto',
    marginHorizontal: 6,
  },
  actionSheet: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: NeutralColors.light0,
    height: 400,
  },
});

export default ProductDetailScreen;
