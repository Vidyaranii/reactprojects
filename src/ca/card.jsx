import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CustomDNALoader from '../loader/loader';
import InifiniteLoader from '../loader/inifinite-loader';
import CustomToast from '../toast/toast.jsx';
import InstagramHeart from '../instagramheart/insta';

function Basic({title,vidya, removeHandler,ind}) {
  return (
    <Card>
     
      <Card.Body>
      <Card.Img variant="top" src={vidya} height={250} width={100} />
        <Card.Title> {title} </Card.Title>
        {/* <Card.Text>
          {text}
        </Card.Text> */}
       
        {/* <CustomDNALoader/>
        <InifiniteLoader color={'red'}/>
        <CustomToast message={'i am card'}/>
        <InstagramHeart/> */}
        <Button variant="primary" onClick={() =>removeHandler(ind)}>remove</Button>
        {/* <Button variant="primary" onClick={() =>removeHandler(ind)}>price</Button> */}
      </Card.Body>
    </Card>
  );
}

export default Basic;