import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    const onClick =()=>{
        alert("Button Clicked")
    }
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color='green' text='Add' onClick={onClick}/>
        </header>
    )
}
Header.defaultProps = {
    title : ' Task Tracker',
  }

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

//Css styling in React 

// const headingStyle = {
//     color:'Red',
//     backgroundColor:'Black',
// }


export default Header
