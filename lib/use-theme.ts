"use client"

import { useSyncExternalStore } from "react"
import {
  getThemeServerSnapshot,
  readThemeFromDocument,
  subscribeToTheme,
} from "@/lib/theme"

export function useTheme() {
  return useSyncExternalStore(subscribeToTheme, readThemeFromDocument, getThemeServerSnapshot)
}
