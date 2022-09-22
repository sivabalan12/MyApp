import React, {useState} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {NeutralColors} from '../theme/colors';
import {AppFont} from '../theme/fonts/fonts';
import {
  TabView,
  SceneMap,
  TabBar,
  SceneRendererProps,
  NavigationState,
} from 'react-native-tab-view';
import {BrandColors} from './../theme/colors';

const Test = () => {
  const [index, setIndex1] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'Planet'},
    {key: 'second', title: 'People'},
    {key: 'third', title: 'Profit'},
  ]);

  const FirstRoute1 = () => (
    <View style={[{backgroundColor: 'green', flex: 1}]} />
  );

  const SecondRoute1 = () => (
    <View style={[{backgroundColor: NeutralColors.light35, flex: 1}]} />
  );

  type State = NavigationState<{
    key: string;
    title: string;
  }>;

  const renderScene1 = SceneMap({
    first: FirstRoute1,
    second: SecondRoute1,
    third: FirstRoute1,
  });

  const renderTabBar1 = (
    props: SceneRendererProps & {navigationState: State},
  ) => (
    <TabBar
      {...props}
      // scrollEnabled
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
      // tabStyle={styles.tabStyle1}
      renderLabel={renderLabel1}
      // renderIcon={renderIcon}
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
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: NeutralColors.light35,
      }}>
      <View
        style={{
          // width: '100%',
          height: 646,
          backgroundColor: NeutralColors.light0,
          borderRadius: 20,
          marginHorizontal: 16,
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
        <View style={[{height: 475}]}>
          <TabView
            navigationState={{index, routes}}
            renderScene={renderScene1}
            onIndexChange={setIndex1}
            // initialLayout={initialLayout}
            renderTabBar={renderTabBar1}
            // style={{flex:1}}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
  content: {
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
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    // width: null,
    // height: HEADER_MAX_HEIGHT,
    resizeMode: 'cover',
  },
  bar: {
    backgroundColor: 'transparent',
    marginTop: Platform.OS === 'ios' ? 28 : 38,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  // title: {
  //   color: 'white',
  //   fontSize: 18,
  // },
  row: {
    height: 40,
    margin: 16,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabView: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.01)',
  },
  card: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    margin: 5,
    height: 150,
    padding: 15,
    shadowColor: '#ccc',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  container: {
    paddingTop: 8,
    paddingHorizontal: 24,
  },
  indicator1: {
    height: '100%',
    backgroundColor: NeutralColors.light0,
    borderRadius: 28,
    borderWidth: 4,
    borderColor: BrandColors.main100,
    // width: 0.8,
  },
  borderTopBar: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    elevation: 0,
    shadowOpacity: 0,
    borderBottomColor: '#F2F2F2',
    borderBottomWidth: 1,
  },
  justifyTopBar: {
    width: 'auto',
    marginHorizontal: 14,
  },
  containerTabView: {},
  tabbar1: {
    backgroundColor: BrandColors.main100,
    height: 48,
    borderRadius: 28,
    marginHorizontal: 16,
    elevation: 0,
    marginBottom: 12,
  },
  // indicator1: {
  //   backgroundColor: '#ffeb3b',
  // },
  label: {
    fontWeight: '400',
  },
  tabStyle1: {
    // width: (windowWidth-64)/3,
    // marginHorizontal: 6,
  },
  animatedBtnContainer: {
    height: 48,
    flexDirection: 'row',
    position: 'absolute',
    overflow: 'hidden',
    backgroundColor: NeutralColors.light0,
    borderRadius: 28,
    // borderWidth: 4,
    // borderColor: BrandColors.main100,
  },
  animatedBtn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Test;
