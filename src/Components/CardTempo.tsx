import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Col, Row, Badge } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCertificate, faCheckCircle, faStar, faWindowRestore, faCommentAlt } from '@fortawesome/free-solid-svg-icons'

import './styles.css'

interface Props {
  avatarImgSrcUrl: string;
  ticketStatus: "Won" | "Lost" | "Pending" | "Push";
  userName: string;
  stake: number;
  totalOdds: number;
  potWinnings: number;
  betName: string;
  bets: string[];
  onClickLike?: (postId: number) => void;
  onClickComment?: (comment: string) => void;
}

export default function({
  avatarImgSrcUrl,
  ticketStatus,
  userName,
  stake,
  totalOdds,
  potWinnings,
  betName,
  bets,
  onClickLike,
  onClickComment
}: Props) {
  return (
    <Card style={{ width: '24rem', margin: 20 }}>
      <Card.Header>
        <Row>
          <Col className="col-header">
            <Card.Img variant="top" src={avatarImgSrcUrl} className="img-profile" />
            <Badge bg="success">{ticketStatus} Ticket</Badge>
          </Col>
          <Col className="col-header">
            <span className="span-name">{userName}</span>
            <FontAwesomeIcon icon={faCertificate} color="#086DF1" />
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <Card.Title>
          &gt; MULTI BET - <span>{bets.length} picks</span>
        </Card.Title>
        <Card.Text>
          {bets.join(" | ")}
        </Card.Text>
        <FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: 3 }} color="#20BF11" />
        <FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: 3 }} color="#20BF11" />
        <FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: 3 }} color="#20BF11" />
        <FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: 3 }} color="#20BF11" />
        <Row>
          <Col className="col-body">
            <Card.Text>Stake</Card.Text>
            <Card.Text className="text-bold">{stake.toFixed(2)} $</Card.Text>
          </Col>
          <Col className="col-body" style={{ textAlign: 'center' }}>
            <Card.Text>Total Odds</Card.Text>
            <Card.Text className="text-bold">{totalOdds.toFixed(2)}</Card.Text>
          </Col>
          <Col className="col-body" style={{ textAlign: 'right' }}>
            <Card.Text>Pot.winnings</Card.Text>
            <Card.Text className="text-bold">{potWinnings.toFixed(2)} $</Card.Text>
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer>
        <Row className="row-bottom">
          <Col>
            <Button variant="outline-*" onClick={() => {
              if(onClickLike) onClickLike(1)
            }}>
              <FontAwesomeIcon icon={faStar} className="icon-bottom" />Favorite
            </Button>
          </Col>
          <Col>
            <Button variant="outline-*"><FontAwesomeIcon icon={faWindowRestore} className="icon-bottom" />P2P</Button>
          </Col>
          <Col>
            <Button variant="outline-*" onClick={() => {
              if(onClickComment) onClickComment("")
            }}><FontAwesomeIcon icon={faCommentAlt} className="icon-bottom" />Contact</Button>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  )
}