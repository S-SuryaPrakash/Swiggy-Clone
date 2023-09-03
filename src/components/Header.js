

const title=(
    <h1 id="title" key="h2">Food villa</h1>
)


const Header=()=>(
    <div className="header">
        {title}
        <div className="nav-items">
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
        </ul>
        </div>
        </div>
    );

    export default Header;