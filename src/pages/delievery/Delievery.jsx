import Header from "../../components/header/Header";
import Footer from '../../components/footer/Footer'
import { useParams } from "react-router-dom";



const DelieveryPage = () => {

  const { delievery } = useParams()

    return ( 
       <>
         <Header/>
         <Footer/>
       </>
     );
}
 
export default DelieveryPage;