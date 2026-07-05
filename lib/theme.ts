export const THEME_STORAGE_KEY = "theme"

export type Theme = "light" | "dark"

/** Inline script that runs before paint to avoid a light-mode flash. */
export const themeInitScript = `(function(){try{var k=${JSON.stringify(THEME_STORAGE_KEY)};var s=localStorage.getItem(k);var t=s==="light"||s==="dark"?s:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";if(t==="dark")document.documentElement.classList.add("dark");}catch(e){}})();`

const themeListeners = new Set<() => void>()

function emitThemeChange() {
  themeListeners.forEach((listener) => listener())
}

export function subscribeToTheme(listener: () => void) {
  themeListeners.add(listener)
  return () => themeListeners.delete(listener)
}

export function readThemeFromDocument(): Theme {
  if (typeof document === "undefined") return "light"
  return document.documentElement.classList.contains("dark") ? "dark" : "light"
}

export function getThemeServerSnapshot(): Theme {
  return "light"
}

export function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark")
  emitThemeChange()
}

export function setStoredTheme(theme: Theme) {
  localStorage.setItem(THEME_STORAGE_KEY, theme)
  applyTheme(theme)
}
