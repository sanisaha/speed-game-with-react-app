import { faHourglassEnd, faMedal, faRepeat } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Modal = ({score}) => {
    const handleModal = () => {
        document.getElementById('my-modal').classList.toggle('modal-open');
        window.location.reload();
    }
    return (
        <div>
<div id='my-modal' className="modal modal-bottom sm:modal-middle  modal-open">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Game Finished <FontAwesomeIcon icon={faHourglassEnd}></FontAwesomeIcon> You have scored <strong className='text-2xl'>{score}</strong> points</h3>
    {score < 50 ? <p className="py-4">You need more practice <FontAwesomeIcon icon={faRepeat}></FontAwesomeIcon></p> : <p className="py-4">well done! better luck next time <FontAwesomeIcon icon={faMedal}></FontAwesomeIcon></p>}
    <div className="modal-action">
      <button onClick={handleModal} className="btn rounded-full">close</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Modal;