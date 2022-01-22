import cssStyle from "./home.module.css";
import Header from "../../components/header";
import imgLeft from "../../assets/img/vector2-2.png";
import imageFirts from "../../assets/img/imagefirst.png";
import Buttons from "../../components/buttons" ;
import { Link, useNavigate } from "react-router-dom";
function Home()
{
    const navigate = useNavigate();
    return(
<section className={cssStyle.section}>
<diV className={cssStyle.Header}>
    <Header />
</diV>
<div className={cssStyle.home}>
    <div className={cssStyle.container}>
        <div className={cssStyle.vectorLeft}>
            <img src={imgLeft} className={cssStyle.imgLeft}/>
        </div>
        <div className={cssStyle.contents}>
            <div>
                <img src={imageFirts} className={cssStyle.contentImage} />
            </div>
            <div style={{paddingRight: '24px'}}>
            <p>
                            تاریخ کهن ایران زمین با پیشینه ای غنی از فرهنگ و
                            هنر، از دیرباز با شعر و ادبیات درهم پیچیده و ایران،
                            مهد پرورش شاعران بزرگی بوده و در گیر و دار فراز و
                            نشیب هایی که در طول تاریخ بر آن گذشته، اما شاهنامه
                            وزین پارسی پرور فردوسی بزرگ، اشعار روح بخش مولانا و
                            عشق بازی اش با حق، غزل های عاشقانه و عارفانه عالم
                            گیر در دیوان حافظ، اندیشه ژرف و عرفان ناب عطار
                            نیشابوری همه و همه همچون مرهمی بر زخم های کوچک و
                            بزرگش تسکین داده اند.
                        </p>          
                        
                        <Buttons theme="yellow" content="فال حافظ"  onclick={() => {navigate('/hafezFaal');
                                }}  />
                                                     <Buttons theme="yellow" content="گنجینه اشعار"  onclick={() => {navigate('/ganjineh');
                                }}  />
                          </div>
        </div>
    </div>
</div>
</section>    )
}
export default Home;