import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import MainSlider from '../../components/mainSlider/MainSlider'
import SubHeader from "../../components/subHeader/SubHeader"
import { useMediaQuery } from "react-responsive";
const HomePage = () => {

    const isMobile = useMediaQuery({maxWidth: 767})

    return ( 
        <>
        <Header/>
        {isMobile ? null : <SubHeader/>}
        <MainSlider/>
        <Footer/>
        </>
     );
}
 
export default HomePage;