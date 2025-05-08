import { useMediaQuery } from "react-responsive";
import Header from "../../components/header/Header";
import Footer from '../../components/footer/Footer';
import MainSlider from '../../components/mainSlider/MainSlider';
import SubHeader from "../../components/subHeader/SubHeader";
import ProductsSection from "../../components/productsSection/ProductsSection";
import {  useParams } from "react-router-dom";
import { images } from "../../utils/images";
import About from "../../components/about/About";

const rolls = [
    {   
        img: images.slide1,
        weight: 270,
        desc: 'Запечений рол з вугром',
        composition: 'Склад: рис, норі, вугор, крем-сир, японський омлет, сирний мікс, соус Унагі.',
        price: 230,
        id:1
    },
    {   
        img: images.slide9,
        weight: 260,
        desc: 'Запечений рол з лососем та сиром чеддер',
        composition: 'Склад: рис, норі, лосось, крем-сир, японський омлет, сирний мікс, соус унагі, кунжут.',
        price: 178,
        id:2
    },
    {
        img: images.slide4,
        weight: 280,
        desc: 'Запечений рол з креветкою',
        composition: 'Склад: рис, норі, креветка, крем-сир, японський омлет, сирний мікс, ікра тобіко, соус солодкий чилі.',
        price: 181,
        id:3
    },
    {
        img: images.slide5,
        weight: 260,
        desc: 'Запечений рол з лососем',
        composition: 'Склад: рис, норі, лосось, крем-сир, крабовий мікс, японський омлет, сирний мікс, соус Унагі, кунжут.',
        price: 220,
        id:4
    },
    {
        img: images.slide6,
        weight: 280,
        desc: 'Запечений рол з тунцем та соусом солодкий чилі',
        composition: 'Склад: рис, норі, тунець, крем-сир, японський омлет, сирний мікс, солодкий чилі, нитки чилі. (пікантний).',
        price: 176,
        id:5
    },
    {
        img: images.slide7,
        weight: 540,
        desc: 'Запечений з креветкою + Запечений з лососем + Coca-Cola 0,5 у подарунок',
        composition: 'Склад: Запечений рол з креветкою, Запечений рол з лососем і сиром чеддер, Coca-Cola 0,5.',
        price: 359,
        id:6
    },
]

const sets = [
    {   
        img: images.slide1,
        weight: 270,
        desc: 'Запечений рол з вугром',
        composition: 'Склад: рис, норі, вугор, крем-сир, японський омлет, сирний мікс, соус Унагі.',
        price: 230,
        id:1
    },
    {   
        img: images.slide9,
        weight: 260,
        desc: 'Запечений рол з лососем та сиром чеддер',
        composition: 'Склад: рис, норі, лосось, крем-сир, японський омлет, сирний мікс, соус унагі, кунжут.',
        price: 178,
        id:2
    },
    {
        img: images.slide4,
        weight: 280,
        desc: 'Запечений рол з креветкою',
        composition: 'Склад: рис, норі, креветка, крем-сир, японський омлет, сирний мікс, ікра тобіко, соус солодкий чилі.',
        price: 181,
        id:3
    },
    {
        img: images.slide5,
        weight: 260,
        desc: 'Запечений рол з лососем',
        composition: 'Склад: рис, норі, лосось, крем-сир, крабовий мікс, японський омлет, сирний мікс, соус Унагі, кунжут.',
        price: 220,
        id:4
    },
    {
        img: images.slide6,
        weight: 280,
        desc: 'Запечений рол з тунцем та соусом солодкий чилі',
        composition: 'Склад: рис, норі, тунець, крем-сир, японський омлет, сирний мікс, солодкий чилі, нитки чилі. (пікантний).',
        price: 176,
        id:5
    },
    {
        img: images.slide7,
        weight: 540,
        desc: 'Запечений з креветкою + Запечений з лососем + Coca-Cola 0,5 у подарунок',
        composition: 'Склад: Запечений рол з креветкою, Запечений рол з лососем і сиром чеддер, Coca-Cola 0,5.',
        price: 359,
        id:6
    },
]

const drinks = [
    {   
        img: images.slide1,
        weight: 270,
        desc: 'Запечений рол з вугром',
        composition: 'Склад: рис, норі, вугор, крем-сир, японський омлет, сирний мікс, соус Унагі.',
        price: 230,
        id:1
    },
    {   
        img: images.slide9,
        weight: 260,
        desc: 'Запечений рол з лососем та сиром чеддер',
        composition: 'Склад: рис, норі, лосось, крем-сир, японський омлет, сирний мікс, соус унагі, кунжут.',
        price: 178,
        id:2
    },
    {
        img: images.slide4,
        weight: 280,
        desc: 'Запечений рол з креветкою',
        composition: 'Склад: рис, норі, креветка, крем-сир, японський омлет, сирний мікс, ікра тобіко, соус солодкий чилі.',
        price: 181,
        id:3
    },
    {
        img: images.slide5,
        weight: 260,
        desc: 'Запечений рол з лососем',
        composition: 'Склад: рис, норі, лосось, крем-сир, крабовий мікс, японський омлет, сирний мікс, соус Унагі, кунжут.',
        price: 220,
        id:4
    },
    {
        img: images.slide6,
        weight: 280,
        desc: 'Запечений рол з тунцем та соусом солодкий чилі',
        composition: 'Склад: рис, норі, тунець, крем-сир, японський омлет, сирний мікс, солодкий чилі, нитки чилі. (пікантний).',
        price: 176,
        id:5
    },
    {
        img: images.slide7,
        weight: 540,
        desc: 'Запечений з креветкою + Запечений з лососем + Coca-Cola 0,5 у подарунок',
        composition: 'Склад: Запечений рол з креветкою, Запечений рол з лососем і сиром чеддер, Coca-Cola 0,5.',
        price: 359,
        id:6
    },
]

