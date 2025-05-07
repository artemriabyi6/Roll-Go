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
    { icon: images.icons.roll, text: 'Роли', route: 'roll' },
    { icon: images.icons.set, text: 'Сети', route: 'set' },
    { icon: images.icons.geisha, text: "Від Шефа", route: 'chef' },
    { icon: images.icons.can, text: 'Напої', route: 'drinks' },
    { icon: images.icons.pizza, text: 'Піца', route: 'pizza' },
    { icon: images.icons.sale, text: 'Акції', route: 'special' },
  ];

  const normalize = str => str
    .toLowerCase()
    .replace(/'/g, '')
    .replace(/\s+/g, '-')
    .trim();

    


  return (
    <div className={`container ${styles.container}`}>
      {navItems.map(({ icon, route, text }) => {
        const normalized = normalize(route);

        const isActive = currentPath === `/${normalized}`;
        return (
          <NavItem
            key={route}
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
