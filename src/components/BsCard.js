import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function BsCard() {
  return (
    <Container>
      <div className='row'>
    <Card className='card-body col-lg-4' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://media.istockphoto.com/id/1440141330/photo/freedom-tower-and-lower-manhattan-from-new-jersey.webp?b=1&s=170667a&w=0&k=20&c=Z8GfVXLt8LaBlVUsPhgAWyTA3nMggSJSlm3bBH6QyMo=" />
      <Card.Body>
        <Card.Title>New York</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='card-body col-lg-4' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/paris-eiffel-tower-river-seine-sunset-france-one-most-iconic-landmarks-107376702.jpg" />
      <Card.Body>
        <Card.Title>Paris</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='card-body col-lg-4' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://hips.hearstapps.com/hmg-prod/images/high-angle-view-of-tokyo-skyline-at-dusk-japan-royalty-free-image-1664309926.jpg" />
      <Card.Body>
        <Card.Title>Tokyo</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </Container>
  );
}

export default BsCard;