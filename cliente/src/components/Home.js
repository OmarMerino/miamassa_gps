import { useAuth } from "../context/AuthContext";
import "./home.css"
export function Home() {
  const { logout, user } = useAuth();

  console.log(user);
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div class="my-div"> 
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" style={{backgroundColor:"lightgrey"}}>
        <p className="text-xl mb-4">Bienvenido {user.displayName || user.email}</p>
        <button
          className="logout"
          onClick={handleLogout}
        >
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
}