import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  FeedPost,
  type FeedPostData,
  PostFab,
  TopAppBar,
  TrendingBanner,
  XpQuota,
} from '@/components/feed';

const MOCK_POSTS: FeedPostData[] = [
  {
    id: '1',
    username: 'V0ID_WALKER',
    subtitle: 'LVL. 42 • ARCHITECT',
    avatarUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCQq1yZG2SJNqCDmL3IUXShowx_w-PZmjX1stWJoD19xSvQBtABCztREmF92xknGqHqYpCufiTuSLIlC2SyMX7brws4XNRpU7dnwarPX1Hy4mFlp0pz8XmWX1dtzw2Hc6bHW0upaeNJLhzNURmR1IuaiacT7-OIQOjFZIRE6YSDP3_Kbkhf9Y_jz_tORvrcLKWZ5xUxGlrZ9XTW1ZF9GI6tIzZT9yFqarmxddo_L98vXJKaa3pC-DiRBogBox4O7Crz3dv4Bl-vlnc',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAKEFjHvXAEYVG4rkS562FQj2d_eh2BBeuIzP8ZqBWjuohtKqGysxC4mmkUeO-KN9FLrf-Cbo2kdChb2dqP--q_qeFvGpW4h6jh-Px4s-3tRz1KW6CXy9zSGvZ2IhxkHvc0DwNkI236t4E9U3FLHGK_kGWPjUR-677Km-XN_BrIiChShUO3sPioGTTPW7FRmQ674bv588M3Gn-GFqxDET4UkNoFMMYgi_3shqc8YbGVS5f3NQKgRIF4LcybQUcCKXT2Xhja-v8qJAE',
    projectTag: 'PROJECT_NEON_RAIN',
    likes: '2.4K',
    comments: 184,
    liked: true,
  },
  {
    id: '2',
    username: 'BIT_WITCH_99',
    subtitle: 'LVL. 18 • GLITCH_MAGE',
    avatarUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAbaBoA8yOLbFzC3jpSkn3tWvrUyJQi1w25iPAb1aXW9mwZh3LyL6FcqbuHDMAs1Nqq50Kt5NoXLVE2T1qRNpTb8I3K8qBs0AoIR2tttGIUFgmb7EZClUO5ppEgCeU4ii7dTh6l8XqWqHCN3FXcWG7FG65M3hYT4t0ZRJS-JQqvTMVmM8CUXRfnOmnuKYyczbC1hneU4Hs2Wdj41wokhAc5UM4kOnc71xt9ktTkOcs_VL168jA4Rc8-BeQqwJP30bdi14r8K4OAtuY',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDR3pG0X13LPlP3jXl1TlOzaLmR76DHhEU8etWGJgx8TbyJ9uCzUr9D6e20qt1O2SbFA9-9w-gyDjCrfDODp0ILXt9ji8ox5kxk9xuvJx_JnTlPqEEtN1GjMuPNbwqq7CZuA0VkiTqvN7bm4oC0MnG5c1TsO4aDU8zyZniPRX-vdvrirQGv8ztdZ8QefRwmds1qDjvS3ddKoe9JfqdRJpC8QnrXhr02gTHnbxHVhs0jgZIjij0PLdts_4jTwolHYRVqdFlKWuPs5mw',
    caption:
      'Working on the lighting for the orbit sequence. Added some phosphor glow to the engine trails. #pixelart #gamedev',
    likes: 892,
    comments: 42,
  },
];

export default function FeedScreen() {
  return (
    <SafeAreaView className="flex-1 bg-surface" edges={['top']}>
      <TopAppBar />
      <ScrollView
        className="flex-1"
        contentContainerClassName="pb-24"
        showsVerticalScrollIndicator={false}
      >
        <TrendingBanner trend="Cyber_Static" participants="12.4K" />

        {MOCK_POSTS.map((post) => (
          <FeedPost key={post.id} post={post} />
        ))}

        <XpQuota current={750} total={1000} />
      </ScrollView>
      <PostFab />
    </SafeAreaView>
  );
}
