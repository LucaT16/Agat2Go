export interface UserCredential {
  email: string;
  password: string;
  name?: string
}

export interface UserProfile {
  email: string;
  name: string;
  bonuscard: number;
  hatGutschein: boolean;
}
