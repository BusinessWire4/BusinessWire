import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';
import React from 'react';
import { Dimensions, View } from 'react-native';
import Header from './src/app/components/header';
import { AdvOne, AdvThree, AdvTwo, BackVideo, DiscussionImage, Education, Facebook, LinkedIn, Logo, Logo2, Mail, Menu, News, Phone, RelationButton, RelationIcon, Right, Shadow, Upload, Youtube } from './src/assets';
import { Container } from './src/components/containers/container';
import TouchableContainer from './src/components/containers/touchableContainer';
import Text from './src/components/text';
import {Text as RnText} from"react-native"
import colors from './src/app/color/color';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';
import Percent from './src/components/percent';
import { Image } from 'react-native';
// import REact from 'react'

interface props {
  navigation:DrawerNavigationHelpers;
}

const fsize = 16
const poppinsLight ="Poppins-Light"
const poppinsBold ="Poppins-Bold"
const poppinsRegular="Poppins-Regular"
const robotoLight ="Roboto-Light"
const robotoBold ="Roboto-Bold"
const robotoRegular ="Roboto-Regular"

const Home=({navigation}:props)=>{
  return(
    <Container flex={1} backgoundColor='white' alignItems='center'>
      {/* <Container> */}
      <Header nav={navigation}/>
      {/* </Container> */}
      <ScrollView style={{width:'100%'}} showsVerticalScrollIndicator={false}>
      
       <PageOne/>
       <PageTwo/>
       <PageThree/>
       <PageFour/>
       <PageFive/>
       <PageSix/>
        <Percent/>
       <PageSeven/>
      </ScrollView>
    </Container>
  )
}

const PageOne=()=>{
  
  return(
    <Container  
    height={Dimensions.get('screen').height-100}
    width={'99%'}alignItems='center'
    >
        {/* <ScrollView style={{height:'100%', width: '100%',}}> */}
        <Container  flex={1} alignItems='center' > 
            <Text weight='300' megaLarge marginT={30} family={poppinsLight}>
              Wired for
            </Text>
            <Text  megaLarge family={poppinsBold}>
              What's Next.
            </Text>
            <Container 
              row  
              width={"90%"} 
              center 
              marginT={20}
              style={{
              flexWrap:'wrap',
              
            }}>
              <RnText style={{
                marginRight:3,
                fontSize:fsize,
                fontFamily:robotoRegular
              }} >
                  Reach your
              </RnText>
              <Text marginR={3} medium family={robotoRegular}>
                press release
              </Text>
              <RnText style={{
                marginRight:3,
                fontSize:fsize,
                fontFamily:robotoRegular
              }} >
                and
              </RnText>
              <Text family={robotoRegular}>
                disclousre
              </Text>
              <RnText style={{
                marginRight:3,
                fontSize:fsize,
                fontFamily:robotoRegular
              }} >
                  targets. Get more views with multimedia. 
              </RnText>
              <Text marginR={3} family={robotoRegular}>
                Track
              </Text>
              <Text marginR={3} family={robotoRegular}>
                your results
              </Text>
              <RnText style={{
                marginRight:3,
                fontSize:fsize,
                fontFamily:robotoRegular
              }} >
              and refine your message. Be the
              </RnText>
              <Text marginR={3} family={robotoRegular}>
                news
              </Text>
              <RnText style={{
                marginRight:3,
                fontSize:fsize,
                fontFamily:robotoRegular
              }} >
              everyone talks about.
              </RnText>
            </Container>
            <TouchableContainer
              width={"65%"}
              backgoundColor={colors.deepBlue}
              height={65}
              borderRadius={30}
              centerMain
              marginT={20}
              // marginB={20}
            >
              <Text medium color='white' family={poppinsRegular}>
              Submit a Press Release
              </Text>
            </TouchableContainer>
          </Container>
          <Container flex={Dimensions.get('screen').height<853 ? 0.7:1} width={'100%'}backgoundColor='white' style={{
            justifyContent:'center',
            elevation:30,
            shadowOpacity:3,

          
          }} >
              <TouchableOpacity style={{height:"85%", width:"85%", alignSelf:'center'}}>
              <BackVideo  style={{ alignSelf:'center'}} height={"100%"} width={"100%"} />
            </TouchableOpacity>
          </Container>
          
      </Container>
  )
}

