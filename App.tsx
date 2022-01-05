import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, DrawerView } from '@react-navigation/drawer';
import { KeyboardAvoidingView, SafeAreaView, ScrollView, View } from 'react-native';
import TouchableContainer from './src/components/containers/touchableContainer';
import Text from './src/components/text';
import { Container } from './src/components/containers/container';
import { Close, Down, Login, Menu, Search, Setting, SignUp, Upload } from './src/assets';
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';
import Input from './src/components/input';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './home';
import colors from './src/app/color/color';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const App = () => {
  return (

    <NavigationContainer>
      <DrawerNavigation/>
    {/* <Stack.Navigator screenOptions={{
      headerShown:false
    }}>
      <Stack.Screen name="Home" component={DrawerNavigation} />
    </Stack.Navigator> */}
    </NavigationContainer>
    
  )
}
const poppinsBold ="Poppins-Bold"
const poppinsRegular="Poppins-Regular"
const DrawerNavigation =()=>{
  return (
    <Drawer.Navigator
      defaultScreenOptions={{
        drawerActiveTintColor:'red'
      }}
        drawerContent={(p)=> <SideBar {...p}/>}
        screenOptions={{
          headerShown:false,
          drawerPosition:'right',
          drawerStyle:{
            // marginTop:20,
            borderBottomLeftRadius:30,
            borderWidth:0,
            // borderColor:"#0096FF",
            borderTopWidth:0,
          },
        }}
        initialRouteName='Home'
      >
        
         <Drawer.Screen
          name="Home"
          component={Home}
          
          />
    
      </Drawer.Navigator>
  )
}
   
interface myProps {
  name: string
  onPress:()=>void
}
const NavDropDown =(p:myProps)=>{
  const [Clicked, setClicked] = React.useState(false)
  return(
    <TouchableContainer
      Onpress={()=>{
        setClicked(!Clicked)
        p.onPress()
      }}
      // backgoundColor='red'
      rightComponent={Clicked?<Upload height={15} width={15}/>:<Down height={15} width={15}/>}          
    >
      <Text large family={poppinsBold} >
        {p.name}
      </Text>
    </TouchableContainer>
  )
}

const ServiceNav=()=>{
  return(
    <Container >
      <DrawerItem 
          label={()=><Text bold family={poppinsRegular}></Text>} 
          onPress={function (): void {
                // p.navigation.navigate('Home')
            }}
      />
    </Container>
  )
}

