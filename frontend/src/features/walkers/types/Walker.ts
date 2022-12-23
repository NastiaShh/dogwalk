type Walker = {
  id: number;
  name: string;
  photo: string;
  description: string;
  rating: number;
}

export type WalkerId = Walker['id']

export default Walker