const PageTwo=()=>{
  return(

      <Swiper 
        dotStyle={{backgroundColor:colors.lightGrey,height:12,width:12, borderRadius:12}} 
        activeDotStyle={{backgroundColor:colors.darkGrey,height:12,width:12, borderRadius:12}} 
       
        >
      
      
      <Container 
      width={'90%'} 
      alignItems='center'
      backgoundColor='white'
      marginT={30}
      borderRadius={20}
      style={{
       elevation:30,
       alignSelf:'center',
       shadowOpacity:2
      }}
      >
      <Container height={"37%"} width={'100%'} style={{
      }}>
        <Image
          source={
            require('./src/assets/dis.png')
          }
          style={{
            width:"100%",
            alignSelf:'center'
          }}
        />
      </Container>
      <TouchableContainer 
        height={60} 
        width={60} 
        centerMain 
        borderRadius={50} 
        backgoundColor={colors.grren}
        style={{
          left:90,
          bottom:40,
          elevation:30,
        }}
        >
          <RelationIcon/>
      </TouchableContainer>
      
      <Container width={'70%'} >
        <Text
        style={{alignSelf:'flex-start'}} 
        marginB={10} 
        family={poppinsBold}
        megaLarge>
        Public Relations
        </Text>
        <RnText style={{
          fontSize:fsize,
          fontFamily:robotoRegular
        }}>
        In more than 200 countries, with 20 different languages and 100 media outlets. Reach more.
        </RnText>
      </Container>
      <TouchableContainer
        rightComponent={<Right height={20} width={20}/>}
        marginT={20}
        marginL={50}
        width={Dimensions.get('screen').width/2}
        height={50}
        centerMain
        borderRadius={30}
        borderW={0.5}
        style={{
          alignSelf:'flex-start'
        }}
        // marginB={150}
      >
          <Text family={poppinsBold}>
            Know More
          </Text>
      </TouchableContainer>
      </Container>
      
      {/* screen2 */}

      <Container 
      width={'90%'} 
      alignItems='center'
      backgoundColor='white'
      marginT={30}
      borderRadius={20}
      style={{
       elevation:30,
       shadowOpacity:2,
       alignSelf:'center'
      }}
      >
      <Container height={"37%"} width={'100%'} style={{
      }}>
        <Image
          source={
            require('./src/assets/dis.png')
          }
          style={{
            width:"100%",
            alignSelf:'center'
          }}
        />
      </Container>
      <TouchableContainer 
        height={60} 
        width={60} 
        centerMain 
        borderRadius={50} 
        backgoundColor={colors.grren}
        style={{
          left:90,
          bottom:40,
          elevation:30,
        }}
        >
          <RelationIcon/>
      </TouchableContainer>
      
      <Container width={'70%'} >
        <Text
        style={{alignSelf:'flex-start'}} 
        marginB={10} 
        family={poppinsBold}
        megaLarge>
        Public Relations
        </Text>
        <RnText style={{
          fontSize:fsize,
          fontFamily:robotoRegular
        }}>
        In more than 200 countries, with 20 different languages and 100 media outlets. Reach more.
        </RnText>
      </Container>
      <TouchableContainer
        rightComponent={<Right height={20} width={20}/>}
        marginT={20}
        marginL={50}
        width={Dimensions.get('screen').width/2}
        height={50}
        centerMain
        borderRadius={30}
        borderW={0.5}
        style={{
          alignSelf:'flex-start'
        }}
        // marginB={150}
      >
          <Text family={poppinsBold}>
            Know More
          </Text>
      </TouchableContainer>
      </Container>
      {/* screen3 */}
      <Container 
      width={'90%'} 
      alignItems='center'
      backgoundColor='white'
      marginT={30}
      borderRadius={20}
      style={{
       elevation:30,
       shadowOpacity:2,
       alignSelf:'center'
      }}
      >
      <Container height={"37%"} width={'100%'} style={{
      }}>
        <Image
          source={
            require('./src/assets/dis.png')
          }
          style={{
            width:"100%",
            alignSelf:'center'
          }}
        />
      </Container>
      <TouchableContainer 
        height={60} 
        width={60} 
        centerMain 
        borderRadius={50} 
        backgoundColor={colors.grren}
        style={{
          left:90,
          bottom:40,
          elevation:30,
        }}
        >
          <RelationIcon/>
      </TouchableContainer>
      
      <Container width={'70%'} >
        <Text
        style={{alignSelf:'flex-start'}} 
        marginB={10} 
        family={poppinsBold}
        megaLarge>
        Public Relations
        </Text>
        <RnText style={{
          fontSize:fsize,
          fontFamily:robotoRegular
        }}>
        In more than 200 countries, with 20 different languages and 100 media outlets. Reach more.
        </RnText>
      </Container>
      <TouchableContainer
        rightComponent={<Right height={20} width={20}/>}
        marginT={20}
        marginL={50}
        width={Dimensions.get('screen').width/2}
        height={50}
        centerMain
        borderRadius={30}
        borderW={0.5}
        style={{
          alignSelf:'flex-start'
        }}
        // marginB={150}
      >
          <Text family={poppinsBold}>
            Know More
          </Text>
      </TouchableContainer>
      </Container>
      </Swiper>
    // {/* </Container> */}
  )
}

