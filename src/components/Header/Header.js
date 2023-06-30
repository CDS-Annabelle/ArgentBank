import logo from "../../assets/images/argentBankLogo.png";
import { Link } from "react-router-dom";
import styles from './Header.module.scss';


const Header = () => {
    return(
        <header>
        <nav className={styles.mainNav}>
          <Link className={styles.mainNavLogo} to="/">
            <img
              className={styles.mainNavLogoImage}
              alt="Argent Bank Logo"
              src={logo}
            />
            <h1 className={styles.sronly}>Argent Bank</h1>
          </Link>

            <div className={styles.NavRight}>
              <Link className={styles.mainNavItem} to="/login">
                <i className="fa fa-user-circle"></i>
                Sign In
              </Link>
            </div>
          
        </nav>
      </header>
    );
}

export default Header;