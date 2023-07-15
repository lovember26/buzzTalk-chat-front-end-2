import { useLogOutRedirect } from "../../hooks/useLogOutRedirect";
import Title from "../../components/common/Title/Title";

export const HomePage = () => {
  useLogOutRedirect();

  return <Title title="Home Page" />;
};
// import { useSelector, useDispatch } from "react-redux";
// import { selectValue } from "../../redux/myValue/selectors";

// import { increment, decrement } from "../../redux/myValue/slice";
// import {} from "./Home.styled";

// export default function Home() {
//   const dispatch = useDispatch();
//   const value = useSelector(selectValue);

//   return (
//     <div>
//       <h1>Home page</h1>
//       <p>Value: {value}</p>
//       <button onClick={() => dispatch(increment(100))}>increment</button>
//       <button onClick={() => dispatch(decrement(100))}>decrement</button>
//     </div>
//   );
// }
