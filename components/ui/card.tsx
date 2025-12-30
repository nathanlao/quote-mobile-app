import { View, ViewProps } from "react-native"
import { cn } from "@/lib/cn"

type CardProps = ViewProps & {
  className?: string
}

export function Card({ className, ...props }: CardProps) {
  return (
    <View
      {...props}
      className={cn(
        "rounded-2xl bg-white p-4 shadow-sm",
        className
      )}
    />
  )
}
