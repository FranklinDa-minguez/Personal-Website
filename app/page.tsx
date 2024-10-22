import NavBar from "../components/NavBar/NavBar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Home() {
  return (
    <>
      <NavBar/>
      <div className="mt-4 flex flex-row justify-center w-1/2">
        <Avatar className=" w-28 h-28 m-2">
          <AvatarImage src="images/20230614_185734 (1).jpg" alt="Profile Picture" />
          <AvatarFallback>
            <span>Profile Picture</span>
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col my-auto">
          <h1 className="text-2xl font-bold">Franklin Dominguez</h1>
          <p className="text-lg">Aspiring SWE</p>
        </div>
      </div>
    </>
  );
}