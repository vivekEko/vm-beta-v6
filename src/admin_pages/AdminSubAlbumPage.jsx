import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

const AdminSubAlbumPage = () => {
  const pageData2 = {
    pageName: "Album 1",
    banner_image: "lorem",
    yt_links: [
      { id: "1", link: "", link_name: "" },

      { id: "2", link: "", link_name: "" },

      { id: "3", link: "", link_name: "" },
    ],
    albums: [
      { id: "1", album_link: "", album_name: "Album 1", show_status: true },

      { id: "2", album_link: "", album_name: "Album 2", show_status: true },

      { id: "3", album_link: "", album_name: "Album 3", show_status: true },
    ],
  };

  const [pageData, setPageData] = useState();
  const location = useParams();

  useEffect(() => {
    // setPageData(pageData2);

    axios.get(VITE_BASE_LINK + "gallery_edit?page_id=").then((response) => {
      setPageData(response?.data);
    });
  }, []);

  return (
    <div>
      <h1>Sub Album Page</h1>
    </div>
  );
};

export default AdminSubAlbumPage;
