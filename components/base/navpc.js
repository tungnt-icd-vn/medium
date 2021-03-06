import React from "react";
import Link from 'next/link';
import { useRouter } from 'next/router'
import LazyLoad from 'react-lazyload';
import API from "../../lib/api";
import PlaceholderMenu from "../../components/placeholder/menu";

class Navpc extends React.Component {
  listener = null;
  constructor(props){
    super(props);
    this.state = {
      nav:false,
      menus: [],
      loading: true,
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    API.get('/menu')
    .then(res => {
      this.setState({
        menus: res.data,
        loading: false
      })
    })
    .catch(err =>console.log(err));
  }
  componentWillUnmount() {
     window.removeEventListener('scroll');
   }
   handleScroll= () => {
    if (window.pageYOffset > 140) {
        if(!this.state.nav){
          this.setState({ nav: true });
        }
    }else{
        if(this.state.nav){
          this.setState({ nav: false });
        }
    }

  }
  render() {
    var Menus = this.state.menus;
    return(
        <nav id="main-menu" className={this.state.nav ? 'stick d-lg-block d-none scroll-to-fixed-fixed' : 'stick d-lg-block d-none'}>
          <div className="container">
            <LazyLoad className="menu-primary">
              <ul className="d-flex justify-content-between">
              {this.state.loading ? (
                <>
                <PlaceholderMenu />
                <PlaceholderMenu />
                <PlaceholderMenu />
                <PlaceholderMenu />
                <PlaceholderMenu />
                <PlaceholderMenu />
                </>
                ) : (
                  <>
                  {Menus.map((item) => (
                    <li className="current-menu-item" key={item?.ID}><Link href={item?.post_name}>{item?.title}</Link></li>
                    ))}
                    </>
                )}

                <li className="menu-item-has-children"><a href="#">More...</a>
                  <ul className="sub-menu">
                    <li><a href="search.html">Search</a></li>
                    <li><a href="author.html">Author</a></li>
                    <li><a href="404.html">404</a></li>                                
                  </ul>
                </li>                            
              </ul>
              <span />
            </LazyLoad>
          </div>
        </nav>

    )
  }
}
export default Navpc;