
import Link from "next/link";

const link = "p-2 m-2 border-2"

const ManNav: React.FC = () => {

  return (
    <nav className="grid grid-cols-3 h-14 w-full justify-center">
      <Link href={"/"} className="m-auto">Learning with Llama</Link>
      <div className="col-start-3 m-auto" >
        <Link className={`${link}`} href={"/signin"}>Sign In</Link>
        <Link className={`${link}`} href={"/signup"}>Sign Up</Link>
      </div>
    </nav>
  )
}

export default ManNav
