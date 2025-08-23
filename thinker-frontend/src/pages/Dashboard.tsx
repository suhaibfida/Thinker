import { Button } from "../components/ui/Button";
import { Plusicon } from "../components/icons/Plusicon";
import { Shareicon } from "../components/icons/Shareicon";
import { Card } from "../components/ui/Card";
import { ContentModal } from "../components/ui/ContentModal";
import { Sidebar } from "../components/ui/Sidebar";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { URL } from "./../config";
import { Sharedpage } from "./Sharedpage";
export const Dashboard = () => {
  const navigate = useNavigate();
  const [open, setModal] = useState(false);
  const [reloadData, setReloadData] = useState<any[]>([]);
  const [data, setData] = useState();

  useEffect(() => {
    fetchingData();
  }, [reloadData]);
  async function shareLink() {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Please login first");
        navigate("/");
        return;
      }
      const res = await fetch(`${URL}/api/v1/user/content`, {
        method: "GET",
      });
      const jsonData = await res.json();
      setData(jsonData.data);
      if (res.ok) {
        const encodedData = encodeURIComponent(JSON.stringify(data));
        const shareLink = `${URL}/share/${jsonData.userId}${token}?data=${encodedData}`;
        navigator.clipboard
          .writeText(shareLink)
          .then(() => {
            alert("link copied");
          })
          .catch(() => {
            alert(
              `failed to copy link to clipboard.here is the link ${shareLink}`
            );
          });
      } else {
        alert("something went wrong");
      }
    } catch (err) {
      console.log("error while sending data");
    }
  }
  function fetchingData() {
    try {
      if (!localStorage.getItem("token")) {
        alert("Please login first");
        // navigate
        return;
      }
    } catch {
      alert("error while getting data");
    }
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className=" h-screen w-screen bg-gray-200">
        <ContentModal
          open={open}
          onClose={() => {
            setModal(false);
          }}
        />
        <div className="flex justify-end">
          <Button
            onClick={() => {
              setModal(true);
            }}
            variant="primary"
            text="Add Content"
            startIcon={<Plusicon />}
          ></Button>

          <Button
            variant="secondary"
            text="Share "
            startIcon={<Shareicon />}
            onClick={shareLink}
          ></Button>
        </div>
        <div className="font-medium text-3xl m-10">All Notes</div>
        <div className="flex"></div>
      </div>
    </div>
  );
};
