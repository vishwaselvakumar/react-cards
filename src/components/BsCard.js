import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function BsCard() {
  return (
    <Container>
      <div className='row'>
    <Card className='card-body col-lg-4' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/a4/96/c2/a496c2b6bc5d7cfe0e0674f6598c38ad.jpg" />
      <Card.Body>
        <Card.Title>Nature image</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='card-body col-lg-4' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://c4.wallpaperflare.com/wallpaper/131/774/322/background-pictures-nature-hd-images-1920x1200-wallpaper-preview.jpg" />
      <Card.Body>
        <Card.Title>Nature image</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='card-body col-lg-4' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://rukminim2.flixcart.com/image/850/1000/xif0q/wallpaper/3/x/x/122-92-1-poster-no-356-hd-print-house-original-imagmt69rtz792hz.jpeg?q=90" />
      <Card.Body>
        <Card.Title>Nature image</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </Container>
  );
}

export default BsCard;