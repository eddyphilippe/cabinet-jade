declare module 'react-icons/fi' {
  import { ComponentType, SVGAttributes } from 'react';
  
  export interface IconBaseProps extends SVGAttributes<SVGElement> {
    size?: string | number;
    color?: string;
    title?: string;
  }

  type IconType = ComponentType<IconBaseProps>;
  
  export const FiActivity: IconType;
  export const FiAward: IconType;
  export const FiUsers: IconType;
  export const FiHeart: IconType;
  export const FiBriefcase: IconType;
  export const FiTarget: IconType;
  export const FiCheckCircle: IconType;
  export const FiArrowRight: IconType;
  export const FiCalendar: IconType;
  export const FiMessageCircle: IconType;
  export const FiHome: IconType;
  export const FiArrowLeft: IconType;
  export const FiCheck: IconType;
  export const FiSend: IconType;
  export const FiMapPin: IconType;
  export const FiPhone: IconType;
  export const FiMail: IconType;
  export const FiClock: IconType;
  export const FiInfo: IconType;
  export const FiChevronDown: IconType;
  export const FiFacebook: IconType;
  export const FiInstagram: IconType;
  export const FiX: IconType;
  export const FiMenu: IconType;
} 