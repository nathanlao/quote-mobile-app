import { View, Text, FlatList, Pressable } from 'react-native';
import { Heart, Trash2 } from 'lucide-react-native';
import { Icon } from '@/components/ui/icon';

type Quote = {
  id: string;
  text: string;
  author?: string;
};

const MOCK_FAVORITES: Quote[] = [
  {
    id: '1',
    text: 'Discipline is choosing between what you want now and what you want most.',
    author: 'Abraham Lincoln',
  },
  {
    id: '2',
    text: 'Small steps every day lead to big results.',
  },
];

export default function FavoriteQuotesScreen() {
  const favorites = MOCK_FAVORITES;

  function removeFavorite(id: string) {
    console.log('Remove favorite:', id);
  }

  if (favorites.length === 0) {
    return (
      <View className="flex-1 items-center justify-center px-6">
        <Icon as={Heart} size={48} color="#999" />
        <Text className="mt-4 text-center text-gray-500">
          You haven’t favorited any quotes yet.
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      data={favorites}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ padding: 16 }}
      ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
      renderItem={({ item }) => (
        <View className="rounded-xl border border-gray-200 bg-white p-4">
          <Text className="text-base leading-6">
            “{item.text}”
          </Text>

          {item.author && (
            <Text className="mt-2 text-sm text-gray-500">
              — {item.author}
            </Text>
          )}

          <View className="mt-3 flex-row justify-end">
            <Pressable
              onPress={() => removeFavorite(item.id)}
              className="p-2"
            >
              <Icon as={Trash2} size={18} color="#999" />
            </Pressable>
          </View>
        </View>
      )}
    />
  );
}
