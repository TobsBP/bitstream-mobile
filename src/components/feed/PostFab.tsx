import { MaterialIcons } from '@expo/vector-icons';
import { Pressable } from 'react-native';

type Props = {
  onPress?: () => void;
};

export function PostFab({ onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      className="absolute bottom-24 right-6 h-14 w-14 items-center justify-center bg-primary"
      style={{
        shadowColor: '#C7BFFF',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 0,
        elevation: 8,
      }}
    >
      <MaterialIcons name="add" size={32} color="#383000" />
    </Pressable>
  );
}
