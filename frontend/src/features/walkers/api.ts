import Walker from "./types/Walker";

export async function loadWalkers(): Promise<Walker[]> {
  const response = await fetch('/api/walkers')

  const result = await response.json()

  return result
}
