export interface Blog {
  id: string;
  title: string;
  description: string;
  views: number;
  image: string;
  author: {
    name: string;
    avatar: string;
  }
}
