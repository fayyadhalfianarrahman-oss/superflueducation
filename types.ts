
export interface ContentSection {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  icon: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
