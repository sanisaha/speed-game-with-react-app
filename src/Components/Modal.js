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
    <h3 className="font-bold text-lg">Game Finished! You have scored <strong className='text-2xl'>{score}</strong> points</h3>
    {score < 50 ? <p className="py-4">You need more practice</p> : <p className="py-4">well done! better luck next time</p>}
    <div className="modal-action">
      <button onClick={handleModal} className="btn">close</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Modal;