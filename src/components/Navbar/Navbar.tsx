import { UserIcon } from "lucide-react";



const Navbar = () => {
  return (
    <div className="w-full h-46">
      <div className="flex justify-between items-center border-2 border-white/20 rounded-lg py-4 px-12">
        <h1 className="text-2xl font-bold">Renoir</h1>
        <div className="flex space-x-4">
          <a>Item</a>
          <a>Item</a>
          <a>Item</a>
        </div>
        <div>
          <UserIcon />
        </div>
      </div>
    </div>
  )
}

export default Navbar;