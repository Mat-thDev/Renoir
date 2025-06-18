import Image from "next/image";


const PostFeatured = () => {
  return (
    <div className="w-full h-[400px] cursor-pointer hover:opacity-80 transition-opacity ">
      <div className="relative w-full h-[400px] rounded-lg">
        <Image
          fill
          src={"/image.jpg"}
          className="object-center object-cover w-full h-full rounded-lg"
          alt=""
        />
        <div className="w-full h-full absolute bg-gradient-to-r from-[var(--background)] via-[var(--background)]/20 to-transparent z-10 rounded-lg" />
        <div className="w-full h-full absolute bg-gradient-to-t from-[var(--background)] via-[var(--background)]/20 to-transparent z-10 rounded-lg" />
        <div className="w-2xl absolute bottom-4 left-4 z-20 space-y-2">
          <h1 className="text-4xl font-bold text-[var(--accent)]">Kimetsu no Yaiba ganha novo trailer de filme</h1>
          <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ut laboriosam quo non labore illo, accusamus explicabo. Voluptate similique unde, consequatur corporis quam vel autem assumenda animi illo saepe sint.</p>
          <div className="flex space-x-4">
            <p className="bg-[var(--accent)] text-white px-2 rounded-lg">18/06/2025</p>
            <div className="flex space-x-2 px-2 rounded-lg">
              <p className="text-[var(--muted)]">Notícias</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default PostFeatured;