const PageThree=()=>{
  return(

      <Swiper 
        dotStyle={{backgroundColor:colors.lightGrey,height:12,width:12, borderRadius:12}} 
        activeDotStyle={{backgroundColor:colors.darkGrey,height:12,width:12, borderRadius:12}} 
        style={{
        // height:Dimensions.get('screen').height 
          
        }}
        >
      
      
      <Container 
        width={'100%'} 
        // height={Dimensions.get('screen').height} 
        center 
        alignItems='center' 
        >
        <Text megaLarge family={poppinsRegular}> 
        Business Wire
        </Text>
        <Text megaLarge marginB={10} family={poppinsBold}>
          News 
        </Text>
     
 
      <Container width={'90%'} backgoundColor='white' borderRadius={20} style={{elevation:50}}>
        {/* <News height={"40%"} width={'100%'} style={{borderRadius:20,}}/> */}
        <Image
          source={
            require('./src/assets/news.png')
          }
          style={{
            width:"100%",
            alignSelf:'center'
          }}
        />
        <Text
          style={{alignSelf:'flex-start'}}  
          marginT={20} 
          marginB={10}
          color={colors.deepDeepBlue} 
          marginL={20}
          family={robotoRegular}
          >
          Business wire news
        </Text>
        {/* <Container width={'80%'} > */}
          <Text large marginL={20} family={poppinsBold}>
          News with Multimedia
          </Text>
        {/* </Container> */}
        <Container height={0.5} width={"90%"} backgoundColor='black' marginT={10} style={{alignSelf:'center'}}/>
      
        <TouchableContainer
          rightComponent={<Right height={20} width={20}/>}
          marginT={20}
          width={Dimensions.get('screen').width/2}
          height={50}
          marginB={60}
          centerMain
          marginL={20}
          borderRadius={30}
          borderW={0.5}
          // style={{
          //   alignSelf:'flex-start'
          // }}
        >
            <Text family={poppinsRegular}>
              Know More
            </Text>
        </TouchableContainer>
      </Container>

      </Container>
      {/* screen 2 */}

      <Container 
        width={'100%'} 
        // height={Dimensions.get('screen').height} 
        center 
        alignItems='center' 
        >
        <Text megaLarge family={poppinsRegular}> 
        Business Wire
        </Text>
        <Text megaLarge marginB={10} family={poppinsBold}>
          News 
        </Text>
     
 
      <Container width={'90%'} backgoundColor='white' borderRadius={20} style={{elevation:50}}>
        {/* <News height={"40%"} width={'100%'} style={{borderRadius:20,}}/> */}
        <Image
          source={
            require('./src/assets/news.png')
          }
          style={{
            width:"100%",
            alignSelf:'center'
          }}
        />
        <Text
          style={{alignSelf:'flex-start'}}  
          marginT={20} 
          marginB={10}
          color={colors.deepDeepBlue} 
          marginL={20}
          family={robotoRegular}
          >
        Business wire news
        </Text>
        {/* <Container width={'80%'} > */}
          <Text large marginL={20} family={poppinsBold}>
          News with Multimedia
          </Text>
        {/* </Container> */}
        <Container height={0.5} width={"90%"} backgoundColor='black' marginT={10} style={{alignSelf:'center'}}/>
      
        <TouchableContainer
          rightComponent={<Right height={20} width={20}/>}
          marginT={20}
          width={Dimensions.get('screen').width/2}
          height={50}
          marginB={60}
          centerMain
          marginL={20}
          borderRadius={30}
          borderW={0.5}
          // style={{
          //   alignSelf:'flex-start'
          // }}
        >
            <Text family={poppinsRegular}>
              Know More
            </Text>
        </TouchableContainer>
      </Container>

      </Container>

      {/* screen3 */}

      <Container 
        width={'100%'} 
        // height={Dimensions.get('screen').height} 
        center 
        alignItems='center' 
        >
        <Text megaLarge family={poppinsRegular}> 
        Business Wire
        </Text>
        <Text megaLarge marginB={10} family={poppinsBold}>
          News 
        </Text>
     
 
      <Container width={'90%'} backgoundColor='white' borderRadius={20} style={{elevation:50}}>
        {/* <News height={"40%"} width={'100%'} style={{borderRadius:20,}}/> */}
        <Image
          source={
            require('./src/assets/news.png')
          }
          style={{
            width:"100%",
            alignSelf:'center'
          }}
        />
        <Text
          style={{alignSelf:'flex-start'}}  
          marginT={20} 
          marginB={10}
          color={colors.deepDeepBlue} 
          marginL={20}
          family={robotoRegular}
          >
        Business wire news
        </Text>
        {/* <Container width={'80%'} > */}
          <Text large marginL={20} family={poppinsBold}>
          News with Multimedia
          </Text>
        {/* </Container> */}
        <Container height={0.5} width={"90%"} backgoundColor='black' marginT={10} style={{alignSelf:'center'}}/>
      
        <TouchableContainer
          rightComponent={<Right height={20} width={20}/>}
          marginT={20}
          width={Dimensions.get('screen').width/2}
          height={50}
          marginB={60}
          centerMain
          marginL={20}
          borderRadius={30}
          borderW={0.5}
        >
            <Text family={poppinsRegular}>
              Know More
            </Text>
        </TouchableContainer>
      </Container>

      </Container>
      {/* screen 24*/}

      <Container 
        width={'100%'} 
        // height={Dimensions.get('screen').height} 
        center 
        alignItems='center' 
        >
        <Text megaLarge family={poppinsRegular}> 
        Business Wire
        </Text>
        <Text megaLarge marginB={10} family={poppinsBold}>
          News 
        </Text>
     
 
      <Container width={'90%'} backgoundColor='white' borderRadius={20} style={{elevation:50}}>
        {/* <News height={"40%"} width={'100%'} style={{borderRadius:20,}}/> */}
        <Image
          source={
            require('./src/assets/news.png')
          }
          style={{
            width:"100%",
            alignSelf:'center'
          }}
        />
        <Text
          style={{alignSelf:'flex-start'}}  
          marginT={20} 
          marginB={10}
          color={colors.deepDeepBlue} 
          marginL={20}
          family={robotoRegular}
          >
        Business wire news
        </Text>
        {/* <Container width={'80%'} > */}
          <Text large marginL={20} family={poppinsBold}>
          News with Multimedia
          </Text>
        {/* </Container> */}
        <Container height={0.5} width={"90%"} backgoundColor='black' marginT={10} style={{alignSelf:'center'}}/>
      
        <TouchableContainer
          rightComponent={<Right height={20} width={20}/>}
          marginT={20}
          width={Dimensions.get('screen').width/2}
          height={50}
          marginB={60}
          centerMain
          marginL={20}
          borderRadius={30}
          borderW={0.5}
          // style={{
          //   alignSelf:'flex-start'
          // }}
        >
            <Text family={poppinsRegular}>
              Know More
            </Text>
        </TouchableContainer>
      </Container>

      </Container>
      </Swiper>
    // {/* </Container> */}
  )
}

