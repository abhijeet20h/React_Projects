

const Navbar = () => {
  return (
    <>
     <nav className="navbar navbar-expand-sm navbar-light bg-primary main-nav ">
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav-content" aria-controls="nav-content" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>

{/* <!-- Brand --> */}
<a className="navbar-brand logo" href="s">ABHI'S CREATATION</a>

{/* <!-- Links --> */}
<div className="collapse navbar-collapse  " id="nav-content">   
<ul className="navbar-nav mx-auto ">
<li className="nav-item">
<a className="nav-link" href="/">Home </a>
</li>
<li className="nav-item">
<a className="nav-link" href="/about">About </a>
</li><li className="nav-item">
<a className="nav-link" href="/service">Services </a>
</li><li className="nav-item">
<a className="nav-link" href="/details">Details </a>
</li>
<li className="nav-item">
<a className="nav-link" href="/contact">Contact </a>
</li>
</ul>
</div>
</nav>
  
    </>
  );
};

export default Navbar;