const NewsNav=()=>{
  return(
    <Container  >
      <DrawerItem 
          label={()=><Text family={poppinsRegular}> All News</Text>} 
          onPress={function (): void {
                // p.navigation.navigate('Home')
            }}
      />
      <Container marginL={10} height={0.5} width={"90%"} backgoundColor='black'/>

      <DrawerItem 
          label={()=><Text  family={poppinsRegular}>News With Multimedia</Text>} 
          onPress={function (): void {
                // p.navigation.navigate('Home')
            }}
      />

      <Container marginL={10} height={0.5} width={"90%"} backgoundColor='black'/>

      <DrawerItem 
          label={()=><Text  family={poppinsRegular} small>News by Subject</Text>} 
          onPress={function (): void {
                // p.navigation.navigate('Home')
            }}
      />
      <Container marginL={10} height={0.5} width={"90%"} backgoundColor='black'/>

      <DrawerItem 
          label={()=><Text  family={poppinsRegular} small>Tradeshows & Events</Text>} 
          onPress={function (): void {
                // p.navigation.navigate('Home')
            }}
      />
            <Container marginL={10} height={0.5} width={"90%"} backgoundColor='black'/>

    </Container>
  )
}
const SideBar =(p:DrawerContentComponentProps)=>{
      const [serviceClicked, setserviceClicked] = React.useState(false)
      const [educationClicked, seteducationClicked] = React.useState(false)
      const [newsClicked, setnewsClicked] = React.useState(false)
      const [aboutUsClicked, setaboutUsClicked] = React.useState(false)
      return(
        <SafeAreaView 
          style={{ 
            flex: 1,
            // backgroundColor:'red',
            borderBottomLeftRadius:30,
          }}>
            <KeyboardAvoidingView style={{flex:1}}>
          <DrawerContentScrollView>
            <TouchableContainer 
              marginL={20} 
              marginT={10}
              Onpress={()=>{
                  p.navigation.navigate('Profile')
              }}
              marginB={20}
              >
                < TouchableContainer Onpress={()=> p.navigation.closeDrawer()}>
                  <Close height={20} width={20} style={{

                      alignSelf:"flex-end",
                      marginRight:20,
                      marginBottom:10
                      }}/>
                </TouchableContainer>
                
                <Input 
                  placeholder='search'
                   placeholderColor={colors.defText}
                  LeftComponent={ <Container height={'100%'} width={40} center><Search height={15} width={15}/></Container>}
                  rightComponent={<Container height={'100%'} width={50} row center><Container backgoundColor='black' height={'60%'} width={0.8} marginR={10}/><Setting height={15} width={15} style={{alignSelf:'center'}}/></Container>}
                  height={43}
                  borderRadius={5}
                  borderW={0.5}
                  width={"90%"}
                  />
            </TouchableContainer> 
            <Container marginL={20} height={0.5} width={"90%"} backgoundColor='black'/>
          <Container 
              marginT={5} 
              height={1} 
              width={'100%'} 
              style={{
                  backgroundColor:'white'
            }}/>
            <ScrollView>
  
              <DrawerItem 
                label={()=><Text family={poppinsBold} large>Home</Text>} 
                onPress={function (): void {
                  p.navigation.navigate('Home')
                }}
              />
            <Container marginL={10} height={0.5} width={"90%"} backgoundColor='black'/>
  
              <DrawerItem 
                label={()=><NavDropDown name='Services' onPress={()=>setserviceClicked(!serviceClicked)}/>} 
                onPress={function (): void {
                  p.navigation.navigate('MyRequests')
                }}
              />
              {
                !serviceClicked&&
                <Container marginL={10} height={0.5} width={"90%"} backgoundColor='black'/>

              }
              {
                serviceClicked &&
                <ServiceNav/>
              }
              <DrawerItem 
                  label={()=><NavDropDown name='News' onPress={()=>setnewsClicked(!newsClicked)}/>} 
                onPress={function (): void {
                }}
              />
              {
                !newsClicked&&
              <Container marginL={10} height={0.5} width={"90%"} backgoundColor='black'/>

              }

              {
                newsClicked &&
                <NewsNav/>
              }
              <DrawerItem 
                              
                onPress={function (): void {
                  // p.navigation.navigate("MyPatients");
                } } 
                label={()=><NavDropDown name='Education' onPress={()=>seteducationClicked(!educationClicked)}/>}                // icon={
              />
              
              {
                !educationClicked&&
                <Container marginL={10} height={0.5} width={"90%"} backgoundColor='black'/>

              }
              <DrawerItem 
                label={()=><NavDropDown name='About Us' onPress={()=>setaboutUsClicked(!aboutUsClicked)}/>}  
                onPress={function (): void {
                  p.navigation.navigate('DocsFollowing')
                }}
            
              />
              {
                !aboutUsClicked&&
                <Container marginL={10} height={0.5} width={"90%"} backgoundColor='black'/>
              }
          </ScrollView>
          </DrawerContentScrollView>
          <DrawerItem 
            label={()=><Text family={poppinsBold} large>Login</Text>}
             onPress={()=> {
              // deleteData(db,1)
              }}
              icon={
                ()=>
                  <Login height={20} width={20}/>
              }
            />
            <Container marginL={10} height={0.5} width={"90%"} backgoundColor='black'/>
            <DrawerItem 
            label={()=><Text large family={poppinsBold}>Sign up</Text>}
             onPress={()=> {
              // deleteData(db,1)
              }}
              icon={
                ()=>
                  <SignUp height={20} width={20}/>
              }
            />
            </KeyboardAvoidingView>
        </SafeAreaView>
      )
  }
export default App
