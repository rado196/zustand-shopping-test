import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../fake-api/user";
import { useUserStore } from "../../../stores/user";
import { useCartStore } from "../../../stores/cart";

function Logout(props: PropsType) {
  const storeUser = useUserStore();
  const storeCart = useCartStore();

  const navigate = useNavigate();

  useEffect(() => {
    logout().then(() => {
      storeUser.logout();
      storeCart.clear();

      navigate("/products/list");
    });
  }, []);

  return (
    <div className="container">
      <h6>Logging out...</h6>
    </div>
  );
}

export default Logout;
