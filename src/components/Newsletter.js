import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";

export const Newsletter = () => {
  const [likes, setLikes] = useState(() => {
    const savedLikes = localStorage.getItem('likes');
    return savedLikes ? JSON.parse(savedLikes) : 0;
  });

  const [dislikes, setDislikes] = useState(() => {
    const savedDislikes = localStorage.getItem('dislikes');
    return savedDislikes ? JSON.parse(savedDislikes) : 0;
  });

  useEffect(() => {
    localStorage.setItem('likes', JSON.stringify(likes));
  }, [likes]);

  useEffect(() => {
    localStorage.setItem('dislikes', JSON.stringify(dislikes));
  }, [dislikes]);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  const clearFields = () => {
    setLikes(0);
    setDislikes(0);
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={12} xl={12}>
            <h3 className="newsletter-text">If you find this page effective and like my content and work progress, hit a like!</h3>
            <div className="like-dislike-buttons">
              <button type="button" onClick={handleLike}>Like {likes}</button>
              <button type="button" onClick={handleDislike}>Dislike {dislikes}</button>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};