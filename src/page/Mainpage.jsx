import React from 'react';
import UpperButton from '../components/buttons/UpperButton';
import Video from "../components/home/Home.jsx"
import Pagination from "../components/pagination/Pagination.jsx"

class Mainpage extends React.Component {
    render() { 
        return (
            <>
            <UpperButton/>
            <Video/>
            <Pagination/>
            </>
        );
    }
}
 
export default Mainpage;