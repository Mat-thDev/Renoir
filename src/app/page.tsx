import PostCard from "@/components/Post/PostCard";
import PostCardExtended from "@/components/Post/PostCardExtended";
import PostFeatured from "@/components/Post/PostFeatured";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <PostFeatured />
      <PostCardExtended />
      <div className="grid grid-cols-5 gap-4 ">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
}
