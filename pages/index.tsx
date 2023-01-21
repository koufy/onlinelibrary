import LoginForm from "../components/Loginform"
import RandomBook from "../components/RandomBook"
import Welcome from "../components/Welcome"
import CategoryList from "../components/CategoryList"
import Mesasodas from "./categories"
import AllBooks from "./AllBooks"
import Buttons from "../components/Buttons"

export default function Home() {
  return(<>
    <Welcome />
    <LoginForm  /> 
    <RandomBook/>
    <Buttons/>
    {/* <Mesasodas/> */}
{/* <AllBooks/> */}
        </>
  )
}
