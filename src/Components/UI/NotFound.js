import { Link } from "react-router-dom";
import '../../index.css'

const NotFound = () => {
  return (
    <div className='not-found'>
      <h2>404 not found</h2>
      <Link to='/' className='box'>Go Back</Link>
    </div>
  );
};

export default NotFound;
