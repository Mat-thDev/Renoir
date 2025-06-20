export interface UserPayload {
  id: number,
  email: string
}

// Post

export interface PostResponse {
  id: number;
  authorId: number;
  author: PostAuthor;
  title: string;
  content: string;
  status: "REVIEW" | "PUBLISHED" | "DRAFT";
  categories: Category[];
  tags: Tag[];
  featuredImage: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: number;
  name: string;
}

export interface Tag {
  id: number;
  name: string;
}

// User
export interface UserResponse {
  user: User;
}

export interface User {
  posts: any;
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

export interface PostAuthorProfile {
  picture: string | null;
  bio: string | null;
}

export interface PostAuthor {
  id: number;
  username: string;
  profile: PostAuthorProfile;
}