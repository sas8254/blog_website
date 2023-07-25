import "./SinglePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.unsplash.com/photo-1689784730988-6cafd0821f8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          This is post title
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-regular fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Sam</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi enim,
          recusandae iusto excepturi laudantium iure nulla odio repellendus
          aperiam molestias blanditiis. Eos odio asperiores laborum nostrum
          provident blanditiis, nihil incidunt? Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Eos officia temporibus numquam veritatis
          ut rerum, aperiam, placeat porro amet animi quod consectetur nihil quo
          non suscipit soluta cum atque quasi! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Consequuntur ullam, explicabo sit
          officia veniam laboriosam commodi iusto laborum suscipit, magni ipsa
          eveniet aperiam facere, maxime similique placeat! Nemo, reiciendis
          autem. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Corrupti maiores velit reiciendis recusandae quisquam voluptatum
          placeat nesciunt dignissimos atque, pariatur omnis quas possimus
          veritatis deleniti dolor cum neque numquam modi.
        </p>
      </div>
    </div>
  );
}
