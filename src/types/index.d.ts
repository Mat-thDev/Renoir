export interface UserPayload {
  id: number,
  email: string
}

// User
export interface UserResponse {
  user: User;
}

export interface User {
  id: number;
  username: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  profile: Profile;
  roles: Role[];
}

export interface Profile {
  id: number;
  bio: string;
  banner: string;
  picture: string;
  userId: number;
}

export interface Role {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  permissions: Permission[];
}

export interface Permission {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}