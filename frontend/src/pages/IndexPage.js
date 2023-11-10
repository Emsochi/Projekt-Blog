import { useEffect, useState } from "react";
import Post from "../Post";

const ITEMS_PER_PAGE = 5;

export default function IndexPage() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:3005/post?page=${currentPage}`)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.posts);
        setTotalPages(data.totalPages);
      })
      .catch((error) => console.error("Error fetching posts:", error));
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <>
      {posts.map((post) => (
        <Post key={post._id} {...post} />
      ))}

      <div >
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Poprzednia
        </button>
        <span className="page"> Strona {currentPage} z {totalPages} </span>
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Następna
        </button>
      </div>
    </>
  );
}