const PageFour=()=>{
  return(      
      <Container 
        height={Dimensions.get('screen').height} 
        width={'100%'} 
        // center 
        alignItems='center' >
        
        <Text 
          megaLarge 
          marginB={30}
          family={poppinsBold}
          >
        Education 
        </Text>
     
      <Container width={'90%'} height={'70%'} backgoundColor='white' borderRadius={20} style={{elevation:50}}>
        {/* <Education height={"40%"} width={'100%'} style={{borderRadius:20,}}/> */}
        <Image
          source={
            require('./src/assets/eduction.png')
          }
          style={{
            width:"100%",
            alignSelf:'center'
          }}
        />
        <Text color={colors.grey} family={poppinsRegular} style={{
        alignSelf:'flex-start',
        marginLeft:20,
        marginTop:10
      }}>
        Blog Post
      </Text>
      <Text  style={{alignSelf:'flex-start'}}  megaLarge family={poppinsBold} marginT={10} marginB={10} marginL={20}>
        Business wire Blog
        </Text>
        <RnText style={{
        alignSelf:'flex-start',
        marginLeft:20,
        marginTop:10,
        fontFamily:robotoRegular
      }}>
       Learn about the nuances of SPAC communications and how PR and communications teams
        can successfully break through the noise to promote SPAC news.
      </RnText>
      <TouchableContainer
        // rightComponent={<Upload/>}
        marginT={20}
        backgoundColor={colors.deepBlue}
        marginL={20}
        width={Dimensions.get('screen').width/2}
        height={50}
        centerMain
        borderRadius={30}
        borderW={0.5}
        style={{
          alignSelf:'flex-start'
        }}
      >
          <Text style={{color:'white'}} family={poppinsRegular}>
          Got To Blog
          </Text>
      </TouchableContainer>
      </Container>
      </Container>
     
  )
}

