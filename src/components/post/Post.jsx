import "./Post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">The post tilte is this.</span>
        <hr />
        <span className="postDate">1 hour ago </span>
      </div>
      <p className="postDesc">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
        maiores fuga inventore doloribus quasi veniam necessitatibus deserunt
        doloremque aliquam debitis. Totam a dolor natus neque, vel tenetur
        possimus iste rem. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Ipsum ut accusamus vero iste quas praesentium, sed pariatur
        similique eveniet mollitia accusantium beatae numquam molestias
        doloribus reprehenderit vitae magnam ipsam reiciendis.
      </p>
    </div>
  );
}
