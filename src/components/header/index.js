import cssStyle from "./header.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png"
function Header(){
    return(
<div className={cssStyle.navbar}>
<div className={cssStyle.navLogo}>
<a href="/">
<img src={logo} />

</a>
</div>
<div className={cssStyle.navMenu}>
<ul>
<li>
<Link to='/HafezFaal'>فال حافظ</Link>
</li>
<li>
<Link to='/'>فال حافظ</Link>
</li>
<li>
<Link to='/'>فال حافظ</Link>
</li>
</ul>
</div>
</div>
    )
}
export default Header;