
import useTitle from '../../../Hook/UseTitle';
import Slider from '../Slider/Slider';
import Gallery from './Gallery';
import TabSystem from './TabSystem';
import TopProducts from './TopProducts';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Slider></Slider>
            <Gallery></Gallery>
            <TabSystem></TabSystem>
            <TopProducts></TopProducts>
        </div>
    );
};

export default Home;