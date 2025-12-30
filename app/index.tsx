import { View, Text, SafeAreaView } from "react-native"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import quotes from "@/data/quotes.json"
import "../global.css"

type Quote = {
  text: string
  author: string
}

export default function HomeScreen() {
  const [quote, setQuote] = useState<Quote>(() => getRandomQuote())

  function getRandomQuote(): Quote {
    const index = Math.floor(Math.random() * quotes.length)
    return quotes[index]
  }

  function handleNewQuote() {
    setQuote(getRandomQuote())
  }

  return (
    <SafeAreaView className="flex-1 bg-neutral-50">
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
          New Quote
        </Button>
        
      </View>
    </SafeAreaView>
  )
}
