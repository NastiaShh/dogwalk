import Request from "./types/Request";

export async function loadRequest(): Promise<Request[]> {
  const response = await fetch('/api/forms')

  const result = await response.json()

  return result
}

export async function createRequest(name: string, phone: string, email: string): Promise<Request> {
  const res = await fetch('/api/forms', {
    method: 'POST',
    body: JSON.stringify({ name, phone, email }),
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
