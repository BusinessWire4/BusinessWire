import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types'
import React from 'react'
import { HeadIcon, Menu, Shadow } from '../../assets'
import { Container } from '../../components/containers/container'
import TouchableContainer from '../../components/containers/touchableContainer'
interface Props {
    nav : DrawerNavigationHelpers
}

const Header = (props: Props) => {
    return (
        // <Container>
        <Container
         height={60} 
         row  
         width={'100%'}
         style={{
            //  backgroundColor:"red",
              shadowOpacity: 2,
              elevation: 50,
         }}
         >
            <Container flex={1} style={{
                justifyContent:'center'
            }}>
                <HeadIcon/>
            </Container>
            <TouchableContainer 
                flex={1} 
                rightComponent={<Menu height={20} width={20}/>} 
                Onpress={()=>props.nav?.openDrawer()}
            >
                
            </TouchableContainer>
        </Container>
        // </Container>

    )
}

export default Header
