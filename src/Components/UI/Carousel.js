import Carousel from "react-bootstrap/Carousel";

const MakeCarousel = (props) => {
  return (
    <div className="main-post">
      <div className="main-post-user">
        <img
          className="profile-picture"
          src="/Carousel/147142.png"
          width="75"
          height="75"
        />
        Username Placeholder <br />
        <br />
      </div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 main-post-image"
            src="/Carousel/pexels-photo-4091215.jpeg"
            alt="First slide"
            height="600"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 main-post-image"
            src="/Carousel/pexels-photo-4261765.jpeg"
            alt="Second slide"
            height="600"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 main-post-image"
            src="/Carousel/pexels-photo-4799967.jpeg"
            alt="Third slide"
            height="600"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 main-post-image"
            src="/Carousel/pexels-photo-357573.webp"
            alt="Third slide"
            height="600"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 main-post-image"
            src="/Carousel/pexels-photo-1640777.jpeg"
            alt="Third slide"
            height="600"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 main-post-image"
            src="/Carousel/pexels-photo-1765005.jpeg"
            alt="Third slide"
            height="600"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="after-image-section">
        <div className="main-post-icons">Yo</div>
        <div className="main-post-comments">Yo</div>
      </div>
    </div>
  );
};

export default MakeCarousel;
