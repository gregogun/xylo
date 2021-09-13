import {
  SiMcdonalds,
  SiSparkfun,
  SiUber,
  SiPaypal,
  SiUnitedairlines
} from 'react-icons/si';
import {
  IoPizzaOutline,
  IoCafeOutline,
  IoBarbellOutline,
  IoAirplane,
  IoHelpCircleOutline,
  IoCardOutline,
  IoCarOutline
} from 'react-icons/io5';
import { IconType } from 'react-icons/lib';

const useIcon = () => {
  // fallback function to assign icon based on category

  // TODO: add type for array to pass to function
  const getCategory = (arr): IconType => {
    if (arr.includes('Gym')) {
      return IoBarbellOutline;
    }
    if (arr.includes('Airlines')) {
      return IoAirplane;
    }
    if (arr.includes('Coffee Shop')) {
      return IoCafeOutline;
    }
    if (arr.includes('Food and Drink')) {
      return IoPizzaOutline;
    }
    if (arr.includes('Transfer')) {
      return IoCardOutline;
    }
    if (arr.includes('Travel')) {
      return IoAirplane;
    }
    if (arr.includes('Taxi')) {
      return IoCarOutline;
    }
    return IoHelpCircleOutline;
  };

  // function to assign brand icon based on name
  const getBrand = (name: string, category: []): IconType => {
    if (name.includes('McDonald')) {
      return SiMcdonalds;
    }
    if (name.includes('SparkFun')) {
      return SiSparkfun;
    }
    if (name.includes('Uber')) {
      return SiUber;
    }
    if (name.includes('United Airlines')) {
      return SiUnitedairlines;
    }
    if (name.includes('Paypal')) {
      return SiPaypal;
    }
    return getCategory(category);
  };

  return { getBrand };
};

export default useIcon;
