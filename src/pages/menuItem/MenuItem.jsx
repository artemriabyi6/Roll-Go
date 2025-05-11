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
        img: images.roll1,
        weight: 270,
        desc: 'Запечений рол з вугром',
        composition: 'Склад: рис, норі, вугор, крем-сир, японський омлет, сирний мікс, соус Унагі.',
        price: 230,
        id:1
    },
    {   
        img: images.roll2,
        weight: 260,
        desc: 'Запечений рол з лососем та сиром чеддер',
        composition: 'Склад: рис, норі, лосось, крем-сир, японський омлет, сирний мікс, соус унагі, кунжут.',
        price: 178,
        id:2
    },
    {
        img: images.roll3,
        weight: 280,
        desc: 'Запечений рол з креветкою',
        composition: 'Склад: рис, норі, креветка, крем-сир, японський омлет, сирний мікс, ікра тобіко, соус солодкий чилі.',
        price: 181,
        id:3
    },
    {
        img: images.roll4,
        weight: 260,
        desc: 'Запечений рол з лососем',
        composition: 'Склад: рис, норі, лосось, крем-сир, крабовий мікс, японський омлет, сирний мікс, соус Унагі, кунжут.',
        price: 220,
        id:4
    },
    {
        img: images.roll5,
        weight: 280,
        desc: 'Запечений рол з тунцем та соусом солодкий чилі',
        composition: 'Склад: рис, норі, тунець, крем-сир, японський омлет, сирний мікс, солодкий чилі, нитки чилі. (пікантний).',
        price: 176,
        id:5
    },
    {
        img: images.roll6,
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
        weight: 720,
        desc: 'Сет філадельфія',
        composition: 'Склад: рис, норі, вугор, крем-сир, японський омлет, сирний мікс, соус Унагі.',
        price: 800,
        id:7
    },
    {   
        img: images.slide9,
        weight: 660,
        desc: 'Сет драконів',
        composition: 'Склад: рис, норі, лосось, крем-сир, японський омлет, сирний мікс, соус унагі, кунжут.',
        price: 699,
        id:8
    },
    {
        img: images.slide4,
        weight: 930,
        desc: 'Сет фірмовий',
        composition: 'Склад: рис, норі, креветка, крем-сир, японський омлет, сирний мікс, ікра тобіко, соус солодкий чилі.',
        price: 799,
        id:9
    },
    {
        img: images.slide5,
        weight: 1110,
        desc: 'Сет сімейний',
        composition: 'Склад: рис, норі, лосось, крем-сир, крабовий мікс, японський омлет, сирний мікс, соус Унагі, кунжут.',
        price: 999,
        id:10
    },
    {
        img: images.slide6,
        weight: 700,
        desc: 'Сет стандартний',
        composition: 'Склад: рис, норі, тунець, крем-сир, японський омлет, сирний мікс, солодкий чилі, нитки чилі. (пікантний).',
        price: 750,
        id:11
    },
    {
        img: images.slide7,
        weight: 1399,
        desc: 'Сет роял',
        composition: 'Склад: Запечений рол з креветкою, Запечений рол з лососем і сиром чеддер, Coca-Cola 0,5.',
        price: 1200,
        id:12
    },
]

const drinks = [
    {   
        img: images.drink1,
        weight: 400,
        desc: 'Комбуча',
        // composition: 'Склад: рис, норі, вугор, крем-сир, японський омлет, сирний мікс, соус Унагі.',
        price: 73,
        id:13
    },
    {   
        img: images.drink2,
        weight: 400,
        desc: 'Спрайт',
        // composition: 'Склад: рис, норі, лосось, крем-сир, японський омлет, сирний мікс, соус унагі, кунжут.',
        price: 58,
        id:14
    },
    {
        img: images.drink3,
        weight: 400,
        desc: 'Мохіто',
        // composition: 'Склад: рис, норі, креветка, крем-сир, японський омлет, сирний мікс, ікра тобіко, соус солодкий чилі.',
        price: 49,
        id:15
    },
    {
        img: images.drink4,
        weight: 400,
        desc: 'Апельсиновий фреш',
        // composition: 'Склад: рис, норі, лосось, крем-сир, крабовий мікс, японський омлет, сирний мікс, соус Унагі, кунжут.',
        price: 80,
        id:16
    },
    {
        img: images.drink5,
        weight: 300,
        desc: 'Айс латте',
        // composition: 'Склад: рис, норі, тунець, крем-сир, японський омлет, сирний мікс, солодкий чилі, нитки чилі. (пікантний).',
        price: 76,
        id:17
    },
    {
        img: images.drink2,
        weight: 400,
        desc: 'Кока-кола',
        // composition: 'Склад: Запечений рол з креветкою, Запечений рол з лососем і сиром чеддер, Coca-Cola 0,5.',
        price: 59,
        id:18
    },
]

