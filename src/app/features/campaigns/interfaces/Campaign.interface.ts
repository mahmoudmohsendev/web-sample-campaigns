export interface Campaign {
  id: string;
  name: string;
  goal: number;
  currentAmount: number;
  description: string;
  imageUrl: string;
  donors: { 
    name: string; 
    amount: number,
    isNew: boolean;
  }[];
}