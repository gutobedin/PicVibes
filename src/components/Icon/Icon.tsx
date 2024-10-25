import React from 'react';
import {EyeOffIcon} from '../../assets/icons/EyeOffIcon';
import {EyeOnIcon} from '../../assets/icons/EyeOnIcon';
import {ThemeColors} from '../../theme/theme';
import {useAppTheme} from '../../hooks/useAppTheme';
import {ArrowLeft} from '../../assets/icons/ArrowLeft';
import {ArrowRight} from '../../assets/icons/ArrowRight';
import {Bell} from '../../assets/icons/Bell';
import {BellOn} from '../../assets/icons/BellOn';
import {Bookmark} from '../../assets/icons/Bookmark';
import {BookmarkFill} from '../../assets/icons/BookmarkFill';
import {Camera} from '../../assets/icons/Camera';
import {Chat} from '../../assets/icons/Chat';
import {ChatOn} from '../../assets/icons/ChatOn';
import {Check} from '../../assets/icons/Check';
import {ChevronRight} from '../../assets/icons/ChevronRight';
import {Comment} from '../../assets/icons/Comment';
import {FlashOff} from '../../assets/icons/FlashOff';
import {FlashOn} from '../../assets/icons/FlashOn';
import {Heart} from '../../assets/icons/Heart';
import {HeartFill} from '../../assets/icons/HeartFill';
import {Home} from '../../assets/icons/Home';
import {Message} from '../../assets/icons/Message';
import {More} from '../../assets/icons/More';
import {NewPost} from '../../assets/icons/NewPost';
import {Profile} from '../../assets/icons/Profile';
import {ProfileFill} from '../../assets/icons/ProfileFill';
import {Search} from '../../assets/icons/Search';
import {Send} from '../../assets/icons/Send';
import {Trash} from '../../assets/icons/Trash';
import {Settings} from '../../assets/icons/Settings';
import {Pressable} from 'react-native';

export interface IconBase {
  size?: number;
  color?: string;
}

interface Props {
  name: IconName;
  color?: ThemeColors;
  size?: number;
  onPress?: () => void;
}

const iconRegistry = {
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  bell: Bell,
  bellOn: BellOn,
  bookmark: Bookmark,
  bookmarkFill: BookmarkFill,
  camera: Camera,
  chat: Chat,
  chatOn: ChatOn,
  check: Check,
  chevronRight: ChevronRight,
  comment: Comment,
  eyeOff: EyeOffIcon,
  eyeOn: EyeOnIcon,
  flashOff: FlashOff,
  flashOn: FlashOn,
  heart: Heart,
  heartFill: HeartFill,
  home: Home,
  message: Message,
  more: More,
  newPost: NewPost,
  profile: Profile,
  profileFill: ProfileFill,
  search: Search,
  send: Send,
  settings: Settings,
  trash: Trash,
};

type IconType = typeof iconRegistry;

type IconName = keyof IconType;

export function Icon({
  name,
  color = 'backgroundContrast',
  size = 20,
  onPress,
}: Props) {
  const {colors} = useAppTheme();
  const SVGIcon = iconRegistry[name];

  if (onPress) {
    return (
      <Pressable hitSlop={15} onPress={onPress}>
        <SVGIcon color={colors[color]} size={size} />
      </Pressable>
    );
  }
  return <SVGIcon color={colors[color]} size={size} />;
}
