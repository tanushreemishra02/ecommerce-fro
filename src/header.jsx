import { Link } from "react-router-dom";

function Header({ setsearchquery }) {

  function togglemode() {
    document.body.classList.toggle('dark');
  }

  return (
    <header style={{ display: "flex", justifyContent: "space-around" }}>

      <img style={{height:"60px" , width:"100px",borderRadius:"50%"}} src="src\assets\image.png" alt="LOGO" />

      <input
        placeholder="Search product"
        type="text"
        style={{ borderRadius: "20px", height:"35px", width:"600px" }}
        onChange={(e) => setsearchquery(e.target.value)}
        /> 

      <nav style={{ display: "flex", gap: "30px", color:"blueviolet"  , marginTop:"15px"}}>

        <Link to="/">HOME</Link>

        <Link to="/products">PRODUCTS</Link>

        <Link to="/about">ABOUT</Link>

        <Link to="/signup">SIGN UP</Link>

        <Link to="/signin">SIGN IN</Link>

      </nav>

      <button style={{width:"90px" , height:"35px", textAlign:"center",marginTop:"12px",borderRadius:"20px"}} onClick={togglemode}> Switch mode</button>

    </header>
  );
}

export default Header;
