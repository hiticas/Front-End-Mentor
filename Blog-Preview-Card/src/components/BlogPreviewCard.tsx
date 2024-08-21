import illustration from "./../assets/images/illustration-article.svg";
import author from "./../assets/images/image-avatar.webp";

const BlogPreviewCard = () => {
  return (
    <div className="wrapper">
      <img src={illustration} alt="img" className="illustration" />
      <div className="tag">
        <p>Learning</p>
      </div>
      <p className="date">Published 21 Dec 2023</p>
      <h1 className="title">HTML & CSS foundations</h1>
      <p className="description">
        These languages are the backbone of every website, defining structure,
        content, and presentation.
      </p>
      <div className="author">
        <img src={author} alt="author" />
        <p>Greg Hooper</p>
      </div>
    </div>
  );
};

export default BlogPreviewCard;
