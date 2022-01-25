import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import { DefaultLayout } from "./components/templates/DefaultLayout";
import { HeaderOnly } from "./components/templates/HeaderOnly";
import { Router } from "./router/Router";
import "./styles.css";

const user = {
  name: "うめ",
  image: "https://source.unsplash.com/NE0XGVKTmcA",
  email: "aaa.aaa.com",
  phone: "000-0000-1111",
  company: {
    name: "ヴァリアント"
  },
  web: "http://sample.com"
};

export default function App() {
  return <Router />;
}