const chef = [
    {   
        img: images.chef1,
        weight: 700,
        desc: 'Запечений рол з вугром від Шефа',
        composition: 'Склад: рис, норі, вугор, крем-сир, японський омлет, сирний мікс, соус Унагі.',
        price: 900,
        id:19
    },
    {   
        img: images.chef2,
        weight: 960,
        desc: 'Запечений рол з лососем та сиром чеддер від Шефа',
        composition: 'Склад: рис, норі, лосось, крем-сир, японський омлет, сирний мікс, соус унагі, кунжут.',
        price: 1178,
        id:20
    },
    {
        img: images.chef3,
        weight: 1280,
        desc: 'Запечений рол з креветкою від Шефа',
        composition: 'Склад: рис, норі, креветка, крем-сир, японський омлет, сирний мікс, ікра тобіко, соус солодкий чилі.',
        price: 1281,
        id:21
    },
    {
        img: images.chef4,
        weight: 1260,
        desc: 'Запечений рол з лососем від Шефа',
        composition: 'Склад: рис, норі, лосось, крем-сир, крабовий мікс, японський омлет, сирний мікс, соус Унагі, кунжут.',
        price: 999,
        id:22
    },
    {
        img: images.chef5,
        weight: 1080,
        desc: 'Запечений рол з тунцем та соусом солодкий чилі від Шефа',
        composition: 'Склад: рис, норі, тунець, крем-сир, японський омлет, сирний мікс, солодкий чилі, нитки чилі. (пікантний).',
        price: 1299,
        id:23
    },
    {
        img: images.chef6,
        weight: 1540,
        desc: 'Запечений з лососем + Coca-Cola 0,5 у подарунок',
        composition: 'Склад: Запечений рол з креветкою, Запечений рол з лососем і сиром чеддер, Coca-Cola 0,5.',
        price: 1359,
        id:24
    },
    {
        img: images.chef7,
        weight: 1040,
        desc: 'Запечений з креветкою + Запечений з лососем від Шефа',
        composition: 'Склад: Запечений рол з креветкою, Запечений рол з лососем і сиром чеддер, Coca-Cola 0,5.',
        price: 899,
        id:25
    },
]
const pizza = [
    {   
        img: images.pizza1,
        weight: 699,
        desc: 'Пепероні',
        composition: 'Склад: салямі, твердий сир, червоний соус, шампіньйони, базилік',
        price: 260,
        id:26
    },
    {   
        img: images.pizza6,
        weight: 699,
        desc: 'Кватро формаджі',
        composition: 'Склад: твердий сир, пармезан, сулугуні, фета',
        price: 299,
        id:27
    },
    {
        img: images.pizza3,
        weight: 699,
        desc: 'Курка-Ананас',
        composition: 'Склад: курка, ананас, білий соус, твердий сир',
        price: 181,
        id:28
    },
    {
        img: images.pizza4,
        weight: 699,
        desc: 'Мисливська',
        composition: 'Склад: мисливські ковбаски, червоний соус, чилі, твердий сир, болгарський перець, томати',
        price: 220,
        id:29
    },
    {
        img: images.pizza5,
        weight: 699,
        desc: 'Фірмова',
        composition: 'Склад: курка, томати, червоний соус, базилік, сирні бортики, каперси',
        price: 176,
        id:30
    },
    {
        img: images.pizza6,
        weight: 699,
        desc: "Чотири м'яса",
        composition: 'Склад: курка, шинка, ковбаски, бекон, томати, червоний соус, твердий сир',
        price: 359,
        id:31
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
