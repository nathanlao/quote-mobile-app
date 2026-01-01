import { LucideIcon } from 'lucide-react-native';

type IconProps = {
  as: LucideIcon;
  size?: number;
  color?: string;
  fill?: string;
};

export function Icon({ as: Icon, size = 24, color, fill}: IconProps) {
  return <Icon size={size} color={color} strokeWidth={1.5} fill={fill}/>;
}
