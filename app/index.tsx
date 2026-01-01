import { View } from "react-native"
import React, { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { Text } from '@/components/ui/text';
import { Card } from "@/components/ui/card"
import quotes from "@/data/quotes.json"
import "../global.css"
import { Icon } from '@/components/ui/icon';
import { Heart, Settings } from 'lucide-react-native';

import { Link } from 'expo-router';

type Quote = {
  text: string
  author: string
}

export default function HomeScreen() {
  const [quote, setQuote] = useState<Quote>(() => getRandomQuote())
  const [isFavorite, setIsFavorite] = useState(false)

  function getRandomQuote(): Quote {
    const index = Math.floor(Math.random() * quotes.length)
    return quotes[index]
  }

  function handleNewQuote() {
    setQuote(getRandomQuote())
    setIsFavorite(false)
  }

  function toggleFavorite() {
    setIsFavorite(prev => !prev)
  }


  return (
      <View className="flex-1 items-center justify-center px-6">
        {/* App Title */}
        <Text className="mb-6 text-2xl font-semibold text-neutral-900">
          Daily Quote
        </Text>

        {/* Quote Card */}
        <Card className="w-full rounded-3xl bg-white p-6 shadow-sm">
          <Text className="text-lg leading-relaxed text-neutral-900">
            “{quote.text}”
          </Text>

          <Text className="mt-4 text-sm text-neutral-500">
            — {quote.author}
          </Text>
        </Card>

        {/* Action */}
        <Button
          className="mt-8 rounded-2xl text-neutral-100"
          onPress={handleNewQuote}
        >
          <Text>New Quote</Text>
        </Button>
        <Button variant="outline" size="icon" onPress={toggleFavorite}>
          <Icon
            as={Heart}
            color={isFavorite ? '#ef4444' : '#737373'}
            fill={isFavorite ? '#ef4444' : '#ffffffff'}
          />
        </Button>
        <Link href="/settings" asChild>
          <Button variant="outline" size="icon">
            <Icon 
            as={Settings} 
            color={'#737373'}
            fill={'#ffffffff'} />
          </Button>
        </Link>
      </View>
  )
}