const PageFive=()=>{
  return(      
      <Container 
        // height={Dimensions.get('screen').height} 
        width={'99%'} 
        center 
        alignItems='center' 
        backgoundColor='white'
        style={{
          elevation:30
        }}
        >
        {/* <Logo/> */}
        <Image
          source={
            require("./src/assets/logo.png")
          }
        />
        <Text megaLarge marginB={10} family={poppinsRegular}>
        About 
        </Text>
        <Text megaLarge marginB={10} family={poppinsBold}>
        Business Wire
        </Text>
        <RnText style={{fontFamily:robotoRegular, fontSize:18}}>
          For <Text  family={robotoRegular} style={{fontSize:18}}>60 years, </Text>we conected
        </RnText>
        <RnText style={{ marginBottom:30, fontSize:18, fontFamily:robotoBold}}>
        organizations <RnText style={{fontSize:18, fontFamily:robotoRegular}}>and</RnText> audiences.
        </RnText>
        <Container height={0.5} width={"80%"}  backgoundColor='black' marginT={50} marginB={50}/>
        <Text
         megaLarge 
         marginL={10} 
         marginR={10} 
         marginB={50} 
         family={poppinsBold}
         style={{
          textAlign:'center',
          fontSize:24
        }}>
            Business Wire, a Berkshire Hathaway company, is the global leader in press release distribution and regulatory disclosure.
        </Text>
        <RnText style={{
          textAlign:'center',
          marginLeft:40,
          marginRight:40,
          marginBottom:50,
          fontFamily:robotoRegular,
          fontSize:18
        }}>
            Public relations, investor relations, public policy, and marketing professionals rely on Business Wire for secure and accurate distribution of market-moving news and multimedia.
        </RnText>

        <RnText style={{
          textAlign:'center',
          marginLeft:40,
          marginRight:40,
          marginBottom:40,
          fontSize:16
        }}>
        
        <Text family={robotoRegular} >Founded in 1961,</Text> Business Wire is a trusted source for news organizations, journalists, investment professionals, and regulatory authorities, delivering news directly into editorial systems and leading online news sources via its multi-patented NX Network. Business Wire’s global newsrooms are available to meet the needs of communications professionals and news media worldwide.
        </RnText>
      </Container>
     
  )
}

const PageSix=()=>{
  return(      
      <Container 
        // height={Dimensions.get('screen').height} 
        width={'99%'} 
        center 
        marginT={50}
        alignItems='center' >
          <AdvOne style={{
            marginBottom:10
          
          }}/>
          <AdvTwo style={{
            marginBottom:10 
          }}/>
          <AdvThree/>
      </Container>
     
  )
}

