// export async function loadUser(): Promise<User> {
//   const response = await fetch('/api/profile')

//   const result = await response.json()

//   return result
// }

// export async function changeRequest(request: Request): Promise<Request> {
//   const res = await fetch(`/api/forms/change/${request.id}`, {
//     method: 'PUT',
//     body: JSON.stringify(request),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })

//   if (res.status >= 400) {
//     const { error } = await res.json();
//     throw error;
//   }

//   return res.json();
// }
