import { useState } from "react";
export default function DropDown() {
  const [openSection, setOpenSection] = useState(0);
  const imageUrls = [
    {
      name: "https://images.unsplash.com/photo-1682686581551-867e0b208bd1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "https://images.unsplash.com/photo-1697219590638-d2db7748802e?q=80&w=1452&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "https://images.unsplash.com/photo-1682685794761-c8e7b2347702?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "https://images.unsplash.com/photo-1682687218608-5e2522b04673?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <>
      <svg viewBox="0 0 400 160">
        <text
          x="50%"
          y="50%"
          dy=".32rem"
          text-anchor="middle"
          className="text-body"
        >
          horizontal accordian
        </text>
      </svg>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          width: "40%",
          margin: "30px auto",
        }}
      >
        {imageUrls.map((imageUrl, i) => {
          const { name } = imageUrl;
          const isOpen = i === openSection;

          return (
            <div
              key={name}
              style={{
                height: "inherit",
                backgroundColor: isOpen ? "white" : "lightgray",
                border: `3px solid ${isOpen ? "white" : "grey"}`,
                flex: 1,
                flexGrow: isOpen ? 1 : 0,
                transition: "all 2s ease",
                padding: 20,
                flexBasis: "1.2rem",
                cursor: !isOpen ? "pointer" : "auto",
                position: "relative",
                borderRadius: "1rem",
              }}
              onClick={!isOpen ? () => setOpenSection(i) : null}
            >
              <img
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  transition: "all 2s ease",
                  borderRadius: "1rem",
                }}
                key={i}
                src={imageUrl.name}
                alt={`Image ${i + 1}`}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
