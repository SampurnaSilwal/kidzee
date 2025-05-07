import { MenuIcon } from "lucide-react";

export default function MobileMenuToggle({onToggle,}:
{onToggle:() => void;}){
  return (
    <button onClick={onToggle} className="md:hidden cursor-pointer">
      <MenuIcon className="h-9 w-9" />
    </button>
  );
}