const PageSeven=()=>{
  return(      
      <Container 
        // height={Dimensions.get('screen').height} 
        width={'100%'} 
        center 
        backgoundColor={colors.purple}
        marginT={50}
        >
          <Image
          source={
            require('./src/assets/logo2.png')
          }
          style={{
            // width:"100%",
            marginTop:10,
            alignSelf:'center'
          }}
        />
          <Container marginT={50}  width={"100%"} row>
            <Container flex={1.5}   marginL={30}>
              <Text small color='white'  family={'Poppins-Thin'}>
              More from Business Wire
              </Text>
              <TouchableContainer marginT={20}>
                <Text small family={poppinsRegular}  color='white'>Blog</Text>
              </TouchableContainer>
              <TouchableContainer marginT={10}>
                <Text small family={poppinsRegular}  color='white'>Contact Us</Text>
              </TouchableContainer>
              <TouchableContainer marginT={10}>
                <Text small family={poppinsRegular}  color='white'>Privacy</Text>
              </TouchableContainer>
              <TouchableContainer marginT={10}>
                <Text small family={poppinsRegular}  color='white'>Manage Cookies</Text>
              </TouchableContainer>
            </Container>
            <Container flex={1} >
              <Text small color='white'  family={'Poppins-Thin'}>
                Countries
              </Text>
              <TouchableContainer marginT={20} >
                <Text small family={poppinsRegular} color='white'>Uk/Ireland</Text>
              </TouchableContainer>
              <TouchableContainer marginT={10} >
                <Text small family={poppinsRegular}  color='white'>France</Text>
              </TouchableContainer>
              <TouchableContainer marginT={10} >
                <Text small family={poppinsRegular}  color='white'>Hong Kong</Text>
              </TouchableContainer>
              <TouchableContainer marginT={10}>
                <Text small family={poppinsRegular}  color='white'>Italy</Text>
              </TouchableContainer>
              <TouchableContainer marginT={10} >
                <Text small family={poppinsRegular}  color='white'>Japan</Text>
              </TouchableContainer>
            </Container>
          </Container>
          <Container width={"90%"} height={0.5} backgoundColor='white' marginB={30} marginT={50}/>
          <Text small color='white' style={{alignSelf:'flex-start',marginLeft:30}}  family={'Poppins-Thin'}>
            Get in touch
          </Text>
          <Container marginT={30}  width={"100%"} row>
            <Container flex={1.3}   marginL={30} >
              <Text small color='white' family={poppinsRegular} >
              Email address
              </Text>
              <TouchableContainer marginT={20} LeftComponent={<Mail style={{alignSelf:'center', marginRight:5}}/>}>
                <Text small  family={poppinsRegular}  color='white' style={{fontSize:12}}>info@businesswire.com</Text>
              </TouchableContainer>
              
            </Container>
            <Container flex={1} alignItems='center' marginR={20} >
              <Text small color='white' family={poppinsRegular} >
                Contact Us
              </Text>
              <TouchableContainer marginT={20} LeftComponent={<Phone  style={{alignSelf:'center', marginRight:5}}/>}  >
                <Text small family={poppinsRegular} color='white' style={{fontSize:12}}>+1.888.381.9473</Text>
              </TouchableContainer>
              
            </Container>
          </Container>
          <Container width={"90%"} height={0.5} backgoundColor='white' marginB={30} marginT={50}/>
          <Text small color='white' family={poppinsLight} style={{alignSelf:'flex-start',marginLeft:30}}>
          Social media
          </Text>
          <Container marginT={30}  width={"100%"} row marginL={55}>
            <TouchableContainer height={30} width={30}>
              <Facebook/>
            </TouchableContainer>
            <TouchableContainer height={30} width={30}>
              <Youtube/>
            </TouchableContainer>
            <TouchableContainer height={30} width={30}>
              <LinkedIn/>
            </TouchableContainer>
          </Container>
          <Container height={20} width={'100%'} backgoundColor='#02071B' alignItems='center'>
          <Text small color='white' family={'Poppins-Thin'}>
          © 2021 Business Wire, Inc.
          </Text>
          </Container>
      </Container>
     
  )
}
export default Home;