import { FaPhoneAlt } from "react-icons/fa";
import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";
import style from "./Footer2.module.css"
export const Footer2 = () => {
    return (<>
        <footer className={style.footersection}>
            <div className={style.footerContainer}>
                <div className={style.footergrid}>

                    <div className={style.footercontact}>

                        <div className={style.footericon}>
                            <FaPhoneAlt />
                        </div>
                        <div className={style.footercontscttext}>
                            <p style={{ fontSize: 20 }}>Pune</p>
                            <p style={{ fontSize: 14 }}>Maharstra</p>
                        </div>
                    </div>



                    <div className={style.footercontact}>
                        <div className={style.footericon}>
                            <MdPlace />
                        </div>
                        <div className={style.footercontscttext}>
                            <p style={{ fontSize: 20 }}>Pune</p>
                            <p style={{ fontSize: 14 }}>Maharstra</p>
                        </div>
                    </div>



                    <div className={style.footercontact}>
                        <div className={style.footericon}>
                            <TbMailPlus />
                        </div>
                        <div className={style.footercontscttext}>
                            <p style={{ fontSize: 20 }}>Pune</p>
                            <p style={{ fontSize: 14 }}>Maharstra</p>
                        </div>
                    </div>


                </div>
            </div>
        </footer>
    </>)
}