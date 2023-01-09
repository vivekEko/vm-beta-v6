import React from "react";

// assets
import youtube_icon from "../../assets/img/footer/youtube_icon.png";
import fb_icon from "../../assets/img/footer/fb_icon.png";
import call_icon from "../../assets/img/footer/call_icon.png";
import insta_icon from "../../assets/img/footer/insta_icon.png";
import gmail_icon from "../../assets/img/footer/gmail_icon.png";

const Footer = () => {
  const footerData = [
    {
      name: "Sri Vanamamalai (Thothadri) Mutt",
      image: youtube_icon,
      link: "https://www.youtube.com/@srivanamamalaithothadrimutt",
    },

    {
      name: "srivanamamalaimutt.official",
      image: insta_icon,
      link: "https://www.instagram.com/srivanamamalaimutt.official/?hl=en",
    },
    {
      name: "srivanamamalaimuttofficial",
      image: fb_icon,
      link: "https://www.facebook.com/srivanamamalaimuttofficial/",
    },

    {
      name: "varamangai2001@gmail.com",
      image: gmail_icon,
      link: "",
    },

    {
      name: "04635 - 250119",
      image: call_icon,
      link: "",
    },
  ];

  return (
    <footer className="bg-white text-black 2xl:sticky bottom-0">
      <div className="flex  flex-col justify-start items-start md:flex-row md:justify-between md:items-center flex-wrap gap-5 w-[85%] md:mx-auto p-5 md:p-3 ">
        {footerData?.map((data, index) => {
          return (
            <div
              key={index}
              className=" flex flex-row-reverse justify-between gap-2 items-center my-5 md:my-0"
            >
              {data?.link?.length > 0 ? (
                <a
                  href={data?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row-reverse justify-between gap-2 items-center"
                >
                  <h1 className="uppercase">{data?.name}</h1>
                  <div>
                    <img src={data?.image} alt={data?.name} />
                  </div>
                </a>
              ) : (
                <>
                  <h1 className="uppercase">{data?.name}</h1>
                  <div>
                    <img src={data?.image} alt={data?.name} />
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
