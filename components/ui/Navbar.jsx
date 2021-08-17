import Head from "next/head";
import Image from 'next/image'

import imageLogo from "@/assets/img/logo.png"
const Navbar = () => {
  return (
    <div>
      <Head>
        <title>CARVALHOS FIT</title>
      </Head>
      <nav className="bg-black px-2 d-flex justify-content-between">
        <div className="col-md-2 col-sm-3 col-4 d-flex">
        <Image className="img-fluid" src={imageLogo} alt="logo" style={{height:'100%'}} />
        </div>
        <div>
          {/* <button className="btn btn-l">MENU</button> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
