import Request from "./types/Request";

export async function loadRequest(): Promise<Request[]> {
  const response = await fetch('/api/forms')

  const result = await response.json()

  return result
}

export async function createRequest(request: Request): Promise<Request> {
  const res = await fetch('/api/forms', {
    method: 'POST',
    body: JSON.stringify(request),
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

export async function changeRequest(request: Request): Promise<Request> {
  const res = await fetch(`/api/forms/change/${request.id}`, {
    method: 'PUT',
    body: JSON.stringify(request),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (res.status >= 400) {
    const { error } = await res.json();
    throw error;
  }

  return res.json();
}

export async function deleteRequest(request: Request): Promise<Request> {
  const res = await fetch(`/api/forms/${request.id}`, {
    method: 'DELETE',
    body: JSON.stringify(request),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (res.status >= 400) {
    const { error } = await res.json();
    throw error;
  }

  return res.json();
}