const chef = [
    {   
        img: images.slide1,
        weight: 270,
        desc: 'Запечений рол з вугром',
        composition: 'Склад: рис, норі, вугор, крем-сир, японський омлет, сирний мікс, соус Унагі.',
        price: 230,
        id:1
    },
    {   
        img: images.slide9,
        weight: 260,
        desc: 'Запечений рол з лососем та сиром чеддер',
        composition: 'Склад: рис, норі, лосось, крем-сир, японський омлет, сирний мікс, соус унагі, кунжут.',
        price: 178,
        id:2
    },
    {
        img: images.slide4,
        weight: 280,
        desc: 'Запечений рол з креветкою',
        composition: 'Склад: рис, норі, креветка, крем-сир, японський омлет, сирний мікс, ікра тобіко, соус солодкий чилі.',
        price: 181,
        id:3
    },
    {
        img: images.slide5,
        weight: 260,
        desc: 'Запечений рол з лососем',
        composition: 'Склад: рис, норі, лосось, крем-сир, крабовий мікс, японський омлет, сирний мікс, соус Унагі, кунжут.',
        price: 220,
        id:4
    },
    {
        img: images.slide6,
        weight: 280,
        desc: 'Запечений рол з тунцем та соусом солодкий чилі',
        composition: 'Склад: рис, норі, тунець, крем-сир, японський омлет, сирний мікс, солодкий чилі, нитки чилі. (пікантний).',
        price: 176,
        id:5
    },
    {
        img: images.slide7,
        weight: 540,
        desc: 'Запечений з креветкою + Запечений з лососем + Coca-Cola 0,5 у подарунок',
        composition: 'Склад: Запечений рол з креветкою, Запечений рол з лососем і сиром чеддер, Coca-Cola 0,5.',
        price: 359,
        id:6
    },
]
const pizza = [
    {   
        img: images.slide1,
        weight: 270,
        desc: 'Запечений рол з вугром',
        composition: 'Склад: рис, норі, вугор, крем-сир, японський омлет, сирний мікс, соус Унагі.',
        price: 230,
        id:1
    },
    {   
        img: images.slide9,
        weight: 260,
        desc: 'Запечений рол з лососем та сиром чеддер',
        composition: 'Склад: рис, норі, лосось, крем-сир, японський омлет, сирний мікс, соус унагі, кунжут.',
        price: 178,
        id:2
    },
    {
        img: images.slide4,
        weight: 280,
        desc: 'Запечений рол з креветкою',
        composition: 'Склад: рис, норі, креветка, крем-сир, японський омлет, сирний мікс, ікра тобіко, соус солодкий чилі.',
        price: 181,
        id:3
    },
    {
        img: images.slide5,
        weight: 260,
        desc: 'Запечений рол з лососем',
        composition: 'Склад: рис, норі, лосось, крем-сир, крабовий мікс, японський омлет, сирний мікс, соус Унагі, кунжут.',
        price: 220,
        id:4
    },
    {
        img: images.slide6,
        weight: 280,
        desc: 'Запечений рол з тунцем та соусом солодкий чилі',
        composition: 'Склад: рис, норі, тунець, крем-сир, японський омлет, сирний мікс, солодкий чилі, нитки чилі. (пікантний).',
        price: 176,
        id:5
    },
    {
        img: images.slide7,
        weight: 540,
        desc: 'Запечений з креветкою + Запечений з лососем + Coca-Cola 0,5 у подарунок',
        composition: 'Склад: Запечений рол з креветкою, Запечений рол з лососем і сиром чеддер, Coca-Cola 0,5.',
        price: 359,
        id:6
    },
]

const dataMap = {
  roll: { data: rolls, title: 'Роли' },
  set: { data: sets, title: 'Сети' },
  drinks: { data: drinks, title: 'Напої' },
  chef: { data: chef, title: 'Від шефа' },
  pizza: {data: pizza, title: 'Піца'}
};

const MenuCategoryPage = () => {
  const { menuItem } = useParams();
  const isMobile = useMediaQuery({maxWidth: 767})

  const selected = dataMap[menuItem];


  return (
    <>
      {isMobile ? (
        <>
         <Header />
        {
        menuItem !== 'special' ?  <MainSlider /> : null
        }
         {selected ? (
        <ProductsSection products={selected.data} title={selected.title} />
      ) : (
       null
      )}
       <About/>
       <Footer />
        </>
      ) : (
        <>
        <Header />
        <SubHeader />
        {
        menuItem !== 'special' ?  <MainSlider /> : null
        }
         {selected ? (
        <ProductsSection products={selected.data} title={selected.title} />
      ) : (
       null
      )}
       <About/>
       <Footer />
        </>
        
      )}
    
      
     
     
     
     

     
     
    </>
  );
};

export default MenuCategoryPage;
