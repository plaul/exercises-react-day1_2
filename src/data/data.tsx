export interface User {
  id?: number;
  name: string;
  email: string;
  isActive: boolean;
}

export const users: User[] = [
  { id: 1, name: "Max Power", email: "max.power@email.com", isActive: true },
  { id: 2, name: "Ella Vator", email: "ella.vator@email.com", isActive: false },
  { id: 3, name: "Al Beback", email: "al.beback@email.com", isActive: true },
  { id: 4, name: "Paige Turner", email: "p.turner@email.com", isActive: false },
  { id: 5, name: "Justin Time", email: "j.time@email.com", isActive: true },
];
