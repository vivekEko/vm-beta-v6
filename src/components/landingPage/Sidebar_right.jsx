import React from "react";
import Slider from "react-slick";
import YouTube from "react-youtube";

const Sidebar_right = (props) => {
  const opts = {
    height: "200",
    width: "100%",
  };

  const opts2 = {
    height: "100",
    width: "100%",
  };

  return (
    <div className="  ">
      {props?.apiData?.layout === "youtube_events" && (
        <section>
          <div className="mx-5">
            <h1 className="pb-5 text-2xl font-semibold">
              {props?.apiData?.h1}
            </h1>

            {/* <div>
              <YouTube
                // videoId={data?.video_id}
                videoId={
                  props?.apiData?.caraousel_data[0]?.yt_link
                    .split("/")
                    .reverse()[0]
                    .includes("watch?v=")
                    ? props?.apiData?.caraousel_data[0]?.yt_link
                        .split("watch?v=")
                        .reverse()[0]
                    : props?.apiData?.caraousel_data[0]?.yt_link
                        .split("/")
                        .reverse()[0]
                }
                opts={opts}
                className="   mx-auto "
              />
              <h1 className="py-2">
                {props?.apiData?.caraousel_data[0]?.yt_title}
              </h1>
            </div> */}

            <div className="max-h-[600px] overflow-y-scroll scrollbar-hide">
              {/* <Slider
                dots={true}
                slidesToShow={2}
                infinite
                //   prevArrow={<PreviousBtn />}
                //   nextArrow={<NextBtn />}
                className="w-full  md:w-[90%] mx-auto"
                // dotsClass="slick-dots custom-dots"
              > */}
              {props?.apiData?.caraousel_data?.map((data, index) => {
                return (
                  <div key={index} className=" p-5">
                    <YouTube
                      // videoId={data?.video_id}
                      videoId={
                        data?.yt_link
                          .split("/")
                          .reverse()[0]
                          .includes("watch?v=")
                          ? data?.yt_link.split("watch?v=").reverse()[0]
                          : data?.yt_link.split("/").reverse()[0]
                      }
                      opts={opts}
                      className="w-full"
                    />
                    {/* <h1 className=" py-2">{data?.yt_title}</h1> */}
                    <h1 className="py-2">{data?.yt_title}</h1>
                  </div>
                );
              })}
              {/* </Slider> */}
            </div>
          </div>
        </section>
      )}

      {props?.apiData?.layout === "facebook" && (
        <section>
          <h1 className="pb-5 text-2xl mt-10 m-5 font-semibold">
            Facebook Feed
          </h1>
          <div className=" w-fit mx-auto ">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fsrivanamamalaimuttofficial%2F&tabs=timeline&width=350px&height=900&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
              height="900"
              //   style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              className="w-full min-w-[350px] max-w-[400px] mx-auto"
            ></iframe>
          </div>
        </section>
      )}
    </div>
  );
};

export default Sidebar_right;
