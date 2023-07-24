import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Home.css";
export default function Home() {
  return (
    <>
      <Header></Header>
      <div className="home">
        <Posts></Posts>
        <Sidebar></Sidebar>
      </div>
    </>
  );
}
