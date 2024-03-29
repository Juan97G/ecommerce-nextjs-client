import React, {useState} from 'react';
import {Image, Icon} from "semantic-ui-react";
import moment from "moment";
import "moment/locale/es";
import Link from "next/link";
import BasicModal from "../../Modal/BasicModal";


const Order = (props) => {

   /* STATES */
   const [showModal, setShowModal] = useState(false);

   /* DESTRUCTURING */
   const {order} = props;
   const {game, totalPayment, createdAt, addressShipping} = order;
   const {title, poster, url} = game;


   return (
      <>
         <div className="order">
            <div className="order__info">
               <div className="order__info-data">
                  <Link href={`/${url}`}>
                     <a>
                        <Image src={poster.url} alt={title} />
                     </a>
                  </Link>

                  <div>
                     <h2>{title}</h2>
                     <p>$ {totalPayment}</p>
                  </div>
               </div>

               <div className="order__info-other">
                  <p className="order__info-other-date">
                     {moment(createdAt).format("L")} - {moment(createdAt).format("LT")}
                  </p>
                  <Icon name="eye" circular link onClick={() => setShowModal(true)} />
               </div>
            </div>
         </div>

         <BasicModal
            show={showModal}
            setShow={setShowModal}
            size="tiny"
            title={title}
         >
            <h3>El pedido se ha enviado a la siguiente dirección: </h3>
            <div>
               <p>{addressShipping.name}</p>
               <p>{addressShipping.address}</p>
               <p>
                  {addressShipping.state}, {addressShipping.city} {addressShipping.postalCode}
               </p>
               <p>{addressShipping.phone}</p>
            </div>
         </BasicModal>
      </>
   );
};

export default Order;
