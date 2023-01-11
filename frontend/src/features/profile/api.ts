import Dog from "./DogsData/types/Dog";

export async function loadDogs(): Promise<Dog[]> {
  const response = await fetch('/api/profile')
  const result = await response.json()

  return result
}

export async function createDog(dog: Dog): Promise<Dog> {
  const res = await fetch('/api/profile', {
    method: 'POST',
    body: JSON.stringify(dog),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (res.status >= 400) {
    const { error } = await res.json();
    throw error;
  }

  return res.json();
}
