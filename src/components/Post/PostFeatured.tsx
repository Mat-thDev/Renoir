import Image from "next/image";


const PostFeatured = () => {
  return (
    <div className="w-full h-[300px]">
      <div className="relative w-full h-[300px] rounded-lg">
        <Image
          fill
          src={"/image.jpg"}
          className="object-center object-cover w-full h-full rounded-lg"
          alt=""
        />
        <div className="w-full h-full absolute bg-gradient-to-r from-black/80 via-black/20 to-transparent z-10" />
        <div className="w-full h-full absolute bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
        <div className="absolute bottom-4 left-4 z-20">
          <h1 className="text-2xl font-bold">Kimetsu no Yaiba ganha novo trailer de filme</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ut laboriosam quo non labore illo, accusamus explicabo. Voluptate similique unde, consequatur corporis quam vel autem assumenda animi illo saepe sint.</p>
        </div>
      </div>
    </div>
  )
}


export default PostFeatured;