import { useLocation, matchPath } from "react-router-dom";

export default function useRouteMatch(path) {
  const location = useLocation();
  return matchPath(location.pathname, { path });
}