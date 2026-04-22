import { Text, View } from 'react-native';

type Props = {
  label?: string;
  trend: string;
  participants: string;
};

export function TrendingBanner({ label = 'CURRENT_TREND', trend, participants }: Props) {
  return (
    <View className="mb-8 bg-surface-container-low p-4">
      <View className="flex-row items-end justify-between">
        <View>
          <Text className="text-[10px] font-bold uppercase tracking-widest text-primary">
            {label}
          </Text>
          <Text className="mt-1 text-2xl font-black uppercase italic leading-none text-on-surface">
            {trend}
          </Text>
        </View>
        <View className="items-end">
          <Text className="text-[10px] uppercase tracking-widest text-on-surface/50">
            PARTICIPANTS
          </Text>
          <Text className="text-lg font-bold text-on-surface">{participants}</Text>
        </View>
      </View>
    </View>
  );
}
