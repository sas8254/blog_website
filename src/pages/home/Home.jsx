import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Home.css";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get("/api/posts" + search);
      setPosts(res.data);
    };
    fetchPost();
  }, [search]);

  return (
    <>
      <Header></Header>
      <div className="home">
        <Posts posts={posts} />
        <Sidebar></Sidebar>
      </div>
    </>
  );
}
