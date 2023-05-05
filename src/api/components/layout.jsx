import NavBar from "./navBar";

export default function Layout({children }){
  const containerStyle = {
    width: "90%",
    margin: " auto"
  };
    return(
        <div >
          <NavBar />
          <div style={containerStyle}>{children}</div>
        </div>
    )
}