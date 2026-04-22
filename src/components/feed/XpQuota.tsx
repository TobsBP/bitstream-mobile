import { Text, View } from 'react-native';

type Props = {
  current: number;
  total: number;
  segments?: number;
  label?: string;
};

export function XpQuota({ current, total, segments = 10, label = 'DAILY_XP_QUOTA' }: Props) {
  const filled = Math.min(segments, Math.max(0, Math.round((current / total) * segments)));

  return (
    <View className="mb-8 px-4">
      <View className="border-l-2 border-primary bg-surface-container-low p-4">
        <View className="mb-2 flex-row items-end justify-between">
          <Text className="text-[10px] font-bold tracking-widest text-primary">{label}</Text>
          <Text className="text-xs font-bold text-on-surface">
            {current} / {total} XP
          </Text>
        </View>
        <View className="h-3 flex-row gap-1">
          {Array.from({ length: segments }, (_, i) => `seg-${i}`).map((key, i) => (
            <View
              key={key}
              className={`flex-1 ${i < filled ? 'bg-primary' : 'bg-surface-container-highest'}`}
            />
          ))}
        </View>
      </View>
    </View>
  );
}
