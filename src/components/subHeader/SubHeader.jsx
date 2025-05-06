// import NavItem from "../navItem/NavItem";
// import { images } from "../../utils/images";
// import styles from './SubHeader.module.scss'

// const SubHeader = () => {
//     return (  
//         <div className={`container ${styles.container}`}>
//         <NavItem icon={images.icons.roll} text='Роли' />
//         <NavItem icon={images.icons.set} text='Сети' />
//         <NavItem icon={images.icons.geisha} text="З любов'ю від шефа" />
//         <NavItem icon={images.icons.can} text='Напої' />
//         <NavItem icon={images.icons.pizza} text='Піца' />
//         <NavItem icon={images.icons.sale} text='Акції' />
//     </div>
//     );
// }
 
// export default SubHeader;

import { useLocation } from "react-router-dom";
import NavItem from "../navItem/NavItem";
import { images } from "../../utils/images";
import styles from './SubHeader.module.scss';

const SubHeader = () => {
  const location = useLocation();
  const currentPath = decodeURIComponent(location.pathname.toLowerCase());


  const navItems = [
    { icon: images.icons.roll, text: 'Роли' },
    { icon: images.icons.set, text: 'Сети' },
    { icon: images.icons.geisha, text: "З любов'ю від шефа" },
    { icon: images.icons.can, text: 'Напої' },
    { icon: images.icons.pizza, text: 'Піца' },
    { icon: images.icons.sale, text: 'Акції' },
  ];

  const normalize = str => str
    .toLowerCase()
    .replace(/'/g, '')
    .replace(/\s+/g, '-')
    .trim();

    


  return (
    <div className={`container ${styles.container}`}>
      {navItems.map(({ icon, text }) => {
        const normalized = normalize(text);

        console.log('PATH:', currentPath, '| NORMALIZED:', `/${normalized}`);


        const isActive = currentPath === `/${normalized}`;
        return (
          <NavItem
            key={text}
            icon={icon}
            text={text}
            isActive={isActive}
            route={normalized}
          />
        );
      })}
    </div>
  );
};

export default SubHeader;
