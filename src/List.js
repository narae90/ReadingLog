
import React, {useState} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { ListGroup, Badge } from 'react-bootstrap';
import './List.css';



function List() {
    
    let history = useHistory();


    return (

    <div className="List">
        <ListGroup as="ol" numbered>
        <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
        >
            <div className="ms-2 me-auto">
            <div className="fw-bold" onClick={ ()=>{history.pushState('/community')}}>도서 챌린지 일정안내</div>
            
            </div>
            <Badge className="badge" variant="primary" pill>
            23
            </Badge>
        </ListGroup.Item>
        <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
        >
            <div className="ms-2 me-auto">
            <div className="fw-bold">도서 추첨 이벤트 </div>

            </div>
            <Badge variant="primary" pill>
            10
            </Badge>
        </ListGroup.Item>
        <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
        >
            <div className="ms-2 me-auto">
            <div className="fw-bold">북클럽 신청서 작성</div>
            </div>
            <Badge variant="primary" pill>
            8
            </Badge>
        </ListGroup.Item>
        </ListGroup>

    </div>
);
}

export default List;