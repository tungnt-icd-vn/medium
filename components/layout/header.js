import React from "react";
import Navpc from "../base/navpc";
import API from "../../lib/api";
import SwitchTheme from "../base/switchTheme";
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.toggleSearch = this.toggleSearch.bind(this);
    this.state = {
      active: false,
      isMounted : false,
      setIsMounted : false,
    };
  }
  toggleSearch = () => {
    const currentState = this.state.active;
    this.setState({
      active: !currentState
    });
  }
  render() {
    return(
      <header id="header" className="d-lg-block d-none">
        <div className="container">
          <div className="align-items-center w-100">
            <h1 className="logo float-start navbar-brand"><a href="/" className="logo">FreeBoook</a></h1>
            <div className="header-right float-end w-50">                    
              <div className="d-inline-flex float-end text-right align-items-center">                        
                <ul className="social-network heading navbar-nav d-lg-flex align-items-center">                       
                  <li><a href="#"><i className="icon-facebook" /></a></li>
                </ul>
                <ul className="top-menu heading navbar-nav w-100 d-lg-flex align-items-center">
                  <li><a href="#" className="btn">Contact</a></li>
                </ul>
                <SwitchTheme/>
              </div>
              <form action="#" method="get" className={this.state.active ? 'search-form d-lg-flex float-end open-search' : 'search-form d-lg-flex float-end'}>
                <a href="#" onClick={this.toggleSearch} className="searh-toggle">
                  <i className="icon-search" />
                </a>
                <input type="text" className="search_field" placeholder="Search..." name="s" />
              </form>
            </div>              
          </div>
          <div className="clearfix" />
        </div>
        <Navpc></Navpc>
      </header>
    )
  }
}
export default Header;