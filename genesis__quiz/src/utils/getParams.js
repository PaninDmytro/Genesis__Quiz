import { useLocation } from "react-router-dom";

export const GetParams = () => {
  const location = useLocation();
  const path = location.pathname;
  const parts = path.split('/');
  const pageNumber = parts[parts.length - 1];

  return pageNumber;
}
